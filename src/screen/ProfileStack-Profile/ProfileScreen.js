/* eslint-disable react-hooks/exhaustive-deps */
import { useNavigation } from '@react-navigation/native';

import React, { useEffect } from 'react';
import { Image, View } from 'react-native';
import { Text } from 'react-native-paper';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch, useSelector } from 'react-redux';

import ProfileButton from '../../component/Button/ProfileButton';
import { logout, signIn } from '../../redux/slicer/userSlice';
import styles from './ProfileScreen.style';

function ProfileScreen() {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user.value);

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    const userData = await AsyncStorage.getItem('user');
    dispatch(signIn(JSON.parse(userData)));
  };

  useEffect(() => {
    getUser();
  }, []);

  const handleLogout = async () => {
    dispatch(logout());
    await AsyncStorage.removeItem('user');
    navigation.navigate('SignIn');
  };

  const navigateEditProfile = () => {
    navigation.navigate('EditProfile');
  };

  const navigateTheme = () => {
    navigation.navigate('Theme');
  };

  return (
    <View>
      <View style={styles.image_container}>
        <Image style={styles.image} source={{ uri: user.photoURL }} />
        <View style={styles.username_container}>
          <Text>Username:</Text>
          {user ? (
            <Text>{user.username}</Text>
          ) : (
            <Text onPress={getUser}>Press here to get your info!</Text>
          )}
        </View>
        <ProfileButton title="THEME" onPress={navigateTheme} />
        <ProfileButton title="EDITPROFILE" onPress={navigateEditProfile} />
        <ProfileButton title="LOGOUT" onPress={handleLogout} />
      </View>
    </View>
  );
}

export default ProfileScreen;
