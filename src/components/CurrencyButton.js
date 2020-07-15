import React from "react";
import { Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { CurrencyButtonStyles as styles } from "../styles/Styles";

export default function CurrencyButton({
  from,
  to,
  setFrom,
  setTo,
  backgroundColor,
}) {
  function handleSelect() {
    setFrom(from);
    setTo(to);
  }
  const fromFlag = from === "VND" ? "🇻🇳" : "🇺🇸";
  const toFlag = to === "VND" ? "🇻🇳" : "🇺🇸";
  return (
    <TouchableOpacity
      onPress={handleSelect}
      style={[styles.container, { backgroundColor }]}
    >
      <Text
        style={[
          styles.innerText,
          { color: backgroundColor === "red" ? "white" : "black" },
        ]}
      >
        {fromFlag} to {toFlag}
      </Text>
    </TouchableOpacity>
  );
}
