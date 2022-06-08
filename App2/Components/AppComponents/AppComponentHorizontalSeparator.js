import React from "react";
import { View, StyleSheet } from "react-native";
/////////////////////////////////////////////////////////////
import AppColors from "../../Config/AppColors";
/////////////////////////////////////////////////////////////
function AppComponentHorizontalSeparator({ style }) {
  return <View style={[styles.container, style]}></View>;
}
/////////////////////////////////////////////////////////////
const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderColor: AppColors.fourthBlack,
    borderWidth: 0.17,
  },
});

export default AppComponentHorizontalSeparator;
