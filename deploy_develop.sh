npm run build
cd dist/
git init
git add .
git commit -m 'Deploying Staging Goodbuy Vue'
git remote add origin https://github.com/Mayson12381/goodbuy-vue.git
git push -f origin staging
cd ..
