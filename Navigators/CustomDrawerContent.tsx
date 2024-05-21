import React from "react";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import { Ionicons } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useTranslator } from "../utils/localization/TranslatorContext";

const width = Dimensions.get("screen").width;
const isTablet = width >= 768;

const CustomDrawerContent = (props) => {
  const { i18n } = useTranslator();
  const { selectedLanguage, handleLanguageChange } = props;
  const isRTL = i18n.locale === "ur";
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.logoContainer}>
        <Image
          source={require("../assets/logo.png")}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
      <DrawerItemList {...props} />
      <View style={styles.separator} />
      <View
        style={[
          styles.languageContainer,
          {
            justifyContent: isRTL ? "space-between" : "flex-start",
            gap: isTablet ? wp(3) : wp(9),
          },
        ]}
      >
        <Ionicons name="language" size={24} color="#636769" />
        <Text style={styles.languageHeading}>{i18n.t("language")}</Text>
      </View>
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
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    marginVertical: hp(2),
  },
  logoContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
  },
  dropdownContainer: {
    paddingLeft: hp(2),
    marginBottom: hp(5),
  },
  languageContainer: {
    paddingVertical: hp(2),
    paddingLeft: isTablet ? wp(2.5) : wp(5),
    paddingRight: isTablet ? wp(7) : wp(14),
    flexDirection: "row",
    alignItems: "center",
  },
  languageHeading: {
    fontFamily: "Montserrat-Bold",
    fontSize: hp(2),
  },
  dropdown: {
    width: isTablet ? wp(40) : wp(50),
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: wp(2),
  },
});

export default CustomDrawerContent;
