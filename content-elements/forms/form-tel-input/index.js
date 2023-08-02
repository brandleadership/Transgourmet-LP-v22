const { cx, Icon } = require("@bsi-cx/design-build");

module.exports = cx.contentElement
  .withElementId("form-tel-input")
  .withIcon(Icon.FORMFIELD)
  .withLabel("Telefonnummer")
  .withDescription("Erfassung normalisierter internationaler Telefonnummer")
  .withFile(require("./template.twig"))
  .withStyleConfigs(require("../../../stylesConfig/form-tel-input"))
  .withParts(
    cx.part.formField.withLabel("Formularfeld"),
    cx.part.plainText.withLabel("Verfügbare Länder"),
    cx.part.plainText.withLabel("Primäre Länder (müssen auch verfügbar sein)"),
    cx.part.plainText.withLabel("Fehlermeldung bei fehlerhafter Eingabe")
  );
