import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Button,
  ActivityIndicator,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Dropdown } from "react-native-element-dropdown";
import { useTranslator } from "../utils/localization/TranslatorContext";

import CustomAlert from "./CustomAlert";

const ShowResultForm = ({ onSubmit, loading }) => {
  const { i18n } = useTranslator();
  const isRTL = i18n.locale === "ur";
  const [registrationNo, setRegistrationNo] = useState("");
  const [rollNo, setRollNo] = useState("");
  const [alertVisible, setAlertVisible] = useState(false);

  const handleFormSubmit = () => {
    // Check if any of the fields are empty
    if (!registrationNo || !rollNo) {
      setAlertVisible(true);
      return;
    }
    onSubmit(registrationNo, rollNo);
  };
  const hideAlert = () => {
    setAlertVisible(false);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* <View>
        <Text style={styles.labelText}>{i18n.t("selectionOfGender")}:</Text>
        <Dropdown
          style={[styles.dropdown]}
          labelField="label"
          valueField="value"
          placeholder={i18n.t("gender")}
          placeholderStyle={styles.placeholder}
          data={genderOptions}
          value={selectedGender}
          onChange={(item) => setSelectedGender(item.value)}
        />
      </View>
      <View>
        <Text style={styles.labelText}>{i18n.t("selectionOfSession")}:</Text>
      </View>
      <View style={styles.rowContainer}>
        <View style={styles.dropdownRowContainer}>
          <Dropdown
            style={[styles.dropdown]}
            labelField="label"
            valueField="value"
            placeholder={i18n.t("session")}
            placeholderStyle={styles.placeholder}
            data={sessionOptions}
            value={selectedSession}
            onChange={(item) => setSelectedSession(item.value)}
          />
        </View>
        <View style={styles.dropdownRowContainer}>
          <Dropdown
            style={[styles.dropdown]}
            labelField="label"
            valueField="value"
            placeholder={i18n.t("year")}
            placeholderStyle={styles.placeholder}
            data={yearOptions}
            value={selectedYear}
            onChange={(item) => setSelectedYear(item.value)}
          />
        </View>
      </View>
      <View>
        <Text style={styles.labelText}>{i18n.t("selectionOfRank")}:</Text>
        <Dropdown
          style={[styles.dropdown]}
          labelField="label"
          valueField="value"
          placeholder={i18n.t("selectionOfRank")}
          placeholderStyle={styles.placeholder}
          data={rankOptions}
          value={selectedRank}
          onChange={(item) => setSelectedRank(item.value)}
        />
      </View> */}
      <View>
        <Text style={styles.labelText}>{i18n.t("registrationNo")}:</Text>
        <TextInput
          style={[styles.textInput, { textAlign: isRTL ? "right" : "left" }]}
          placeholder={i18n.t("registrationNoPlaceholder")}
          value={registrationNo}
          onChangeText={(text) => setRegistrationNo(text)}
          keyboardType="numeric"
        />
      </View>
      <View>
        <Text style={styles.labelText}>{i18n.t("rollNo")}:</Text>
        <TextInput
          style={[styles.textInput, { textAlign: isRTL ? "right" : "left" }]}
          placeholder={i18n.t("enterYourRollNo")}
          value={rollNo}
          onChangeText={(text) => setRollNo(text)}
          keyboardType="numeric"
        />
      </View>
      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={handleFormSubmit}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator size="small" color="#fff" />
          ) : (
            <Text style={styles.buttonText}>{i18n.t("result")}</Text>
          )}
        </TouchableOpacity>
      </View>
      <CustomAlert
        visible={alertVisible}
        message={i18n.t("fillFieldsAlert")}
        onClose={hideAlert}
      />
    </ScrollView>
  );
};

export default ShowResultForm;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingHorizontal: wp(2),
  },
  rowContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    gap: 10,
  },
  dropdownRowContainer: {
    flex: 1,
  },
  dropdown: {
    height: 50,
    borderColor: "gray",
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginBottom: 16,
  },
  labelText: {
    fontSize: hp(2),
    fontFamily: "Montserrat-Bold",
    marginBottom: hp(1),
  },
  placeholder: {
    color: "gray",
    fontStyle: "italic",
  },
  textInput: {
    fontFamily: "Montserrat-Regular",
    height: hp(5),
    borderColor: "gray",
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: wp(2),
    marginBottom: hp(2),
  },
  button: {
    backgroundColor: "blue",
    padding: hp(1.5),
    borderRadius: 8,
    alignItems: "center",
    marginBottom: hp(1),
  },
  buttonText: {
    color: "white",
    fontFamily: "Montserrat-Bold",
    fontSize: hp(2),
  },
});
