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
    Category_Name: "1- New H.Office",
    Picture_Caption: "Front view of new office",
    Picture: require("../../assets/adminbg.jpg"),
  },
  {
    SNo: "2",
    Category_Name: "1- New H.Office",
    Picture_Caption: "Front view of new office",
    Picture: require("../../assets/adminbg.jpg"),
  },
  {
    SNo: "3",
    Category_Name: "1- New H.Office",
    Picture_Caption: "Front view of new office",
    Picture: require("../../assets/adminbg.jpg"),
  },
  {
    SNo: "4",
    Category_Name: "1- New H.Office",
    Picture_Caption: "Front view of new office",
    Picture: require("../../assets/adminbg.jpg"),
  },
  {
    SNo: "5",
    Category_Name: "1- New H.Office",
    Picture_Caption: "Front view of new office",
    Picture: require("../../assets/adminbg.jpg"),
  },
  {
    SNo: "6",
    Category_Name: "1- New H.Office",
    Picture_Caption: "Front view of new office",
    Picture: require("../../assets/adminbg.jpg"),
  },
];

const COLUMN_WIDTH = wp(25);

const GalleryPhotosTable = () => {
  const { i18n } = useTranslator();
  const isRTL = i18n.locale === "ur";
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <View>
          <View style={[styles.header, isRTL && styles.rowReverse]}>
            {[
              i18n.t("serialNo"),
              i18n.t("categoryName"),
              i18n.t("pictureCaption"),
              i18n.t("picture"),
              i18n.t("actions"),
            ].map((header) => (
              <Text key={header} style={styles.headerText}>
                {header}
              </Text>
            ))}
          </View>
          <FlatList
            data={data}
            keyExtractor={(item) => item.SNo}
            renderItem={({ item }) => (
              <View style={[styles.row, isRTL && styles.rowReverse]}>
                <Text style={styles.cell}>{item.SNo}</Text>
                <Text style={styles.cell}>{item.Category_Name}</Text>
                <Text style={styles.cell}>{item.Picture_Caption}</Text>
                <Image source={item.Picture} style={styles.image} />
                <View style={styles.actionCell}>
                  <TouchableOpacity style={styles.editButton}>
                    <Ionicons name="pencil" size={18} color="#ffffff" />
                  </TouchableOpacity>
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
});

export default GalleryPhotosTable;
