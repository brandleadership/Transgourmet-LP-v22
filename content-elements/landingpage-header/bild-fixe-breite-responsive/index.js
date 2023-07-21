const { cx, Icon } = require("@bsi-cx/design-build");

module.exports = cx.contentElement
  .withElementId("bild-fixe-breite-responsive")
  .withIcon(Icon.IMAGE)
  .withLabel("Headerbild")
  .withDescription("fixe Breite")
  .withFile(require("./template.twig"))
  .withParts(
    cx.part.image.withLabel("Headerbild (Desktop)"),
    cx.part.image.withLabel("Headerbild (Mobile)"),
    cx.part.plainText.withLabel("Titel")
  );
