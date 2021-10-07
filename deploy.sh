#!/usr/bin/env sh

# 出錯時停止腳本
set -e

# 指令
npm run build

# 切換目錄到輸出資料夾
cd dist

git init
git add -A
git commit -m 'deploy'

# 部署到https://<USERNAME>.github.io/<REPO> 的gh-pages分支
git push -f https://github.com/Codachen/coda-sound.git master:gh-pages

cd -