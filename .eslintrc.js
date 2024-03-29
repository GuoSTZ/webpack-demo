// .eslintrc.js
module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
        browser: true,
        commonjs: true,
        amd: true
    },
    extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
    parser: '@typescript-eslint/parser',
    parser: "@babel/eslint-parser",
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 13,
        // requireConfigFile: false,
        sourceType: 'module'
    },
    plugins: ['react', '@typescript-eslint'],
    rules: {
        '@typescript-eslint/no-var-requires': 0,
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/ban-ts-ignore': 'off'
    }
}

