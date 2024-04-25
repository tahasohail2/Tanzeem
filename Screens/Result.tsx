import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  ScrollView,
  Button,
} from "react-native";
import ResultTable from "../Components/ResultTable";
import ResultHeader from "../Components/ResultHeader";

const Results = () => {
  const data = [
    {
      number: 1,
      subject: "Subject 1",
      totalMarks: 100,
      obtainedMarks: 85,
      status: "Pass",
    },
    {
      number: 2,
      subject: "Subject 2",
      totalMarks: 100,
      obtainedMarks: 75,
      status: "Pass",
    },
    {
      number: 3,
      subject: "Subject 3",
      totalMarks: 100,
      obtainedMarks: 90,
      status: "Pass",
    },
    {
      number: 4,
      subject: "Subject 4",
      totalMarks: 100,
      obtainedMarks: 60,
      status: "Fail",
    },
    {
      number: 5,
      subject: "Subject 5",
      totalMarks: 100,
      obtainedMarks: 80,
      status: "Pass",
    },
    {
      number: 6,
      subject: "Subject 6",
      totalMarks: 100,
      obtainedMarks: 95,
      status: "Pass",
    },
    {
      number: "",
      subject: "Total",
      totalMarks: 600,
      obtainedMarks: 397,
      status: "66 %",
    },
    {
      number: "",
      subject: "Result",
      totalMarks: "--",
      obtainedMarks: "--",
      status: "--",
    },
  ];
  return (
    <ScrollView style={styles.container}>
      <Image
        source={require("../assets/header_rollnoslip.png")}
        style={styles.image}
        resizeMode="contain"
      />
      <ResultHeader />
      <ResultTable data={data} />
      <View style={styles.noteContainer}>
        <Text style={[styles.noteText, { fontWeight: "bold" }]}>Note: </Text>
        <Text style={styles.noteText}>
          This is the electronic version of the result card, in case of any
          inaccuracies/errors contact the examination department immediately.
        </Text>
      </View>
      <View style={styles.websitePrintResultContainer}>
        <Text style={[styles.printText, { fontWeight: "bold" }]}>
          Website print result:{" "}
        </Text>
        <Text style={[styles.printText, { fontWeight: "bold" }]}>
          25/04/2024 17:44:52 PM
        </Text>
      </View>
      <View style={styles.controllerExams}>
        <Text style={styles.controllerText}>Controller Exams</Text>
      </View>
      <View style={styles.button}>
        <Button title="Download Result" color="#99D1AA" onPress={() => {}} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#ffffff",
  },
  image: {
    width: "100%",
  },
  noteContainer: {
    marginTop: 20,
    flexDirection: "row",
  },
  noteText: {
    fontSize: 16,
  },
  websitePrintResultContainer: {
    gap: 5,
    marginTop: 10,
    marginBottom: 20,
    flexDirection: "row",
  },
  printText: {
    fontSize: 13,
  },
  button: {
    width: "100%",
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  controllerExams: {
    flexDirection: "column",
    alignItems: "flex-end",
    marginBottom: 20,
  },
  controllerText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Results;
