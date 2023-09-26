import { useEffect, useState } from "react";
import { ScrollView, Image, View, Text, StyleSheet } from "react-native";

import OutlinedButton from "../components/UI/OutlinedButton";
import { fecthPlaceDatails } from "../utils/database";

function PlaceDetails({ route, navigation }) {
  const [fetchedPlace, setFetchedPlace] = useState();

  const selctedPlaceId = route.params.placeId;

  function showOnMapHandler() {}

  useEffect(() => {
    async function loadPlaceData() {
      const place = await fecthPlaceDatails(selctedPlaceId);
      setFetchedPlace(place);
      navigation.setOptions({
        title: place.title,
      });
    }
    loadPlaceData();
  }, [selctedPlaceId]);

  if (!fetchedPlace) {
    return (
      <View>
        <Text>Loading place ...</Text>
      </View>
    );
  }

  return (
    <ScrollView>
      <Image source={{ uri: fetchedPlace.address }} />
      <View>
        <View>{fetchedPlace.address}</View>
        <OutlinedButton icon="map" onPress={showOnMapHandler}>
          View on map
        </OutlinedButton>
      </View>
    </ScrollView>
  );
}

export default PlaceDetails;

const styles = StyleSheet.create({
  image: {},
});
