import React from "react";
import { Modal, Text, View, TouchableOpacity } from "react-native";
import { useTranslator } from "../utils/localization/TranslatorContext";

const CustomAlert = ({ visible, message, onClose }) => {
  const { i18n } = useTranslator();
  return (
    <Modal visible={visible} transparent animationType="fade">
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
      >
        <View
          style={{
            backgroundColor: "white",
            padding: 20,
            borderRadius: 10,
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 18 }}>{message}</Text>
          <TouchableOpacity onPress={onClose} style={{ marginTop: 20 }}>
            <Text style={{ fontSize: 16, color: "blue" }}>{i18n.t("OK")}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default CustomAlert;
