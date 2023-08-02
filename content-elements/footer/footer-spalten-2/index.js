const { cx, Icon } = require("@bsi-cx/design-build");

module.exports = cx.contentElement
  .withElementId("footer-spalten-2")
  .withIcon(Icon.TWO_COLUMNS)
  .withLabel("Footer")
  .withDescription("2-Spaltig")
  .withFile(require("./template.twig"))
  .withParts(
    cx.part.formattedText
      .withLabel("1. Spalte")
      .withHtmlEditorConfig(require("../../../htmlEditorConfig/normal")),
    cx.part.formattedText
      .withLabel("2. Spalte")
      .withHtmlEditorConfig(require("../../../htmlEditorConfig/normal"))
  );
