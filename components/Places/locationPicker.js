import { View, StyleSheet, Alert, Image, Text } from "react-native";
import { useState } from "react";
import {
  getCurrentPositionAsync,
  useForegroundPermissions,
  PermissionStatus,
} from "expo-location";
import OutlineButton from "../UI/OutlonedButton";
import { getMapPreview } from "../../utils/location";

function LocationPicker() {
  const [pickedLocation, setPickedLocation] = useState();
  const [locationPermissionInformation, requestPermission] =
    useForegroundPermissions();

  async function VerifyPermissions() {
    if (
      locationPermissionInformation.status === PermissionStatus.UNDETERMINED
    ) {
      const permissionResponse = await requestPermission();
      return permissionResponse.granted;
    }
    if (locationPermissionInformation.status === PermissionStatus.DENIED) {
      Alert.alert("Permisson denied.", "You need get access.");
      return false;
    }
    return true;
  }

  async function getLocationHandler() {
    const hasPermission = await VerifyPermissions();
    if (!hasPermission) {
      return;
    }

    const location = await getCurrentPositionAsync();
    setPickedLocation({
      lat: location.coords.latitude,
      lng: location.coords.longtitude,
    });
  }
  function getOnMapHendler() {}

  let locationPreview = <Text>No location picked yet.</Text>;

  if (pickedLocation) {
    locationPreview = (
      <Image
        style={styles.image}
        source={{ uri: getMapPreview(pickedLocation.lat, pickedLocation.lng) }}
      />
    );
    console.log("locationPreview ", locationPreview);
  }

  return (
    <View>
      <View style={styles.mapPreview}>{locationPreview}</View>
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
  image: {
    width: "100%",
    height: "100%",
  },
});
