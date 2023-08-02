const { cx, Icon } = require("@bsi-cx/design-build");

module.exports = cx.contentElement
  .withElementId("form-checkbox")
  .withIcon(Icon.CHECKBOX)
  .withLabel("Checkbox")
  .withFile(require("./template.twig"))
  .withParts(cx.part.formCheckbox.withLabel("Checkbox"));
