import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  ScrollView,
  Button,
  TouchableOpacity,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
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
          <Text style={styles.noteText}>{i18n.t("note")}: </Text>
          <Text style={styles.noteText}>{i18n.t("noteDesc")}</Text>
        </View>
        <View
          style={[
            styles.websitePrintResultContainer,
            isRTL && styles.rowReverse,
          ]}
        >
          <Text style={styles.printText}>{i18n.t("websitePrintResult")}: </Text>
          <Text style={styles.printText}>25/04/2024 17:44:52 PM</Text>
        </View>
        <View
          style={[
            styles.controllerExams,
            isRTL && styles.controllerExamsReverse,
          ]}
        >
          <Text style={styles.controllerText}>{i18n.t("controllerExams")}</Text>
        </View>

        {/* <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>{i18n.t("downloadResult")}</Text>
        </TouchableOpacity> */}
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
    padding: hp(1.5),
  },
  image: {
    width: "100%",
  },
  noteContainer: {
    flexDirection: "row",
    marginTop: hp(2),
    flexWrap: "wrap",
    marginHorizontal: wp(2),
  },
  rowReverse: {
    flexDirection: "row-reverse",
  },
  noteText: {
    fontFamily: "Montserrat-BoldItalic",
    fontSize: hp(2),
  },
  websitePrintResultContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: wp(1),
    marginTop: hp(1),
    marginHorizontal: wp(2),
    marginBottom: hp(2),
  },
  printText: {
    fontFamily: "Montserrat-BoldItalic",
    fontSize: hp(1.5),
  },
  button: {
    backgroundColor: "#99D1AA",
    padding: wp(1.5),
    borderRadius: 5,
    marginBottom: hp(5),
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: hp(2),
    fontFamily: "Montserrat-Bold",
    textAlign: "center",
  },
  controllerExams: {
    flexDirection: "column",
    alignItems: "flex-end",
    marginBottom: hp(3),
  },
  controllerExamsReverse: {
    alignItems: "flex-start",
  },
  controllerText: {
    fontSize: hp(2),
    fontFamily: "Montserrat-Bold",
  },
});

export default Results;
