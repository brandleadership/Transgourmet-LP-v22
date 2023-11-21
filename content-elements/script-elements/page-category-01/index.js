const { cx, Icon } = require("@bsi-cx/design-build");

module.exports = cx.contentElement
  .withElementId("page-category-01")
  .withIcon(Icon.TEXT)
  .withLabel("Page-category-01")
  .withFile(require("./template.twig"));
