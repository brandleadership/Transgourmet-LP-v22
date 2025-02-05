const { cx, Icon } = require("@bsi-cx/design-build");

module.exports = cx.contentElement
  .withElementId("hervorgehobener-inhalt-primary")
  .withIcon(Icon.TEXT)
  .withLabel("Hervorgehobener Inhalt")
  .withDescription("mit Primär-Hintergrundfarbe")
  .withFile(require("./template.twig"));
