const { cx, Icon } = require("@bsi-cx/design-build");

module.exports = cx.contentElement
  .withElementId("abstand")
  .withIcon(Icon.TEXT)
  .withLabel("Abstand")
  .withDescription("Einfacher Abstand")
  .withFile(require("./template.twig"));
