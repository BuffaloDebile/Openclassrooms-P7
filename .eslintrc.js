module.exports = {
  env: {
    commonjs: true,
    node: true,
    browser: true,
    es6: true,
    jest: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  globals: {},
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  ignorePatterns: ['node_modules/'],
  rules: {},
};
