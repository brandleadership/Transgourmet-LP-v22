const { cx, Icon } = require("@bsi-cx/design-build");

module.exports = cx.contentElement
  .withElementId("webcam-image-upload")
  .withIcon(Icon.IMAGE)
  .withLabel("Webcam")
  .withDescription("Bild hochladen")
  .withFile(require("./template.twig"))
  .withParts(
    cx.part.form.withLabel("Formular"),
    cx.part.plainText.withLabel("Anfrage: Titel"),
    cx.part.plainText.withLabel("Anfrage: Text"),
    cx.part.plainText.withLabel("Fehler: Titel"),
    cx.part.plainText.withLabel("Fehler: Text"),
    cx.part.formField.withLabel("Datei"),
    cx.part.formField.withLabel("Maximale Breite des Bildes"),
    cx.part.formSelect.withLabel(
      "Welche Kamera soll verwendet werden (initialer Wert anpassen)?"
    ),
    cx.part.plainText.withLabel("'Fotografieren' Button Text"),
    cx.part.plainText.withLabel("'Wiederholen' Button Text"),
    cx.part.plainText.withLabel("'Hochladen' Button Text")
  );
