const { cx, Icon } = require("@bsi-cx/design-build");

module.exports = cx.contentElement
  .withElementId("navigation")
  .withIcon(Icon.THREE_COLUMNS)
  .withLabel("Hauptnavigation")
  .withFile(require("./template.twig"))
  .withParts(
    cx.part.formattedText
      .withLabel("Einträge")
      .withHtmlEditorConfig(require("../../../htmlEditorConfig/normal"))
  );
