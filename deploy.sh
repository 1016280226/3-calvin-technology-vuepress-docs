# !/bin/bash

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
echo -e '\033[32m打包生成静态文件...\033[0m'
yarn docs:build

time=$(date "+%Y-%m-%d %H:%M:%S")

cd docs/.vuepress/dist

echo -e '\033[32m执行Git...\033[0m'

git init
git add -A
git commit -m "deploy $time"


echo -e '\033[32mGit提交...\033[0m'


git push -f git@gitee.com:calvinluo/calvin-docs.git master 


echo -e '\033[32m脚本更新Pages...\033[0m'

yarn run update
# 如果发布到 https://USERNAME.gitee.io/<REPO>  REPO=github上的项目
git push -f git@gitee.com:calvinluo/calvin-docs.git master:gh-pages

cd -