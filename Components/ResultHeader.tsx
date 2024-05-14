import React from "react";
import { I18nManager, StyleSheet, Text, View } from "react-native";
import { useTranslator } from "../utils/localization/TranslatorContext";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

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
      <View style={{ marginBottom: hp(1) }}>
        <Text style={styles.bold}>{i18n.t("nameOfInstitution")}: </Text>
        <Text style={[styles.values]}>{data.institutionName}</Text>
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
    fontSize: hp(2.5),
    textAlign: "center",
    fontFamily: "Montserrat-Bold",
    // fontWeight: "bold",
    marginBottom: hp(1),
    color: "#000000",
  },
  rankStyle: {
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "black",
    padding: wp(1),
    marginBottom: hp(1),
  },
  rankText: {
    fontSize: hp(2),
    fontFamily: "Montserrat-Bold",
    textAlign: "center",
    color: "#000000",
  },
  row: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: hp(1),
  },
  rtlRow: {
    flexDirection: "row-reverse", // Reverse the row direction for RTL languages
  },
  bold: {
    fontFamily: "Montserrat-Bold",
    fontSize: hp(2),
  },
  values: {
    fontFamily: "Montserrat-Regular",
    fontSize: hp(2),
  },
  rollNoRegistrationNo: {
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 5,
    marginBottom: hp(1),
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
    paddingVertical: hp(1),
    paddingHorizontal: wp(2),
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
