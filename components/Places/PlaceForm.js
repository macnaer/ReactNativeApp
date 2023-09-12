import { ScrollView, Text, TextInput, View, StyleSheet } from "react-native";
import ImagePicker from "../Places/ImagePicker";
import { useState } from "react";

function PlaceForm() {
  const [enteredTitle, setEnteredTitle] = useState("");

  function changeTitleHandler(text) {
    setEnteredTitle(text);
  }

  return (
    <ScrollView style={styles.form}>
      <View>
        <Text style={styles.label}>Title</Text>
        <TextInput
          value={enteredTitle}
          style={styles.input}
          onChange={changeTitleHandler}
        />
        <ImagePicker />
      </View>
    </ScrollView>
  );
}

export default PlaceForm;

const styles = StyleSheet.create({
  form: {
    flex: 1,
    padding: 24,
  },
  label: {
    fontWeight: "bold",
    marginBottom: 4,
    color: "blue",
  },
  input: {
    marginVertical: 8,
    paddingHorizontal: 4,
    paddingVertical: 4,
    fontSize: 16,
    borderBottomColor: "pink",
    borderBottomWidth: 2,
    backgroundColor: "gray",
  },
});
