import React from "react";
import { View, StyleSheet } from "react-native";
/////////////////////////////////////////////////////////////
import AppColors from "../../Config/AppColors";
/////////////////////////////////////////////////////////////
function AppComponentHorizontalSeparator(props) {
  return <View style={styles.container}></View>;
}
/////////////////////////////////////////////////////////////
const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderWidth: 0.2,
    borderColor: AppColors.primaryBlack,
  },
});

export default AppComponentHorizontalSeparator;
