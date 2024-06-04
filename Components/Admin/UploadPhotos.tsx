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

const UploadPhotos = () => {
  const { i18n } = useTranslator();
  const isRTL = i18n.locale === "ur";
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [image, setImage] = useState(null);
  const [caption, setCaption] = useState("");
  const [newCategory, setNewCategory] = useState("");
  const [categories, setCategories] = useState([
    { label: "Event", value: 1 },
    { label: "Portrait", value: 2 },
    { label: "Landscape", value: 3 },
  ]);
  const [editCategory, setEditCategory] = useState("");

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

  const addCategory = () => {
    if (newCategory) {
      const newValue = categories.length + 1;
      setCategories([...categories, { label: newCategory, value: newValue }]);
      setNewCategory("");
    } else {
      Alert.alert("Error", "Please enter a category name");
    }
  };

  const editSelectedCategory = () => {
    if (selectedCategory && editCategory) {
      const updatedCategories = categories.map((category) =>
        category.value === selectedCategory
          ? { ...category, label: editCategory }
          : category
      );
      setCategories(updatedCategories);
      setEditCategory("");
    } else {
      Alert.alert("Error", "Please select a category and enter a new name");
    }
  };

  const uploadImage = () => {
    Alert.alert("Success", "Image uploaded successfully");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>{i18n.t("uploadImages")}</Text>

      <Text style={styles.labelText}>{i18n.t("pictureCategory")}</Text>
      <Dropdown
        style={styles.dropdown}
        labelField="label"
        valueField="value"
        placeholder={i18n.t("selectCategory")}
        placeholderStyle={[
          styles.placeholder,
          { textAlign: isRTL ? "right" : "left" },
        ]}
        data={categories}
        value={selectedCategory}
        onChange={(item) => setSelectedCategory(item.value)}
      />

      <Text style={styles.labelText}>{i18n.t("selectImagePath")}</Text>
      <TouchableOpacity style={styles.imagePicker} onPress={pickImage}>
        <Text style={styles.imagePickerText}>{i18n.t("chooseImage")}</Text>
      </TouchableOpacity>
      {image && <Image source={{ uri: image }} style={styles.imagePreview} />}

      <Text style={styles.labelText}>{i18n.t("pictureCaption")}</Text>
      <TextInput
        style={styles.textArea}
        placeholder={i18n.t("enterCaption")}
        placeholderTextColor="#aaa"
        multiline={true}
        value={caption}
        onChangeText={setCaption}
      />

      <TouchableOpacity
        style={[styles.button, !image && styles.disabledButton]}
        onPress={uploadImage}
        disabled={!image}
      >
        <Text style={styles.buttonText}>{i18n.t("uploadImage")}</Text>
      </TouchableOpacity>

      <Text style={styles.labelText}>{i18n.t("addNewCategory")}</Text>
      <View style={styles.addCategoryContainer}>
        <TextInput
          style={styles.textInput}
          placeholder={i18n.t("newCategory")}
          placeholderTextColor="#aaa"
          value={newCategory}
          onChangeText={setNewCategory}
        />
        <TouchableOpacity style={styles.smallButton} onPress={addCategory}>
          <Text style={styles.buttonText}>{i18n.t("add")}</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.labelText}>{i18n.t("editSelectedCategory")}</Text>
      <View style={styles.addCategoryContainer}>
        <TextInput
          style={styles.textInput}
          placeholder={i18n.t("newName")}
          placeholderTextColor="#aaa"
          value={editCategory}
          onChangeText={setEditCategory}
        />
        <TouchableOpacity
          style={styles.smallButton}
          onPress={editSelectedCategory}
        >
          <Text style={styles.buttonText}>{i18n.t("edit")}</Text>
        </TouchableOpacity>
      </View>
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
    marginBottom: hp(1),
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

export default UploadPhotos;
