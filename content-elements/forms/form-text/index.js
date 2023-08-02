const { cx, Icon } = require("@bsi-cx/design-build");

module.exports = cx.contentElement
  .withElementId("form-text")
  .withIcon(Icon.TEXT)
  .withLabel("Text im Formular")
  .withFile(require("./template.twig"))
  .withParts(
    cx.part.formattedText
      .withLabel("Text")
      .withHtmlEditorConfig(require("../../../htmlEditorConfig/normal"))
  );
