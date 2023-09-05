const path = require("path");

const {
  BuildConfig,
  ModuleConfig,
  WebpackConfigBuilder,
  Version,
  DesignType,
} = require("@bsi-cx/design-build");

const landingpageBuildConfig = new BuildConfig()
  .withName("Update-Transgourmet-LP")
  .withVersion("1.0.10")
  .withDesignType(DesignType.LANDINGPAGE)
  .withTargetVersion(Version.CX_1_3)
  .withRootPath(path.resolve(__dirname))
  .withModules(new ModuleConfig().withName("main").withPath("main.js"))
  .withPropertiesFilePath("properties.js")
  .withAdditionalFilesToCopy({
    from: path.resolve(__dirname, "resources", "img"),
    to: "img",
  });

module.exports = WebpackConfigBuilder.fromConfigs(
  landingpageBuildConfig
    .clone()
    .withName("Transgourmet-LP-de-cx-22.0")
    .withPropertiesFilePath("properties.js"),
  landingpageBuildConfig
    .clone()
    .withName("Transgourmet-LP-en-cx-22.0")
    .withPropertiesFilePath("properties.js")
);
