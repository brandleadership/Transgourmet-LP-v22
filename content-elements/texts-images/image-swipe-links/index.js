const { cx, Icon } = require("@bsi-cx/design-build");

module.exports = cx.contentElement
  .withElementId("image-swipe-links")
  .withIcon(Icon.TEXT_WITH_IMAGE)
  .withLabel("Bild")
  .withDescription("mit Swipe Aktion")
  .withFile(require("./template.twig"))
  .withParts(
    cx.part.image.withLabel("Bild"),
    cx.part.link.withLabel("Hyperlink bei Swipe nach Links"),
    cx.part.link.withLabel("Hyperlink bei Swipe nach Rechts"),
    cx.part.plainText.withLabel("Titel"),
    cx.part.plainText.withLabel("Text")
  );
