import React, { useState } from "react";
import { Text, SafeAreaView, View, Keyboard } from "react-native";
import { AppStyles as styles } from "./src/styles/Styles";
import {
  TextInput,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import CurrencyButton from "./src/components/CurrencyButton";
import { SCREEN_WIDTH, SCREEN_HEIGHT } from "./src/constants/Constants";
import FormattedCurrency from "./src/components/FormattedCurrency";

const conversion = 23000;
export default function App() {
  const [currency, setCurrency] = useState("");
  const [from, setFrom] = useState("VND");
  const [to, setTo] = useState("USD");

  return (
    <SafeAreaView style={styles.container}>
      <TouchableWithoutFeedback
        style={{
          width: SCREEN_WIDTH,
          height: SCREEN_HEIGHT,
        }}
        onPress={Keyboard.dismiss}
      >
        <View style={styles.wrapper}>
          <Text>
            Please enter the value of the currency you want to convert
          </Text>
          <View style={styles.textInputContainer}>
            <TextInput
              placeholder="100,000,000 VND"
              placeholderTextColor="lightgrey"
              selectionColor="red"
              keyboardType="numeric"
              style={styles.textInput}
              value={currency}
              onChangeText={setCurrency}
            />
          </View>
          <CurrencyButton
            from="VND"
            to="USD"
            setFrom={setFrom}
            setTo={setTo}
            backgroundColor={from === "VND" ? "red" : "white"}
          />
          <CurrencyButton
            from="USD"
            to="VND"
            setFrom={setFrom}
            setTo={setTo}
            backgroundColor={from === "USD" ? "red" : "white"}
          />
          <Text style={styles.currencyLabel}>Current currency:</Text>
          <FormattedCurrency currency={from} value={currency} />
          <Text style={styles.currencyLabel}>Conversion currency:</Text>
          <FormattedCurrency
            currency={to}
            value={
              from === "VND" ? currency / conversion : currency * conversion
            }
          />
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}
