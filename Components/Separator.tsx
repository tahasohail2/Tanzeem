import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
const Separator = ({ color }) => {
  return (
    <View style={styles.separatorContainer}>
      <View style={[styles.line, { backgroundColor: color }]} />
      <Ionicons name="settings" size={20} color={color} />
      <View style={[styles.line, { backgroundColor: color }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  separatorContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: hp(2),
  },
  line: {
    flex: 1,
    height: 1,
  },
  icon: {
    width: 20,
    height: 20,
    resizeMode: "contain",
    marginHorizontal: wp(2),
  },
});

export default Separator;
