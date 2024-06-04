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
    Published: "Yes",
    News_Hot: "Yes",
    Date: "2022-05-15",
    Current: "No",
    NewsDetail:
      "The new community center opening has brought joy to the residents. The state-of-the-art facility offers various amenities and programs for all age groups.",
    Picture: require("../../assets/adminbg.jpg"),
    News_Order: "3",
  },
  {
    SNo: "2",
    Published: "No",
    News_Hot: "No",
    Date: "2022-03-12",
    Current: "Yes",
    NewsDetail:
      "In an unprecedented move, the city council has approved the construction of a new park. This green space aims to enhance urban life and provide a recreational area for families.",
    Picture: require("../../assets/adminbg.jpg"),
    News_Order: "2",
  },
  {
    SNo: "3",
    Published: "Yes",
    News_Hot: "Yes",
    Date: "2022-07-19",
    Current: "No",
    NewsDetail:
      "A breakthrough in renewable energy technology was announced today. Researchers have developed a new method to harness solar power more efficiently, promising a cleaner future.",
    Picture: require("../../assets/adminbg.jpg"),
    News_Order: "1",
  },
  {
    SNo: "4",
    Published: "No",
    News_Hot: "No",
    Date: "2022-08-22",
    Current: "Yes",
    NewsDetail:
      "The local high school football team clinched the championship title in a thrilling match. The team's hard work and dedication throughout the season paid off.",
    Picture: require("../../assets/adminbg.jpg"),
    News_Order: "4",
  },
  {
    SNo: "5",
    Published: "Yes",
    News_Hot: "Yes",
    Date: "2022-11-30",
    Current: "No",
    NewsDetail:
      "A major art exhibition opened at the city museum today. Featuring works from renowned artists, the exhibition is expected to draw large crowds.",
    Picture: require("../../assets/adminbg.jpg"),
    News_Order: "5",
  },
  {
    SNo: "6",
    Published: "No",
    News_Hot: "No",
    Date: "2022-12-25",
    Current: "Yes",
    NewsDetail:
      "The annual holiday parade was a grand success, with floats, marching bands, and a visit from Santa Claus. Families gathered to enjoy the festive atmosphere.",
    Picture: require("../../assets/adminbg.jpg"),
    News_Order: "6",
  },
];

const COLUMN_WIDTH = wp(25);
const NEWS_DETAIL_WIDTH = wp(50);
const NewsTable = () => {
  const { i18n } = useTranslator();
  const isRTL = i18n.locale === "ur";
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <View>
          <View style={[styles.header, isRTL && styles.rowReverse]}>
            <Text style={styles.headerText}>{i18n.t("serialNo")}</Text>
            <Text style={styles.headerText}>{i18n.t("date")}</Text>
            <Text style={[styles.headerText, styles.newsDetailCell]}>
              {i18n.t("newsHeadingDetail")}
            </Text>
            <Text style={styles.headerText}>{i18n.t("published")}</Text>
            <Text style={styles.headerText}>{i18n.t("current")}</Text>
            <Text style={styles.headerText}>{i18n.t("newsHot")}</Text>
            <Text style={styles.headerText}>{i18n.t("picture")}</Text>
            <Text style={styles.headerText}>{i18n.t("newsOrder")}</Text>
            <Text style={styles.headerText}>{i18n.t("actions")}</Text>
          </View>
          <FlatList
            data={data}
            keyExtractor={(item) => item.SNo}
            renderItem={({ item }) => (
              <View style={[styles.row, isRTL && styles.rowReverse]}>
                <Text style={styles.cell}>{item.SNo}</Text>
                <Text style={styles.cell}>{item.Date}</Text>
                <Text style={[styles.cell, styles.newsDetailCell]}>
                  {item.NewsDetail}
                </Text>
                <Text style={styles.cell}>{item.Published}</Text>
                <Text style={styles.cell}>{item.Current}</Text>
                <Text style={styles.cell}>{item.News_Hot}</Text>
                <Image source={item.Picture} style={styles.image} />
                <Text style={styles.cell}>{item.News_Order}</Text>
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
  newsDetailCell: {
    width: NEWS_DETAIL_WIDTH,
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

export default NewsTable;
