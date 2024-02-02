import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
export default function ProductCard({ product, navigation }) {
  function handleNavigation(product, id) {
    navigation.navigate("productdetails", { product });
  }
  return (
    <>
      <TouchableOpacity
        style={styles.card}
        onPress={() => handleNavigation(product)}
      >
        <Image
          source={{
            uri: product.thumbnail,
          }}
          style={styles.image}
        />
        <View style={styles.cardContent}>
          <Text style={styles.productTitle}> {product.title}</Text>
          <Text style={styles.description} numberOfLines={2}>
            {" "}
            {product.description}
          </Text>
          <Text style={styles.price}>${product.price}</Text>
        </View>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 10,
    margin: 10,
    paddingRight: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
    flexDirection: "row",
    justifyContent: "space-between",
    borderColor: "grey",
    alignItems: "center",
    // borderWidth:1
  },
  image: {
    width: "45%",
    height: 150,
    objectFit: "cover",
  },
  cardContent: {
    borderColor: "#bbbfbc",
    width: "50%",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  productTitle: {
    fontSize: 18,
    // fontWeight: "bold",
    marginBottom: 14,
  },
  price: {
    color: "#3498db",
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 14,
  },
  content_container: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderColor: "#607D8B",
    alignItems: "center",
  },
  description: {
    fontSize: 14,
    color: "grey",
  },
  
});
