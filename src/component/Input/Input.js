import React from 'react';
import { View } from 'react-native';
import { Text, TextInput } from 'react-native-paper';

import { useSelector } from 'react-redux';

import styles from './Input.style';

function Input({ label, placeholder, onChangeText, secureTextEntry, value, onFocus, onBlur }) {
  const theme = useSelector((state) => state.theme.value);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={[styles.input_container]}>
        <TextInput
          value={value}
          style={[styles.text_input]}
          placeholder={placeholder}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
          placeholderTextColor={theme ? 'black' : 'grey'}
          onFocus={onFocus}
          onBlur={onBlur}
        />
      </View>
    </View>
  );
}

export default Input;
