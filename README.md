# morilab-legal

MORI LAB が提供する各アプリの法的ドキュメント（利用規約・プライバシーポリシー・特定商取引法に基づく表記）。

GitHub Pages で公開しています。

## 構成

```
/
├── index.html                  トップページ
├── styles.css                  共通スタイル
├── terms-<app>.html            利用規約 (udonnavi / lifetrace / fesfind)
├── privacy-<app>.html          プライバシーポリシー (同上)
├── tokushoho-<app>.html        特定商取引法に基づく表記 (同上)
└── teaarc/
    ├── terms.html
    ├── privacy.html
    └── tokushoho.html
```

tea-arcのみ旧来のサブディレクトリ構成のまま（`teaarc/`）。
他3アプリは2026-05-28に `<page>-<app>.html` 形式へ統一済み。

## このリポジトリについて

正本は `mori-lab-dev/morilab-legal`。本リポジトリ(`mori-bear/morilab-legal`)は
旧URL(mori-bear.github.io/morilab-legal/)を並行して生かすための維持用ミラー
（2026-09-03 移管）。旧版アプリの配信終了後、削除を検討する。

## 内容の出所

すべての本文は `MORI-LAB/Assets/common/LegalTexts.swift` から取得しています。
内容を更新する際は Swift 側を正本として更新し、こちらに反映してください。

## お問い合わせ

morilab.support@gmail.com
