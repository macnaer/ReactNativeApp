import PlaceForm from "../components/Places/PlaceForm";
import { intertPlace } from "../utils/database";

function AddPlace({ navigation }) {
  async function createPlaceHandler(place) {
    await intertPlace(place);
    navigation.navigate("AllPlaces", { place: place });
  }

  return <PlaceForm onCreatePlace={createPlaceHandler} />;
}

export default AddPlace;
