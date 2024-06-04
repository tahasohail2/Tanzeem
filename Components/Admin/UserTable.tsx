import React from "react";
import { Ionicons } from "@expo/vector-icons";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useTranslator } from "../../utils/localization/TranslatorContext";

const users = [
  { id: "1", username: "admin-website", password: "*****" },
  { id: "2", username: "@Tanzeem#SiteAdmin021", password: "*****" },
];

const UserTable = () => {
  const { i18n } = useTranslator();
  const isRTL = i18n.locale === "ur";
  const renderItem = ({ item, index }) => (
    <View
      style={[
        styles.row,
        index % 2 === 0 ? styles.evenRow : styles.oddRow,
        isRTL && styles.rowReverse,
      ]}
    >
      <Text style={styles.cell}>{index + 1}</Text>
      <Text style={styles.cell}>{item.username}</Text>
      <Text style={styles.cell}>{item.password}</Text>
      <View style={styles.actionCell}>
        <TouchableOpacity style={styles.editButton}>
          <Ionicons name="pencil" size={18} color="#ffffff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.deleteButton}>
          <Ionicons name="trash" size={18} color="#ffffff" />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={[styles.headerRow, isRTL && styles.rowReverse]}>
        <Text style={styles.headerCell}>{i18n.t("serialNo")}</Text>
        <Text style={styles.headerCell}>{i18n.t("UserName")}</Text>
        <Text style={styles.headerCell}>{i18n.t("Password")}</Text>
        <Text style={styles.headerCell}>{i18n.t("actions")}</Text>
      </View>
      <FlatList
        data={users}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: hp(2),
    backgroundColor: "#fff",
    borderRadius: 12,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  headerRow: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingBottom: hp(1.5),
    marginBottom: hp(1.5),
  },
  row: {
    flexDirection: "row",
    paddingVertical: hp(1),
    paddingHorizontal: wp(2),
    alignItems: "center",
  },
  evenRow: {
    backgroundColor: "#f9f9f9",
  },
  oddRow: {
    backgroundColor: "#fff",
  },
  headerCell: {
    flex: 1.5,
    color: "#333",
    textAlign: "center",
    fontFamily: "Montserrat-Bold",
    fontSize: hp(1.5),
  },
  cell: {
    flex: 1.5,
    color: "#333",
    textAlign: "center",
    fontFamily: "Montserrat-Regular",
    fontSize: hp(1.5),
  },
  actionCell: {
    flex: 1.5,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  editButton: {
    backgroundColor: "#007bff",
    paddingVertical: hp(0.5),
    paddingHorizontal: wp(1),
    borderRadius: 5,
  },
  deleteButton: {
    backgroundColor: "red",
    paddingVertical: hp(0.5),
    paddingHorizontal: wp(1),
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
  rowReverse: {
    flexDirection: "row-reverse",
  },
});

export default UserTable;
