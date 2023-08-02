const { cx, Icon } = require("@bsi-cx/design-build");

module.exports = cx.contentElement
  .withElementId("form-select-enhanced")
  .withIcon(Icon.DROPDOWN)
  .withLabel("Dropdown, Liste")
  .withDescription("Ergänzt, mit opt. 'Bitte wählen'")
  .withFile(require("./template.twig"))
  .withStyleConfigs(require("../../../stylesConfig/form-select-enhanced"))
  .withParts(
    cx.part.formSelect.withLabel("Ergänztes Dropdown/Liste"),
    cx.part.plainText.withLabel("Hinweistext als Option")
  );
