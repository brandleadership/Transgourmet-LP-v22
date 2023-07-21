const { cx, Icon } = require("@bsi-cx/design-build");

module.exports = cx.contentElement
  .withElementId("ueberschrift-h1")
  .withIcon(Icon.HEADING)
  .withLabel("Überschrift 1")
  .withFile(require("./template.twig"))
  .withStyleConfigs(require("../../../stylesConfig/ueberschrift-h1"))
  .withParts(cx.part.plainText.withLabel("Titel"));
