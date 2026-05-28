// scripts/generate-legal-html.js
//
// MORI LAB 法的ドキュメントの静的HTML生成スクリプト。
// 正本は /MORI-LAB/Assets/common/LegalTexts.swift。
// 本スクリプトはその buildPrivacyPolicy / buildTermsOfService / buildTokushoho
// と同一のロジック・文面をJSで再現し、GitHub Pages 用のフラットHTMLを出力する。
//
// 文面は LegalTexts.swift に合わせ、文中で改行せず1文1行・セクション区切りは1行空白とする。
//
// 実行: node scripts/generate-legal-html.js

const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");

// MARK: - 共通定数（LegalTexts.swift と一致させること）

const developerName = "MORI LAB";
const contactEmail = "morilab.support@gmail.com";
const lastUpdated = "2026年5月27日";
const legalPagesBaseURL = "https://mori-bear.github.io/morilab-legal/";

// MARK: - 共通ビルダー（LegalTexts.swift のミラー）

function buildPrivacyPolicy(appName, bundleId, appSpecificSections) {
  return `${appName} プライバシーポリシー
最終更新日: ${lastUpdated}

${developerName}（以下「開発者」）は、本アプリ「${appName}」（${bundleId}）のプライバシーポリシーを以下のとおり定めます。

■ 取得する情報

1. ユーザーID・認証情報
   初回起動時に匿名IDを自動生成します。
   Apple または Google アカウントでサインインした場合は、各社が発行するユーザーIDおよび氏名・メールアドレスを取得します（Apple の場合は中継アドレスで非公開化することも可能です）。
   取得した認証情報は、データの復元・端末間同期のためにのみ使用し、広告配信やマーケティング目的には使用しません。

2. クラッシュログ・匿名統計
   アプリ改善のため、クラッシュログおよび匿名の利用統計を収集する場合があります。これらの情報から個人を特定することはできません。

${appSpecificSections}

■ 利用目的

取得した情報は以下の目的に使用します。

・本アプリのサービス提供および機能改善
・ユーザーデータの保存と端末間同期
・アプリ体験の向上（推薦・統計表示・通知等）
・不具合の解析と修正

■ 第三者への提供

開発者は、収集した情報を以下を除き第三者に提供しません。

・データ保存基盤としての Supabase Inc.（米国）への送信
・Apple / Google サインインを利用した場合の各社サーバーへの認証情報送信
・法令に基づく開示請求があった場合
・ユーザー本人の同意がある場合

■ データの保存場所・外国にある第三者への提供について

本アプリのユーザーデータは、Supabase Inc. が運営するサーバー上に暗号化された状態で保管されます。

・保存先国：米国
・提供先：Supabase Inc.（米国）
・送信先URL：https://supabase.com
・Supabase のプライバシーポリシー：https://supabase.com/privacy

米国における個人情報保護制度の概要については、個人情報保護委員会の Webサイト（https://www.ppc.go.jp）に掲載されている情報をご参照ください。
本アプリをご利用いただくことにより、上記の外国にある第三者への個人データの提供に同意いただいたものとみなします。

■ 認証サービスについて

本アプリは Apple サインインおよび Google サインインを利用しています。
各認証サービスを利用された場合、各社のプライバシーポリシーが適用されます。

・Apple: https://www.apple.com/legal/privacy/
・Google: https://policies.google.com/privacy

■ アカウントの削除

ユーザーはいつでも以下の手順でアカウントおよび関連データを削除できます。

1. 本アプリの「設定」画面を開く
2. 「マイページ」を選択
3. 「アカウントを削除する」をタップ
4. 確認ダイアログで削除を確定

この操作を行うと、Supabase 上に保存されているあなたのすべてのデータ（アカウント情報・記録・投稿・写真等）が削除されます。
削除後のデータの復元はできません。

■ お子様のプライバシー

本アプリは13歳未満の方を対象としていません。
13歳未満の方の個人情報を意図的に収集することはありません。
保護者の方が、お子様の情報が送信されたことに気付かれた場合は、下記連絡先までご連絡ください。速やかに削除いたします。

■ プライバシーポリシーの変更について

本ポリシーは、法令の変更やサービス内容の変更に応じて予告なく改定する場合があります。重要な変更がある場合はアプリ内で通知します。
改定後も本アプリをご利用いただいた場合、改定後のポリシーに同意したものとみなします。

■ お問い合わせ

本ポリシーに関するご質問は、以下の連絡先までお寄せください。

開発者: ${developerName}
メール: ${contactEmail}
Web:    ${legalPagesBaseURL}`;
}

function buildTermsOfService(appName, bundleId, appSpecificSections) {
  return `${appName} 利用規約
最終更新日: ${lastUpdated}

本規約は、${developerName}（以下「開発者」）が提供する「${appName}」（${bundleId}、以下「本アプリ」）のご利用条件を定めます。
本アプリをご利用いただく前に必ずお読みください。

■ サービス概要

本アプリは、開発者が個人で開発・運営するモバイルアプリケーションです。
本規約に同意いただいた方に対し、開発者が定める範囲で本アプリの機能を提供します。

■ 利用条件

・本規約に同意した方のみ本アプリをご利用いただけます。
・13歳未満の方のご利用はご遠慮ください。
・本アプリの一部機能は、Apple または Google アカウントでのサインインが必要となる場合があります。

■ 禁止事項

本アプリの利用にあたり、以下の行為を禁止します。

・本アプリの不正利用・改ざん・リバースエンジニアリング
・他のユーザーまたは第三者への迷惑行為・スパム行為
・虚偽の情報の入力・登録
・本アプリのサービス提供を妨害する行為
・著作権・肖像権その他の知的財産権を侵害する行為
・法令または公序良俗に反する行為
・その他、開発者が不適切と判断する行為

${appSpecificSections}

■ 免責事項

・本アプリが提供する情報の正確性・完全性・有用性について、開発者は保証しません。
・開発者の故意または重過失による場合を除き、本アプリの利用により生じた損害について、開発者は責任を負いません。
・システムメンテナンス・障害・通信回線等の問題により、サービスを一時停止または中断する場合があります。
・開発者の故意または重過失による場合を除き、本アプリが連携する外部サービス（Apple / Google / Supabase 等）に起因する不具合・損害について、開発者は責任を負いません。

■ 知的財産権

本アプリのデザイン・コード・アイコン・テキスト等の著作権は ${developerName} に帰属します。

■ 規約の変更・サービスの終了

・本規約は予告なく変更する場合があります。重要な変更がある場合はアプリ内で通知します。
・変更後も本アプリをご利用いただいた場合、変更後の規約に同意したものとみなします。
・開発者は、予告なく本アプリのサービス内容を変更、または提供を終了する場合があります。開発者の故意または重過失による場合を除き、これによりユーザーに生じた損害について、開発者は責任を負いません。

■ 準拠法

本規約は日本法に準拠して解釈されます。

■ お問い合わせ

本規約に関するご質問は、以下の連絡先までお寄せください。

開発者: ${developerName}
メール: ${contactEmail}
Web:    ${legalPagesBaseURL}`;
}

function buildTokushoho(appName, hasSubscription) {
  if (hasSubscription) {
    return `特定商取引法に基づく表記
最終更新日: ${lastUpdated}

本表記は、${developerName} が提供する「${appName}」における特定商取引法に基づく表記を定めるものです。

販売業者：${developerName}
運営責任者：非公開（開示請求はmorilab.support@gmail.comまで）
所在地：非公開（開示請求はmorilab.support@gmail.comまで）
連絡先：${contactEmail}
販売価格：各サブスクリプションプランの価格はアプリ内に表示される金額に準じます
支払方法：Apple App Store 経由（Apple ID に登録されたお支払い方法）
支払時期：購入確定時
サービス提供時期：決済完了後、即時
返品・キャンセル：App Store のサブスクリプション管理ポリシーに準拠します。デジタルコンテンツの性質上、原則として返金は行いません。
動作環境：iOS 18.0 以上`;
  }
  return `特定商取引法に基づく表記
最終更新日: ${lastUpdated}

本アプリ「${appName}」は無料アプリのため、有償商品の販売は行っていません。

販売業者：${developerName}
連絡先：${contactEmail}
動作環境：iOS 18.0 以上

■ アフィリエイトリンクについて

本アプリには、イープラス（e+）・ぴあ・ローソンチケット（ローチケ）へのアフィリエイトリンクが含まれます。リンク経由でチケットを購入された場合、${developerName} が各サービスから所定の報酬を受け取る場合があります。

チケット販売・購入に関する契約は、各販売サービスとユーザー間で成立するものであり、${developerName} はその内容について責任を負いません。`;
}

// MARK: - アプリ別セクション（LegalTexts.swift と一致させること）

const udonNaviPrivacySections = `■ アプリ固有の取得情報（UdonNavi）

1. 店舗情報・口コミ
   ユーザーが投稿した店舗評価・コメント・写真等を保存します。
   投稿内容は他のユーザーにも公開されます。

2. 位置情報（検索時のみ）
   周辺店舗の検索・地図表示のため、アプリ利用中のみ現在地を取得します。バックグラウンドでの取得は行いません。
   取得した位置情報は外部サーバーへ送信されません。`;

const udonNaviTermsSections = `■ 口コミ投稿ルール（UdonNavi）

・店舗および他のユーザーを誹謗中傷する内容の投稿を禁止します。
・虚偽・誇大な情報、店舗と無関係な内容の投稿を禁止します。
・著作権・肖像権を侵害する画像の投稿を禁止します。
・宣伝・営業目的の投稿、スパム投稿を禁止します。
・投稿された口コミは MORI LAB の判断で削除する場合があります。
・違反が繰り返された場合、アカウントの利用を停止することがあります。`;

const lifeTracePrivacySections = `■ アプリ固有の取得情報（LifeTrace）

1. 位置情報（バックグラウンド含む）
   移動経路の自動記録のため、アプリがバックグラウンドにある場合も現在地（緯度・経度）を継続的に取得します。
   ユーザーの明示的な許可がある場合のみ取得し、許可はいつでも iOS の設定から取り消すことができます。

2. 移動履歴
   取得した位置情報から推定された移動経路・移動距離・滞在地点・訪問日時等を保存します。

3. 交通機関データ
   ユーザーが入力または自動判定された交通手段（電車・バス・徒歩等）、乗降駅、路線情報を保存します。`;

const lifeTraceTermsSections = `■ 位置情報の継続的取得への同意（LifeTrace）

・本アプリの中核機能を提供するため、バックグラウンドを含めた位置情報の継続的取得を行います。
・本機能を有効にすることで、端末のバッテリー消費が増加する場合があります。
・位置情報の取得を停止したい場合は、iOS の設定からいつでも許可を取り消すことができます。許可を取り消した場合、移動経路の自動記録は停止されます。
・記録された移動履歴は、設定画面からいつでも削除できます。
・本アプリが推定する移動手段・経路の正確性は保証しません。`;

const fesFindPrivacySections = `■ アプリ固有の取得情報（FesFind）

1. アーティスト・参戦記録
   ユーザーが登録したお気に入りアーティスト、参加した公演・フェスの日付・会場・座席・同行者メモ等を保存します。

2. 写真
   ユーザーが投稿した公演写真を保存します。
   プライバシー保護のため、アップロード時に Exif 情報（位置情報・撮影日時・機種情報等）を自動で削除します。

3. アフィリエイトリンクの利用情報
   本アプリは以下のチケット販売サービスへのアフィリエイトリンクを掲載しています。リンクをタップした場合、各サービスの規約に従い情報が送信されます。

   ・イープラス（e+）
   ・ぴあ
   ・ローソンチケット（ローチケ）`;

const fesFindTermsSections = `■ アフィリエイトリンクについて（FesFind）

・本アプリには、イープラス（e+）・ぴあ・ローソンチケット（ローチケ）へのアフィリエイトリンクが含まれています。
・リンク経由でチケットを購入された場合、MORI LAB が各サービスから所定の報酬を受け取る場合があります。
・チケット販売・購入に関する契約は、各販売サービスとユーザー間で成立するものであり、MORI LAB はその内容について責任を負いません。
・チケットの在庫・価格・公演内容については、必ず各販売サービスの公式情報をご確認ください。

■ 写真投稿ルール（FesFind）

・著作権・肖像権を侵害する写真の投稿を禁止します。
・主催者により撮影が禁止されている公演の写真投稿を禁止します。
・他人を誹謗中傷する目的での投稿を禁止します。
・投稿された写真は MORI LAB の判断で削除する場合があります。
・アップロード時に Exif 情報は自動削除されますが、写真自体に個人を特定できる情報が含まれていないかは投稿者の責任で確認してください。`;

// MARK: - HTMLラッパー

function escapeHtml(s) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

// 本文先頭の「タイトル行」「最終更新日行」を h1 / .updated に切り出し、残りを <pre>。
function renderPage(fullText) {
  const lines = fullText.split("\n");
  const title = lines[0];
  const updated = lines[1];
  const body = lines.slice(2).join("\n").replace(/^\n+/, "");

  return `<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${escapeHtml(title)} — MORI LAB</title>
<link rel="stylesheet" href="styles.css">
</head>
<body>
<div class="container">
  <header class="site-header">
    <a href="index.html">← MORI LAB 法的ドキュメント</a>
  </header>

  <h1>${escapeHtml(title)}</h1>
  <p class="updated">${escapeHtml(updated)}</p>

  <pre class="legal">${escapeHtml(body)}</pre>

  <footer class="site-footer">
    <p>© MORI LAB</p>
  </footer>
</div>
</body>
</html>
`;
}

// MARK: - 出力定義

const apps = {
  udonnavi: { name: "UdonNavi", bundleId: "com.morilab.udonnavi", subscription: true,
    privacySections: udonNaviPrivacySections, termsSections: udonNaviTermsSections },
  lifetrace: { name: "LifeTrace", bundleId: "com.morilab.lifetrace", subscription: true,
    privacySections: lifeTracePrivacySections, termsSections: lifeTraceTermsSections },
  fesfind: { name: "FesFind", bundleId: "com.morilab.fesfind", subscription: false,
    privacySections: fesFindPrivacySections, termsSections: fesFindTermsSections },
};

const files = [];

for (const [slug, a] of Object.entries(apps)) {
  files.push([`privacy-${slug}.html`,
    renderPage(buildPrivacyPolicy(a.name, a.bundleId, a.privacySections))]);
  files.push([`terms-${slug}.html`,
    renderPage(buildTermsOfService(a.name, a.bundleId, a.termsSections))]);
  if (a.subscription) {
    files.push([`tokushoho-${slug}.html`,
      renderPage(buildTokushoho(a.name, a.subscription))]);
  }
}

// index.html（フラット構造のリンク集。TeaArc は対象外のため既存サブディレクトリのまま温存）

const indexHtml = `<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>MORI LAB — 法的ドキュメント</title>
<link rel="stylesheet" href="styles.css">
</head>
<body>
<div class="container">
  <h1>MORI LAB 法的ドキュメント</h1>
  <p class="updated">各アプリの利用規約・プライバシーポリシー・特定商取引法に基づく表記をこちらに掲載しています。</p>

  <ul class="app-list">
    <li>
      <h2>UdonNavi</h2>
      <div class="doc-links">
        <a href="terms-udonnavi.html">利用規約</a>
        <a href="privacy-udonnavi.html">プライバシーポリシー</a>
        <a href="tokushoho-udonnavi.html">特定商取引法に基づく表記</a>
      </div>
    </li>
    <li>
      <h2>LifeTrace</h2>
      <div class="doc-links">
        <a href="terms-lifetrace.html">利用規約</a>
        <a href="privacy-lifetrace.html">プライバシーポリシー</a>
        <a href="tokushoho-lifetrace.html">特定商取引法に基づく表記</a>
      </div>
    </li>
    <li>
      <h2>FesFind</h2>
      <div class="doc-links">
        <a href="terms-fesfind.html">利用規約</a>
        <a href="privacy-fesfind.html">プライバシーポリシー</a>
      </div>
    </li>
    <li>
      <h2>Tea Arc</h2>
      <div class="doc-links">
        <a href="teaarc/terms.html">利用規約</a>
        <a href="teaarc/privacy.html">プライバシーポリシー</a>
        <a href="teaarc/tokushoho.html">特定商取引法に基づく表記</a>
      </div>
    </li>
  </ul>

  <footer class="site-footer">
    <p>© MORI LAB · お問い合わせ: ${contactEmail}</p>
  </footer>
</div>
</body>
</html>
`;

files.push(["index.html", indexHtml]);

for (const [name, content] of files) {
  fs.writeFileSync(path.join(ROOT, name), content, "utf8");
  console.log("wrote", name);
}

console.log(`\n${files.length} files generated.`);
