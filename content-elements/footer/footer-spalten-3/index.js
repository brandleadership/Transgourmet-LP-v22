const { cx, Icon } = require("@bsi-cx/design-build");

module.exports = cx.contentElement
  .withElementId("footer-spalten-3")
  .withIcon(Icon.THREE_COLUMNS)
  .withLabel("Footer")
  .withDescription("3-Spaltig")
  .withFile(require("./template.twig"))
  .withParts(
    cx.part.formattedText
      .withLabel("1. Spalte")
      .withHtmlEditorConfig(require("../../../htmlEditorConfig/normal")),
    cx.part.formattedText
      .withLabel("2. Spalte")
      .withHtmlEditorConfig(require("../../../htmlEditorConfig/normal")),
    cx.part.formattedText
      .withLabel("3. Spalte")
      .withHtmlEditorConfig(require("../../../htmlEditorConfig/normal"))
  );
