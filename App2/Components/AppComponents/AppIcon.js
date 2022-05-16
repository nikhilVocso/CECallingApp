import React from "react";
import { View, StyleSheet, Image, Dimensions } from "react-native";

const { width, height } = Dimensions.get("screen");

function AppIcon({
  icon = require("../../Assets/google.png"),
  style,
  size = 16,
}) {
  return (
    <>
      <Image
        source={icon}
        style={[
          styles.icon,
          style,
          { width: (width * size) / 100, height: (width * size) / 100 },
        ]}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {},

  icon: {
    width: width * 0.15,
    height: width * 0.15,
  },
});
export default AppIcon;
