import React from "react";
import { View, StyleSheet, Dimensions, Image } from "react-native";
//////////////////////////////////////////////////////////////////////////////////////////////
import AppColors from "../../Config/AppColors";
import AppText from "../../Components/AppComponents/AppText";
import AppScreen from "../../Components/AppComponents/AppScreen";
import SocialSignInOptions from "../../Components/SignInScreenComponent/SocialSignInOptions";
//////////////////////////////////////////////////////////////////////////////////////////////
const { width, height } = Dimensions.get("screen");
//////////////////////////////////////////////////////////////////////////////////////////////
function SignUpOptionsScreen({
  headerTitleText = "Sign Up for dialogg",
  headerSubTitleText = "create a profile, follow other account, make your own videos, and more",
  navigation,
}) {
  const onGoogleSignInPressed = () => {
    console.log("on google sign in presses");
    navigation.navigate("AddInterestScreen");
  };

  const onFacebookSignInPressed = () => {
    console.log("on facebook sign in press");
    navigation.navigate("AddInterestScreen");
  };

  const onLinkedInSignInPressed = () => {
    console.log("on linked in sign in press");
    navigation.navigate("AddInterestScreen");
  };

  const onTermsOfUsePressed = () => {
    console.log("On terms of use press");
    navigation.navigate("TermsOfUseScreen");
  };

  const onPrivacyPolicyPressed = () => {
    console.log("on privacy policy pressed");
    navigation.navigate("PrivacyPolicy");
  };

  const onLogInPressed = () => {
    console.log("On Log In Pressed");
    navigation.navigate("SignInScreen");
  };

  const onEmailOrMobileNumberTextPressed = () => {
    console.log("on email or mobile number text pressed");
    navigation.navigate("SignUpScreen");
  };

  return (
    <>
      <AppScreen style={styles.screen}>
        <View style={styles.container}>
          {/* //////////////// sub: Header //////////////////// */}
          <View style={styles.headerContainer}>
            <View style={styles.appLogoContainer}>
              <Image
                resizeMode="contain"
                source={require("../../Assets/vocso.png")}
                style={styles.appLogo}
              />
            </View>
            <AppText style={[styles.secondaryText, styles.headerText]}>
              {headerTitleText}
            </AppText>
            <AppText style={[styles.primaryText, styles.headerText]}>
              {headerSubTitleText}
            </AppText>
          </View>
          {/* //////////////// sub: Header //////////////////// */}
          {/* /////////// sub: social Buttons ///////////////// */}
          <View style={[styles.socialButtonStyle]}>
            <SocialSignInOptions
              onFacebookSignInPressed={onFacebookSignInPressed}
              onGoogleSignInPressed={onGoogleSignInPressed}
              onLinkedInSignInPressed={onLinkedInSignInPressed}
              type="Sign Up"
            />
            <AppText
              style={[
                styles.footerText,
                { textTransform: "capitalize", fontFamily: "Medium" },
              ]}
            >
              manually create an account with{" "}
              <AppText
                style={[
                  [
                    styles.footerText,
                    {
                      textTransform: "capitalize",
                      fontFamily: "Bold",
                      color: "red",
                    },
                  ],
                ]}
                onPress={onEmailOrMobileNumberTextPressed}
              >
                email or mobile number.
              </AppText>
            </AppText>
          </View>
          {/* /////////// sub: social Buttons ///////////////// */}
          {/* ///////////////// sub: Footer ////////////////////*/}
          <View style={styles.footerStyle}>
            <AppText style={[styles.footerText]}>
              By continuting, you confirm that you're read and agree to CE
              Calling's
              <AppText
                style={{ color: "red", fontFamily: "Bold" }}
                onPress={onTermsOfUsePressed}
              >
                {" "}
                Terms Of Use{" "}
              </AppText>
              and{" "}
              <AppText
                style={{ color: "red", fontFamily: "Bold" }}
                onPress={onPrivacyPolicyPressed}
              >
                Privacy Policy
              </AppText>
              .
            </AppText>
            <AppText style={[styles.footerText]}>
              You have an account ?
              <AppText
                style={{ color: "red", fontFamily: "Bold" }}
                onPress={onLogInPressed}
              >
                {" "}
                LogIn
              </AppText>
            </AppText>
          </View>
          {/* ///////////////// sub: Footer ////////////////////*/}
        </View>
      </AppScreen>
    </>
  );
}

const styles = StyleSheet.create({
  appLogoContainer: {
    height: width * 0.2,
    width: width * 0.5,
  },

  appLogo: {
    height: "100%",
    width: "100%",
  },

  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "space-around",
    paddingHorizontal: width * 0.05,
  },

  footerStyle: {
    alignItems: "center",
    justifyContent: "center",
  },

  footerText: {
    fontFamily: "Regular",
    fontSize: 14,
    marginVertical: 8,
    textAlign: "center",
  },

  headerContainer: {
    alignItems: "center",
    justifyContent: "center",
  },

  headerText: {
    marginVertical: 4,
    textAlign: "center",
    textTransform: "capitalize",
  },

  screen: {
    backgroundColor: AppColors.primaryWhite,
    flex: 1,
    width: width,
  },

  socialButtonStyle: {
    width: "100%",
  },

  //////// Text ////////
  primaryText: {
    color: "black",
    fontFamily: "SemiBold",
    fontSize: 16,
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

  fourthText: {
    color: "black",
    fontFamily: "SemiBold",
    fontSize: 16,
  },
});
export default SignUpOptionsScreen;
