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
import { useTranslator } from "../utils/localization/TranslatorContext";

const Results = ({ route }) => {
  const { responseData } = route.params;
  const { i18n } = useTranslator();
  const isRTL = i18n.locale === "ur";
  // async function execute() {
  //   const html = `<h1> Teste </h1>`;
  //   const { uri } = await Print.printToFileAsync({ html });
  //   Sharing.shareAsync(uri);
  // }
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
      subject: i18n.t("total"),
      totalMarks: 600,
      obtainedMarks: 397,
      status: "66 %",
    },
    {
      number: "",
      subject: i18n.t("result"),
      // totalMarks: "--",
      obtainedMarks: "--",
      // status: "--",
    },
  ];
  return (
    <View style={styles.backgroundContainer}>
      <Image
        source={require("../assets/Markaz1.jpg")}
        style={styles.backgroundImage}
        resizeMode="cover"
      />
      <ScrollView style={styles.container}>
        <Image
          source={require("../assets/header_rollnoslip.png")}
          style={styles.image}
          resizeMode="contain"
        />
        <ResultHeader data={responseData} />
        <ResultTable data={responseData} />
        <View style={[styles.noteContainer, isRTL && styles.rowReverse]}>
          <Text style={[styles.noteText, { fontWeight: "bold" }]}>
            {i18n.t("note")}:{" "}
          </Text>
          <Text style={styles.noteText}>{i18n.t("noteDesc")}</Text>
        </View>
        <View
          style={[
            styles.websitePrintResultContainer,
            isRTL && styles.rowReverse,
          ]}
        >
          <Text style={[styles.printText, { fontWeight: "bold" }]}>
            {i18n.t("websitePrintResult")}:{" "}
          </Text>
          <Text style={[styles.printText, { fontWeight: "bold" }]}>
            25/04/2024 17:44:52 PM
          </Text>
        </View>
        <View
          style={[
            styles.controllerExams,
            isRTL && styles.controllerExamsReverse,
          ]}
        >
          <Text style={styles.controllerText}>{i18n.t("controllerExams")}</Text>
        </View>
        <View style={styles.button}>
          <Button
            title={i18n.t("downloadResult")}
            color="#99D1AA"
            // onPress={() => ()}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  container: {
    flex: 1,
    padding: 10,
  },
  image: {
    width: "100%",
  },
  noteContainer: {
    marginTop: 20,
    flexDirection: "row",
  },
  rowReverse: {
    flexDirection: "row-reverse",
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
  controllerExamsReverse: {
    alignItems: "flex-start",
  },
  controllerText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Results;
