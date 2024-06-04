import React, { useState } from "react";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import ShowResultForm from "../../Components/Result/ShowResultForm";
import { Dropdown } from "react-native-element-dropdown";
import { useTranslator } from "../../utils/localization/TranslatorContext";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import baseURL from "../../api/api";

function Home() {
  const navigation = useNavigation();
  const { i18n, changeLocale } = useTranslator();
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.locale);
  const [loading, setLoading] = useState(false);

  const handleLanguageChange = (language: any) => {
    setSelectedLanguage(language);
    changeLocale(language);
  };

  const handleSubmit = async (registrationNo: any, rollNo: any) => {
    try {
      setLoading(true);
      const response = await axios.get(
        `${baseURL}studentData?registrationNo=${registrationNo}&rollNo=${rollNo}`
      );
      navigation.navigate("ResultPage", { responseData: response.data });
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.backgroundContainer}>
      <Image
        source={require("../../assets/adminbg.jpg")}
        style={styles.backgroundImage}
        resizeMode="cover"
      />

      <SafeAreaView style={styles.container}>
        <View style={styles.insideContainer}>
          <Image
            source={require("../../assets/logo.png")}
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

              <ShowResultForm onSubmit={handleSubmit} loading={loading} />
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
    width: wp(100),
    height: hp(100),
    position: "absolute",
  },
  backgroundImage: {
    flex: 1,
    width: wp(100),
    height: hp(100),
    position: "absolute",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
  },
  insideContainer: {
    width: wp(100),
    marginTop: hp(5),
  },
  image: {
    width: wp(100),
    marginTop: hp(2),
  },
  dropdownContainer: {
    alignItems: "flex-end",
    paddingHorizontal: wp(2),
  },
  dropdown: {
    width: hp(15),
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: wp(2),
  },
  formHeading: {
    fontSize: hp(2.5),
    textAlign: "center",
    color: "#ffffff",
    fontFamily: "Montserrat-Bold",
  },
  formHeadingContainer: {
    backgroundColor: "#0056b3",
    padding: hp(2),
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  formContainer: {
    paddingLeft: wp(2),
    paddingRight: wp(2),
    paddingVertical: hp(1),
  },
  formText: {
    fontFamily: "Montserrat-Bold",
    fontSize: hp(2),
    color: "#000000",
    textAlign: "justify",
    marginBottom: hp(2),
  },
  form: {
    alignSelf: "center",
    marginTop: hp(2),
    backgroundColor: "#ffffff",
    borderRadius: 12,
    width: wp(90),
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
