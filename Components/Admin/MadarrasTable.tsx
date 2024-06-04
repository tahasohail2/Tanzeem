import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Ionicons } from "@expo/vector-icons";
import { useTranslator } from "../../utils/localization/TranslatorContext";

const data = [
  {
    SNo: "1",
    Accession_No: "08653",
    Date: "5/29/2024 7:41:20 PM",
    MessageDetail:
      "The new community center opening has brought joy to the residents. The state-of-the-art facility offers various amenities and programs for all age groups.",
    Email_Address: "mu624411@gmail.com",
  },
  {
    SNo: "2",
    Accession_No: "08653",
    Date: "5/29/2024 7:41:20 PM",
    MessageDetail:
      "The new community center opening has brought joy to the residents. The state-of-the-art facility offers various amenities and programs for all age groups.",
    Email_Address: "mu624411@gmail.com",
  },
  {
    SNo: "3",
    Accession_No: "08653",
    Date: "5/29/2024 7:41:20 PM",
    MessageDetail:
      "The new community center opening has brought joy to the residents. The state-of-the-art facility offers various amenities and programs for all age groups.",
    Email_Address: "mu624411@gmail.com",
  },
  {
    SNo: "4",
    Accession_No: "08653",
    Date: "5/29/2024 7:41:20 PM",
    MessageDetail:
      "The new community center opening has brought joy to the residents. The state-of-the-art facility offers various amenities and programs for all age groups.",
    Email_Address: "mu624411@gmail.com",
  },
  {
    SNo: "5",
    Accession_No: "08653",
    Date: "5/29/2024 7:41:20 PM",
    MessageDetail:
      "The new community center opening has brought joy to the residents. The state-of-the-art facility offers various amenities and programs for all age groups.",
    Email_Address: "mu624411@gmail.com",
  },
  {
    SNo: "6",
    Accession_No: "08653",
    Date: "5/29/2024 7:41:20 PM",
    MessageDetail:
      "The new community center opening has brought joy to the residents. The state-of-the-art facility offers various amenities and programs for all age groups.",
    Email_Address: "mu624411@gmail.com",
  },
];

const COLUMN_WIDTH = wp(25);
const MESSAGE_DESCRIPTION = wp(50);
const EMAIL_ADDRESS_WIDTH = wp(45);
const MadarrasTable = () => {
  const { i18n } = useTranslator();
  const isRTL = i18n.locale === "ur";
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <View>
          <View style={[styles.header, isRTL && styles.rowReverse]}>
            <Text style={styles.headerText}>{i18n.t("serialNo")}</Text>
            <Text style={styles.headerText}>{i18n.t("accessionNo")}</Text>
            <Text style={styles.headerText}>{i18n.t("date")}</Text>
            <Text style={[styles.headerText, styles.MessageDescription]}>
              {i18n.t("messageDescription")}
            </Text>
            <Text style={[styles.headerText, styles.emailAddressWidth]}>
              {i18n.t("emailAddresses")}
            </Text>
            <Text style={styles.headerText}>{i18n.t("actions")}</Text>
          </View>
          <FlatList
            data={data}
            keyExtractor={(item) => item.SNo}
            renderItem={({ item }) => (
              <View style={[styles.row, isRTL && styles.rowReverse]}>
                <Text style={styles.cell}>{item.SNo}</Text>
                <Text style={styles.cell}>{item.Accession_No}</Text>
                <Text style={styles.cell}>{item.Date}</Text>
                <Text style={[styles.cell, styles.MessageDescription]}>
                  {item.MessageDetail}
                </Text>
                <Text style={[styles.cell, styles.emailAddressWidth]}>
                  {item.Email_Address}
                </Text>
                <View style={styles.actionCell}>
                  <TouchableOpacity style={styles.deleteButton}>
                    <Ionicons name="trash" size={18} color="#ffffff" />
                  </TouchableOpacity>
                </View>
              </View>
            )}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: hp(2),
  },
  header: {
    flexDirection: "row",
    backgroundColor: "#0056b3",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  headerText: {
    width: COLUMN_WIDTH,
    color: "#fff",
    textAlign: "center",
    padding: hp(0.5),
    fontFamily: "Montserrat-Bold",
    fontSize: hp(1.5),
  },

  row: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  rowReverse: {
    flexDirection: "row-reverse",
  },
  cell: {
    width: COLUMN_WIDTH,
    color: "#333",
    textAlign: "center",
    padding: hp(1),
    fontFamily: "Montserrat-Regular",
    fontSize: hp(1.5),
  },
  MessageDescription: {
    width: MESSAGE_DESCRIPTION,
  },
  image: {
    objectFit: "contain",
    width: wp(30),
    height: hp(15),
  },
  actionCell: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
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
  emailAddressWidth: {
    width: EMAIL_ADDRESS_WIDTH,
  },
});

export default MadarrasTable;
