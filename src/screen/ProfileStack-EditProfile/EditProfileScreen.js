/* eslint-disable react-hooks/exhaustive-deps */

/* eslint-disable func-names */

/* eslint-disable no-console */

/* eslint-disable no-return-await */

/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Alert, View } from 'react-native';
import { Avatar, Button, Text } from 'react-native-paper';

import AsyncStorage from '@react-native-async-storage/async-storage';
import * as ImagePicker from 'expo-image-picker';
import { doc, updateDoc } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import uuid from 'react-native-uuid';
import { useDispatch, useSelector } from 'react-redux';

import { db, storage } from '../../../firebase/firebase';
import PictureButton from '../../component/Button/PictureButton';
import Input from '../../component/Input';
import { setSignUpForm, updateUser } from '../../redux/slicer/userSlice';
import styles from './EditProfileScreen.style';

function EditProfileScreen() {
  const { username } = useSelector((state) => state.user.value);

  const dispatch = useDispatch();

  const user = useSelector((state) => state.user.value);

  const [visible, setVisible] = useState(false);

  // user image start: ---!
  const [image, setImage] = useState(user.photoURL);

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
      dispatch(updateUser({ photoURL: result.uri }));
    }
  };

  const pickCameraImage = async () => {
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      Alert.alert("You've denied camera access please go to settings to allow it!");
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
      dispatch(updateUser({ photoURL: result.uri }));
    }
  };

  async function uploadImageAsync(uri) {
    // Why are we using XMLHttpRequest? See:
    // https://github.com/expo/expo/issues/2402#issuecomment-443726662
    const blob = await new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = function () {
        resolve(xhr.response);
      };
      xhr.onerror = function (e) {
        console.log(e);
        reject(new TypeError('Network request failed'));
      };
      xhr.responseType = 'blob';
      xhr.open('GET', uri, true);
      xhr.send(null);
    });

    const fileRef = ref(storage, uuid.v4());
    const result = await uploadBytes(fileRef, blob);

    // We're done with the blob, close and release it
    blob.close();

    return await getDownloadURL(fileRef);
  }

  const handleUpload = async () => {
    const photoURL = await uploadImageAsync(image);
    const docRef = doc(db, 'user', user.id);
    await updateDoc(docRef, {
      photoURL,
    }).then((response) => {
      dispatch(updateUser(photoURL));
    });
    await AsyncStorage.mergeItem('user', JSON.stringify({ username }));
  };
  // user image end. ---!

  return (
    <View style={styles.container}>
      <Avatar.Image size={96} source={{ uri: image }} />
      <View style={styles.upload_text_container}>
        <Text>Upload your profile picture with</Text>
      </View>
      <View>
        <PictureButton onPressGalery={pickImage} onPressCamera={pickCameraImage} />
        <Input
          label="Change Username"
          value={username}
          onChangeText={(text) => {
            dispatch(setSignUpForm({ username: text }));
          }}
        />
      </View>
      <View style={styles.save_button_container}>
        <Button onPress={handleUpload} mode="contained" buttonColor="#FFFC00" textColor="black">
          Update Profile
        </Button>
      </View>
    </View>
  );
}

export default EditProfileScreen;
