const { cx, Icon } = require("@bsi-cx/design-build");

module.exports = cx.contentElement
  .withElementId("video-thumbnail")
  .withIcon(Icon.VIDEO)
  .withLabel("Video Thumbnail")
  .withDescription("Vorschaubild für YouTube Video")
  .withFile(require("./template.twig"))
  .withParts(cx.part.video.withLabel("Video"));
