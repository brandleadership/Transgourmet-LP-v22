const { cx, Icon } = require("@bsi-cx/design-build");

module.exports = cx.contentElement
  .withElementId("spalten-4")
  .withIcon(Icon.THREE_COLUMNS)
  .withLabel("Vierspalter")
  .withDescription("4-Spaltiges Layout")
  .withFile(require("./template.twig"));
