import { Alert, Button, View, StyleSheet, Text, Image } from "react-native";
import {
  launchCameraAsync,
  useCameraPermissions,
  PermissionStatus,
} from "expo-image-picker";
import { useState } from "react";

function ImagePicker() {
  const [comaraPermissionInformation, requestPermission] =
    useCameraPermissions();

  const [takedImage, setTakedImage] = useState();

  async function VerifyPermission() {
    if (comaraPermissionInformation.status === PermissionStatus.UNDETERMINED) {
      const permissionResponse = await requestPermission();

      return permissionResponse.granted;
    }

    // if (comaraPermissionInformation.status === PermissionStatus.DENIED) {
    //   Alert.alert("Permission denied.", "You nedd to grant access to camera.");
    //   return false;
    // }

    return true;
  }
  async function TakePhotoHandler() {
    const hasPermission = await VerifyPermission();
    if (!hasPermission) {
      return;
    }

    const image = await launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5,
    });

    setTakedImage(image.assets[0].uri);
    console.log(image.assets[0].uri);
  }

  let imagePreview = <Text>No image teken yet.</Text>;

  //   {takedImage && (
  //     <Image
  //       source={{ uri: takedImage }}
  //       style={{ width: 200, height: 200 }}
  //     />
  //   )}

  if (takedImage) {
    imagePreview = <Image style={styles.image} source={{ uri: takedImage }} />;
  }

  return (
    <View>
      <View style={styles.imagePreview}>{imagePreview}</View>
      <Button title="Take photo." onPress={TakePhotoHandler} />
    </View>
  );
}

export default ImagePicker;

const styles = StyleSheet.create({
  imagePreview: {
    width: "100%",
    height: 200,
    marginVertical: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "gray",
    borderRadius: 4,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
