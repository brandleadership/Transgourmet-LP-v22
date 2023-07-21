const { cx, Icon } = require("@bsi-cx/design-build");

module.exports = cx.contentElement
  .withElementId("form-radio-nps-numeric")
  .withIcon(Icon.RADIOBUTTON)
  .withLabel("NPS Umfrage")
  .withDescription("als Zahl")
  .withFile(require("./template.twig"))
  .withParts(
    cx.part.formField.withLabel("Auswahl"),
    cx.part.plainText.withLabel("Bezeichnung links"),
    cx.part.plainText.withLabel("Bezeichnung rechts")
  );
