import { createStackNavigator } from '@react-navigation/stack';

import React from 'react';

import EditProfileScreen from '../../screen/ProfileStack-EditProfile';
import ProfileScreen from '../../screen/ProfileStack-Profile';
import ThemeScreen from '../../screen/ProfileStack-Theme';

const Stack = createStackNavigator();

function ProfileStackNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Theme" component={ThemeScreen} />
      <Stack.Screen name="EditProfile" component={EditProfileScreen} />
    </Stack.Navigator>
  );
}

export default ProfileStackNavigation;
