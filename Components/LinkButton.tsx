import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const LinkButton: React.FC<LinkButtonProps> = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: hp(2),
    marginVertical: hp(1),
    backgroundColor: "rgba(255, 255, 255, 1.0)",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ddd",
    alignItems: "center",
  },
  text: {
    color: "#000000",
    fontFamily: "Montserrat-Bold",
    fontSize: hp(2),
  },
});

export default LinkButton;
