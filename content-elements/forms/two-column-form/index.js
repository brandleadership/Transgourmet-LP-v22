const { cx, Icon } = require("@bsi-cx/design-build");

module.exports = cx.contentElement
  .withElementId("two-column-form")
  .withIcon(Icon.TWO_COLUMNS)
  .withLabel("Formular")
  .withDescription("mit zwei Spalten")
  .withFile(require("./template.twig"))
  .withParts(cx.part.form.withLabel("Formular"));
