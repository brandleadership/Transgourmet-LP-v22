const { cx, Icon } = require("@bsi-cx/design-build");

module.exports = cx.contentElement
  .withElementId("qr-code")
  .withIcon(Icon.IMAGE)
  .withLabel("QR-Code")
  .withDescription("QR-Code vorbelegt")
  .withFile(require("./template.twig"))
  .withParts(
    cx.part.image.withLabel("QR-Code"),
    cx.part.plainText.withLabel("Bildunterschrift")
  );
