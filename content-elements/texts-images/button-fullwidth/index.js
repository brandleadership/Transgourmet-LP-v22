const { cx, Icon } = require("@bsi-cx/design-build");

module.exports = cx.contentElement
  .withElementId("button-fullwidth")
  .withIcon(Icon.MEGAPHONE)
  .withLabel("Button")
  .withDescription("Call to action (ganze Breite)")
  .withFile(require("./template.twig"))
  .withParts(cx.part.link.withLabel("Button"));
