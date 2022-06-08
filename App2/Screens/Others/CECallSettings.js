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
import AppText from "../../Components/AppComponents/AppText";
import AppFabButton from "../../Components/AppComponents/AppFABButton";
import AppButton from "../../Components/AppComponents/AppButton";
import AppTouchableOpacity from "../../Components/AppComponents/AppTouchableOpacity";
import AppTouchableHighlight from "../../Components/AppComponents/AppTouchableHighlight";
import AppScreen from "../../Components/AppComponents/AppScreen";
import AppColors from "../../Config/AppColors";
// import AppLoading from "expo-app-loading";
import AppNavBar from "../../Components/AppComponents/AppNavBar";
/////////////////////////////////////////////////////////////////////////
const { width, height } = Dimensions.get("screen");
// const image = require("../assets/photo.jpeg");
/////////////////////////////////////////////////////////////////////////
function CECallSettings({
  callRateInfoText = "Set a per minute call rate for video/voice calls. Your effective price is subject to consultease fee.",
  headTitle = "Allow users to call you for live video/voice call consulting. Set your own rates and get real time payment fro each minute of consulting.",
  navbarTitleText = "live call settings",
  callRateInfoFooterText = "Minimum allowed rate is 15/minute consultese will charge 30% fee for eacg revenue generated",
  navigation,
}) {
  ///////////// sub: Video Calling Hooks //////////////
  const [isVideoEnabled, setIsVideoEnabled] = useState(false);
  const [videoRateInput, setVideoRateInput] = useState("");
  ///////////// sub: Audio Calling Hooks //////////////
  const [isAudioEnabled, setIsAudioEnabled] = useState(false);
  const [audioRateInput, setAudioRateInput] = useState("");

  ///////// Video /////////
  const onVideoRatePlusButton = () => {
    console.log("on video rate Add Button");

    const addValue = (Number(videoRateInput) + 5).toString();
    videoRateInput && setVideoRateInput(addValue);
  };

  const onVideoRateMinusButton = () => {
    console.log("on Video rate minus button");

    const addValue = (Number(videoRateInput) - 5).toString();
    videoRateInput && setVideoRateInput(addValue);
  };

  const onVideoRateChangeInput = (videoRateInput) => {
    setVideoRateInput(videoRateInput);
  };

  const VideoToggleSwitch = () => {
    console.log(isVideoEnabled);
    setIsVideoEnabled(() => !isVideoEnabled);

    if (Platform.OS === "android") {
      isVideoEnabled === false &&
        ToastAndroid.show(
          "Set Your Video Calling Rate",
          ToastAndroid.SHORT,
          ToastAndroid.TOP
        );
    } else {
      isVideoEnabled === false && AlertIOS.alert("Set Your Video Calling Rate");
    }
  };

  ///////// Video /////////

  ///////// Audio /////////
  const onAudioRateAddButton = () => {
    console.log("on audio rate Add Button");

    const addValue = (Number(audioRateInput) + 5).toString();
    audioRateInput && setAudioRateInput(addValue);
  };

  const onAudioRateMinusButton = () => {
    console.log("on audio rate minus button");

    const addValue = (Number(audioRateInput) - 5).toString();
    audioRateInput && setAudioRateInput(addValue);
  };

  const onAudioRateChangeInput = (audioRateInput) => {
    console.log(audioRateInput);
    setAudioRateInput(audioRateInput);
  };

  const AudioToggleSwitch = () => {
    setIsAudioEnabled(() => !isAudioEnabled);

    if (Platform.OS === "android") {
      isAudioEnabled === false &&
        ToastAndroid.show(
          "Set Your Audio Calling Rate",
          ToastAndroid.SHORT,
          ToastAndroid.TOP
        );
    } else {
      isAudioEnabled === false && AlertIOS.alert("Set Your Audio Calling Rate");
    }
  };
  ///////// Audio /////////

  const onBackButtonPress = () => {
    console.log("On Back Button Press nikhil");
    navigation.goBack();
  };

  const onUpdateRatesPress = () => {
    console.log("On Update Rate Press");
  };

  return (
    <>
      <AppScreen style={styles.screen}>
        {/* /////////// sub: navbar ////////// */}
        <AppNavBar
          onBackButtonPress={onBackButtonPress}
          navbarTitleText="LiveCall Settings"
        />
        {/* /////////// sub: navbar ////////// */}
        {/* /////////// sub: Head Title ////////// */}
        <View style={styles.headTitleContainer}>
          <AppText style={[styles.primaryText, { textAlign: "center" }]}>
            {headTitle}
          </AppText>
        </View>
        {/* /////////// sub: Head Title ////////// */}
        {/* /////////// sub: Call Rate Container ////////// */}
        <View style={styles.callRateContainer}>
          {/* //// Call Rate Title ////*/}
          <View style={styles.callRateTitle}>
            <AppText style={[styles.secondaryText]}>Call Rate</AppText>
          </View>
          {/* //// Call Rate Title ////*/}
          {/* //// Call Rate Info ////*/}
          <View style={styles.callRateInfoContainer}>
            {/* //////////sub: call rate info text //////// */}
            <AppText
              style={[
                styles.ternaryText,
                { color: AppColors.secondaryBlack, fontFamily: "Regular" },
              ]}
            >
              {callRateInfoText}
            </AppText>
            {/* //////////sub: call rate info text //////// */}
            <View>
              {/* //////////sub: video rate Input //////// */}
              <View style={styles.videoRateTextInputContainer}>
                <AppTouchableHighlight
                  onPress={onVideoRatePlusButton}
                  underlayColor={AppColors.secondaryWhite}
                >
                  <AppFabButton name="add" style={styles.increaseCountButton} />
                </AppTouchableHighlight>

                <TextInput
                  keyboardType="numeric"
                  label="₹ Video Call Rate (per minute)"
                  value={videoRateInput}
                  mode="outlined"
                  onChangeText={(videoRateInput) =>
                    onVideoRateChangeInput(videoRateInput)
                  }
                  style={[styles.videoRateTextInput]}
                  activeOutlineColor={AppColors.primaryBlack}
                />

                <AppTouchableHighlight
                  onPress={onVideoRateMinusButton}
                  underlayColor={AppColors.secondaryWhite}
                >
                  <AppFabButton
                    name="remove"
                    style={styles.increaseCountButton}
                  />
                </AppTouchableHighlight>

                <Switch
                  trackColor={{
                    false: AppColors.secondaryBlack,
                    true: AppColors.primaryGreen,
                  }}
                  thumbColor={AppColors.primaryWhite}
                  ios_backgroundColor={AppColors.secondaryBlack}
                  onValueChange={VideoToggleSwitch}
                  value={isVideoEnabled}
                  style={{
                    transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }],
                    marginHorizontal: 8,
                  }}
                />
              </View>
              {/* //////////sub: video rate Input //////// */}

              {/* //////////sub: audio rate Input //////// */}
              <View style={styles.videoRateTextInputContainer}>
                <AppTouchableHighlight
                  onPress={onAudioRateAddButton}
                  underlayColor={AppColors.secondaryWhite}
                >
                  <AppFabButton name="add" style={styles.increaseCountButton} />
                </AppTouchableHighlight>

                <TextInput
                  keyboardType="numeric"
                  label="₹ Audio Call Rate (per minute)"
                  value={audioRateInput}
                  mode="outlined"
                  onChangeText={(audioRateInput) =>
                    onAudioRateChangeInput(audioRateInput)
                  }
                  style={[styles.videoRateTextInput]}
                  activeOutlineColor={AppColors.primaryBlack}
                />

                <AppTouchableHighlight
                  onPress={onAudioRateMinusButton}
                  underlayColor={AppColors.secondaryWhite}
                >
                  <AppFabButton
                    name="remove"
                    style={styles.increaseCountButton}
                  />
                </AppTouchableHighlight>

                <Switch
                  trackColor={{
                    false: AppColors.secondaryBlack,
                    true: AppColors.primaryGreen,
                  }}
                  thumbColor={AppColors.primaryWhite}
                  ios_backgroundColor={AppColors.secondaryBlack}
                  onValueChange={AudioToggleSwitch}
                  value={isAudioEnabled}
                  style={{
                    transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }],
                    marginHorizontal: 8,
                  }}
                />
              </View>
              {/* //////////sub: audio rate Input //////// */}
            </View>
            <AppText
              style={[
                styles.ternaryText,
                { color: AppColors.secondaryBlack, fontFamily: "Regular" },
              ]}
            >
              {callRateInfoFooterText}
            </AppText>
          </View>
          <AppTouchableOpacity onPress={onUpdateRatesPress}>
            <AppButton
              title="Update Rates"
              ContainerStyle={{
                width: width * 0.45,
                paddingVertical: 14,
                paddingHorizontal: 8,
                borderRadius: 100,
                marginTop: 12,
              }}
            />
          </AppTouchableOpacity>
          {/* //// Call Rate Info ////*/}
        </View>
        {/* /////////// sub: Call Rate Container ////////// */}
      </AppScreen>
    </>
  );
}

const styles = StyleSheet.create({
  callRateContainer: {
    alignItems: "center",
    backgroundColor: AppColors.primaryWhite,
    margin: 10,
    padding: 15,
    borderRadius: 10,
  },

  callRateInfoContainer: {},

  videoRateTextInputContainer: {
    backgroundColor: AppColors.primaryWhite,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    alignItems: "flex-end",
    marginVertical: 18,
  },

  callRateTitle: {
    borderBottomWidth: 5,
    marginBottom: 12,
    paddingBottom: 6,
  },

  container: {},

  fourthText: {
    color: "black",
    fontFamily: "SemiBold",
    fontSize: 16,
  },

  increaseCountButton: {
    backgroundColor: "transparent",
    padding: 8,
  },

  headTitleContainer: {
    backgroundColor: AppColors.primaryWhite,
    margin: 10,
    padding: 15,
    borderRadius: 10,
  },

  primaryText: {
    color: "black",
    fontFamily: "SemiBold",
    fontSize: 16,
  },

  screen: {
    backgroundColor: AppColors.secondaryWhite,
    flex: 1,
    width: "100%",
  },

  secondaryText: {
    color: "black",
    fontFamily: "SemiBold",
    fontSize: 20,
  },

  ternaryText: {
    color: "black",
    fontFamily: "SemiBold",
    fontSize: 14,
  },

  videoCallInput: {},

  videoRateTextInput: {
    backgroundColor: AppColors.primaryWhite,
    flex: 1,
    width: 10,
    height: 42,
    fontSize: 18,
  },
});
export default CECallSettings;
