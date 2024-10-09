# api-typechecker
typechecking api reqs and responses

husky setup for linting: steps

1.npm install husky --save

2.npx husky-init

3.npm install eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin --save-dev

4.npx husky add .husky/pre-commit "npm run lint"

5.npx @eslint/migrate-config .eslintrc.json

6.npm install @eslint/js @eslint/eslintrc -D

7. Must add the lint script def  to package.json

{
  "scripts": {
    "lint": "eslint 'src/**/*.{ts,tsx}'"
  }
}

