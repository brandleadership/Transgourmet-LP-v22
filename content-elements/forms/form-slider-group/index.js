const { cx, Icon } = require("@bsi-cx/design-build");

module.exports = cx.contentElement
  .withElementId("form-slider-group")
  .withIcon(Icon.FORMFIELD)
  .withLabel("Slider Gruppe")
  .withDescription("mit Berechnung")
  .withFile(require("./template.twig"))
  .withParts(
    cx.part.plainText.withLabel("Überschrift für Frage"),
    cx.part.plainText.withLabel("Überschrift für Wertebereiche"),
    cx.part.plainText.withLabel("Überschrift für aktueller Wert"),
    cx.part.formField.withLabel("Total (Typ nicht ändern)")
  );
