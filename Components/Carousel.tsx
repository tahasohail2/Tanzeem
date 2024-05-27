import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Carousel from "react-native-reanimated-carousel";

const { width } = Dimensions.get("window");

const CarouselComponent = <T,>({
  data,
  renderItem,
}: CarouselComponentProps<T>) => {
  return (
    <View style={styles.container}>
      <Carousel
        loop
        width={width}
        height={hp(30)}
        autoPlay={true}
        data={data}
        scrollAnimationDuration={1000}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
});

export default CarouselComponent;
