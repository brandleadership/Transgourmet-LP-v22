const { cx, Icon } = require("@bsi-cx/design-build");

module.exports = cx.contentElement
  .withElementId("form-radio-star-string")
  .withIcon(Icon.RADIOBUTTON)
  .withLabel("Stern Bewertung")
  .withDescription("als Text")
  .withFile(require("./template.twig"))
  .withParts(cx.part.formRadio.withLabel("Auswahl"));
