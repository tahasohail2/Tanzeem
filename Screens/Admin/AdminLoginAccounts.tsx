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
  SafeAreaView,
  Image,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useTranslator } from "../../utils/localization/TranslatorContext";
import AdminLoginForm from "../../Components/Admin/AdminLoginForm";
import Separator from "../../Components/Separator";
import CreateNewUserForm from "../../Components/Admin/CreateNewUserForm";
import UserTable from "../../Components/Admin/UserTable";
import { useHeaderHeight } from "@react-navigation/elements";

const AdminLoginAccounts = () => {
  const { i18n } = useTranslator();
  const headerHeight = useHeaderHeight();
  const isRTL = i18n.locale === "ur";
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  return (
    <SafeAreaView
      style={[styles.backgroundContainer, { paddingTop: headerHeight }]}
    >
      <Image
        source={require("../../assets/adminbg.jpg")}
        style={styles.backgroundImage}
        resizeMode="cover"
      />

      <View style={styles.form}>
        <View style={styles.formContainer}>
          <Text style={styles.formHeading}>{i18n.t("createNewUser")}</Text>
          <Separator color="#0056b3" />
          <CreateNewUserForm loading={loading} error={error} />
        </View>
      </View>
      <View style={styles.form}>
        <UserTable />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    // justifyContent: "center",
    alignItems: "center",
    width: wp(100),
    height: hp(100),
  },
  backgroundImage: {
    flex: 1,
    width: wp(100),
    height: hp(100),
    position: "absolute",
  },
  userTable: {},
  form: {
    alignSelf: "center",
    marginTop: hp(2),
    backgroundColor: "rgba(255, 255, 255, 1.0)",
    borderRadius: 12,
    width: wp(90),
    elevation: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 4,
      height: 10,
    },
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },
  formHeadingContainer: {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    padding: hp(2),
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  formText: {
    fontFamily: "Montserrat-Bold",
    fontSize: hp(2),
    color: "#000000",
    textAlign: "justify",
    marginBottom: hp(2),
  },
  formHeading: {
    fontSize: hp(2.5),
    textAlign: "center",
    color: "#000000",
    fontFamily: "Montserrat-Bold",
  },
  formContainer: {
    paddingLeft: wp(2),
    paddingRight: wp(2),
    paddingVertical: hp(1),
  },
});

export default AdminLoginAccounts;
