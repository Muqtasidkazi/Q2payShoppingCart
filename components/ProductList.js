import React,{useState,useEffect} from "react";
import {
  Button,
  FlatList,
  StyleSheet,
  TextInput,
  View,
  Text,
} from "react-native";
import ProductCard from "./ProductCard";

import { Feather } from "@expo/vector-icons";
export default function ProductList({ productsData, navigation }) {
  const renderProductCard = ({ item }) => (
    <ProductCard product={item} navigation={navigation} />
  );
  const [searchText, setSearchText] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    filterProducts();
  }, [searchText, productsData]);

  const handleProductSearch = (text) => {
    setSearchText(text);
  };

  const filterProducts = () => {
    const newFilteredProducts = productsData.filter((product) =>
      product.title && product.title.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredProducts(newFilteredProducts);
  };
  return (
    <>
      <View style={styles.inputContainer}>
        <Feather name="search" size={20} color="#3498db" style={{ right: 8 }} />
        <TextInput
          style={styles.input}
          placeholder="Search Your Products"
          onChangeText={(e) => {
            handleProductSearch(e);
          }}
          value={searchText}
        />
        {/* <Button title="click" onPress={() => checkvlaue()} /> */}
      </View>
      <FlatList
        data={filteredProducts}
        renderItem={renderProductCard}
        keyExtractor={(item) => item.id.toString()}
        // contentContainerStyle={{alignItems:'center',width:'100%'}}
        showsVerticalScrollIndicator={false}
      />
      {/* <FlatList
        data={filteredProducts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>{item.title}</Text>
            <Text>${item.price}</Text>
          </View>
        )}
      /> */}
    </>
  );
}
const styles = StyleSheet.create({
  input: {
    paddingHorizontal: 10,
    width: "80%",
    // borderWidth:1,
    height: 45,
    borderLeftWidth: 1,
    // alignSelf: 'center',
    borderColor: "grey",
  },
  inputContainer: {
    borderColor: "#9B9B9B",
    borderWidth: 1,
    borderRadius: 6,
    marginTop: 15,
    marginBottom: 15,
    width: "80%",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    alignSelf: "center",
  },
});
