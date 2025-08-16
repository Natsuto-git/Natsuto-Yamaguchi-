# GitHub Pages デプロイ手順

## 🚀 GitHubでの公開方法

### 1. GitHubリポジトリの作成

1. [GitHub](https://github.com)にログイン
2. 右上の「+」→「New repository」をクリック
3. リポジトリ設定：
   - **Repository name**: `natsuto-portfolio`
   - **Description**: `山口夏翔の自己紹介・ポートフォリオサイト`
   - **Public** を選択
   - **Add a README file**: チェックを外す
   - **Add .gitignore**: None
   - **Choose a license**: MIT License（推奨）

### 2. ローカルリポジトリをGitHubにプッシュ

```bash
# GitHubリポジトリのURLを追加（YOUR_USERNAMEを実際のユーザー名に置き換え）
git remote add origin https://github.com/YOUR_USERNAME/natsuto-portfolio.git

# mainブランチに設定
git branch -M main

# GitHub にプッシュ
git push -u origin main
```

### 3. GitHub Pages の設定

1. GitHubのリポジトリページで「Settings」タブをクリック
2. 左サイドバーの「Pages」をクリック
3. **Source** を「GitHub Actions」に設定
4. 自動でデプロイが開始されます

### 4. 設定確認

**重要**: `vite.config.js` のリポジトリ名を確認してください：

```javascript
export default defineConfig({
  base: '/natsuto-portfolio/', // ← これがGitHubリポジトリ名と一致していることを確認
  // ...
})
```

リポジトリ名が異なる場合は、この値を変更してください。

### 5. デプロイの確認

1. リポジトリの「Actions」タブでビルド状況を確認
2. 緑色のチェックマークが表示されたら成功
3. サイトURL: `https://YOUR_USERNAME.github.io/natsuto-portfolio/`

## 🔄 更新方法

サイトを更新する場合：

```bash
# ファイルを編集後
git add .
git commit -m "サイト更新: 詳細な変更内容"
git push
```

プッシュすると自動的にサイトが更新されます（1-5分程度）。

## ⚙️ カスタマイズ

### リポジトリ名を変更する場合

1. `vite.config.js` の `base` プロパティを更新
2. コミット & プッシュ

### ドメインを独自ドメインに変更する場合

1. GitHubリポジトリの「Settings」→「Pages」
2. 「Custom domain」に独自ドメインを入力
3. DNS設定でCNAMEレコードを追加

## 🛠️ トラブルシューティング

### よくある問題

**問題**: サイトが表示されない
- `vite.config.js` の `base` 設定を確認
- GitHubのActionsタブでエラーを確認

**問題**: CSSやJSが読み込まれない
- リポジトリ名と `base` 設定が一致しているか確認
- パスの設定を確認

**問題**: 画像が表示されない
- 画像ファイルが正しくコミットされているか確認
- パスの大文字小文字を確認

## 📊 アクセス解析

Google Analyticsを追加する場合：
1. `index.html` の `<head>` タグ内にGAコードを追加
2. コミット & プッシュで反映

## 🔒 セキュリティ

- 個人情報の確認
- SNSリンクの確認
- 公開したくないファイルは `.gitignore` に追加

---

**サポート**: 問題がある場合は、GitHubのIssuesで報告してください。