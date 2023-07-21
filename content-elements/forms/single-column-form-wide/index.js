const { cx, Icon } = require("@bsi-cx/design-build");

module.exports = cx.contentElement
  .withElementId("single-column-form-wide")
  .withIcon(Icon.ONE_COLUMN)
  .withLabel("Formular (breit)")
  .withFile(require("./template.twig"))
  .withParts(cx.part.form.withLabel("Formular"));
