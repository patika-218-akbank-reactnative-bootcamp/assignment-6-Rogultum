import React, { useState } from 'react';
import { SegmentedButtons } from 'react-native-paper';

import styles from './PictureButton.style';

function PictureButton({ onPressCamera, onPressGalery }) {
  const [value, setValue] = useState('');

  return (
    <SegmentedButtons
      value={value}
      onValueChange={setValue}
      buttons={[
        {
          value: 'camera',
          icon: 'camera',
          label: 'Camera',
          onPress: onPressCamera,
        },
        {
          value: 'galley',
          icon: 'panorama-variant-outline',
          label: 'Gallery',
          onPress: onPressGalery,
        },
      ]}
      style={styles.group}
    />
  );
}

export default PictureButton;
