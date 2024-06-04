import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  SafeAreaView,
  Text,
  Alert,
  FlatList,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import LinkButton from "../../Components/LinkButton";
import { useTranslator } from "../../utils/localization/TranslatorContext";
import { StackNavigationProp } from "@react-navigation/stack";

type AdminHomeScreenNavigationProp = StackNavigationProp<
  AdminRootStackParamList,
  "AdminHome"
>;

interface AdminHomeProps {
  navigation: AdminHomeScreenNavigationProp;
}

const AdminHome: React.FC<AdminHomeProps> = ({ navigation }) => {
  const { i18n } = useTranslator();

  const links = [
    {
      title: i18n.t("ViewAdministrativeLoginAccounts"),
      screen: "AdminLoginAccounts",
    },
    {
      title: i18n.t("SeeAffiliatedSchools"),
      screen: "AffiliatedSchools",
    },
    {
      title: i18n.t("UploadOrChangePhotos"),
      screen: "UploadOrChangePhotos",
    },
    {
      title: i18n.t("UploadOrChangeNews"),
      screen: "UploadOrChangeNews",
    },
    {
      title: i18n.t("SeeMadrasasMessages"),
      screen: "MadrasasMessages",
    },
    // {
    //   title: i18n.t("SeeScholarsLoginAccounts"),
    //   screen: "ScholarsLoginAccounts",
    // },
    {
      title: i18n.t("ScholarsRecords"),
      screen: "ScholarsRecords",
    },
    // {
    //   title: i18n.t("SeeTheOfficialEmail"),
    //   screen: "OfficialEmail",
    // },
  ];

  const handlePress = (screen: string) => {
    navigation.navigate(screen as keyof AdminRootStackParamList);
  };
  return (
    <SafeAreaView style={styles.backgroundContainer}>
      <Image
        source={require("../../assets/adminbg.jpg")}
        style={styles.backgroundImage}
        resizeMode="cover"
      />
      <View style={styles.welcomeContainer}>
        <Text style={styles.welcomeText}>{i18n.t("welcomeText")},</Text>
        <Text style={styles.welcomeNote}>{i18n.t("welcomeNote")}!</Text>
      </View>

      <FlatList
        data={links}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <LinkButton
            title={item.title}
            onPress={() => handlePress(item.screen)}
          />
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: wp(100),
    height: hp(100),
    position: "absolute",
  },
  backgroundContainer: {
    flex: 1,
    width: wp(100),
    height: hp(100),
    padding: hp(2),
  },
  welcomeContainer: {
    marginVertical: hp(2),
  },
  welcomeText: {
    fontFamily: "Montserrat-Bold",
    fontSize: hp(2),
    marginBottom: hp(1),
    color: "#ffffff",
  },
  welcomeNote: {
    fontFamily: "Montserrat-Bold",
    fontSize: hp(2),
    color: "#ffffff",
  },
});

export default AdminHome;
