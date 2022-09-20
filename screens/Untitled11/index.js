import { TextInput } from "react-native";
import { Text } from "react-native";
import { ImageBackground } from "react-native";
import React from "react";
import { View, StyleSheet } from "react-native";

const Untitled11 = () => {
  return <View style={_styles.EWfHHCWy}>
      <ImageBackground style={_styles.UbwxxLFJ} source={{
      uri: "data:image/jpeg;base64,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"
    }} resizeMode="cover"></ImageBackground><Text style={_styles.WvRrPqOc}>The user name and password does not match our records. Please try again</Text><Text style={_styles.dakSwxWw}>User Name</Text><Text style={_styles.dDfDZgva}>Password</Text><TextInput style={_styles.CCHYaYnS}></TextInput><TextInput style={_styles.TtdeYJWF}></TextInput><View style={_styles.SwiuIotp}></View><Text style={_styles.kmgtEnlY}>Log In</Text></View>;
};

export default Untitled11;

const _styles = StyleSheet.create({
  EWfHHCWy: {
    backgroundColor: "#f0f0f1",
    padding: 10,
    position: "relative",
    height: "100%"
  },
  UbwxxLFJ: {
    left: 10,
    top: 17,
    position: "absolute",
    width: 336,
    height: 84
  },
  WvRrPqOc: {
    left: 21,
    top: 125,
    position: "absolute",
    width: 302,
    height: 56,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0,
    color: "#f10e0e"
  },
  dakSwxWw: {
    left: 75,
    top: 203,
    position: "absolute",
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0,
    fontWeight: 700
  },
  dDfDZgva: {
    left: 76,
    top: 289,
    position: "absolute",
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0,
    fontWeight: 700
  },
  CCHYaYnS: {
    left: 77,
    top: 223,
    position: "absolute",
    backgroundColor: "#ffffff",
    borderColor: "#cccccc",
    width: 150,
    height: 30
  },
  TtdeYJWF: {
    left: 79,
    top: 317,
    position: "absolute",
    backgroundColor: "#ffffff",
    borderColor: "#cccccc",
    width: 150,
    height: 30
  },
  SwiuIotp: {
    left: 72,
    top: 373,
    position: "absolute",
    height: 44,
    width: 140,
    backgroundColor: "#1ca7d2",
    borderRadius: 6,
    color: "#777777",
    borderColor: "#1523c6"
  },
  kmgtEnlY: {
    left: 103,
    top: 386,
    position: "absolute",
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 21,
    borderRadius: 0,
    color: "#ebe5e5",
    fontWeight: 700
  }
});