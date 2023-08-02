const { cx, Icon } = require("@bsi-cx/design-build");

module.exports = cx.contentElement
  .withElementId("ueberschrift-h3")
  .withIcon(Icon.HEADING)
  .withLabel("Überschrift 3")
  .withFile(require("./template.twig"))
  .withParts(cx.part.plainText.withLabel("Überschrift"));
