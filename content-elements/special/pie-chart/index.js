const { cx, Icon } = require("@bsi-cx/design-build");

module.exports = cx.contentElement
  .withElementId("pie-chart")
  .withIcon(Icon.TABLE)
  .withLabel("Kuchendiagramm")
  .withDescription("mit Tabelle")
  .withFile(require("./template.twig"))
  .withParts(cx.part.iterator.withLabel("Iterator"));
