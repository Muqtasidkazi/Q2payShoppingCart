import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { AntDesign } from "@expo/vector-icons";
export default function ProductHeader({ pgname, navigation }) {
  const header = pgname === "Products" ? "Products" : "ProductDetails";
  const leftIcon = pgname === "Products" ? "bars" : "arrowleft";

  const handleGoBack = () => {
    if (header === "ProductDetails") {
      console.log("back");
      return navigation.goBack();
    } else {
      return null;
    }
  };
  const handleProductSearch = (e)=>{
    console.log(e.target.value)
  }
  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <AntDesign
          name={leftIcon}
          size={26}
          color="#3498db"
          onPress={() => handleGoBack()}
        />
        <Text style={{ fontSize: 18 }}>{header}</Text>
        <AntDesign name="shoppingcart" size={26} color="#3498db" />
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "auto",
    alignItems: "center",
    backgroundColor:'white'
  },
  head: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 25,
    alignItems: "center",
  },
 
});
