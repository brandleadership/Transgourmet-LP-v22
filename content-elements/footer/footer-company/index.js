const { cx, Icon } = require("@bsi-cx/design-build");

module.exports = cx.contentElement
  .withElementId("footer-company")
  .withIcon(Icon.TEXT)
  .withLabel("Footer Firma")
  .withFile(require("./template.twig"))
  .withParts(cx.part.plainText.withLabel("Text"));
