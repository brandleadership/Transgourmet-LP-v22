const { cx, Icon } = require("@bsi-cx/design-build");

module.exports = cx.contentElement
  .withElementId("form-select")
  .withIcon(Icon.DROPDOWN)
  .withLabel("Dropdown, Liste (veraltet)")
  .withDescription("Aus Werteliste")
  .withFile(require("./template.twig"))
  .withParts(cx.part.formSelect.withLabel("Dropdown, Liste"));
