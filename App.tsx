import React, { useCallback, useEffect, useState } from "react";
import Navigation from "./Navigators/Navigator";
import { TranslatorProvider } from "./utils/localization/TranslatorContext";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    "Montserrat-Black": require("./assets/fonts/Montserrat-Black.ttf"),
    "Montserrat-BlackItalic": require("./assets/fonts/Montserrat-BlackItalic.ttf"),
    "Montserrat-Bold": require("./assets/fonts/Montserrat-Bold.ttf"),
    "Montserrat-BoldItalic": require("./assets/fonts/Montserrat-BoldItalic.ttf"),
    "Montserrat-Italic": require("./assets/fonts/Montserrat-Italic.ttf"),
    "Montserrat-Light": require("./assets/fonts/Montserrat-Light.ttf"),
    "Montserrat-LightItalic": require("./assets/fonts/Montserrat-LightItalic.ttf"),
    "Montserrat-Regular": require("./assets/fonts/Montserrat-Regular.ttf"),
  });

  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();
        if (fontsLoaded || fontError) {
          await SplashScreen.hideAsync();
          setIsReady(true);
        }
      } catch (error) {
        console.error("Error while preparing app:", error);
      }
    }

    prepare();
  }, [fontsLoaded, fontError]);

  if (!isReady) {
    return null; // You may want to render a splash screen here while the app is loading
  }

  return (
    <TranslatorProvider>
      <Navigation />
    </TranslatorProvider>
  );
}
