const { cx, Icon } = require("@bsi-cx/design-build");

module.exports = cx.contentElement
  .withElementId("form-radio-star-numeric")
  .withIcon(Icon.RADIOBUTTON)
  .withLabel("Stern Bewertung")
  .withDescription("als Zahl")
  .withFile(require("./template.twig"))
  .withParts(cx.part.formField.withLabel("Auswahl"));
