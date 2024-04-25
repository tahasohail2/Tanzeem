import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ResultHeader = () => {
  return (
    <View>
      <Text style={styles.annualText}>Annual Examination 2024</Text>
      <View style={styles.rankStyle}>
        <Text style={styles.rankText}>
          Rank: Al-Shahadat-ul-Tanwiyyah General Year 1 (Matriculation)
        </Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.bold}>Student name: </Text>
        <Text style={styles.values}> Muhammad Taha Sohail </Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.bold}>Fathers name: </Text>
        <Text style={styles.values}>Sohail Ahmed Mujahid </Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.bold}>Date of birth: </Text>
        <Text style={styles.values}>17-01-1999 </Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.bold}>Gender: </Text>
        <Text style={styles.values}>Male </Text>
      </View>
      <View>
        <Text style={styles.bold}>Name of institution: </Text>
        <Text style={[styles.values, { marginBottom: 10, marginTop: 5 }]}>
          Jamia Muhammadia Geelania Ejaz Uloom Jiwanwala Ponta Shujaabad
          District Multan (13052)
        </Text>
      </View>
      <View style={styles.rollNoRegistrationNo}>
        <View style={styles.rollNo}>
          <View style={[styles.cell, styles.borderRight]}>
            <Text style={styles.bold}>Roll No:</Text>
          </View>
          <View style={styles.cell}>
            <Text style={styles.values}>121212</Text>
          </View>
        </View>
        <View style={styles.regNo}>
          <View style={[styles.cell, styles.borderRight]}>
            <Text style={styles.bold}>Registration No:</Text>
          </View>
          <View style={styles.cell}>
            <Text style={styles.values}>232312</Text>
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
  rollNo: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#000",
  },
  regNo: {
    flexDirection: "row",
    borderBottomColor: "#000",
  },
  cell: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  borderRight: {
    borderRightWidth: 1,
    borderRightColor: "#000",
  },
});
export default ResultHeader;
