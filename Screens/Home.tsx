import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Form from "../Components/Form";

function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
          source={require("../assets/logo.png")}
          style={styles.image}
          resizeMode="contain"
        />
        <Form />
      </View>
    </View>
  );
}

export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#f0f0f0",
  },
  card: {
    width: "100%",
  },
  image: {
    width: "100%",
  },
});
