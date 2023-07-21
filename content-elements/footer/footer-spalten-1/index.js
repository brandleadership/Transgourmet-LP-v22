const { cx, Icon } = require("@bsi-cx/design-build");

module.exports = cx.contentElement
  .withElementId("footer-spalten-1")
  .withIcon(Icon.ONE_COLUMN)
  .withLabel("Footer")
  .withDescription("1-Spaltig")
  .withFile(require("./template.twig"))
  .withParts(
    cx.part.formattedText
      .withLabel("1. Spalte")
      .withHtmlEditorConfig(require("../../../htmlEditorConfig/normal"))
  );
