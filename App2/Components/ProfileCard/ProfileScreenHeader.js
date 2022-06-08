import React, { useState } from "react";
import { StyleSheet, View, Image } from "react-native";
///////////////////////////////////////////////////////////////////////
import AppColors from "../../Config/AppColors";
import AppFABButton from "../AppComponents/AppFABButton";
import AppText from "../AppComponents/AppText";
import AppTouchableHighlight from "../AppComponents/AppTouchableHighlight";
import AppTouchableOpacity from "../AppComponents/AppTouchableOpacity";
import ProfilePictureFAB from "../Others/ProfilePictureFAB";
///////////////////////////////////////////////////////////////////////

function ProfileScreenHeader({
  onMoreIconPress = () => console.log("on More Icon Press"),
  onBackButtonPress = () => console.log("on Back Button Press"),
}) {
  return (
    <>
      {/* sub: Header  */}
      <View style={styles.headerContainer}>
        <AppTouchableHighlight onPress={onBackButtonPress}>
          <AppFABButton
            name="arrow-back"
            style={{ backgroundColor: "transparent" }}
          />
        </AppTouchableHighlight>

        <AppTouchableHighlight onPress={onMoreIconPress}>
          <AppFABButton
            name="more-vert"
            style={{ backgroundColor: "transparent" }}
          />
        </AppTouchableHighlight>
      </View>
    </>
  );
}
////////////////////////////////////////////////////////////////////////////////////

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: AppColors.primaryWhite,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  modalContainerStyle: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    padding: 14,
    borderTopRightRadius: 18,
    borderTopLeftRadius: 18,
  },

  modalIconStyle: {
    width: 32,
    height: 32,
  },

  optionContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 14,
  },

  optionText: {
    fontSize: 18,
    fontFamily: "SemiBold",
    paddingHorizontal: 12,
  },
});
export default ProfileScreenHeader;
