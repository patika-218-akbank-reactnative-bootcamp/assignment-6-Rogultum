/* eslint-disable react/jsx-props-no-spreading */

/* eslint-disable react/no-unstable-nested-components */
import { createStackNavigator } from '@react-navigation/stack';

import React from 'react';

import Header from '../../component/Header/Header';
import SignInScreen from '../../screen/SignStack-SignIn';
import SignUpScreen from '../../screen/SignStack-SignUp';
import BottomNavigation from '../BottomNavigation/BottomNavigation';

const Stack = createStackNavigator();

// const renderHeader = ({ scene }) => {
//   <Header scene={scene} />;
// };

function SignStackNavigaton() {
  return (
    <Stack.Navigator
      initialRouteName="SignIn"
      screenOptions={{ header: (props) => <Header {...props} />, headerMode: 'screen' }}
    >
      <Stack.Screen name="SignIn" component={SignInScreen} options={{ headerTitle: 'SignIn' }} />
      <Stack.Screen name="SignUp" component={SignUpScreen} options={{ headerTitle: 'SignUp' }} />
      <Stack.Screen
        name="BottomNav"
        component={BottomNavigation}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default SignStackNavigaton;
