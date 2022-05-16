import React, { useState } from "react";
import { Alert, Dimensions, View, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";
/////////////////////////////////////////////////////////////////////////////
import AppButton from "../../Components/AppComponents/AppButton";
import AppColors from "../../Config/AppColors";
import AppScreen from "../../Components/AppComponents/AppScreen";
import AppText from "../../Components/AppComponents/AppText";
import AppTouchableOpacity from "../../Components/AppComponents/AppTouchableOpacity";
/////////////////////////////////////////////////////////////////////////////
const { width } = Dimensions.get("screen");
/////////////////////////////////////////////////////////////////////////////
function ConfirmationScreen({ navigation }) {
  const [text, setText] = useState("");

  const onSubmitButtonPressed = () => {
    console.log("on Submit button pressed");
    navigation.navigate("HomeScreen");
  };

  const onResendCodeButtonPressed = () => {
    console.log("on Resend button pressed");
    Alert.alert("Alert", "A Code is send to your Registered Mail ID");
  };

  const onBackButtonPressed = () => {
    console.log("on back button pressed");
    navigation.goBack();
  };

  return (
    <>
      <AppScreen style={styles.screen}>
        <View style={styles.mainContainer}>
          {/* /////////////// sub: Header ////////////// */}
          <AppText style={[styles.headerText]}>Confirm Your Email</AppText>
          {/* /////////////// sub: Header ////////////// */}

          {/* /////////////// sub: main Body ////////////// */}
          {/* :: Confirmation Code */}
          <AppText style={styles.titleText}>Confirmation Code</AppText>
          <TextInput
            label="Enter Your Confirmation Code"
            value={text}
            onChangeText={(text) => setText(text)}
            style={[styles.codeTextInput]}
            keyboardType="numeric"
            mode="outlined"
            activeOutlineColor={AppColors.primaryBlack}
          />

          {/* :: Password */}
          <AppText style={styles.titleText}>Password</AppText>
          <TextInput
            label="Enter Your New Password"
            value={text}
            onChangeText={(text) => setText(text)}
            style={[styles.codeTextInput]}
            mode="outlined"
            activeOutlineColor={AppColors.primaryBlack}
          />

          {/* :: Confirm Password*/}
          <AppText style={styles.titleText}>Confirm Password</AppText>
          <TextInput
            label="Confirm Your New Password"
            value={text}
            onChangeText={(text) => setText(text)}
            style={[styles.codeTextInput]}
            mode="outlined"
            activeOutlineColor={AppColors.primaryBlack}
          />

          {/* :: Submit Button */}
          <AppTouchableOpacity
            onPress={onSubmitButtonPressed}
            style={[styles.buttonContainer, { marginTop: 18 }]}
          >
            <AppButton
              title="Submit"
              textStyle={styles.buttonTextStyle}
            ></AppButton>
          </AppTouchableOpacity>

          {/* :: Resend Code Button */}
          <AppTouchableOpacity
            onPress={onResendCodeButtonPressed}
            style={[styles.buttonContainer]}
          >
            <AppButton
              title="Resend Code"
              textStyle={[
                styles.buttonTextStyle,
                { color: AppColors.primaryBlack },
              ]}
              ContainerStyle={[
                styles.buttonContainerStyle,
                { borderWidth: 2, borderColor: AppColors.primaryBlack },
              ]}
            ></AppButton>
          </AppTouchableOpacity>

          {/* :: Back To Sign In Button */}
          <AppTouchableOpacity onPress={onBackButtonPressed}>
            <AppText style={styles.backButtonStyle}>Back</AppText>
          </AppTouchableOpacity>
          {/* /////////////// sub: main Body ////////////// */}
        </View>
      </AppScreen>
    </>
  );
}

const styles = StyleSheet.create({
  backButtonStyle: {
    fontFamily: "SemiBold",
    color: AppColors.fourthBlack,
  },

  buttonContainer: {
    width: "100%",
    marginBottom: 18,
  },

  buttonContainerStyle: {
    backgroundColor: "transparent",
  },

  buttonTextStyle: {
    fontSize: 18,
    fontFamily: "SemiBold",
  },

  codeTextInput: {
    width: "100%",
    height: width * 0.15,
    fontSize: 18,
    fontFamily: "Bold",
  },

  headerText: {
    fontSize: 24,
    fontFamily: "Bold",
    width: "100%",
    marginTop: 24,
    textAlign: "center",
  },

  mainContainer: {
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
  },

  screen: {
    backgroundColor: AppColors.primaryWhite,
    flex: 1,
    alignItems: "center",
  },

  titleText: {
    fontSize: 16,
    fontFamily: "Bold",
    width: "100%",
    marginTop: 24,
    marginBottom: 4,
  },
});
export default ConfirmationScreen;
