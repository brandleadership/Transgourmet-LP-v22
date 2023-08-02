const { cx, Icon } = require("@bsi-cx/design-build");

module.exports = cx.contentElement
  .withElementId("video")
  .withIcon(Icon.VIDEO)
  .withLabel("Video")
  .withDescription("YouTube, Vimeo, etc.")
  .withFile(require("./template.twig"))
  .withParts(cx.part.video.withLabel("Video"));
