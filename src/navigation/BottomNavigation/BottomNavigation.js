/* eslint-disable react/no-unstable-nested-components */

/* eslint-disable import/no-extraneous-dependencies */
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import React from 'react';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import HomeScreen from '../../screen/BottomNav-Home';
import MapStackNavigation from '../MapStackNavigation.js/MapStackNavigation';
import ProfileStackNavigation from '../ProfileStackNavigation';

const Tab = createMaterialBottomTabNavigator();

function BottomNavigation() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="home" color={color} size={26} />,
        }}
      />
      <Tab.Screen
        name="MapStack"
        component={MapStackNavigation}
        options={{
          tabBarLabel: 'Map',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="map-legend" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="ProfileStack"
        component={ProfileStackNavigation}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomNavigation;
