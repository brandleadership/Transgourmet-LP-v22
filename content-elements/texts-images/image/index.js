const { cx, Icon } = require("@bsi-cx/design-build");

module.exports = cx.contentElement
  .withElementId("image")
  .withIcon(Icon.IMAGE)
  .withLabel("Bild")
  .withDescription("mit Bildunterschrift")
  .withFile(require("./template.twig"))
  .withParts(
    cx.part.image.withLabel("Bild"),
    cx.part.plainText.withLabel("Bildunterschrift")
  );
