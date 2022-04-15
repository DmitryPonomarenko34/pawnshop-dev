module.exports = {
  extends: ["stylelint-config-standard",
    "stylelint-config-rational-order",
  ],
  plugins: ["stylelint-order", "stylelint-scss"],
  rules: {
    "font-family-name-quotes": null,
    "at-rule-no-unknown": null,
    "selector-class-pattern": null
  }
};