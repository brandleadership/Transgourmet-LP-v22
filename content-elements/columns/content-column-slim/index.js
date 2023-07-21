const { cx, Icon } = require("@bsi-cx/design-build");

module.exports = cx.contentElement
  .withElementId("content-column-slim")
  .withIcon(Icon.ONE_COLUMN)
  .withLabel("Inhalt (schmal)")
  .withFile(require("./template.twig"));
