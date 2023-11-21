const { cx, Icon } = require("@bsi-cx/design-build");

module.exports = cx.contentElement
  .withElementId("registration")
  .withIcon(Icon.TEXT)
  .withLabel("Registration")
  .withFile(require("./template.twig"));
