const { cx, Icon } = require("@bsi-cx/design-build");

module.exports = cx.contentElement
  .withElementId("text")
  .withIcon(Icon.TEXT)
  .withLabel("Text")
  .withFile(require("./template.twig"))
  .withParts(
    cx.part.formattedText
      .withLabel("Text")
      .withHtmlEditorConfig(require("../../../htmlEditorConfig/normal"))
  );
