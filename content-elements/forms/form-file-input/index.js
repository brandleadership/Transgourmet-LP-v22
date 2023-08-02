const { cx, Icon } = require("@bsi-cx/design-build");

module.exports = cx.contentElement
  .withElementId("form-file-input")
  .withIcon(Icon.FORMFIELD)
  .withLabel("Datei upload")
  .withDescription(
    "Datei hochladen mit Maximalgrösse und Validierung der Erweiterung"
  )
  .withFile(require("./template.twig"))
  .withParts(
    cx.part.formField.withLabel("Datei Upload Formularfeld"),
    cx.part.plainText.withLabel("Maximale Upload Grösse (in bytes)"),
    cx.part.plainText.withLabel(
      "Fehlermeldung bei Überschreitung der Upload Grösse"
    ),
    cx.part.plainText.withLabel("Fehlereldung bei falschem Dateityp")
  );
