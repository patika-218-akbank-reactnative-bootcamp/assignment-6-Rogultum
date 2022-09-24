

### This project is done on *Expo* for educational purposes. Assignment-6, P218. Akbank Patika.Dev React Native Bootcamp.

## Technologies:
global state management: [redux-toolkit](https://redux.js.org/),

navigation: [react-navigation](https://reactnavigation.org/),

some components: [react-native-paper](https://callstack.github.io/react-native-paper/getting-started.html),

authentication and cloud services: [firebase](https://firebase.google.com/),

image selecting: [image-picker](https://docs.expo.dev/versions/latest/sdk/imagepicker/),

map: [react-native-map](https://docs.expo.dev/versions/latest/sdk/map-view/),

location : [expo-location](https://docs.expo.dev/versions/latest/sdk/location/),

## Overview

There are Sign pages where the user gets saved to **firebase**, **async storage** and **redux state**.

In the home screen, user uploads a picture where it gets saved firebase storage. Url from firebase storage along with location information of the user, where they upload the image
gets saved to firestore database.

In the map screen, user can see theirself and other users pictures marked on the map. Also they can click on the pictures to see the full version of pictures.

In profile screen, users can see their profile picture and username, they can navigate to theme screen where they can change the theme (dark/light) also; they can go to editprofilescreen where they
can upload a picture from camera/gallery, change their username. Logout button deletes the user data from redux state and async storage and take them back to signin screen.

## For a quick tour of the app:

**https://imgur.com/fuWxawz**





