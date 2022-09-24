import React from 'react';
import { Pressable, Text } from 'react-native';

import styles from './SignButton.style';

function SignButton({ title, onPress }) {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  );
}

export default SignButton;
