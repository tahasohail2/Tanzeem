import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Text,
  ScrollView,
  ActivityIndicator,
  Alert,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useTranslator } from "../../utils/localization/TranslatorContext";
import CustomAlert from "../CustomAlert";
import { Dropdown } from "react-native-element-dropdown";

const AffiliatedSchoolForm = () => {
  const { i18n } = useTranslator();
  const isRTL = i18n.locale === "ur";

  const [selectedItem, setSelectedItem] =
    useState<AffiliatedSchoolsForm | null>(null);
  const data: AffiliatedSchoolsForm[] = [
    { label: "Islamabad", value: 1 },
    { label: "Okara", value: 2 },
    { label: "Faisalabad", value: 3 },
    { label: "Lahore", value: 4 },
    { label: "Karachi", value: 5 },
    { label: "Quetta", value: 6 },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View>
        <Text style={styles.labelText}>{i18n.t("district")}</Text>
        <Dropdown
          style={[styles.dropdown]}
          labelField="label"
          valueField="value"
          placeholder={i18n.t("district")}
          placeholderStyle={[
            styles.placeholder,
            { textAlign: isRTL ? "right" : "left" },
          ]}
          data={data}
          value={selectedItem}
          onChange={(item) => setSelectedItem(item.value)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.labelText}>
          {i18n.t("nameOfInstitutionAddress")}
        </Text>
        <TextInput
          style={[styles.textInput, { textAlign: isRTL ? "right" : "left" }]}
          placeholder={i18n.t("nameOfInstitutionAndAddress")}
          placeholderTextColor="#aaa"
          //   value={username}
          //   onChangeText={handleUsernameChange}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.labelText}>{i18n.t("accessionNo")}</Text>
        <TextInput
          style={[styles.textInput, { textAlign: isRTL ? "right" : "left" }]}
          placeholder={i18n.t("accessionNo")}
          placeholderTextColor="#aaa"
          //   value={username}
          //   onChangeText={handleUsernameChange}
        />
      </View>
      <TouchableOpacity
        style={styles.button}
        // onPress={handleFormSubmit}
        // disabled={loading}
      >
        <Text style={styles.buttonText}>{i18n.t("getRecord")}</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    // paddingHorizontal: wp(2),
    // paddingTop: hp(2),
    paddingVertical: hp(1),
    paddingHorizontal: hp(3),
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
  inputContainer: {
    marginBottom: hp(2),
  },
  labelText: {
    fontSize: hp(2),
    fontFamily: "Montserrat-Bold",
    marginBottom: hp(1),
    color: "#000000",
  },
  textInput: {
    fontFamily: "Montserrat-Regular",
    height: hp(5),
    borderColor: "#D3D3D3",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: wp(2),
    backgroundColor: "#fff",
  },
  button: {
    backgroundColor: "#0056b3",
    paddingVertical: hp(1.3),
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontFamily: "Montserrat-Bold",
    fontSize: hp(2),
  },
  errorText: {
    fontFamily: "Montserrat-Bold",
    fontSize: hp(1.5),
    color: "red",
    marginBottom: hp(1),
    textAlign: "center",
  },
});

export default AffiliatedSchoolForm;
