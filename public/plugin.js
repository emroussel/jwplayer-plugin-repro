function initPlugin(playerInstance, pluginConfig, pluginDiv) {
  // This never runs
  console.log("initPlugin");
  pluginConfig.sampleFunction();
  console.log('from plugin: config name', pluginConfig.name);
}

const registerPlugin = window.jwplayerPluginJsonp || window.jwplayer().registerPlugin;

registerPlugin('sampleScript', '8.0', initPlugin);

// The new plugin is not part of plugins here
console.log(window.jwplayer().plugins);
