const { cx, Icon } = require("@bsi-cx/design-build");

module.exports = cx.contentElement
  .withElementId("form-field-horizontal")
  .withIcon(Icon.FORMFIELD)
  .withLabel("Formularfeld")
  .withDescription("Label links, Feld rechts")
  .withFile(require("./template.twig"))
  .withParts(cx.part.formField.withLabel("Formularfeld"));
