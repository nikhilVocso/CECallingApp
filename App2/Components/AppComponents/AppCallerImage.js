import React from "react";
import { View, StyleSheet, Image, Dimensions } from "react-native";
////////////////////////////////////////////////////////////////////////////////
import AppColors from "../../Config/AppColors";
////////////////////////////////////////////////////////////////////////////////
const { width } = Dimensions.get("screen");
////////////////////////////////////////////////////////////////////////////////
function AppCallerImage({ image = require("../../Assets/photo.jpeg"), style }) {
  return (
    <>
      <Image source={image} style={[styles.image, style]} />
    </>
  );
}
////////////////////////////////////////////////////////////////////////////////
const styles = StyleSheet.create({
  container: {},

  image: {
    width: width * 0.45,
    height: width * 0.45,
    borderRadius: 100,
    borderWidth: 0.1,
    borderColor: AppColors.primaryBlack,
  },
});
////////////////////////////////////////////////////////////////////////////////
export default AppCallerImage;
