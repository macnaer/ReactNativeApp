import { Aler, Alert, Button, View } from "react-native";
import {
  launchCameraAsync,
  useCameraPermissions,
  PermissionStatus,
} from "expo-image-picker";

function ImagePicker() {
  const [comaraPermissionInformation, requestPermission] =
    useCameraPermissions();

  async function VerifyPermission() {
    if (comaraPermissionInformation.status === PermissionStatus.UNDETERMINED) {
      const permissionResponse = await requestPermission();

      return permissionResponse.granted;
    }

    if (comaraPermissionInformation.status === PermissionStatus.DENIED) {
      Alert.alert("Permission denied.", "You nedd to grant access to camera.");
      return false;
    }

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

    console.log("Image: ", image);
  }

  return (
    <View>
      <View></View>
      <Button title="Take photo." onPress={TakePhotoHandler} />
    </View>
  );
}

export default ImagePicker;
