import { View, Text, StyleSheet, ScrollView, Pressable,Image,TextInput } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import { FontAwesome5 } from "@expo/vector-icons";
import ProductHeader from "./ProductHeader";
import Swiper from "react-native-swiper";
export default function ProductDetails({ navigation }) {
  const route = useRoute();
  const { product, id } = route.params;
  let pgname = "ProductDetails";
  return (
    <View style={styles.container}>
      <ProductHeader pgname={pgname} navigation={navigation} />
      
      <ScrollView contentContainerStyle={styles.detailsContainer}>
        <Text style={[styles.title, { textAlign: "left" }]}>
          {product.title}
        </Text>
        <Swiper style={styles.wrapper}  autoplay>
          {product.images.map((images, index) => (
            <View key={index} style={styles.slide}>
              <Image src={images} style={styles.image} />
            </View>
          ))}
        </Swiper>
        <View style={styles.content1}>
          <View>
            {/* <Text style={styles.brand}>Price</Text> */}
            <Text style={styles.price}>${product.price} </Text>
          </View>
          <Text style={styles.stock}>{product.stock} in stock</Text>
        </View>
        <View style={styles.content2}>
          <Text style={styles.head}>Description</Text>
          <Text style={styles.detail}>{product.description}</Text>
        </View>
        <View style={styles.content2}>
          <Text style={styles.head}>Discount</Text>
          <Text style={styles.detail}>{product.discountPercentage}% ▼</Text>
        </View>
      </ScrollView>
      <View style={styles.btns_container}>
        <Pressable style={styles.icon}>
          <FontAwesome5 name="cart-plus" size={24} color="#3498db" />
        </Pressable>
        <Pressable style={[styles.buttons, { borderColor: "#3498db" }]}>
          <Text style={{ fontSize: 18 }}>Add to cart</Text>
        </Pressable>
        <Pressable
          style={[
            styles.buttons,
            { backgroundColor: "#3498db", borderWidth: 0 },
          ]}
        >
          <Text style={{ fontSize: 18, fontWeight: "bold", color: "white" }}>
            Buy now
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // height: "100%",
    backgroundColor: "white",
  },
  detailsContainer: {
    marginTop: 20,
    width: "90%",
    alignSelf: "center",
    flex: 1,
    height:'100%'
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 8,
    textAlign: "center",
  },
  brand: {
    fontSize: 18,
    color: "#607D8B",
    fontWeight: "bold",
  },
  price: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#3498db",
  },
  discount: {
    fontSize: 16,
    color: "#2ECC71",
    fontWeight: "bold",
  },
  stock: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#9B9B9B",
  },
  content1: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 3,
  },
  btns_container: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
    height: "10%",
    alignItems: "center",
  },
  buttons: {
    borderWidth: 1,
    width: "38%",
    alignItems: "center",
    height: "60%",
    justifyContent: "center",
    borderRadius: 4,
  },
  icon: {
    borderColor: "#3498db",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 3,
    width: "15%",
    borderWidth: 1,
    height: "60%",
  },
  content2: {
    // borderWidth: 1,
    marginTop: 12,
  },
  head: {
    fontSize: 16,
    color: "#9B9B9B",
    // fontWeight:'bold'
  },
  detail: {
    fontSize: 16,
    marginTop: 5,
  },
  wrapper: {
    // borderWidth:1
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    // height: '100%',
    objectFit: 'contain',
    aspectRatio:3/2
  },
  
});
