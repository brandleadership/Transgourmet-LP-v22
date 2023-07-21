const { cx, Icon } = require("@bsi-cx/design-build");

module.exports = cx.contentElement
  .withElementId("form-radio-smiley")
  .withIcon(Icon.RADIOBUTTON)
  .withLabel("Smiley Bewertung")
  .withFile(require("./template.twig"))
  .withParts(cx.part.formRadio.withLabel("Radio-Buttons"));
