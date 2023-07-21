const { cx, Icon } = require("@bsi-cx/design-build");

module.exports = cx.contentElement
  .withElementId("ueberschrift-h2")
  .withIcon(Icon.HEADING)
  .withLabel("Überschrift 2")
  .withFile(require("./template.twig"))
  .withParts(cx.part.plainText.withLabel("Überschrift"));
