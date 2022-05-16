import React, { useState } from "react";
import { Dimensions, View, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";
import { Switch } from "react-native-paper";
////////////////////////////////////////////////////////////////
import AppText from "../../Components/AppComponents/AppText";
import AppScreen from "../../Components/AppComponents/AppScreen";
import AppTouchableHighlight from "../../Components/AppComponents/AppTouchableHighlight";
import AppTouchableOpacity from "../../Components/AppComponents/AppTouchableOpacity";
import AppColors from "../../Config/AppColors";
import AppNavBar from "../../Components/AppComponents/AppNavBar";
import AppButton from "../../Components/AppComponents/AppButton";
////////////////////////////////////////////////////////////////
const { width, height } = Dimensions.get("screen");
////////////////////////////////////////////////////////////////

function AddRatesScreen({ navigation }) {
  const [videoCallRate, setVideoCallRate] = useState("");
  const [audioCallRate, setAudioCallRate] = useState("");

  const onBackButtonPress = () => {
    console.log("on back button press");
    navigation.goBack();
  };

  const onSkipButtonPressed = () => {
    console.log("on skip button pressed");
    navigation.navigate("AddMoreDetails");
  };

  const onSubmitButtonPressed = () => {
    console.log("on submit button pressed");
    navigation.navigate("AddMoreDetails");
  };

  return (
    <>
      <AppScreen style={[styles.screen]}>
        {/* ///////////// sub: Header /////////////// */}
        <AppNavBar
          navbarTitleText="Add Rates"
          onBackButtonPress={onBackButtonPress}
        />
        {/* ///////////// sub: Header /////////////// */}
        <View style={[styles.container]}>
          {/* ///////////// sub: Body /////////////// */}
          <View style={[styles.bodyContainer]}>
            {/* :: Video Call Rate  */}
            <TextInput
              activeUnderlineColor={AppColors.primaryBlack}
              label="Enter Video Call Rate"
              onChangeText={(videoCallRate) => setVideoCallRate(videoCallRate)}
              style={[styles.textInput]}
              value={videoCallRate}
              keyboardType="numeric"
            />
            {/* :: Audio Call Rate  */}
            <TextInput
              activeUnderlineColor={AppColors.primaryBlack}
              label="Enter Voice Call Rate"
              onChangeText={(audioCallRate) => setAudioCallRate(audioCallRate)}
              style={[styles.textInput]}
              value={audioCallRate}
              keyboardType="numeric"
            />
          </View>
          {/* //////////// sub: Footer ///////////// */}
          <View style={[styles.buttonContainer]}>
            <AppTouchableOpacity
              style={[styles.buttonContainerTouch]}
              onPress={onSkipButtonPressed}
            >
              <AppButton
                ContainerStyle={[styles.buttonContainerStyle]}
                title="Skip"
                textStyle={[styles.buttonText]}
                style={[styles.button]}
              />
            </AppTouchableOpacity>
            <AppTouchableOpacity
              style={[styles.buttonContainerTouch]}
              onPress={onSubmitButtonPressed}
            >
              <AppButton
                ContainerStyle={[
                  styles.buttonContainerStyle,
                  { backgroundColor: AppColors.primaryBlack },
                ]}
                title="Submit"
                textStyle={[
                  styles.buttonText,
                  { color: AppColors.primaryWhite },
                ]}
                style={[styles.button]}
              />
            </AppTouchableOpacity>
          </View>
          {/* //////////// sub: Footer ///////////// */}
        </View>
        {/* ///////////// sub: Body /////////////// */}
      </AppScreen>
    </>
  );
}

const styles = StyleSheet.create({
  bodyContainer: {
    width: "90%",
  },

  buttonContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: 32,
    paddingHorizontal: 6,
  },

  buttonContainerStyle: {
    borderColor: AppColors.primaryBlack,
    borderRadius: 100,
    borderWidth: 2,
    backgroundColor: "transparent",
    marginVertical: 8,
    padding: 10,
  },

  buttonContainerTouch: {
    width: "42%",
  },

  buttonText: {
    color: AppColors.primaryBlack,
    fontSize: 16,
    fontFamily: "SemiBold",
  },

  container: {
    width: "100%",
    height: "100%",
    alignItems: "center",
  },

  screen: {
    backgroundColor: AppColors.primaryWhite,
    flex: 1,
    width: width,
  },

  textInput: {
    backgroundColor: AppColors.primaryWhite,
    marginVertical: 12,
  },
});
export default AddRatesScreen;
