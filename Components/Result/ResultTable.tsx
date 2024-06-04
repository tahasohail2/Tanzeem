import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { StyleSheet, Text, View } from "react-native";
import { useTranslator } from "../../utils/localization/TranslatorContext";

const ReactTable = ({ data }) => {
  const { i18n } = useTranslator();
  const isRTL = i18n.locale === "ur";

  return (
    <View style={styles.table}>
      <View style={[styles.row, styles.header, isRTL && styles.rowReverse]}>
        <Text style={styles.headerText}>{i18n.t("number")}</Text>
        <Text style={[styles.headerText, styles.subjects]}>
          {i18n.t("subjects")}
        </Text>
        <Text style={styles.headerText}>{i18n.t("totalMarks")}</Text>
        <Text style={styles.headerText}>{i18n.t("obtainedMarks")}</Text>
        <Text style={styles.headerText}>{i18n.t("status")}</Text>
      </View>
      {data.subjects.map((item, index) => (
        <View key={index} style={[styles.row, isRTL && styles.rowReverse]}>
          <Text style={styles.cell}>{index + 1}</Text>
          <Text style={[styles.cell, styles.subjects]}>{item.title}</Text>
          <Text style={styles.cell}>{item.totalMarks}</Text>
          <Text style={styles.cell}>{item.obtainedMarks}</Text>
          <Text style={styles.cell}>{item.resultStatus}</Text>
        </View>
      ))}
      <View style={[styles.row, isRTL && styles.rowReverse]}>
        <Text style={styles.cell}></Text>
        <Text style={[styles.headerText, styles.subjects]}>
          {i18n.t("totalMarks")}
        </Text>
        <Text style={styles.headerText}>{data.totalMarks}</Text>
        <Text style={styles.headerText}>{data.obtainedMarks}</Text>
        <Text style={styles.headerText}>{data.overallResult}</Text>
      </View>
      <View style={[styles.lastRow, isRTL && styles.rowReverse]}>
        <Text style={styles.cell}></Text>
        <Text style={[styles.headerText, styles.subjects]}>
          {i18n.t("result")}
        </Text>
        <Text style={styles.cell}></Text>
        <Text style={styles.cell}>--</Text>
        <Text style={styles.cell}></Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  table: {
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 5,
  },
  lastRow: {
    flexDirection: "row",
  },
  row: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#fff",
  },
  rowReverse: {
    flexDirection: "row-reverse",
  },
  header: {
    backgroundColor: "#0056b3",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  headerText: {
    flex: 1,
    paddingVertical: hp(1),
    paddingHorizontal: wp(1),
    textAlign: "center",
    fontFamily: "Montserrat-Bold",
    color: "#fff",
  },
  cell: {
    flex: 1,
    fontFamily: "Montserrat-Bold",
    paddingVertical: hp(1),
    paddingHorizontal: wp(1),
    textAlign: "center",
    color: "#fff",
  },
  subjects: {
    flex: 2, // Adjust the flex value to increase the width
  },
});
export default ReactTable;
