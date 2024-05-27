import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const CarouselItem: React.FC<CarouselItemProps> = ({ item }) => {
  return (
    <View style={styles.itemContainer}>
      <Image source={item.image} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    overflow: "hidden",
    margin: wp(2),
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 8,
  },
});

export default CarouselItem;
