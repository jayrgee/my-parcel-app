module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ["airbnb-base", "prettier"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
  rules: {
    "no-unused-vars": [
      "error",
      {
        vars: "local",
        args: "none",
      },
    ],
    "no-plusplus": "off",
    "no-underscore-dangle": "off",
  },
};
