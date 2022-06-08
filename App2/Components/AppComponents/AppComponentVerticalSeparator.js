import React from "react";
import { View, StyleSheet } from "react-native";
/////////////////////////////////////////////////////////
import AppColors from "../../Config/AppColors";
/////////////////////////////////////////////////////////
function AppComponentVerticalSeparator({ style }) {
  return <View style={styles.container}></View>;
}
/////////////////////////////////////////////////////////
const styles = StyleSheet.create({
  container: {
    height: "100%",
    borderWidth: 0.2,
    borderColor: AppColors.primaryBlack,
  },
});

export default AppComponentVerticalSeparator;
