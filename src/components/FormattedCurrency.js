import React from "react";
import { Text } from "react-native";

export default function FormattedCurrency({ currency, value }) {
  const flag = currency === "VND" ? "🇻🇳" : "🇺🇸";
  const type = currency === "VND" ? "vn" : "us";
  const formatter = new Intl.NumberFormat(type, {
    currency: currency,
    style: "currency",
  });
  return (
    <Text>
      {formatter.format(value)} {flag} {currency}
    </Text>
  );
}
