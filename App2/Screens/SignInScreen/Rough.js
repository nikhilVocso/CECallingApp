import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
// sub: App Component
import AppScreen from "../../Components/AppComponents/AppScreen";
import AppColors from "../../Config/AppColors";
import AppTouchableHighlight from "../../Components/AppComponents/AppTouchableHighlight";
import AppTouchableOpacity from "../../Components/AppComponents/AppTouchableOpacity";
import AppText from "../../Components/AppComponents/AppText";
// import { Account } from "../../Assets/account.svg";
// sub: Extra
const { width, height } = Dimensions.get("screen");

function Rough({}) {
  return (
    <>
      <AppScreen style={[styles.screen]}>
        <View style={[styles.container]}>{/* <Account /> */}</View>
      </AppScreen>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "green",
    flex: 1,
    width: "100%",
  },

  screen: {
    backgroundColor: "red",
    flex: 1,
    width: width,
  },
});
export default Rough;
