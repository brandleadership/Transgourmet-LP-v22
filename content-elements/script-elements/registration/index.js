const { cx, Icon } = require("@bsi-cx/design-build");

module.exports = cx.contentElement
  .withElementId("event-id")
  .withIcon(Icon.TEXT)
  .withLabel("EventID")
  .withFile(require("./template.twig"));
