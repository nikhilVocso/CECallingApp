import React, { useState } from "react";
import { Dimensions, Image, StyleSheet, View } from "react-native";
//////////////////////////////////////////////////////////////
import AppText from "../../Components/AppComponents/AppText";
import AppTouchableHighlight from "../../Components/AppComponents/AppTouchableHighlight";
import AppTouchableOpacity from "../../Components/AppComponents/AppTouchableOpacity";
import AppButton from "../../Components/AppComponents/AppButton";
import AppScreen from "../../Components/AppComponents/AppScreen";
import AppColors from "../../Config/AppColors";
//////////////////////////////////////////////////////////////
const { width, height } = Dimensions.get("screen");
//////////////////////////////////////////////////////////////

function WelcomeScreen({ navigation }) {
  const [showMoreOptions, setShowMoreOptions] = useState(false);

  //:: Google Button
  const onGoogleLogInPressed = () => {
    console.log("on google login pressed");
    navigation.navigate("HomeScreen");
  };

  //:: Facebook Log In
  const onFacebookLogInPressed = () => {
    console.log("on facebook log in press");
    navigation.navigate("HomeScreen");
  };

  // :: LinkedIn Log In
  const onLinkedInLogInPressed = () => {
    console.log("on linked in log in");
    navigation.navigate("HomeScreen");
  };

  //:: onEmailOrPhoneLogInTextTouch
  const onEmailOrPhoneLogInTextTouch = () => {
    console.log("on email or phone");
    navigation.navigate("SignInScreen");
  };

  //:: Terms And Conditions
  const onTermsAndConditions = () => {
    console.log("on terms and condition");
  };

  //:: More Options Text
  const onMoreOptionTextTouched = () => {
    console.log("on more options press");
    setShowMoreOptions(!showMoreOptions);
  };

  return (
    <>
      <AppScreen style={[styles.screen]}>
        <View style={[styles.container]}>
          {/* /////////////// sub: Header ///////////////// */}
          <View style={[styles.header]}>
            <Image
              source={require("../../Assets/logo.png")}
              style={[styles.logo]}
              resizeMode="contain"
            />
            <AppText style={[styles.text]}>This is tag line</AppText>
          </View>
          {/* /////////////// sub: Header ///////////////// */}

          {/* /////////////// sub: Body ///////////////// */}
          <View style={[styles.bodyContainer]}>
            {/* :: Terms and conditions  */}
            <AppText style={[styles.text, { margin: 14 }]}>
              By Clicking "Log In", you agree with our
              <AppText
                style={[styles.text, { color: AppColors.primaryRed }]}
                onPress={onTermsAndConditions}
              >
                {" "}
                Terms and Conditions{" "}
              </AppText>
              and{" "}
              <AppText style={[styles.text, { color: AppColors.primaryRed }]}>
                Privacy Polices
              </AppText>
            </AppText>

            {/* :: Google Log In  */}
            <AppTouchableOpacity
              onPress={onGoogleLogInPressed}
              style={{ width: "100%" }}
            >
              <AppButton
                ContainerStyle={[styles.signInOptionContainer]}
                IconImage={require("../../Assets/google2.png")}
                iconImageStyle={{ borderRadius: 0, marginHorizontal: 5 }}
                textStyle={[styles.buttonTextStyle]}
                title="Log in with google"
              />
            </AppTouchableOpacity>

            {/* :: More Options  */}
            {showMoreOptions && (
              <>
                {/* :: Facebook Log In  */}
                <AppTouchableOpacity
                  onPress={onFacebookLogInPressed}
                  style={{ width: "100%" }}
                >
                  <AppButton
                    ContainerStyle={[styles.signInOptionContainer]}
                    IconImage={require("../../Assets/facebook.png")}
                    iconImageStyle={{ borderRadius: 0, marginHorizontal: 5 }}
                    textStyle={[styles.buttonTextStyle]}
                    title="Log in with facebook"
                  />
                </AppTouchableOpacity>

                {/* :: LinkedIn Log In  */}
                <AppTouchableOpacity
                  onPress={onLinkedInLogInPressed}
                  style={{ width: "100%" }}
                >
                  <AppButton
                    ContainerStyle={[styles.signInOptionContainer]}
                    IconImage={require("../../Assets/linkedin.png")}
                    iconImageStyle={{ borderRadius: 0, marginHorizontal: 5 }}
                    textStyle={[styles.buttonTextStyle]}
                    title="Log in with linkedin"
                  />
                </AppTouchableOpacity>

                {/* :: Email or Phone  */}
                <AppTouchableOpacity
                  style={{
                    padding: width * 0.08,
                    width: "100%",
                  }}
                >
                  <AppText style={[styles.text, { fontSize: 16 }]}>
                    Log In with{" "}
                    <AppText
                      style={[styles.text, { color: "red", fontSize: 16 }]}
                      onPress={onEmailOrPhoneLogInTextTouch}
                    >
                      Email
                    </AppText>
                    <AppText style={[styles.text, { fontSize: 16 }]}>
                      {" "}
                      /{" "}
                    </AppText>
                    <AppText
                      style={[styles.text, { color: "red", fontSize: 16 }]}
                      onPress={onEmailOrPhoneLogInTextTouch}
                    >
                      Phone
                    </AppText>
                  </AppText>
                </AppTouchableOpacity>
              </>
            )}

            {/* :: More Options Text  */}
            {!showMoreOptions && (
              <>
                <AppTouchableOpacity
                  style={{
                    padding: width * 0.1,
                    width: "100%",
                  }}
                >
                  <AppText
                    style={[styles.text, { fontSize: 16 }]}
                    onPress={onMoreOptionTextTouched}
                  >
                    More Options
                  </AppText>
                </AppTouchableOpacity>
              </>
            )}
          </View>
          {/* /////////////// sub: Body ///////////////// */}
        </View>
      </AppScreen>
    </>
  );
}

const styles = StyleSheet.create({
  bodyContainer: {
    // backgroundColor: "red",
    width: "85%",
    alignItems: "center",
    marginBottom: width * 0.05,
  },

  buttonTextStyle: {
    color: AppColors.primaryBlack,
    fontSize: 16,
    fontFamily: "SemiBold",
    textTransform: "uppercase",
  },

  container: {
    // backgroundColor: "green",
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
  },

  header: {
    // backgroundColor: "yellow",
    alignItems: "center",
    width: "80%",
    marginTop: width * 0.4,
  },

  logo: {
    // backgroundColor: "pink",
    width: width * 0.7,
  },

  screen: {
    // backgroundColor: "red",
    flex: 1,
    width: width,
  },

  signInOptionContainer: {
    backgroundColor: AppColors.primaryWhite,
    borderRadius: 100,
    elevation: 10,
    justifyContent: "flex-start",
    marginVertical: 16,
    padding: 12,
    paddingHorizontal: 18,
  },

  text: {
    // backgroundColor: "yellow",
    fontSize: 14,
    fontFamily: "SemiBold",
    textAlign: "center",
  },
});
export default WelcomeScreen;
