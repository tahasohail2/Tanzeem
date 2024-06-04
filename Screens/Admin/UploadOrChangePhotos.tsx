import React from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  Image,
  ScrollView,
} from "react-native";
import { useTranslator } from "../../utils/localization/TranslatorContext";
import { useHeaderHeight } from "@react-navigation/elements";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import UploadPhotos from "../../Components/Admin/UploadPhotos";
import GalleryPhotosTable from "../../Components/Admin/GalleryPhotosTable";

const UploadOrChangePhotos: React.FC = () => {
  const { i18n } = useTranslator();
  const headerHeight = useHeaderHeight();

  return (
    <SafeAreaView style={styles.backgroundContainer}>
      <Image
        source={require("../../assets/adminbg.jpg")}
        style={styles.backgroundImage}
        resizeMode="cover"
      />
      <View style={{ paddingTop: headerHeight, flex: 1 }}>
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          <View style={styles.form}>
            <View style={styles.formContainer}>
              <UploadPhotos />
            </View>
          </View>
          <View style={styles.form}>
            <View style={styles.formContainer}>
              <GalleryPhotosTable />
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    alignItems: "center",
    width: wp(100),
    height: hp(100),
  },
  backgroundImage: {
    flex: 1,
    width: wp(100),
    height: hp(100),
    position: "absolute",
  },
  scrollViewContent: {
    alignItems: "center",
    paddingBottom: hp(2),
  },
  form: {
    alignSelf: "center",
    marginTop: hp(2),
    backgroundColor: "rgba(255, 255, 255, 1.0)",
    borderRadius: 12,
    width: wp(90),
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 4,
      height: 10,
    },
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },
  formContainer: {
    paddingLeft: wp(2),
    paddingRight: wp(2),
    paddingVertical: hp(1),
  },
});

export default UploadOrChangePhotos;
