import { StripeProvider } from "@stripe/stripe-react-native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Payment from "./components/Payment";

export default function App() {
  return (
    <View style={styles.container}>
      <StripeProvider publishableKey="pk_test_51LL18HSDZMLAH51NSW5hNpKXUFDKZpRZ9QZvkLYuHQOhZat6QIBdqSAzMLkZad4HBnXNFIY0MOrr5AItkA9d7GpC0020oTO0fi">
        <Payment />
      </StripeProvider>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
