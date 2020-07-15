import { StyleSheet } from "react-native";
import { SCREEN_WIDTH } from "../constants/Constants";

export const AppStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  textInputContainer: {
    height: 70,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "red",
    borderWidth: 1,
    borderRadius: 2,
    margin: 20,
  },
  textInput: {
    width: SCREEN_WIDTH - 100,
    fontSize: 30,
    textAlign: "center",
  },
  currencyLabel: {
    fontSize: 20,
    marginTop: 10,
  },
});

export const CurrencyButtonStyles = StyleSheet.create({
  container: {
    marginTop: 10,
    alignItems: "center",
    padding: 10,
    width: SCREEN_WIDTH - 100,
    borderColor: "red",
    borderWidth: 1,
    borderRadius: 20,
  },
  innerText: { fontSize: 17 },
});
