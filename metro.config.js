const { getDefaultConfig } = require('expo/metro-config');
const { withStorybook } = require('@storybook/react-native/withStorybook');

const config = getDefaultConfig(__dirname);

// The wrapper is inert unless STORYBOOK_ENABLED=true, keeping Storybook out of app bundles.
module.exports = withStorybook(config);
