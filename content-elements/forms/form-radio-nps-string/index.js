const { cx, Icon } = require("@bsi-cx/design-build");

module.exports = cx.contentElement
  .withElementId("form-radio-nps-string")
  .withIcon(Icon.RADIOBUTTON)
  .withLabel("NPS Umfrage")
  .withDescription("als Text")
  .withFile(require("./template.twig"))
  .withParts(
    cx.part.formField.withLabel("Auswahl"),
    cx.part.plainText.withLabel("Bezeichnung links"),
    cx.part.plainText.withLabel("Bezeichnung rechts")
  );
