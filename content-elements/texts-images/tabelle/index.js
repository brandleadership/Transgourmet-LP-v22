const { cx, Icon } = require("@bsi-cx/design-build");

module.exports = cx.contentElement
  .withElementId("tabelle")
  .withIcon(Icon.TABLE)
  .withLabel("Tabelle")
  .withFile(require("./template.twig"))
  .withParts(cx.part.table.withLabel("Tabelle"));
