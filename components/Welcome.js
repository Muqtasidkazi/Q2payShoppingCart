import { View, Text, StyleSheet, Button, TouchableOpacity, Pressable, Image } from "react-native";
import React from "react";

export default function Welcome({navigation}) {
  return (
    <View style={styles.wlc_container}>
      <Text style={styles.heading}>Welcome to</Text>
      {/* <Image source={require('../assets/xpentra.png')} width={10}  height={50} /> */}
      <Pressable style={styles.btn} onPress={()=>navigation.navigate('main')}>
        <Text  style={styles.text}>
          Let's Proceed
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  wlc_container: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  heading: {
    fontSize: 26,
  },
  btn: {
    borderRadius:26,
    backgroundColor:'#3456A5',
    borderColor:'white',
    borderWidth:2,
    padding:14,
    marginTop:30,
    width:'80%'
  },
  text:{
    textAlign:'center',
    fontSize:16,
    color:'white'
  }
});
