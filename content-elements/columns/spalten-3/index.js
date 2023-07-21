const { cx, Icon } = require("@bsi-cx/design-build");

module.exports = cx.contentElement
  .withElementId("spalten-3")
  .withIcon(Icon.THREE_COLUMNS)
  .withLabel("Dreispalter")
  .withDescription("3-Spaltiges Layout")
  .withFile(require("./template.twig"));
