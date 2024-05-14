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
import { Gender, Rank, Session, Year } from "../utils/types/types";
import CustomAlert from "./CustomAlert";

const Form = ({ onSubmit, loading }) => {
  const { i18n } = useTranslator();
  const [selectedGender, setSelectedGender] = useState<string | null>(null);
  const [selectedSession, setSelectedSession] = useState<string | null>(null);
  const [selectedYear, setSelectedYear] = useState<string | null>(null);
  const [selectedRank, setSelectedRank] = useState<string | null>(null);
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

  const genderOptions: Gender[] = [
    { label: i18n.t("male"), value: "male" },
    { label: i18n.t("female"), value: "female" },
  ];
  const rankOptions: Rank[] = [
    { label: i18n.t("tajweedAlQuran"), value: "tajweed-al-quran" },
    { label: i18n.t("publicFirst"), value: "public-first" },
    { label: i18n.t("publicSecond"), value: "public-second" },
    { label: i18n.t("feature_1"), value: "feature-1" },
    { label: i18n.t("feature_2"), value: "feature-2" },
    { label: i18n.t("aliya_1"), value: "aliya-1" },
    { label: i18n.t("aliya_II"), value: "alia-ii" },
    { label: i18n.t("world_I"), value: "world-i" },
    { label: i18n.t("world_II"), value: "world-ii" },
    { label: i18n.t("medium"), value: "medium" },
    { label: i18n.t("takhsal_Per_Fiqh_I"), value: "takhsal-per-fiqh-i" },
    { label: i18n.t("takhsal_Per_Fiqh_II"), value: "takhsal-per-fiqh-ii" },
    {
      label: i18n.t("specializationEntranceTest"),
      value: "specialization-entrance-test",
    },
  ];
  const sessionOptions: Session[] = [
    { label: i18n.t("final"), value: "final" },
    { label: i18n.t("secondFinal"), value: "secondFinal" },
    { label: i18n.t("temporal"), value: "temporal" },
  ];

  const yearOptions: Year[] = [
    { label: "2024", value: "2024" },
    { label: "2023", value: "2023" },
    { label: "2022", value: "2022" },
  ];

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
          style={styles.textInput}
          placeholder={i18n.t("registrationNoPlaceholder")}
          value={registrationNo}
          onChangeText={(text) => setRegistrationNo(text)}
          keyboardType="numeric"
        />
      </View>
      <View>
        <Text style={styles.labelText}>{i18n.t("rollNo")}:</Text>
        <TextInput
          style={styles.textInput}
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

export default Form;

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
    fontFamily: "Montserrat-BoldItalic",
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
