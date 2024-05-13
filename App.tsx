import React from "react";
import Navigation from "./Navigators/Navigator";
import { TranslatorProvider } from "./utils/localization/TranslatorContext";

export default function App() {
  return (
    <TranslatorProvider>
      <Navigation />
    </TranslatorProvider>
  );
}
