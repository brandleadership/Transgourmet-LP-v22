const { cx, Icon } = require("@bsi-cx/design-build");

module.exports = cx.contentElement
  .withElementId("trenner")
  .withIcon(Icon.TEXT)
  .withLabel("Trennlinie")
  .withDescription("Trennlinie mit Abstand")
  .withFile(require("./template.twig"));
