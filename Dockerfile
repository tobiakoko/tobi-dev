# --- Build the SPA ---------------------------------------------------------
FROM node:20-alpine AS build
WORKDIR /app

# Copy manifests first so `npm ci` is cached independently of source changes.
COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build

# --- Serve --------------------------------------------------------------
# react-router.config.ts sets `ssr: false`, so the build emits only
# build/client and no server entry — there is nothing for react-router-serve
# to run. nginx serves the static bundle instead.
#
# nginx-unprivileged runs as uid 101 and listens on 8080, so the container
# never runs as root.
FROM nginxinc/nginx-unprivileged:1.27-alpine

COPY --from=build /app/build/client /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 8080
