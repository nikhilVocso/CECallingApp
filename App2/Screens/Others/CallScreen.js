import React from "react";
import { View, StyleSheet, Image, Dimensions } from "react-native";
////////////////////////////////////////////////////////////////////////////////////////
import AppScreen from "../../Components/AppComponents/AppScreen";
import AppText from "../../Components/AppComponents/AppText";
import AppFABButton from "../../Components/AppComponents/AppFABButton";
import AppTouchableOpacity from "../../Components/AppComponents/AppTouchableOpacity";
import AppColors from "../../Config/AppColors";
import ChatScreen from "../Others/ChatScreen";
////////////////////////////////////////////////////////////////////////////////////////

const { width, height } = Dimensions.get("screen");

function CallScreen({
  minutes = "5:00",
  callCount = 45115,
  receiverImage = require("../../Assets/photo.jpeg"),
  senderImage = require("../../Assets/photo.jpeg"),
}) {
  return (
    <>
      <AppScreen style={{ backgroundColor: AppColors.fifthBlack }}>
        <Image
          source={receiverImage}
          style={[styles.receiverImage]}
          resizeMode="cover"
        />
        <Image
          source={senderImage}
          style={[styles.senderImage]}
          resizeMode="cover"
        />
        <View style={styles.headerContainer}>
          <AppTouchableOpacity onPress={() => console.log("Back")}>
            <AppFABButton name="chevron-left" style={styles.backIcon} />
          </AppTouchableOpacity>
          <AppText style={styles.headerText}>{minutes} remaining</AppText>
          <AppText style={styles.headerText}>#{callCount}</AppText>
        </View>
        <ChatScreen
          style={styles.chatBox}
          modalStyle={styles.chatBoxModalStyle}
        />
      </AppScreen>
    </>
  );
}

const styles = StyleSheet.create({
  chatBox: {
    position: "absolute",
    width: "100%",
    bottom: 0,
  },

  chatBoxModalStyle: {
    flex: 1,
    justifyContent: "flex-end",
  },

  backIcon: {
    padding: 2,
    margin: 15,
    backgroundColor: AppColors.secondaryBlack,
    opacity: 0.5,
    color: AppColors.primaryWhite,
  },

  headerContainer: {
    width: "100%",
    position: "absolute",
    top: 60,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },

  headerText: {
    backgroundColor: AppColors.secondaryBlack,
    borderRadius: 100,
    color: AppColors.primaryWhite,
    fontFamily: "Bold",
    fontSize: 12,
    paddingVertical: 5,
    paddingHorizontal: 8,
    opacity: 0.5,
  },

  receiverImage: {
    height: "100%",
    width: "100%",
  },

  senderImage: {
    borderColor: AppColors.primaryBlack,
    borderRadius: 10,
    borderWidth: 0.5,
    bottom: 135,
    height: height * 0.16,
    position: "absolute",
    right: 25,
    width: width * 0.3,
  },
});
export default CallScreen;
