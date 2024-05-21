import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  DrawerToggleButton,
  createDrawerNavigator,
} from "@react-navigation/drawer";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Ionicons } from "@expo/vector-icons";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Home from "../Screens/Home";
import ResultPage from "../Screens/ResultPage";
import ResultForm from "../Screens/ResultForm";
import { useTranslator } from "../utils/localization/TranslatorContext";
import CustomDrawerContent from "./CustomDrawerContent";
import { StyleSheet, Text } from "react-native";
import { Dimensions } from "react-native";
const width = Dimensions.get("screen").width;
const isTablet = width >= 768;

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

// function CustomDrawerLabel({ label }: { label: string }) {
//   return <Text style={styles.drawerLabel}>{label}</Text>;
// }

function CustomHeaderTitle({ title }: { title: string }) {
  return <Text style={styles.headerTitle}>{title}</Text>;
}
const CustomDrawerLabel = ({ label, focused }) => {
  return (
    <Text style={focused ? styles.drawerActiveLabel : styles.drawerLabel}>
      {label}
    </Text>
  );
};

const ResultStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="ResultForm"
        component={ResultForm}
      />
      <Stack.Screen
        options={{
          headerShown: true,
          headerTitleStyle: { display: "none" },
        }}
        name="ResultPage"
        component={ResultPage}
      />
    </Stack.Navigator>
  );
};

const DrawerNavigator = () => {
  const { i18n, changeLocale } = useTranslator();
  const isRTL = i18n.locale === "ur";
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.locale);
  const handleLanguageChange = (language: any) => {
    setSelectedLanguage(language);
    changeLocale(language);
  };
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={(props) => (
        <CustomDrawerContent
          {...props}
          selectedLanguage={selectedLanguage}
          handleLanguageChange={handleLanguageChange}
        />
      )}
      screenOptions={{
        headerRight: () => (isRTL ? <DrawerToggleButton /> : null),
        headerLeft: () => (!isRTL ? <DrawerToggleButton /> : null),
        drawerPosition: isRTL ? "right" : "left",
        headerTitleAlign: "center",
        drawerStyle: {
          width: isTablet ? width - width / 2 : width - width / 3,
        },
        drawerLabelStyle: styles.drawerLabel,
        drawerActiveTintColor: "#207EB5",
      }}
    >
      <Drawer.Screen
        name="Home"
        options={{
          drawerLabel: ({ focused }) => (
            <CustomDrawerLabel
              label={i18n.t("TanzeemUlMadaris")}
              focused={focused}
            />
          ),

          headerTitle: () => (
            <CustomHeaderTitle title={i18n.t("TanzeemUlMadaris")} />
          ),
          drawerIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
        component={Home}
      />
      <Drawer.Screen
        name="Nazam ul Madaras"
        options={{
          drawerLabel: ({ focused }) => (
            <CustomDrawerLabel
              label={i18n.t("nazamUlMadaris")}
              focused={focused}
            />
          ),

          headerTitle: () => (
            <CustomHeaderTitle title={i18n.t("nazamUlMadaris")} />
          ),
          drawerIcon: ({ color, size }) => (
            <Ionicons name="planet" size={size} color={color} />
          ),
        }}
        component={ResultStack}
      />
      <Drawer.Screen
        name="Provincial offices"
        options={{
          drawerLabel: ({ focused }) => (
            <CustomDrawerLabel
              label={i18n.t("provincialOffices")}
              focused={focused}
            />
          ),

          headerTitle: () => (
            <CustomHeaderTitle title={i18n.t("provincialOffices")} />
          ),
          drawerIcon: ({ color, size }) => (
            <Ionicons name="business" size={size} color={color} />
          ),
        }}
        component={ResultStack}
      />
      <Drawer.Screen
        name="Results"
        options={{
          drawerLabel: ({ focused }) => (
            <CustomDrawerLabel label={i18n.t("results")} focused={focused} />
          ),

          headerTitle: () => <CustomHeaderTitle title={i18n.t("results")} />,
          drawerIcon: ({ color, size }) => (
            <Ionicons name="stats-chart" size={size} color={color} />
          ),
        }}
        component={ResultStack}
      />
      <Drawer.Screen
        name="Downloads"
        options={{
          drawerLabel: ({ focused }) => (
            <CustomDrawerLabel label={i18n.t("downloads")} focused={focused} />
          ),

          headerTitle: () => <CustomHeaderTitle title={i18n.t("downloads")} />,
          drawerIcon: ({ color, size }) => (
            <Ionicons name="download" size={size} color={color} />
          ),
        }}
        component={ResultStack}
      />

      <Drawer.Screen
        name="Background"
        options={{
          drawerLabel: ({ focused }) => (
            <CustomDrawerLabel label={i18n.t("background")} focused={focused} />
          ),

          headerTitle: () => <CustomHeaderTitle title={i18n.t("background")} />,
          drawerIcon: ({ color, size }) => (
            <Ionicons name="earth" size={size} color={color} />
          ),
        }}
        component={ResultStack}
      />

      <Drawer.Screen
        name="Aims"
        options={{
          drawerLabel: ({ focused }) => (
            <CustomDrawerLabel
              label={i18n.t("AimsAndObjectives")}
              focused={focused}
            />
          ),

          headerTitle: () => (
            <CustomHeaderTitle title={i18n.t("AimsAndObjectives")} />
          ),
          drawerIcon: ({ color, size }) => (
            <Ionicons name="bulb" size={size} color={color} />
          ),
        }}
        component={ResultStack}
      />
      <Drawer.Screen
        name="Contact"
        options={{
          drawerLabel: ({ focused }) => (
            <CustomDrawerLabel label={i18n.t("contact")} focused={focused} />
          ),

          headerTitle: () => <CustomHeaderTitle title={i18n.t("contact")} />,
          drawerIcon: ({ color, size }) => (
            <Ionicons name="call" size={size} color={color} />
          ),
        }}
        component={ResultStack}
      />
    </Drawer.Navigator>
  );
};

const Navigation = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default Navigation;
const styles = StyleSheet.create({
  drawerLabel: {
    fontFamily: "Montserrat-Regular",
    fontSize: hp(2),
    color: "#000000",
  },
  drawerActiveLabel: {
    fontFamily: "Montserrat-Bold",
    fontSize: hp(2),
    color: "#207EB5",
  },
  headerTitle: {
    fontFamily: "Montserrat-Bold",
    fontSize: hp(2.5),
  },
});
