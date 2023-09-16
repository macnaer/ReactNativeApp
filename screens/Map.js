import { useCallback, useLayoutEffect, useState } from "react";
import { Alert, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";
import IconButton from "../components/UI/IconButton";

function Map({ navigation }) {
  const [selectedLocation, setSelectedLocation] = useState();

  const region = {
    latitude: 50.61,
    longitude: 26.24,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  function selectedLocationHandler(event) {
    const lat = event.nativeEvent.coordinate.latitude;
    const lug = event.nativeEvent.coordinate.longitude;
    setSelectedLocation({ lat: lat, lug: lug });
  }

  const savePickedLockationHandler = useCallback(
    () => {
      if (!selectedLocation) {
        Alert.alert("No location selected.", "You have to select location.");
      }
      return;
    },
    navigation.navigate(
      "AddPlace",
      {
        pickedLat: selectedLocation.lat,
        pickedLug: selectedLocation.lug,
      }[(navigation, selectedLocation)]
    )
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: ({ blue }) => {
        <IconButton
          icon="save"
          size={24}
          color="blue"
          onPress={savePickedLockationHandler}
        />;
      },
    });
  });

  return (
    <MapView
      style={styles.map}
      initialRegion={region}
      onPress={selectedLocationHandler}
    >
      {selectedLocation && (
        <Marker
          title="Picked place"
          coordinate={{
            latitude: selectedLocation.lat,
            longitude: selectedLocation.lug,
          }}
        />
      )}
    </MapView>
  );
}

export default Map;

const styles = StyleSheet.create({
  map: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
});
