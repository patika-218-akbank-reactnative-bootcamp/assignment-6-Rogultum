/* eslint-disable react-hooks/exhaustive-deps */

/* eslint-disable no-use-before-define */

/* eslint-disable func-names */

/* eslint-disable no-console */

/* eslint-disable no-return-await */

/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Alert, View } from 'react-native';
import { Avatar, Button, Dialog, Paragraph, Portal, Text } from 'react-native-paper';

import * as ImagePicker from 'expo-image-picker';
import * as Location from 'expo-location';
import { arrayUnion, doc, updateDoc } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import uuid from 'react-native-uuid';
import { useDispatch, useSelector } from 'react-redux';

import { db, storage } from '../../../firebase/firebase';
import PictureButton from '../../component/Button/PictureButton';
import { updateUser } from '../../redux/slicer/userSlice';
import styles from './HomeScreen.style';

function HomeScreen() {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user.value);

  const location = useSelector((state) => state.location.value);

  const [visible, setVisible] = useState(false);

  const getCurrentLocation = async () => {
    const showDialog = () => setVisible(true);

    const hideDialog = () => setVisible(false);
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      <Portal>
        <Dialog visible={visible} onDismiss={hideDialog}>
          <Dialog.Title>Alert</Dialog.Title>
          <Dialog.Content>
            <Paragraph>
              You&aposve denied location access! To continue, Please grant acces from setting.
            </Paragraph>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={hideDialog}>Done</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>;
      return;
    }

    const photoURL = await uploadImageAsync(image);
    const locationData = await Location.getCurrentPositionAsync({});
    const docRef = doc(db, 'location', user.id);
    await updateDoc(docRef, {
      'location.id': arrayUnion(locationData.timestamp),
      'location.latitude': arrayUnion(locationData.coords.latitude),
      'location.longitude': arrayUnion(locationData.coords.longitude),
      'location.photoURL': arrayUnion(photoURL),
    });
  };

  const addNew = async () => {
    const photoURL = await uploadImageAsync(image);
    const locationData = await Location.getCurrentPositionAsync({});
    const docRef = doc(db, 'location', user.id);
    await updateDoc(docRef, {
      'location.id': arrayUnion(locationData.timestamp),
      'location.latitude': arrayUnion(locationData.coords.latitude),
      'location.longitude': arrayUnion(locationData.coords.longitude),
      'location.photoURL': arrayUnion(photoURL),
    });
  };

  // user image start: ---!
  const [image, setImage] = useState(user.photoURL);

  useEffect(() => setImage(user.photoURL), []);

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
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
    }
  };

  async function uploadImageAsync(uri) {
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
    const docRef = doc(db, 'location', user.id);
    await updateDoc(docRef, {
      'location.photoURL': photoURL,
    });
  };
  // user image end. ---!

  return (
    <View style={styles.container}>
      <Avatar.Image size={96} source={{ uri: image }} />

      <View style={styles.upload_text_container}>
        <Text>Upload a Picture with</Text>
      </View>
      <PictureButton onPressGalery={pickImage} onPressCamera={pickCameraImage} />
      <View style={styles.save_button_container}>
        <Button
          onPress={getCurrentLocation}
          mode="contained"
          disabled={!image}
          buttonColor="#FFFC00"
          textColor="black"
        >
          Save Image
        </Button>
        <Button onPress={addNew}>Location</Button>
      </View>
    </View>
  );
}

export default HomeScreen;
