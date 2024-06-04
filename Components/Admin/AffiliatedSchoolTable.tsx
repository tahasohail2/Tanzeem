import React from "react";
import { View, Text, ScrollView, StyleSheet, FlatList } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useTranslator } from "../../utils/localization/TranslatorContext";

const data = [
  {
    MadrisaCode: "001",
    Madrasa_Darja: "A",
    Accession_no: "12345",
    Date_of_accession: "2022-01-01",
    Year_of_Establishment: "1990",
    Name_of_institution_and_address: "Institution 1, Address 1",
    Affiliation_status: "Affiliated",
    Honorable_Governor: "Governor 1",
    Phone_no: "1234567890",
    District: "District 1",
    More_info: "Info 1",
  },
  {
    MadrisaCode: "002",
    Madrasa_Darja: "A",
    Accession_no: "12345",
    Date_of_accession: "2022-01-01",
    Year_of_Establishment: "1990",
    Name_of_institution_and_address: "Institution 1, Address 1",
    Affiliation_status: "Affiliated",
    Honorable_Governor: "Governor 1",
    Phone_no: "1234567890",
    District: "District 1",
    More_info: "Info 1",
  },
  {
    MadrisaCode: "003",
    Madrasa_Darja: "A",
    Accession_no: "12345",
    Date_of_accession: "2022-01-01",
    Year_of_Establishment: "1990",
    Name_of_institution_and_address: "Institution 1, Address 1",
    Affiliation_status: "Affiliated",
    Honorable_Governor: "Governor 1",
    Phone_no: "1234567890",
    District: "District 1",
    More_info: "Info 1",
  },
  {
    MadrisaCode: "004",
    Madrasa_Darja: "A",
    Accession_no: "12345",
    Date_of_accession: "2022-01-01",
    Year_of_Establishment: "1990",
    Name_of_institution_and_address: "Institution 1, Address 1",
    Affiliation_status: "Affiliated",
    Honorable_Governor: "Governor 1",
    Phone_no: "1234567890",
    District: "District 1",
    More_info: "Info 1",
  },
  {
    MadrisaCode: "005",
    Madrasa_Darja: "A",
    Accession_no: "12345",
    Date_of_accession: "2022-01-01",
    Year_of_Establishment: "1990",
    Name_of_institution_and_address: "Institution 1, Address 1",
    Affiliation_status: "Affiliated",
    Honorable_Governor: "Governor 1",
    Phone_no: "1234567890",
    District: "District 1",
    More_info: "Info 1",
  },
  {
    MadrisaCode: "006",
    Madrasa_Darja: "A",
    Accession_no: "12345",
    Date_of_accession: "2022-01-01",
    Year_of_Establishment: "1990",
    Name_of_institution_and_address: "Institution 1, Address 1",
    Affiliation_status: "Affiliated",
    Honorable_Governor: "Governor 1",
    Phone_no: "1234567890",
    District: "District 1",
    More_info: "Info 1",
  },
];

const COLUMN_WIDTH = wp(25);

const AffiliatedSchoolTable = () => {
  const { i18n } = useTranslator();
  const isRTL = i18n.locale === "ur";
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <View>
          <View style={[styles.header, isRTL && styles.rowReverse]}>
            {[
              i18n.t("madrisaCode"),
              i18n.t("madrisaDarja"),
              i18n.t("accessionNo"),
              i18n.t("dateOfAccession"),
              i18n.t("yearOfEstablishment"),
              i18n.t("nameOfInstitutionAndAddress"),
              i18n.t("affiliationStatus"),
              i18n.t("honorableGovernor"),
              i18n.t("phoneNo"),
              i18n.t("district"),
              i18n.t("moreInfo"),
            ].map((header) => (
              <Text key={header} style={styles.headerText}>
                {header}
              </Text>
            ))}
          </View>
          <FlatList
            data={data}
            keyExtractor={(item) => item.MadrisaCode}
            renderItem={({ item }) => (
              <View style={[styles.row, isRTL && styles.rowReverse]}>
                <Text style={styles.cell}>{item.MadrisaCode}</Text>
                <Text style={styles.cell}>{item.Madrasa_Darja}</Text>
                <Text style={styles.cell}>{item.Accession_no}</Text>
                <Text style={styles.cell}>{item.Date_of_accession}</Text>
                <Text style={styles.cell}>{item.Year_of_Establishment}</Text>
                <Text style={styles.cell}>
                  {item.Name_of_institution_and_address}
                </Text>
                <Text style={styles.cell}>{item.Affiliation_status}</Text>
                <Text style={styles.cell}>{item.Honorable_Governor}</Text>
                <Text style={styles.cell}>{item.Phone_no}</Text>
                <Text style={styles.cell}>{item.District}</Text>
                <Text style={styles.cell}>{item.More_info}</Text>
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
});

export default AffiliatedSchoolTable;
