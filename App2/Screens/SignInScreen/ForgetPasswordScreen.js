import React, { useState } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { TextInput } from "react-native-paper";
//////////////////////////////////////////////////////////////////////////////
import AppButton from "../../Components/AppComponents/AppButton";
import AppColors from "../../Config/AppColors";
import AppScreen from "../../Components/AppComponents/AppScreen";
import AppText from "../../Components/AppComponents/AppText";
import AppTouchableOpacity from "../../Components/AppComponents/AppTouchableOpacity";
//////////////////////////////////////////////////////////////////////////////
const { width } = Dimensions.get("screen");
//////////////////////////////////////////////////////////////////////////////

function ConfirmationScreen({ navigation }) {
  const [text, setText] = useState("");

  const onResetButtonPressed = () => {
    console.log("on Reset button pressed");
    navigation.navigate("NewPasswordScreen");
  };

  const onBackButtonPressed = () => {
    console.log("on back button pressed");
    navigation.goBack();
  };

  return (
    <>
      <AppScreen style={styles.screen}>
        <View style={styles.mainContainer}>
          {/* /////////////// Header ////////////// */}
          <AppText style={styles.headerText}>Reset Your Password</AppText>
          {/* /////////////// Header ////////////// */}

          {/* /////////////// main Body ////////////// */}
          {/* :: email/phone number Input */}
          <TextInput
            activeOutlineColor={AppColors.primaryBlack}
            label="Enter your email/phone number"
            mode="outlined"
            onChangeText={(text) => setText(text)}
            style={[styles.codeTextInput]}
            value={text}
          />

          {/* :: Reset Button */}
          <AppTouchableOpacity
            onPress={onResetButtonPressed}
            style={[styles.buttonContainer]}
          >
            <AppButton
              textStyle={styles.buttonTextStyle}
              title="Reset"
            ></AppButton>
          </AppTouchableOpacity>

          {/* :: Back To Sign In Button */}
          <AppTouchableOpacity onPress={onBackButtonPressed}>
            <AppText style={styles.backButtonStyle}>Back</AppText>
          </AppTouchableOpacity>
          {/* /////////////// main Body ////////////// */}
        </View>
      </AppScreen>
    </>
  );
}

const styles = StyleSheet.create({
  backButtonStyle: {
    color: AppColors.fourthBlack,
    fontFamily: "SemiBold",
  },

  buttonContainer: {
    marginBottom: 18,
    width: "100%",
  },

  buttonContainerStyle: {
    backgroundColor: "transparent",
  },

  buttonTextStyle: {
    fontFamily: "SemiBold",
    fontSize: 18,
  },

  codeTextInput: {
    fontFamily: "Bold",
    fontSize: 18,
    height: width * 0.15,
    marginBottom: 18,
    width: "100%",
  },

  headerText: {
    fontFamily: "Bold",
    fontSize: 24,
    marginBottom: 8,
    marginTop: 24,
    textAlign: "center",
    width: "100%",
  },

  mainContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: "80%",
  },

  screen: {
    alignItems: "center",
    backgroundColor: AppColors.primaryWhite,
    flex: 1,
    justifyContent: "center",
  },
});
export default ConfirmationScreen;
