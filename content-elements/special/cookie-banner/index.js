const { cx, Icon } = require("@bsi-cx/design-build");

module.exports = cx.contentElement
  .withElementId("cookie-banner")
  .withIcon(Icon.TEXT)
  .withLabel("Cookie Banner")
  .withFile(require("./template.twig"));
