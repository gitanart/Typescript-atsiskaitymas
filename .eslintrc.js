module.exports = {
    env: {
      browser: true,
      es2021: true,
    },
    extends: [
      'airbnb-base',
      'airbnb-typescript',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      project: './tsconfig.json'
    },
    plugins: [
      '@typescript-eslint',
    ],
    rules: {
      "comma-dangle": "off",
      "@typescript-eslint/comma-dangle": [2],
      'react/jsx-filename-extension': [0],
      "no-console": "off",
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "no-shadow": "off",
     "@typescript-eslint/no-shadow": "off"
    },
  };