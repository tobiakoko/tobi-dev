

interface ImportMetaEnv {
    PUBLIC_BASE_URL: string;
    PUBLIC_SITE_URL: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}