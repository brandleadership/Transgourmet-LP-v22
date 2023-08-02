const { cx, Icon } = require("@bsi-cx/design-build");

module.exports = cx.contentElement
  .withElementId("form-textarea")
  .withIcon(Icon.TEXTAREA)
  .withLabel("Mehrzeiliges Textfeld")
  .withDescription("z.B. Mitteilung")
  .withFile(require("./template.twig"))
  .withParts(cx.part.formTextarea.withLabel("Mehrzeiliges Textfeld"));
