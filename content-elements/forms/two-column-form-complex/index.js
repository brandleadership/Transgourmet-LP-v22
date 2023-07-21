const { cx, Icon } = require("@bsi-cx/design-build");

module.exports = cx.contentElement
  .withElementId("two-column-form-complex")
  .withIcon(Icon.TWO_COLUMNS)
  .withLabel("Formular (komplex)")
  .withDescription("mit variablen Spalten")
  .withFile(require("./template.twig"))
  .withParts(cx.part.form.withLabel("Formular"));
