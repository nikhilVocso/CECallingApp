import React from "react";
import { StyleSheet, SafeAreaView, Platform, StatusBar } from "react-native";
import AppColors from "../../Config/AppColors";

function AppScreen({ children, style }) {
  return (
    <>
      <SafeAreaView style={[styles.container, style]}>{children}</SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.blackLight,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : null,
  },
});

export default AppScreen;
