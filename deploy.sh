#！ /bin/bash
npm run "docs:build"
cd docs/.vuepress/dist
git init
git remote add origin https://github.com/aika-fuwa/aika-vue-ui.git
git add .
git commit -m 'deploy'
git checkout -b gh-pages
git push -u origin gh-pages -f