import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Result from "../Screens/Result";
import Home from "../Screens/Home";
import { useTranslator } from "../utils/localization/TranslatorContext";

const Stack = createStackNavigator();

const Navigation = () => {
  const { i18n } = useTranslator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Home"
          component={Home}
        />
        <Stack.Screen
          options={{
            title: i18n.t("result"),
            headerTitleStyle: { display: "none" },
          }}
          name="Result"
          component={Result}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
