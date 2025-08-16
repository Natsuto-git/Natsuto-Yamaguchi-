#!/bin/bash
# 自動デプロイスクリプト

echo "ビルド開始..."
npm run build

echo "変更をステージング..."
git add -A

echo "自動コミット..."
git commit -m "Auto-deploy: $(date '+%Y-%m-%d %H:%M:%S')

🤖 Generated with [Claude Code](https://claude.ai/code)

Co-Authored-By: Claude <noreply@anthropic.com>"

echo "GitHubにプッシュ..."
git push origin main

echo "デプロイ完了！"