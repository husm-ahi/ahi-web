const base = import.meta.env.BASE_URL.replace(/\/$/, "");

/** サイト内リンク・メディアパスに base(/ahi-web)を付ける */
export function withBase(path: string): string {
  if (/^(https?:)?\/\//.test(path)) return path;
  return base + (path.startsWith("/") ? path : `/${path}`);
}
