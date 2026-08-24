// @ts-check
import { defineConfig } from "astro/config";
import { visit } from "unist-util-visit";

// GitHub Pages (project site) 用の設定。
// 独自ドメインへ移行する場合は site を差し替え、base を削除する。
const SITE = "https://husm-ahi.github.io";
const BASE = "/ahi-web";

// Pages CMS はルート相対パス(/media/...)で画像を書き込むため、
// base 配下で配信されるようビルド時にプレフィックスを付ける。
function rehypeBasePrefix() {
  return (tree) => {
    visit(tree, "element", (node) => {
      for (const attr of ["src", "href"]) {
        const v = node.properties?.[attr];
        if (typeof v === "string" && v.startsWith("/") && !v.startsWith("//") && !v.startsWith(`${BASE}/`)) {
          node.properties[attr] = BASE + v;
        }
      }
    });
  };
}

export default defineConfig({
  site: SITE,
  base: BASE,
  trailingSlash: "ignore",
  markdown: {
    rehypePlugins: [rehypeBasePrefix],
  },
});
