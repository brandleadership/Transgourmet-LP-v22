const { cx, Icon } = require("@bsi-cx/design-build");

module.exports = cx.contentElement
  .withElementId("footer-social")
  .withIcon(Icon.SOCIAL_SHARE)
  .withLabel("Soziale Medien")
  .withFile(require("./template.twig"));
