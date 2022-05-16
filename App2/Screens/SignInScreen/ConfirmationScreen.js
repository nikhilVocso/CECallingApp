import React from "react";
import { Alert, Dimensions, StyleSheet, View } from "react-native";
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
  const [text, setText] = React.useState("");

  const onConfirmButtonPressed = () => {
    console.log("on confirm button pressed");
    navigation.navigate("ResetPasswordLinkSend");
  };

  const onResendCodeButtonPressed = () => {
    console.log("on Resend button pressed");
    Alert.alert("Alert", "A Code is send to your Registered Mail ID");
  };

  const onBackButtonPressed = () => {
    console.log("on back button pressed");
    navigation.navigate("SignInScreen");
  };

  return (
    <>
      <AppScreen style={styles.screen}>
        <View style={styles.mainContainer}>
          {/* /////////////// sub: Header ////////////// */}
          <AppText style={styles.headerText}>Confirm Your Email</AppText>
          {/* /////////////// sub: Header ////////////// */}

          {/* /////////////// sub: main Body ////////////// */}
          {/* :: Code Input */}
          <TextInput
            activeOutlineColor={AppColors.primaryBlack}
            keyboardType="numeric"
            label="Enter Your Confirmation Code"
            mode="outlined"
            onChangeText={(text) => setText(text)}
            style={[styles.codeTextInput]}
            value={text}
          />

          {/* :: Confirm Button */}
          <AppTouchableOpacity
            onPress={onConfirmButtonPressed}
            style={[styles.buttonContainer]}
          >
            <AppButton
              textStyle={styles.buttonTextStyle}
              title="Confirm"
            ></AppButton>
          </AppTouchableOpacity>

          {/* :: Resend Code Button */}
          <AppTouchableOpacity
            onPress={onResendCodeButtonPressed}
            style={[styles.buttonContainer]}
          >
            <AppButton
              ContainerStyle={[
                styles.buttonContainerStyle,
                { borderWidth: 2, borderColor: AppColors.primaryBlack },
              ]}
              textStyle={[
                styles.buttonTextStyle,
                { color: AppColors.primaryBlack },
              ]}
              title="Resend Code"
            ></AppButton>
          </AppTouchableOpacity>

          {/* :: Back To Sign In Button */}
          <AppTouchableOpacity onPress={onBackButtonPressed}>
            <AppText style={styles.backButtonStyle}>Back To Sign In</AppText>
          </AppTouchableOpacity>
          {/* /////////////// sub: main Body ////////////// */}
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
