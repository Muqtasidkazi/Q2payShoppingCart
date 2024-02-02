import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Welcome from "./components/Welcome";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductCard from "./components/ProductCard";
import ProductList from "./components/ProductList";
import MainScreen from "./components/MainScreen";
import ProductDetails from "./components/ProductDetails";
import ProductHeader from "./components/ProductHeader";
export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator
        initialRouteName="main"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="welcome" component={Welcome} />
        <Stack.Screen name="main" component={MainScreen} />
        <Stack.Screen name="productdetails" component={ProductDetails} />
        <Stack.Screen name="proheader" component={ProductHeader} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
