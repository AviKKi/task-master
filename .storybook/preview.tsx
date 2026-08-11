import type { Preview } from '@storybook/react';
import { StyleSheet, View } from 'react-native';

const preview: Preview = {
  decorators: [
    (Story) => (
      <View style={styles.canvas}>
        <View style={styles.storyFrame}>
          <Story />
        </View>
      </View>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
  },
};

export default preview;

const styles = StyleSheet.create({
  canvas: {
    backgroundColor: '#102c27',
    flex: 1,
    justifyContent: 'center',
    minHeight: '100vh',
    padding: 24,
  },
  storyFrame: {
    alignSelf: 'center',
    maxWidth: 420,
    width: '100%',
  },
});
