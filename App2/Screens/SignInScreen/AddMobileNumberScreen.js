import React, { useState, useRef } from "react";
import { Alert, Dimensions, Image, StyleSheet, View } from "react-native";
import PhoneInput from "react-native-phone-number-input";
import OTPInputView from "@twotalltotems/react-native-otp-input";
// import Clipboard from "@react-native-community/clipboard";
import { Modal, Portal, Text, Button, Provider } from "react-native-paper";
// sub: App Component
import AppScreen from "../../Components/AppComponents/AppScreen";
import AppColors from "../../Config/AppColors";
import AppTouchableOpacity from "../../Components/AppComponents/AppTouchableOpacity";
import AppText from "../../Components/AppComponents/AppText";
import AppButton from "../../Components/AppComponents/AppButton";
import AppComponentHorizontalSeparator from "../../Components/AppComponents/AppComponentHorizontalSeparator";
// sub: Extra
const { width, height } = Dimensions.get("screen");

function AddMobileNumberScreen({ navigation }) {
  const [value, setValue] = useState("");
  const [formattedValue, setFormattedValue] = useState("");
  const [valid, setValid] = useState(false);
  const phoneInput = useRef < PhoneInput > null;

  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  const onTermsAndConditionTouch = () => {
    console.log("Terms and conditions");
    navigation.navigate("TermsOfUseScreen");
  };

  const onPrivacyPolicyTouch = () => {
    console.log("Privacy Policy");
    navigation.navigate("PrivacyPolicy");
  };

  const onProceedButtonPress = () => {
    const checkValid = phoneInput.current?.isValidNumber(value);
    setValid(checkValid ? checkValid : false);

    value && formattedValue && !valid
      ? showModal()
      : Alert.alert("Alert", "Please enter your phone number");

    console.log(value);
    console.log(formattedValue);
    console.log(valid);
  };

  const onCodeFilled = (code) => {
    console.log(`${code}`);

    `${code}` && navigation.navigate("SignUpScreen");
  };

  const onVerifyButtonPress = () => {
    console.log("verify");
  };

  return (
    <>
      <AppScreen style={[styles.screen]}>
        <View style={[styles.container]}>
          {/* main: Header  */}
          {/* sub: Logo  */}
          <View style={[styles.logoContainer]}>
            <Image
              source={require("../../Assets/logo2.png")}
              style={[styles.logo]}
            />
          </View>

          {/* main: Body  */}
          <View style={[styles.bodyContainer]}>
            <View>
              {/* sub: Title Text  */}
              <AppText style={[styles.text, styles.titleText]}>
                Welcome To ConsultEase
              </AppText>
              {/* sub: subTitle Text  */}
              <AppText style={[styles.text, styles.subTitleText]}>
                Enter your phone number
              </AppText>
              {/* sub: Mobile number input  */}
              <PhoneInput
                useRef={phoneInput}
                defaultValue={value}
                defaultCode="IN"
                layout="first"
                onChangeText={(text) => {
                  setValue(text);
                }}
                onChangeFormattedText={(text) => {
                  setFormattedValue(text);
                }}
                withShadow
                autoFocus
                containerStyle={[styles.InputContainer]}
                textContainerStyle={[styles.InputText]}
                withDarkTheme={false}
              />
            </View>
          </View>
          {/* ///////////////// sub: Footer Style //////////////////////// */}
          <View style={[styles.footerStyle]}>
            {/* sub: Proceed Button  */}
            <AppTouchableOpacity onPress={onProceedButtonPress}>
              <AppButton
                title="Continue Securely"
                IconImage={require("../../Assets/security.png")}
                iconImageStyle={[styles.buttonImageStyle]}
                ContainerStyle={[styles.buttonContainerStyle]}
                textStyle={[styles.buttonTextStyle]}
              />
            </AppTouchableOpacity>
            {/* sub: Bottom Text  */}
            <AppText
              style={[
                styles.text,
                { textAlign: "center", marginTop: width * 0.06 },
              ]}
            >
              By Clicking, I accept the{" "}
              <AppText
                style={[styles.text, { textDecorationLine: "underline" }]}
                onPress={onTermsAndConditionTouch}
              >
                terms & conditions
              </AppText>
            </AppText>
          </View>
          {/* sub: OTP Verification  */}
        </View>
      </AppScreen>
      {/* main: Modal */}
      <Modal
        visible={visible}
        onDismiss={hideModal}
        contentContainerStyle={styles.modalContainer}
        dismissable={false}
      >
        {/* <View style={[styles.modalBodyContainer]}> */}
        {/* sub: Body Title  */}
        <AppText style={[styles.text, { fontSize: 16 }]}>
          Enter the 6-digit OTP you received.
        </AppText>
        {/* sub: Body SubTitle  */}
        <AppText
          style={[
            styles.text,
            {
              fontSize: 16,
              color: AppColors.secondaryBlue,
              marginTop: 12,
            },
          ]}
        >
          +91 8700913073
        </AppText>
        {/* sub: OTP Container  */}
        <OTPInputView
          style={[styles.codeInputContainer]}
          pinCount={6}
          autoFocusOnLoad={false}
          codeInputFieldStyle={styles.codeInputFieldStyle}
          codeInputHighlightStyle={styles.codeInputHighlightStyle}
          onCodeFilled={(code) => onCodeFilled(code)}
        />
        {/* sub: Body Footer  */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: width * 0.05,
          }}
        >
          <AppText style={[styles.text, { fontSize: 13 }]}>
            Did not receive code?
          </AppText>
          <AppText
            style={[
              styles.text,
              {
                color: AppColors.secondaryBlue,
                fontFamily: "SemiBold",
                fontSize: 13,
              },
            ]}
          >
            Resend
          </AppText>
          <AppText style={[styles.text, { fontSize: 13 }]}>00:28 Sec</AppText>
        </View>
        {/* </View> */}
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  bodyContainer: {
    flex: 1,
    width: "100%",
    padding: width * 0.12,
    justifyContent: "space-between",
  },

  buttonImageStyle: {
    borderRadius: 0,
  },

  buttonContainerStyle: {
    backgroundColor: AppColors.primaryBlack,
    alignSelf: "center",
    padding: 12,
  },

  buttonTextStyle: {
    fontSize: 18,
  },

  bottomText: {
    margin: width * 0.05,
    textAlign: "center",
  },

  codeInputContainer: {
    width: "100%",
    height: 80,
    marginVertical: 0,
  },

  codeInputFieldStyle: {
    // width: width * 0.12,
    // height: width * 0.12,
    // borderWidth: 0,
    // borderBottomWidth: 1,
    // color: AppColors.primaryBlack,
    // fontSize: 20,
    // alignSelf: "center",
    /////////////////////////////////////
  },

  codeInputHighlightStyle: {
    borderColor: AppColors.primaryBlack,
  },

  container: {
    flex: 1,
    alignItems: "center",
  },

  footerStyle: {
    backgroundColor: "#A0C3D9",
    width: "100%",
    padding: width * 0.12,
    borderTopRightRadius: 50,
  },

  InputContainer: {
    backgroundColor: AppColors.primaryWhite,
    width: "100%",
    borderRadius: 4,
    borderWidth: 1,
    overflow: "hidden",
  },

  InputText: {
    backgroundColor: AppColors.primaryWhite,
  },

  logoContainer: {
    width: width * 0.5,
    height: width * 0.16,
    alignItems: "center",
    justifyContent: "center",
    marginTop: width * 0.15,
  },

  logo: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },

  modalContainer: {
    backgroundColor: "red",
    backgroundColor: AppColors.primaryWhite,
    position: "absolute",
    bottom: 0,
    padding: width * 0.12,
    width: "100%",
  },

  modalBodyContainer: {
    // backgroundColor: AppColors.primaryWhite,
    // paddingHorizontal: width * 0.05,
    // paddingVertical: width * 0.1,

    backgroundColor: AppColors.primaryWhite,
    padding: width * 0.12,
  },

  screen: {
    backgroundColor: AppColors.primaryWhite,
    flex: 1,
    width: width,
  },

  subTitleText: {
    color: AppColors.fourthBlack,
    marginTop: width * 0.1,
    marginBottom: width * 0.05,
    fontSize: 16,
  },

  text: {
    color: AppColors.primaryBlack,
    fontSize: 12,
    fontFamily: "Medium",
  },

  touchableTextStyle: {
    color: "blue",
    fontFamily: "SemiBold",
  },

  titleText: {
    fontSize: 26,
    fontFamily: "SemiBold",
    textAlign: "center",
  },

  textInput: {
    backgroundColor: AppColors.primaryWhite,
    marginVertical: width * 0.05,
  },
});
export default AddMobileNumberScreen;
