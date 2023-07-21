const { cx, Icon } = require("@bsi-cx/design-build");

module.exports = cx.contentElement
  .withElementId("bild-ganze-breite-responsive")
  .withIcon(Icon.IMAGE)
  .withLabel("Headerbild")
  .withDescription("ganze Breite")
  .withFile(require("./template.twig"))
  .withParts(
    cx.part.image.withLabel("Headerbild (Desktop)"),
    cx.part.image.withLabel("Headerbild (Mobile)"),
    cx.part.plainText.withLabel("Titel")
  );
