import React from 'react';
import { Pressable } from 'react-native';
import { Text } from 'react-native-paper';

import styles from './ProfileButton.style';

function ProfileButton({ title, onPress }) {
  return (
    <Pressable style={[styles.button_container]} onPress={onPress}>
      <Text>{title}</Text>
    </Pressable>
  );
}

export default ProfileButton;
