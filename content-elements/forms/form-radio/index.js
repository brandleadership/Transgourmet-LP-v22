const { cx, Icon } = require("@bsi-cx/design-build");

module.exports = cx.contentElement
  .withElementId("form-radio")
  .withIcon(Icon.RADIOBUTTON)
  .withLabel("Radio-Buttons")
  .withFile(require("./template.twig"))
  .withParts(cx.part.formRadio.withLabel("Radio-Buttons"));
