const { cx, Icon } = require("@bsi-cx/design-build");

module.exports = cx.contentElement
  .withElementId("single-column-form-slim")
  .withIcon(Icon.ONE_COLUMN)
  .withLabel("Formular (schmal)")
  .withFile(require("./template.twig"))
  .withParts(cx.part.form.withLabel("Formular"));
