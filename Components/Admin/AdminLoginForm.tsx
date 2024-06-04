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

const AdminLoginForm = ({
  loading,
  username,
  handleUsernameChange,
  password,
  handlePasswordChange,
  error,
  handleFormSubmit,
}) => {
  const { i18n } = useTranslator();
  const isRTL = i18n.locale === "ur";

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.labelText}>{i18n.t("User")}</Text>
        <TextInput
          style={[styles.textInput, { textAlign: isRTL ? "right" : "left" }]}
          placeholder={i18n.t("UserName")}
          placeholderTextColor="#aaa"
          value={username}
          onChangeText={handleUsernameChange}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.labelText}>{i18n.t("Password")}</Text>
        <TextInput
          style={[styles.textInput, { textAlign: isRTL ? "right" : "left" }]}
          placeholderTextColor="#aaa"
          placeholder={i18n.t("Password")}
          secureTextEntry
          value={password}
          onChangeText={handlePasswordChange}
        />
      </View>
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
      <TouchableOpacity
        style={styles.button}
        onPress={handleFormSubmit}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator size="small" color="#fff" />
        ) : (
          <Text style={styles.buttonText}>{i18n.t("SignIn")}</Text>
        )}
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
  inputContainer: {
    marginBottom: hp(2),
  },
  labelText: {
    fontSize: hp(2),
    fontFamily: "Montserrat-Bold",
    marginBottom: hp(1),
    color: "#0056b3",
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
    paddingVertical: hp(1.5),
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

export default AdminLoginForm;
