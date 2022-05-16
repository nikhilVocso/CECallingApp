import React from "react";
import { View, StyleSheet, Image, Dimensions } from "react-native";
//////////////////////////////////////////////////////////////////////////////
import AppText from "../../Components/AppComponents/AppText";
import AppColors from "../../Config/AppColors";
import AppScreen from "../../Components/AppComponents/AppScreen";
import AppFabButton from "../../Components/AppComponents/AppFABButton";
import AppTouchableOpacity from "../../Components/AppComponents/AppTouchableOpacity";
//////////////////////////////////////////////////////////////////////////////
const { width } = Dimensions.get("screen");
//////////////////////////////////////////////////////////////////////////////

function CallDialingScreen({
  callerImage = require("../../Assets/photo.jpeg"),
  callerName = "nikhil menan",
  callType = "video call",
  callerVideo = require("../../Assets/photo.jpeg"),
  navigation,
}) {
  const onCallEndButtonPressed = () => {
    console.log("on call end button pressed");
    navigation.navigate("HomeScreen");
  };

  return (
    <>
      <AppScreen style={styles.screen}>
        <Image
          source={callerVideo}
          style={styles.backGroundImage}
          resizeMode="cover"
        />
        <View style={styles.callContainer}>
          <View style={styles.detailsContainer}>
            <Image source={callerImage} style={styles.callerImage} />
            <AppText style={styles.text}>{callType}</AppText>
            <AppText style={styles.text}>{callerName}</AppText>
          </View>
          <AppTouchableOpacity onPress={onCallEndButtonPressed}>
            <AppFabButton
              name="call-end"
              color="white"
              style={styles.callButton}
              size={32}
            />
          </AppTouchableOpacity>
        </View>
      </AppScreen>
    </>
  );
}

//////////////////////////////////////////////////////////////////////////////
const styles = StyleSheet.create({
  backGroundImage: {
    width: "100%",
    height: "100%",
  },

  callButton: {
    backgroundColor: AppColors.primaryRed,
  },

  callContainer: {
    backgroundColor: AppColors.ternaryBlack,
    position: "absolute",
    width: "100%",
    height: "100%",
    bottom: 0,
    justifyContent: "space-around",
    alignItems: "center",
  },

  callerImage: {
    width: width * 0.5,
    height: width * 0.5,
    borderRadius: 100,
    borderWidth: 10,
    borderColor: AppColors.ternaryRed,
    marginBottom: 15,
  },

  detailsContainer: {
    justifyContent: "center",
    alignItems: "center",
  },

  screen: {
    backgroundColor: AppColors.ternaryBlack,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    color: AppColors.primaryWhite,
    fontSize: 18,
    fontFamily: "Bold",
    textTransform: "capitalize",
  },
});
export default CallDialingScreen;
