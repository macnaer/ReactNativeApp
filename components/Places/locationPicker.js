import { View, StyleSheet } from "react-native";
import OutlineButton from "../UI/OutlonedButton";

function LocationPicker() {
  function getLocationHandler() {}
  function getOnMapHendler() {}

  return (
    <View>
      <View style={styles.mapPreview}></View>
      <View style={styles.action}>
        <OutlineButton icon="location" onPress={getLocationHandler}>
          Locate user
        </OutlineButton>
        <OutlineButton icon="map" onPress={getOnMapHendler}>
          Pick on a map
        </OutlineButton>
      </View>
    </View>
  );
}

export default LocationPicker;

const styles = StyleSheet.create({
  mapPreview: {
    width: "100%",
    height: 200,
    marginVertical: 8,
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "gray",
    borderRadius: 4,
  },
  action: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});
