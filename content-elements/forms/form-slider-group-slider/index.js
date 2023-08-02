const { cx, Icon } = require("@bsi-cx/design-build");

module.exports = cx.contentElement
  .withElementId("form-slider-group-slider")
  .withIcon(Icon.FORMFIELD)
  .withLabel("Slider Gruppe: Slider")
  .withFile(require("./template.twig"))
  .withParts(
    cx.part.plainText.withLabel("Tooltip"),
    cx.part.formField.withLabel("Slider (Typ nicht ändern)")
  );
