import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Text,
  ScrollView,
  Image,
  Alert,
  Modal,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Dropdown } from "react-native-element-dropdown";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useTranslator } from "../../utils/localization/TranslatorContext";

const UploadNews = () => {
  const { i18n } = useTranslator();
  const [image, setImage] = useState(null);
  const [caption, setCaption] = useState("");

  const pickImage = async () => {
    let permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted === false) {
      Alert.alert(
        "Permission Denied",
        "Permission to access gallery is required!"
      );
      return;
    }
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled && result.assets && result.assets.length > 0) {
      setImage(result.assets[0].uri);
    }
  };

  const uploadImage = () => {
    Alert.alert("Success", "News uploaded successfully");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>{i18n.t("uploadNews")}</Text>

      <Text style={styles.labelText}>{i18n.t("newsOnAlert")}</Text>
      <TextInput
        style={styles.textArea}
        placeholder={i18n.t("writeAboutNewsAlert")}
        placeholderTextColor="#aaa"
        multiline={true}
        value={caption}
        onChangeText={setCaption}
      />

      <Text style={styles.labelText}>{i18n.t("newsHeading")}</Text>
      <TextInput
        style={styles.textArea}
        placeholder={i18n.t("enterNewHeading")}
        placeholderTextColor="#aaa"
        multiline={true}
        value={caption}
        onChangeText={setCaption}
      />
      <Text style={styles.labelText}>{i18n.t("newsDetails")}</Text>
      <TextInput
        style={styles.textArea}
        placeholder={i18n.t("writeNewsDetails")}
        placeholderTextColor="#aaa"
        multiline={true}
        value={caption}
        onChangeText={setCaption}
      />

      <Text style={styles.labelText}>{i18n.t("selectImagePath")}</Text>
      <TouchableOpacity style={styles.imagePicker} onPress={pickImage}>
        <Text style={styles.imagePickerText}>{i18n.t("chooseImage")}</Text>
      </TouchableOpacity>
      {image && <Image source={{ uri: image }} style={styles.imagePreview} />}

      <TouchableOpacity
        style={[styles.button, !image && styles.disabledButton]}
        onPress={uploadImage}
        disabled={!image}
      >
        <Text style={styles.buttonText}>{i18n.t("uploadNews")}</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingVertical: hp(1),
    paddingHorizontal: hp(3),
  },
  heading: {
    fontSize: hp(3),
    fontFamily: "Montserrat-Bold",
    marginBottom: hp(2),
    textAlign: "center",
    color: "#000000",
  },
  labelText: {
    fontSize: hp(2),
    fontFamily: "Montserrat-Bold",
    marginVertical: hp(1),
    color: "#000000",
  },
  placeholder: {
    color: "gray",
    fontStyle: "italic",
  },
  dropdown: {
    height: hp(5),
    borderColor: "gray",
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: wp(2),
    marginBottom: hp(2),
  },
  imagePicker: {
    height: hp(5),
    borderColor: "gray",
    borderWidth: 0.5,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: hp(2),
  },
  imagePickerText: {
    color: "gray",
    fontStyle: "italic",
  },
  imagePreview: {
    objectFit: "fill",
    height: hp(30),
    marginBottom: hp(2),
  },
  textArea: {
    fontFamily: "Montserrat-Regular",
    height: hp(10),
    borderColor: "#D3D3D3",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: wp(2),
    backgroundColor: "#fff",
    textAlignVertical: "top",
  },
  button: {
    marginTop: hp(2),
    backgroundColor: "#0056b3",
    paddingVertical: hp(1.3),
    borderRadius: 8,
    alignItems: "center",
    marginBottom: hp(2),
  },
  disabledButton: {
    backgroundColor: "gray",
  },
  buttonText: {
    color: "#fff",
    fontFamily: "Montserrat-Bold",
    fontSize: hp(2),
  },
  addCategoryContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: hp(2),
  },
  textInput: {
    fontFamily: "Montserrat-Regular",
    height: hp(5),
    borderColor: "#D3D3D3",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: wp(2),
    backgroundColor: "#fff",
    flex: 1,
  },
  smallButton: {
    backgroundColor: "#0056b3",
    paddingVertical: hp(1.3),
    paddingHorizontal: wp(3),
    borderRadius: 8,
    marginLeft: wp(2),
  },
});

export default UploadNews;
