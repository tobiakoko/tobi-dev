import path from 'node:path';
import { reactRouter } from '@react-router/dev/vite';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig, type Plugin } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

/**
 * app/data/work.server.ts reads content/work/*.md once, when it loads. The
 * markdown files aren't imported, so Vite doesn't know about them: without
 * this, `npm run dev` keeps serving the old text until it is restarted.
 * On any change in content/work, drop the cached module and reload the page.
 */
function reloadOnWorkContent(): Plugin {
  const dir = path.resolve('content/work');
  const loader = path.resolve('app/data/work.server.ts');
  return {
    name: 'reload-on-work-content',
    configureServer(server) {
      server.watcher.add(dir);
      server.watcher.on('all', (_event, file) => {
        if (!file.startsWith(dir + path.sep)) return;
        for (const mod of server.moduleGraph.getModulesByFile(loader) ?? [])
          server.moduleGraph.invalidateModule(mod);
        server.ws.send({ type: 'full-reload' });
      });
    },
  };
}

export default defineConfig({
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths(), reloadOnWorkContent()],
});
