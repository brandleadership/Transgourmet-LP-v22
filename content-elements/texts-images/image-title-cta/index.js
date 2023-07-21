const { cx, Icon } = require("@bsi-cx/design-build");

module.exports = cx.contentElement
  .withElementId("image-title-cta")
  .withIcon(Icon.TEXT_WITH_IMAGE)
  .withLabel("Bild")
  .withDescription("mit Titel und CTA")
  .withFile(require("./template.twig"))
  .withParts(
    cx.part.image.withLabel("Bild"),
    cx.part.plainText.withLabel("Titel"),
    cx.part.plainText.withLabel("CTA"),
    cx.part.plainText.withLabel("Beschreibung: Titel"),
    cx.part.formattedText
      .withLabel("Beschreibung: Text")
      .withHtmlEditorConfig(require("../../../htmlEditorConfig/normal")),
    cx.part.plainText.withLabel(
      "Beschreibung: CTA (Link Platzhalter verwenden)"
    )
  );
