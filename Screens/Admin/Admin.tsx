import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  SafeAreaView,
  Text,
  Alert,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import AdminLoginForm from "../../Components/AdminLoginForm";
import Separator from "../../Components/Separator";
import { useTranslator } from "../../utils/localization/TranslatorContext";
import { useNavigation } from "@react-navigation/native";

const Admin: React.FC = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const { i18n } = useTranslator();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const dummyCredentials = {
    username: "admin",
    password: "password123",
  };

  const handleUsernameChange = (text) => {
    setUsername(text);
    setError("");
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
    setError("");
  };

  const handleFormSubmit = () => {
    if (!username.trim() || !password.trim()) {
      setError(i18n.t("fillFieldsAlert"));
      return;
    }

    if (
      username !== dummyCredentials.username ||
      password !== dummyCredentials.password
    ) {
      setError(i18n.t("incorrectCredentials"));
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      Alert.alert(i18n.t("loginSuccessMsg"));
      navigation.navigate("AdminHome");
    }, 1000);
  };

  return (
    <SafeAreaView style={styles.backgroundContainer}>
      <Image
        source={require("../../assets/adminbg.jpg")}
        style={styles.backgroundImage}
        resizeMode="cover"
      />

      <View style={styles.form}>
        <View style={styles.formContainer}>
          <Text style={styles.formHeading}>{i18n.t("signInForm")}</Text>
          <Separator />
          <AdminLoginForm
            loading={loading}
            error={error}
            handleUsernameChange={handleUsernameChange}
            handlePasswordChange={handlePasswordChange}
            handleFormSubmit={handleFormSubmit}
            username={username}
            password={password}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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
  form: {
    alignSelf: "center",
    marginTop: hp(2),
    backgroundColor: "rgba(255, 255, 255, 0.8)",
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
    color: "#0056b3",
    fontFamily: "Montserrat-Bold",
  },
  formContainer: {
    paddingLeft: wp(2),
    paddingRight: wp(2),
    paddingVertical: hp(1),
  },
});

export default Admin;
