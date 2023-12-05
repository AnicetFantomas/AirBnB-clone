import { View, Text, StyleSheet } from "react-native";
import React from "react";
import MapView, { PROVIDER_DEFAULT, PROVIDER_GOOGLE } from "react-native-maps";

interface Props {
  listings: any;
}

const INITIAL_REGION = {
  longitude: 37.33,
  latitude: -122,
  latitudeDelta: 9,
  longitudeDelta: 9,
}

const ListingsMap = ({ listings }: Props) => {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        showsUserLocation
        showsMyLocationButton
        initialRegion={INITIAL_REGION}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});

export default ListingsMap;
