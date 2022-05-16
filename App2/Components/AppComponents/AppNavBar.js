import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  Switch,
  ToastAndroid,
} from "react-native";
import { TextInput } from "react-native-paper";
/////////////////////////////////////////////////////////////////////////
import AppText from "./AppText";
import AppFabButton from "./AppFABButton";
import AppButton from "./AppButton";
import AppTouchableOpacity from "./AppTouchableOpacity";
import AppTouchableHighlight from "./AppTouchableHighlight";
import AppScreen from "./AppScreen";
import AppColors from "../../Config/AppColors";
import AppLoading from "expo-app-loading";
/////////////////////////////////////////////////////////////////////////

function AppNavBar({
  onBackButtonPress = () => console.log("On back Button Press"),
  navbarTitleText = "navbar",
  navbarContainerStyle,
}) {
  return (
    <>
      <View style={[styles.navbarContainer, navbarContainerStyle]}>
        <AppTouchableHighlight
          onPress={onBackButtonPress}
          underlayColor={AppColors.secondaryWhite}
        >
          <AppFabButton name="west" style={styles.backButton} />
        </AppTouchableHighlight>
        <AppText
          style={[
            styles.primaryText,
            {
              fontSize: 18,
            },
          ]}
        >
          {navbarTitleText}
        </AppText>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  backButton: {
    backgroundColor: "transparent",
  },

  container: {},

  navbarContainer: {
    backgroundColor: AppColors.primaryWhite,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },

  primaryText: {
    color: "black",
    fontFamily: "SemiBold",
    fontSize: 16,
  },
});
export default AppNavBar;
