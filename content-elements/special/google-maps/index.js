const { cx, Icon } = require("@bsi-cx/design-build");

module.exports = cx.contentElement
  .withElementId("google-maps")
  .withIcon(Icon.IMAGE)
  .withLabel("Google Maps")
  .withFile(require("./template.twig"))
  .withParts(
    cx.part.plainText.withLabel("Adresse"),
    cx.part.plainText.withLabel("Lat / Long")
  );
