const { cx, Icon } = require("@bsi-cx/design-build");

module.exports = cx.contentElement
  .withElementId("news-snippets")
  .withIcon(Icon.SNIPPET)
  .withLabel("News")
  .withDescription("Liste von News Snippets")
  .withFile(require("./template.twig"));
// .withParts(cx.part.newsSnippets.withLabel("News"));
