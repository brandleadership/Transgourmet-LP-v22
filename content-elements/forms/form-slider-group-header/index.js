const { cx, Icon } = require("@bsi-cx/design-build");

module.exports = cx.contentElement
  .withElementId("form-slider-group-header")
  .withIcon(Icon.HEADING)
  .withLabel("Slider Gruppe: Titel")
  .withFile(require("./template.twig"))
  .withParts(cx.part.plainText.withLabel("Überschrift"));
