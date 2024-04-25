import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ReactTable = ({ data }) => {
  return (
    <View style={styles.table}>
      <View style={[styles.row, styles.header]}>
        <Text style={styles.headerText}>Number</Text>
        <Text style={styles.headerText}>Subjects</Text>
        <Text style={styles.headerText}>Total Marks</Text>
        <Text style={styles.headerText}>Obtained Marks</Text>
        <Text style={styles.headerText}>Status</Text>
      </View>
      {data.map((item, index) => (
        <View key={index} style={styles.row}>
          <Text style={styles.cell}>{item.number}</Text>
          <Text style={styles.cell}>{item.subject}</Text>
          <Text style={styles.cell}>{item.totalMarks}</Text>
          <Text style={styles.cell}>{item.obtainedMarks}</Text>
          <Text style={styles.cell}>{item.status}</Text>
        </View>
      ))}
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
});
export default ReactTable;
