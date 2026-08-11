import type { Preview } from '@storybook/react-native';
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
};

export default preview;

const styles = StyleSheet.create({
  canvas: {
    backgroundColor: '#102c27',
    flex: 1,
    justifyContent: 'center',
    padding: 24,
  },
  storyFrame: {
    width: '100%',
  },
});
