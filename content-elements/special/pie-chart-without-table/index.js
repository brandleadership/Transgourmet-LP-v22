const { cx, Icon } = require("@bsi-cx/design-build");

module.exports = cx.contentElement
  .withElementId("pie-chart-without-table")
  .withIcon(Icon.TABLE)
  .withLabel("Kuchendiagramm")
  .withDescription("ohne Tabelle")
  .withFile(require("./template.twig"))
  .withParts(cx.part.iterator.withLabel("Iterator"));
