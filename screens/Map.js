import { StyleSheet } from "react-native";
import MapView, { Maker } from "react-native-maps";

function Map() {
  const region = {
    latitude: 50.61,
    longitude: 26.24,
    latitudeDelta: 11014,
    longitudeDelta: 41674,
  };

  return <MapView style={styles.map} initialRegion={region} />;
}

export default Map;

const styles = StyleSheet.create({
  map: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
});
