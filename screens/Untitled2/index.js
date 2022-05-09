import { Pressable } from "react-native";
import { TextInput } from "react-native";
import React from "react";
import { View } from "react-native";

const Untitled2 = () => {
  return <View style={{
    backgroundColor: '#f0f0f1',
    padding: 10,
    position: 'relative',
    height: '100%'
  }}>
      <Pressable onPress={{}} style={{
      position: "initial",
      width: "195px",
      height: "350px",
      marginLeft: "-10px",
      marginTop: "-10px"
    }}><View style={{
        left: 31,
        top: 45,
        position: "absolute",
        height: 60,
        width: 140,
        backgroundColor: "#E4E4E4",
        borderRadius: 0,
        color: "#777777"
      }}></View></Pressable><Pressable onPress={{}} style={{
      position: "initial",
      width: "195px",
      height: "350px",
      marginLeft: "-10px",
      marginTop: "-10px"
    }}><TextInput style={{
        left: 36,
        top: 146,
        position: "absolute",
        backgroundColor: "#ffffff",
        borderColor: "#cccccc",
        width: 150,
        height: 30
      }}></TextInput></Pressable></View>;
};

export default Untitled2;