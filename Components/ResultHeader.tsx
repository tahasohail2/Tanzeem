import React from "react";
import { I18nManager, StyleSheet, Text, View } from "react-native";
import { useTranslator } from "../utils/localization/TranslatorContext";

const ResultHeader = ({ data }) => {
  const { i18n } = useTranslator();
  const isRTL = i18n.locale === "ur";
  return (
    <View>
      <Text style={styles.annualText}>{i18n.t("AnnualExamination2024")}</Text>
      <View style={styles.rankStyle}>
        <Text style={styles.rankText}>
          {i18n.t("rankAlShahadatulTanwiyyahGeneralYear1")}
        </Text>
      </View>
      <View style={[styles.row, isRTL && styles.rtlRow]}>
        <Text style={styles.bold}>{i18n.t("studentName")}: </Text>
        <Text style={styles.values}> {data.studentInfo.studentName} </Text>
      </View>
      <View style={[styles.row, isRTL && styles.rtlRow]}>
        <Text style={styles.bold}>{i18n.t("fatherName")}: </Text>
        <Text style={styles.values}> {data.studentInfo.fatherName} </Text>
      </View>
      <View style={[styles.row, isRTL && styles.rtlRow]}>
        <Text style={styles.bold}>{i18n.t("dateOfBirth")}: </Text>
        <Text style={styles.values}> {data.studentInfo.dob} </Text>
      </View>
      <View style={[styles.row, isRTL && styles.rtlRow]}>
        <Text style={styles.bold}>{i18n.t("gender")}: </Text>
        <Text style={styles.values}> {data.studentInfo.gender} </Text>
      </View>
      <View>
        <Text style={styles.bold}>{i18n.t("nameOfInstitution")}: </Text>
        <Text style={[styles.values, { marginBottom: 10, marginTop: 5 }]}>
          {data.institutionName}
        </Text>
      </View>
      <View style={styles.rollNoRegistrationNo}>
        <View style={[styles.rollNoRow, isRTL && styles.rtlRow]}>
          <View
            style={[styles.cell, isRTL ? styles.borderReverse : styles.border]}
          >
            <Text style={styles.bold}>{i18n.t("rollNo")}:</Text>
          </View>
          <View style={styles.cell}>
            <Text style={styles.values}>{data.studentInfo.rollNo}</Text>
          </View>
        </View>
        <View style={[styles.regNoRow, isRTL && styles.rtlRow]}>
          <View
            style={[styles.cell, isRTL ? styles.borderReverse : styles.border]}
          >
            <Text style={styles.bold}>{i18n.t("registrationNo")}:</Text>
          </View>
          <View style={styles.cell}>
            <Text style={styles.values}>{data.studentInfo.registrationNo}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  annualText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
    color: "#000000",
  },
  rankStyle: {
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "black",
    padding: 5,
    marginBottom: 10,
  },
  rankText: {
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
    color: "#000000",
  },
  row: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: 10,
  },
  rtlRow: {
    flexDirection: "row-reverse", // Reverse the row direction for RTL languages
  },
  bold: {
    fontWeight: "bold",
    fontSize: 16,
  },
  values: {
    fontSize: 16,
  },
  rollNoRegistrationNo: {
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 5,
    marginBottom: 10,
  },
  rollNoRow: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#000",
  },
  regNoRow: {
    flexDirection: "row",
    borderBottomColor: "#000",
  },
  cell: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  border: {
    borderRightWidth: 1,
    borderRightColor: "#000",
  },
  borderReverse: {
    borderLeftWidth: 1,
    borderLeftColor: "#000",
  },
});
export default ResultHeader;
