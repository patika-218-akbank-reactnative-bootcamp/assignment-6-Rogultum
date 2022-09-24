import React, { useEffect, useRef, useState } from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-paper';

import { collection, getDocs } from 'firebase/firestore';
import MapView from 'react-native-maps';
import { useSelector } from 'react-redux';

import { db } from '../../../firebase/firebase';
import RenderMarker from '../../component/RenderMarker';
import styles from './MapScreen.style';

function MapScreen() {
  const user = useSelector((state) => state.user.value);
  const [locationData, setLocationData] = useState([]);

  const fetchData = async () => {
    const docRef = collection(db, 'location');
    const docSnap = await getDocs(docRef);
    const locations = [];

    docSnap.forEach((location) => {
      locations.push(location.data().location);
    });
    setLocationData([...locations]);
  };

  const mapRef = useRef();

  useEffect(() => {
    fetchData();
  }, []);

  const focus = () => {
    mapRef.current.animateToRegion(
      {
        latitude: user.location.latitude,
        longitude: user.location.longitude,
        latitudeDelta: 0.2,
        longitudeDelta: 0.4,
      },
      1000
    );
  };

  return (
    <View style={styles.container}>
      <Button
        icon="crosshairs-gps"
        mode="contained"
        position="absolute"
        bottom={12}
        right={12}
        zIndex={888}
        onPress={focus}
      />
      <MapView
        region={{ latitude: 41, longitude: 28, latitudeDelta: 3, longitudeDelta: 3 }}
        ref={mapRef}
        style={styles.map}
        maxZoomLevel={20}
        minZoomLevel={0}
      >
        {locationData && locationData.map((item) => <RenderMarker item={item} />)}
      </MapView>
    </View>
  );
}

export default MapScreen;
