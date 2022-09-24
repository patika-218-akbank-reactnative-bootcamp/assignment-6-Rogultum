import { createStackNavigator } from '@react-navigation/stack';

import React from 'react';

import MapScreen from '../../screen/BottomNav-Map/MapScreen';
import PhotoScreen from '../../screen/MapStack-Photo/PhotoScreen';

const Stack = createStackNavigator();

function MapStackNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Map" component={MapScreen} />
      <Stack.Screen name="Photo" component={PhotoScreen} />
    </Stack.Navigator>
  );
}

export default MapStackNavigation;
