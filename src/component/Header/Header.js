/* eslint-disable react/destructuring-assignment */

/* eslint-disable no-nested-ternary */
import React, { useState } from 'react';
import { Appbar, Switch, useTheme } from 'react-native-paper';

import { useDispatch } from 'react-redux';

import { changeTheme } from '../../redux/slicer/themeSlice';

function Header(props) {
  const theme = useTheme();

  const title =
    props.options.headerTitle !== undefined
      ? props.options.headerTitle
      : props.options.title !== undefined
      ? props.options.title
      : props.route.name;

  const dispatch = useDispatch();

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
    dispatch(changeTheme());
  };

  return (
    <Appbar.Header
      theme={{
        colors: {
          primary: theme?.colors.surface,
        },
      }}
    >
      <Appbar.Content title={title} />

      <Switch
        trackColor={{ false: '#1DB954', true: '#f4f3f4' }}
        thumbColor={isEnabled ? '#1DB954' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </Appbar.Header>
  );
}

export default Header;
