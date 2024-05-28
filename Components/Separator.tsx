import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
const Separator = () => {
  return (
    <View style={styles.separatorContainer}>
      <View style={styles.line} />
      <Ionicons name="settings" size={20} color="#0056b3" />
      <View style={styles.line} />
    </View>
  );
};

const styles = StyleSheet.create({
  separatorContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: hp(2),
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#0056b3",
  },
  icon: {
    width: 20,
    height: 20,
    resizeMode: "contain",
    marginHorizontal: wp(2),
  },
});

export default Separator;
