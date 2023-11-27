const { cx, Icon } = require("@bsi-cx/design-build");

module.exports = cx.contentElement
  .withElementId("page-category-04")
  .withIcon(Icon.TEXT)
  .withLabel("Page-category-04")
  .withFile(require("./template.twig"));
