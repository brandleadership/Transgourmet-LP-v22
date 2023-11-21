const { cx, Icon } = require("@bsi-cx/design-build");

module.exports = cx.contentElement
  .withElementId("page-category-02")
  .withIcon(Icon.TEXT)
  .withLabel("Page-category-02")
  .withFile(require("./template.twig"));
