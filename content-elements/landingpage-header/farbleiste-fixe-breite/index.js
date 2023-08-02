const { cx, Icon } = require("@bsi-cx/design-build");

module.exports = cx.contentElement
  .withElementId("farbleiste-fixe-breite")
  .withIcon(Icon.THREE_COLUMNS)
  .withLabel("Subnavigation")
  .withDescription("fixe Breite")
  .withFile(require("./template.twig"))
  .withParts(
    cx.part.formattedText
      .withLabel("Inhalt (zur optimalen Darstellung Liste verwenden)")
      .withHtmlEditorConfig(require("../../../htmlEditorConfig/normal"))
  );
