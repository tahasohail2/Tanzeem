import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useTranslator } from "../utils/localization/TranslatorContext";

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
      <View style={[styles.row, isRTL && styles.rowReverse]}>
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
    borderColor: "#000",
    borderRadius: 5,
  },
  row: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#000",
  },
  rowReverse: {
    flexDirection: "row-reverse",
  },
  header: {
    backgroundColor: "#99D1AA",
  },
  headerText: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 5,
    textAlign: "center",
    fontWeight: "bold",
  },
  cell: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 5,
    textAlign: "center",
  },
  subjects: {
    flex: 2, // Adjust the flex value to increase the width
  },
});
export default ReactTable;
