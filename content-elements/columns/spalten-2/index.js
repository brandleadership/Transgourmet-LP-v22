const { cx, Icon } = require("@bsi-cx/design-build");

module.exports = cx.contentElement
  .withElementId("spalten-2")
  .withIcon(Icon.TWO_COLUMNS)
  .withLabel("Zweispalter")
  .withDescription("Spaltiges Layout")
  .withFile(require("./template.twig"));
