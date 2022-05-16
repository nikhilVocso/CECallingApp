import React from "react";
import { View, StyleSheet } from "react-native";
////////////////////////////////////////////////////////////////
import AppText from "../AppComponents/AppText";
import AppFABButton from "../AppComponents/AppFABButton";
import AppColors from "../../Config/AppColors";
////////////////////////////////////////////////////////////////
function CallHistoryDetails({}) {
  return (
    <>
      <View style={styles.container}>
        <View style={[styles.callDetails]}>
          <AppText style={[styles.ternaryText]}>Total Minute</AppText>
          <AppText style={[styles.secondaryText]}>12000</AppText>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <AppFABButton name="arrow-drop-up" style={[styles.button]} />
            <AppFABButton name="add" size={12} style={[styles.button]} />
            <AppText style={[styles.ternaryText]}>150</AppText>
          </View>
        </View>
      </View>
    </>
  );
}
////////////////////////////////////////////////////////////////
const styles = StyleSheet.create({
  button: {
    color: AppColors.primaryGreen,
    backgroundColor: "transparent",
    padding: 0,
  },

  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 10,
  },

  ////////////// Text ///////////////////
  primaryText: {
    fontSize: 22,
    fontFamily: "Bold",
    color: AppColors.primaryBlack,
    textTransform: "capitalize",
    // textAlign: "center",
  },

  secondaryText: {
    fontSize: 18,
    fontFamily: "SemiBold",
    color: AppColors.primaryBlack,
    textTransform: "capitalize",
  },

  secondaryDetailsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 10,
  },

  ternaryText: {
    fontSize: 12,
    fontFamily: "Medium",
    color: AppColors.primaryBlack,
    textTransform: "capitalize",
  },
});
export default CallHistoryDetails;
