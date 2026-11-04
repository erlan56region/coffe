# Отправка проекта на GitHub

## Через сайт (без терминала)
1. https://github.com/new → имя `coffeeit`, Public, без README.
2. «uploading an existing file» → перетащить содержимое распакованного архива.
3. Commit changes.
4. Settings → Pages → Deploy from a branch → `main` / `/ (root)` → Save.

## Через терминал
```bash
git init -b main
git add -A
git commit -m "coffeeIT: 5 вариантов сайта"
git remote add origin https://github.com/<логин>/coffeeit.git
git push -u origin main
```
Пароль заменяется Personal Access Token (Settings → Developer settings → Personal access tokens → Fine-grained, право Contents: Read and write).

## Через GitHub CLI
```bash
gh repo create coffeeit --public --source=. --remote=origin --push
```
