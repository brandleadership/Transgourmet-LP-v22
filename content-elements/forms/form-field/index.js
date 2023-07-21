const { cx, Icon } = require("@bsi-cx/design-build");

module.exports = cx.contentElement
  .withElementId("form-field")
  .withIcon(Icon.FORMFIELD)
  .withLabel("Formularfeld")
  .withDescription("Text, E-Mail, Zahl, Datum/Zeit, Passwort")
  .withFile(require("./template.twig"))
  .withParts(cx.part.formField.withLabel("Formularfeld"));
