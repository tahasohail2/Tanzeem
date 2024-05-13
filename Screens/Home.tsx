import React, { useState } from "react";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import Form from "../Components/Form";
import { Dropdown } from "react-native-element-dropdown";
import { useTranslator } from "../utils/localization/TranslatorContext";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import baseURL from "../api/api";

function Home() {
  const navigation = useNavigation();
  const { i18n, changeLocale } = useTranslator();
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.locale);
  const handleLanguageChange = (language: any) => {
    setSelectedLanguage(language);
    changeLocale(language);
  };

  const handleSubmit = async (registrationNo: any, rollNo: any) => {
    try {
      const response = await axios.get(
        `${baseURL}studentData?registrationNo=${registrationNo}&rollNo=${rollNo}`
      );
      // console.log(response.data);
      navigation.navigate("Result", { responseData: response.data });
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  return (
    <View style={styles.backgroundContainer}>
      <Image
        source={require("../assets/Markaz1.jpg")}
        style={styles.backgroundImage}
        resizeMode="cover"
      />

      <SafeAreaView style={styles.container}>
        <View style={styles.insideContainer}>
          <View style={styles.dropdownContainer}>
            <Dropdown
              style={[styles.dropdown]}
              labelField="label"
              valueField="value"
              placeholder="Select Language"
              data={[
                { label: "English", value: "en" },
                { label: "اردو", value: "ur" },
              ]}
              value={selectedLanguage}
              onChange={(item) => handleLanguageChange(item.value)}
            />
          </View>

          <Image
            source={require("../assets/logo.png")}
            style={styles.image}
            resizeMode="contain"
          />
          <View style={styles.form}>
            <View style={styles.formHeadingContainer}>
              <Text style={styles.formHeading}>
                {i18n.t("AnnualExamination2024")}
              </Text>
            </View>
            <View style={styles.formContainer}>
              <View>
                <Text style={styles.formText}>{i18n.t("formText")}</Text>
              </View>

              <Form onSubmit={handleSubmit} />
            </View>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}

export default Home;
const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
  },
  insideContainer: {
    width: "100%",
    marginTop: 70,
  },
  image: {
    width: "100%",
    marginTop: 20,
  },
  dropdownContainer: {
    alignItems: "flex-end",
    paddingHorizontal: 16,
  },
  dropdown: {
    width: "30%",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  formHeading: {
    fontSize: 20,
    textAlign: "center",
    color: "#ffffff",
    fontWeight: "bold",
  },
  formHeadingContainer: {
    backgroundColor: "#207EB5",
    padding: 20,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  formContainer: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingVertical: 20,
  },
  formText: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#000000",
    textAlign: "center",
    marginBottom: 20,
  },
  form: {
    marginTop: 10,
    backgroundColor: "#ffffff",
    borderRadius: 12,
    marginHorizontal: 16,
    // padding: 20,
    elevation: 4,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
});
