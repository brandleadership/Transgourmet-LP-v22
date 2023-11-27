const { cx, Icon } = require("@bsi-cx/design-build");

module.exports = cx.contentElement
  .withElementId("hash-id")
  .withIcon(Icon.TEXT)
  .withLabel("Hash ID")
  .withFile(require("./template.twig"));
