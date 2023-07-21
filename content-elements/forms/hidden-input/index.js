const { cx, Icon } = require("@bsi-cx/design-build");

module.exports = cx.contentElement
  .withElementId("hidden-form-field")
  .withIcon(Icon.TEXT)
  .withLabel("Verstecktes Feld")
  .withDescription("Captcha-workaround, um Bots zu bekämpfen")
  .withFile(require("./template.twig"));
