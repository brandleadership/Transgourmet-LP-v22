/*const path = require('path');

const {BuildConfig, ModuleConfig, WebpackConfigBuilder, Version, DesignType} = require('@bsi-cx/design-build');

module.exports = WebpackConfigBuilder.fromConfigs(
  new BuildConfig()
    .withName('email')
    .withVersion('1.0.0')
    .withDesignType(DesignType.EMAIL)
    .withTargetVersion(Version.CX_1_3)
    .withRootPath(path.resolve(__dirname, 'templates', 'email'))
    .withPropertiesFilePath('properties.js'),
  new BuildConfig()
    .withName('landingpage')
    .withVersion('1.0.0')
    .withDesignType(DesignType.LANDINGPAGE)
    .withTargetVersion(Version.CX_1_3)
    .withRootPath(path.resolve(__dirname, 'templates', 'landingpage'))
    .withPropertiesFilePath('properties.js')
    .withModules(
      new ModuleConfig()
        .withName('main')
        .withPath('main.js')),
  new BuildConfig()
    .withName('website')
    .withVersion('1.0.0')
    .withDesignType(DesignType.WEBSITE)
    .withTargetVersion(Version.CX_1_3)
    .withRootPath(path.resolve(__dirname, 'templates', 'website'))
    .withPropertiesFilePath('properties.js')
    .withModules(
      new ModuleConfig()
        .withName('main')
        .withPath('main.js')));*/

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
    .withName("Baloise-LP-de-cx-22.0")
    .withPropertiesFilePath("properties.js"),
  landingpageBuildConfig
    .clone()
    .withName("Baloise-LP-en-cx-22.0")
    .withPropertiesFilePath("properties.js")
);
