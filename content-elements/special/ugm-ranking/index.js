const { cx, Icon } = require("@bsi-cx/design-build");

module.exports = cx.contentElement
  .withElementId("ugm-ranking")
  .withIcon(Icon.TABLE)
  .withLabel("UGM Ranking")
  .withFile(require("./template.twig"))
  .withParts(cx.part.iterator.withLabel("Iterator"));
