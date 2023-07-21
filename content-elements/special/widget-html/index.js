const { cx, Icon } = require("@bsi-cx/design-build");

module.exports = cx.contentElement
  .withElementId("widget-html")
  .withIcon(Icon.TEXT)
  .withLabel("HTML")
  .withDescription("Beliebiger HTML-Quellcode")
  .withFile(require("./template.twig"))
  .withParts(cx.part.html.withLabel("HTML-Quellcode"));
