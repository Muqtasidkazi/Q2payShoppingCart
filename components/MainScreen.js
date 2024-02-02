import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ActivityIndicator,
} from "react-native";
import React, { useState, useEffect } from "react";
import ProductHeader from "./ProductHeader";
import ProductList from "./ProductList";
export default function MainScreen({ navigation }) {
  const [productsData, setProductsData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    fetch("https://dummyjson.com/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((jsonData) => {
        setProductsData(jsonData.products);
        // console.log("Fetched data:", productsData);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  let pgname = "Products";
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent={false} />
      <ProductHeader pgname={pgname} navigation={navigation} />
      {loading ? (
        <ActivityIndicator size="large" color="#3498db" style={{alignSelf:'center'}} />
      ) : (
        <ProductList productsData={productsData} navigation={navigation} />
      )}
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    backgroundColor: "white",
    width: "100%",
    // justifyContent:'center',
  },
});
