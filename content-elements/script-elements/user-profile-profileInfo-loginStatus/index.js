const { cx, Icon } = require("@bsi-cx/design-build");

module.exports = cx.contentElement
  .withElementId("login-status")
  .withIcon(Icon.TEXT)
  .withLabel("Login Status")
  .withFile(require("./template.twig"));
