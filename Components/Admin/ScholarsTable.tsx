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
    name: "Ali Khan",
    father_name: "Ahmed Khan",
    dob: "1990-05-15",
    cnic: "42101-1234567-1",
    phone_no: "021-34567890",
    mobile_no: "0300-1234567",
    past_experience: "3 years as a teacher",
    requried_duties: "Teaching, supervision",
    permanent_address: "House No. 123, Street 45, Gulshan, Karachi",
    current_address: "Flat No. 10, Block A, Clifton, Karachi",
    district: "Karachi",
    date_of_enrollment: "2022-08-01",
  },
  {
    SNo: "2",
    name: "Sara Ahmed",
    father_name: "Imran Ahmed",
    dob: "1985-10-20",
    cnic: "42201-2345678-2",
    phone_no: "021-98765432",
    mobile_no: "0301-2345678",
    past_experience: "5 years as an accountant",
    requried_duties: "Accounting, financial reporting",
    permanent_address: "House No. 67, Street 12, PECHS, Karachi",
    current_address: "Apartment 14, Gulistan-e-Johar, Karachi",
    district: "Karachi",
    date_of_enrollment: "2023-01-15",
  },
  {
    SNo: "3",
    name: "Usman Ali",
    father_name: "Zafar Ali",
    dob: "1992-12-30",
    cnic: "42301-3456789-3",
    phone_no: "042-76543210",
    mobile_no: "0302-3456789",
    past_experience: "2 years as a data analyst",
    requried_duties: "Data analysis, reporting",
    permanent_address: "House No. 89, Street 7, DHA, Lahore",
    current_address: "Flat 20, Block B, Gulberg, Lahore",
    district: "Lahore",
    date_of_enrollment: "2023-04-10",
  },
  {
    SNo: "4",
    name: "Ayesha Siddiqui",
    father_name: "Kamran Siddiqui",
    dob: "1995-07-07",
    cnic: "42401-4567890-4",
    phone_no: "051-12345678",
    mobile_no: "0303-4567890",
    past_experience: "4 years as a project manager",
    requried_duties: "Project management, team leadership",
    permanent_address: "House No. 34, Sector F, Islamabad",
    current_address: "Flat 25, F-10, Islamabad",
    district: "Islamabad",
    date_of_enrollment: "2022-11-05",
  },
  {
    SNo: "5",
    name: "Bilal Raza",
    father_name: "Rizwan Raza",
    dob: "1988-03-25",
    cnic: "42501-5678901-5",
    phone_no: "061-23456789",
    mobile_no: "0304-5678901",
    past_experience: "6 years as a software developer",
    requried_duties: "Software development, code review",
    permanent_address: "House No. 12, Multan Road, Multan",
    current_address: "Flat 30, Gulgasht Colony, Multan",
    district: "Multan",
    date_of_enrollment: "2023-03-20",
  },
  {
    SNo: "6",
    name: "Farah Noor",
    father_name: "Nadeem Noor",
    dob: "1993-08-12",
    cnic: "42601-6789012-6",
    phone_no: "091-34567890",
    mobile_no: "0305-6789012",
    past_experience: "2 years as a graphic designer",
    requried_duties: "Graphic design, branding",
    permanent_address: "House No. 56, University Road, Peshawar",
    current_address: "Flat 40, Hayatabad, Peshawar",
    district: "Peshawar",
    date_of_enrollment: "2023-05-25",
  },
];

const COLUMN_WIDTH = wp(25);
const MESSAGE_DESCRIPTION = wp(50);
const EMAIL_ADDRESS_WIDTH = wp(45);
const ScholarsTable = () => {
  const { i18n } = useTranslator();
  const isRTL = i18n.locale === "ur";
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <View>
          <View style={[styles.header, isRTL && styles.rowReverse]}>
            <Text style={styles.headerText}>{i18n.t("name")}</Text>
            <Text style={styles.headerText}>{i18n.t("fatherName")}</Text>
            <Text style={styles.headerText}>{i18n.t("dateOfBirth")}</Text>
            <Text style={styles.headerText}>{i18n.t("cnic")}</Text>
            <Text style={styles.headerText}>{i18n.t("phoneNo")}</Text>
            <Text style={styles.headerText}>{i18n.t("mobileNo")}</Text>
            <Text style={styles.headerText}>{i18n.t("pastExperience")}</Text>
            <Text style={styles.headerText}>{i18n.t("requiredDuties")}</Text>
            <Text style={styles.headerText}>{i18n.t("permanentAddress")}</Text>
            <Text style={styles.headerText}>{i18n.t("currentAddress")}</Text>
            <Text style={styles.headerText}>{i18n.t("district")}</Text>
            <Text style={styles.headerText}>{i18n.t("dateOfEnrollment")}</Text>
          </View>
          <FlatList
            data={data}
            keyExtractor={(item) => item.SNo}
            renderItem={({ item }) => (
              <View style={[styles.row, isRTL && styles.rowReverse]}>
                <Text style={styles.cell}>{item.name}</Text>
                <Text style={styles.cell}>{item.father_name}</Text>
                <Text style={styles.cell}>{item.dob}</Text>
                <Text style={styles.cell}>{item.cnic}</Text>
                <Text style={styles.cell}>{item.phone_no}</Text>
                <Text style={styles.cell}>{item.mobile_no}</Text>
                <Text style={styles.cell}>{item.past_experience}</Text>
                <Text style={styles.cell}>{item.requried_duties}</Text>
                <Text style={styles.cell}>{item.permanent_address}</Text>
                <Text style={styles.cell}>{item.current_address}</Text>
                <Text style={styles.cell}>{item.district}</Text>
                <Text style={styles.cell}>{item.date_of_enrollment}</Text>
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

export default ScholarsTable;
