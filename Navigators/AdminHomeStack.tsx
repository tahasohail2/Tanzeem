import React from "react";
import { useTranslator } from "../utils/localization/TranslatorContext";
import { createStackNavigator } from "@react-navigation/stack";
import AdminHome from "../Screens/Admin/AdminHome";
import AdminLoginAccounts from "../Screens/Admin/AdminLoginAccounts";
import AffiliatedSchools from "../Screens/Admin/AffiliatedSchools";
import MadrasasMessages from "../Screens/Admin/MadrasasMessages";
import OfficialEmail from "../Screens/Admin/OfficialEmail";
import ScholarsLoginAccounts from "../Screens/Admin/ScholarsLoginAccounts";
import ScholarsRecords from "../Screens/Admin/ScholarsRecords";
import UploadOrChangeNews from "../Screens/Admin/UploadOrChangeNews";
import UploadOrChangePhotos from "../Screens/Admin/UploadOrChangePhotos";

const Stack = createStackNavigator();

const AdminHomeStack: React.FC = () => {
  const { i18n } = useTranslator();
  return (
    <Stack.Navigator initialRouteName="AdminHome">
      <Stack.Screen
        name="AdminHome"
        component={AdminHome}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AdminLoginAccounts"
        component={AdminLoginAccounts}
        options={{
          title: i18n.t("accounts"),
          headerTransparent: true,
          headerTintColor: "#fff",
          headerTitleStyle: {
            color: "#ffffff",
            fontFamily: "Montserrat-Bold",
          },
        }}
      />
      <Stack.Screen
        name="AffiliatedSchools"
        component={AffiliatedSchools}
        options={{
          title: i18n.t("affiliatedSchools"),
          headerTransparent: true,
          headerTintColor: "#fff",
          headerTitleStyle: {
            color: "#ffffff",
            fontFamily: "Montserrat-Bold",
          },
        }}
      />
      <Stack.Screen
        name="MadrasasMessages"
        component={MadrasasMessages}
        options={{
          title: i18n.t("madrasasMessages"),
          headerTransparent: true,
          headerTintColor: "#fff",
          headerTitleStyle: {
            color: "#ffffff",
            fontFamily: "Montserrat-Bold",
          },
        }}
      />
      <Stack.Screen
        name="OfficialEmail"
        component={OfficialEmail}
        options={{
          title: i18n.t("emails"),
          headerTransparent: true,
          headerTintColor: "#fff",
          headerTitleStyle: {
            color: "#ffffff",
            fontFamily: "Montserrat-Bold",
          },
        }}
      />
      <Stack.Screen
        name="ScholarsLoginAccounts"
        component={ScholarsLoginAccounts}
        options={{
          title: i18n.t("scholarLoginAccounts"),
          headerTransparent: true,
          headerTintColor: "#fff",
          headerTitleStyle: {
            color: "#ffffff",
            fontFamily: "Montserrat-Bold",
          },
        }}
      />
      <Stack.Screen
        name="ScholarsRecords"
        component={ScholarsRecords}
        options={{
          title: i18n.t("ScholarsRecords"),
          headerTransparent: true,
          headerTintColor: "#fff",
          headerTitleStyle: {
            color: "#ffffff",
            fontFamily: "Montserrat-Bold",
          },
        }}
      />
      <Stack.Screen
        name="UploadOrChangeNews"
        component={UploadOrChangeNews}
        options={{
          title: i18n.t("UploadOrChangeNews"),
          headerTransparent: true,
          headerTintColor: "#fff",
          headerTitleStyle: {
            color: "#ffffff",
            fontFamily: "Montserrat-Bold",
          },
        }}
      />
      <Stack.Screen
        name="UploadOrChangePhotos"
        component={UploadOrChangePhotos}
        options={{
          title: i18n.t("UploadOrChangePhotos"),
          headerTransparent: true,
          headerTintColor: "#fff",
          headerTitleStyle: {
            color: "#ffffff",
            fontFamily: "Montserrat-Bold",
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default AdminHomeStack;
