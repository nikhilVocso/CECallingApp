import React from "react";
import { Dimensions, Image, StyleSheet, View } from "react-native";
////////////////////////////////////////////////////////////
import AppText from "../AppComponents/AppText";
import AppTouchableHighlight from "./AppTouchableHighlight";
import AppTouchableOpacity from "./AppTouchableOpacity";
import AppColors from "../../Config/AppColors";
////////////////////////////////////////////////////////////
const { width } = Dimensions.get("screen");
////////////////////////////////////////////////////////////

function AppFABButtonSecond({
  icon = require("../../Assets/phone-call.png"),
  size = 0.14,
  backgroundColor = "red",
  onPress = () => console.log("On Press"),
  iconContainerStyle,
  iconStyle,
}) {
  return (
    <>
      <AppTouchableOpacity
        onPress={onPress}
        style={[
          styles.IconContainer,
          iconContainerStyle,
          {
            width: width * size,
            height: width * size,
            backgroundColor: backgroundColor,
          },
        ]}
      >
        <Image source={icon} style={[styles.icon, iconStyle]} />
      </AppTouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  IconContainer: {
    backgroundColor: "red",
    width: 48,
    height: 48,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
  },

  icon: {
    width: "45%",
    height: "45%",
  },
});
export default AppFABButtonSecond;
