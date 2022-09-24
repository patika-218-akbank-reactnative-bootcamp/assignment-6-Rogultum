/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { View } from 'react-native';
import { Switch, useTheme } from 'react-native-paper';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';

import { changeTheme } from '../../redux/slicer/themeSlice';
import styles from './ThemeScreen.style';

function ThemeScreen() {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);

  const onToggleSwitch = () => {
    setIsSwitchOn(!isSwitchOn);
    dispatch(changeTheme());
  };

  const theme = useTheme();

  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      {isSwitchOn && (
        <MaterialCommunityIcons
          style={{ marginLeft: 8, marginBottom: 18 }}
          name="white-balance-sunny"
          color="#FFFC66"
          size={66}
        />
      )}
      <Switch
        style={[{ backgroundColor: theme.colors.accent }]}
        color="yellow"
        value={isSwitchOn}
        onValueChange={onToggleSwitch}
      />
      {!isSwitchOn && (
        <MaterialCommunityIcons
          style={{ marginLeft: 2, marginTop: 18 }}
          name="weather-night"
          color="yellow"
          size={66}
        />
      )}
    </View>
  );
}

export default ThemeScreen;
