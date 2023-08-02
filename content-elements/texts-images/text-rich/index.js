const { cx, Icon } = require("@bsi-cx/design-build");

module.exports = cx.contentElement
  .withElementId("text-rich")
  .withIcon(Icon.TEXT)
  .withLabel("Text")
  .withDescription("umfangreiche Formatierungen")
  .withFile(require("./template.twig"))
  .withParts(
    cx.part.formattedText
      .withLabel("Text")
      .withHtmlEditorConfig(require("../../../htmlEditorConfig/full"))
  );
