const { cx, Icon } = require("@bsi-cx/design-build");

module.exports = cx.contentElement
  .withElementId("button")
  .withIcon(Icon.MEGAPHONE)
  .withLabel("Button")
  .withDescription("Call to action")
  .withFile(require("./template.twig"))
  .withParts(cx.part.link.withLabel("Button"));
