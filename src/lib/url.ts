const base = import.meta.env.BASE_URL.replace(/\/$/, '');

/** Prefix an internal path with the deploy base so links work under /Ruminations. */
export const url = (path: string) => `${base}/${path.replace(/^\//, '')}`;
