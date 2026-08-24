# ahi-web

浜松医科大学 先端医療情報学講座の公式サイト。
Astro + GitHub Pages + [Pages CMS](https://pagescms.org/) で運用する。

- 公開URL: https://husm-ahi.github.io/ahi-web/
- デザイン: `design/design-b-signal.html` をベースに実装(案A・Cのモックも同ディレクトリに保管)

## 構成

| パス | 内容 |
| --- | --- |
| `src/content/news/` | ニュース(Pages CMS「ニュース」) |
| `src/content/members/` | メンバー(Pages CMS「メンバー」) |
| `src/content/pages/` | 固定ページ(Pages CMS「固定ページ」、`nav: true` でヘッダーメニューに表示) |
| `src/content/homepage.md` | トップページの講座名・キャッチコピー・紹介文 |
| `public/media/` | CMS からアップロードした画像 |
| `.pages.yml` | Pages CMS の設定 |

## 開発

```sh
npm install
npm run dev      # http://localhost:4321/ahi-web
npm run build    # dist/ に静的ビルド
```

## デプロイ

`main` に push すると GitHub Actions(`.github/workflows/deploy.yml`)が
ビルドして GitHub Pages に公開する。リポジトリの Settings → Pages で
Source を **GitHub Actions** にしておくこと。

## 独自ドメインへ移行する場合

`astro.config.mjs` の `SITE` を差し替え、`BASE` を `"/"` 相当に変更する
(`base` 設定と `rehypeBasePrefix` の付与が不要になる)。
