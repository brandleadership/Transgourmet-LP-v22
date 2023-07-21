const { cx, Icon } = require("@bsi-cx/design-build");

module.exports = cx.contentElement
  .withElementId("image-no-legend")
  .withIcon(Icon.IMAGE)
  .withLabel("Bild")
  .withDescription("ohne Bildunterschrift")
  .withFile(require("./template.twig"))
  .withParts(cx.part.image.withLabel("Bild"));
