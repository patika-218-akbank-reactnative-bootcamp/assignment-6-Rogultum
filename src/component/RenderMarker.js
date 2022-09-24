/* eslint-disable react/destructuring-assignment */
import { useNavigation } from '@react-navigation/native';

import React from 'react';
import { Image, Pressable } from 'react-native';

import { Marker } from 'react-native-maps';

function RenderMarker(props) {
  const navigation = useNavigation();
  return (
    <Marker
      onPress={() => navigation.navigate('Photo', { uri: props.item.photoURL })}
      coordinate={{ latitude: props.item.latitude, longitude: props.item.longitude }}
    >
      <Image
        style={{ height: 30, width: 30, borderRadius: 15 }}
        source={{ uri: props.item.photoURL }}
      />
    </Marker>
  );
}

export default RenderMarker;
