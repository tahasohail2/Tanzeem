import React from "react";
import { View, StyleSheet } from "react-native";
import CarouselComponent from "../Components/Carousel";
import CarouselItem from "../Components/CarouselItem";

const data: CarouselData[] = [
  {
    image: require("../assets/carousel1.jpg"),
  },
  {
    image: require("../assets/carousel2.jpg"),
  },
  {
    image: require("../assets/carousel3.jpg"),
  },
  {
    image: require("../assets/carousel4.jpg"),
  },
  {
    image: require("../assets/carousel5.jpg"),
  },
];

const HomeScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <CarouselComponent
        data={data}
        renderItem={({ item }) => <CarouselItem item={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default HomeScreen;
