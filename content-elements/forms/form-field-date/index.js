const { cx, Icon } = require("@bsi-cx/design-build");

module.exports = cx.contentElement
  .withElementId("form-field-date")
  .withIcon(Icon.FORMFIELD)
  .withLabel("Datumsfeld")
  .withFile(require("./template.twig"))
  .withParts(cx.part.formField.withLabel("Datumsfeld"));
