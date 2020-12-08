module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: [
        'plugin:vue/essential', // plugin:vue/recommended
    ],
    parserOptions: {
        parser: 'babel-eslint',
        sourceType: 'module',
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
    }
}