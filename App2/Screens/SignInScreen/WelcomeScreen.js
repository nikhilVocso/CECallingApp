import React, { useState } from "react";
import { Dimensions, Image, StyleSheet, View } from "react-native";
///////////////////////////////////////////////////////////////////////////
import AppButton from "../../Components/AppComponents/AppButton";
import AppColors from "../../Config/AppColors";
import AppText from "../../Components/AppComponents/AppText";
import AppTouchableOpacity from "../../Components/AppComponents/AppTouchableOpacity";
import AppScreen from "../../Components/AppComponents/AppScreen";
///////////////////////////////////////////////////////////////////////////
const { width } = Dimensions.get("screen");
///////////////////////////////////////////////////////////////////////////

function WelcomeScreen({ navigation }) {
  const [showMoreOptions, serShowMoreOptions] = useState(true);

  const onGoogleLogInPressed = () => {
    console.log("on google login pressed");
    navigation.navigate("AddInterestScreen");
  };

  const onFacebookLogInPressed = () => {
    console.log("on facebook log in button pressed");
    navigation.navigate("AddInterestScreen");
  };

  const onMoreOptionsButtonPressed = () => {
    console.log("on more options button pressed");
    serShowMoreOptions(() => !showMoreOptions);
  };

  const onTroubleLogInPressed = () => {
    console.log("on trouble log in pressed");
    navigation.navigate("SignInScreen");
  };

  const onCreateOneTextPressed = () => {
    console.log("on create one text pressed");
    navigation.navigate("SignUpOptionsScreen");
  };

  return (
    <>
      <AppScreen style={[styles.screen]}>
        <View style={[styles.container]}>
          {/* ////////////// sub: Header ///////////////// */}
          <View style={styles.headerContainer}>
            <Image
              source={require("../../Assets/logo.png")}
              style={[styles.appLogo]}
              resizeMode="contain"
            />
          </View>
          {/* ////////////// sub: Header ///////////////// */}

          {/* ////////////// sub: Footer ///////////////// */}
          <View style={[styles.footer]}>
            {/* //////// Details //////// */}
            <AppText style={styles.text}>
              Welcome To Best Consulting Platfrom.
            </AppText>
            {/* //////// Details //////// */}
            {/* //////// Options //////// */}
            <View>
              <AppTouchableOpacity onPress={onGoogleLogInPressed}>
                <AppButton
                  ContainerStyle={[styles.signInOptionContainer]}
                  IconImage={require("../../Assets/google2.png")}
                  iconImageStyle={{ borderRadius: 0, marginHorizontal: 5 }}
                  textStyle={[styles.textStyle]}
                  title="Log in with google"
                />
              </AppTouchableOpacity>
              {showMoreOptions && (
                <AppTouchableOpacity onPress={onMoreOptionsButtonPressed}>
                  <AppText style={[styles.moreOptionsText]}>
                    More Options
                  </AppText>
                </AppTouchableOpacity>
              )}
              {!showMoreOptions && (
                <>
                  <View>
                    <AppTouchableOpacity onPress={onFacebookLogInPressed}>
                      <AppButton
                        ContainerStyle={[styles.signInOptionContainer]}
                        IconImage={require("../../Assets/facebook.png")}
                        iconImageStyle={{
                          borderRadius: 0,
                          marginHorizontal: 5,
                        }}
                        textStyle={[styles.textStyle]}
                        title="log in with facebook"
                      />
                    </AppTouchableOpacity>
                    <AppTouchableOpacity onPress={onTroubleLogInPressed}>
                      <AppText style={[styles.text]}>
                        Trouble logging in?
                      </AppText>
                    </AppTouchableOpacity>
                    <AppTouchableOpacity onPress={onTroubleLogInPressed}>
                      <AppText
                        style={[
                          styles.text,
                          { marginVertical: 0, marginBottom: 28 },
                        ]}
                      >
                        Don't have an account{" "}
                        <AppText
                          style={[
                            styles.text,
                            { color: "red", fontFamily: "SemiBold" },
                          ]}
                          onPress={onCreateOneTextPressed}
                        >
                          create one?
                        </AppText>
                      </AppText>
                    </AppTouchableOpacity>
                  </View>
                </>
              )}
            </View>
            {/* //////// Options //////// */}
          </View>
          {/* ////////////// sub: Footer ///////////////// */}
        </View>
      </AppScreen>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "space-between",
    width: "80%",
  },

  appLogo: {
    height: "100%",
    marginVertical: 120,
    width: "100%",
  },

  headerContainer: {
    height: width * 0.3,
    marginBottom: 32,
    width: width * 0.7,
  },

  moreOptionsText: {
    fontFamily: "SemiBold",
    fontSize: 18,
    marginBottom: 32,
    marginTop: 12,
    textAlign: "center",
  },

  screen: {
    alignItems: "center",
    backgroundColor: AppColors.primaryWhite,
    flex: 1,
    width: width,
  },

  signInOptionContainer: {
    backgroundColor: AppColors.primaryWhite,
    borderRadius: 100,
    elevation: 10,
    justifyContent: "flex-start",
    marginVertical: 8,
    padding: 12,
    paddingHorizontal: 18,
  },

  text: {
    color: "black",
    fontFamily: "Medium",
    fontSize: 16,
    marginHorizontal: 14,
    marginVertical: 16,
    textAlign: "center",
  },

  textStyle: {
    color: AppColors.primaryBlack,
    fontFamily: "SemiBold",
    fontSize: 15,
    textTransform: "uppercase",
  },
});
export default WelcomeScreen;
