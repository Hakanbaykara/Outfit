const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('@react-native/metro-config').MetroConfig}
 */
const config = {};

const path = require('path');

module.exports = {
  resolver: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // @ işaretini src klasörüne yönlendiriyoruz
    },
  },
};
