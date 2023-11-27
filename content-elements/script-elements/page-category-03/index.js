const { cx, Icon } = require("@bsi-cx/design-build");

module.exports = cx.contentElement
  .withElementId("page-category-03")
  .withIcon(Icon.TEXT)
  .withLabel("Page-category-03")
  .withFile(require("./template.twig"));
