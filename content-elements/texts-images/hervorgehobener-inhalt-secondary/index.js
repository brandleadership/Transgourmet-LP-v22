const { cx, Icon } = require("@bsi-cx/design-build");

module.exports = cx.contentElement
  .withElementId("hervorgehobener-inhalt-secondary")
  .withIcon(Icon.TEXT)
  .withLabel("Hervorgehobener Inhalt")
  .withDescription("mit Sekundär-Hintergrundfarbe")
  .withFile(require("./template.twig"));
