import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

function PhotoScreen({ route }) {
  const { uri } = route.params;

  return (
    <View style={styles.container}>
      <Image style={{ height: 250, width: 250 }} source={{ uri }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});

export default PhotoScreen;
