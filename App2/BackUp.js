// :: main: AddInterestScreen
import React, { useState } from "react";
import { Dimensions, View, StyleSheet, Text } from "react-native";
import SelectBox from "react-native-multi-selectbox";
import { xorBy } from "lodash";
//////////////////////////////////////////////////////////////////////////
import AppText from "../../Components/AppComponents/AppText";
import AppScreen from "../../Components/AppComponents/AppScreen";
import AppTouchableOpacity from "../../Components/AppComponents/AppTouchableOpacity";
import AppButton from "../../Components/AppComponents/AppButton";
import AppColors from "../../Config/AppColors";
import AppNavBar from "../../Components/AppComponents/AppNavBar";
import AppSelectBox from "../../Components/AppComponents/AppSelectBox";
//////////////////////////////////////////////////////////////////////////
const { width } = Dimensions.get("screen");
const categories = [
  {
    item: "nikhil",
    id: 1,
  },
  {
    item: "deepak",
    id: 2,
  },
  {
    item: "shafali",
    id: 3,
  },
  {
    item: "varsa",
    id: 4,
  },
  {
    item: "kalpana",
    id: 5,
  },
  {
    item: "prem",
    id: 6,
  },
  {
    item: "darban",
    id: 7,
  },
  {
    item: "anju",
    id: 8,
  },
];
//////////////////////////////////////////////////////////////////////////

function AddInterestScreen({ navigation }) {
  const [selectedTeams, setSelectedTeams] = useState([]);

  const onBackButtonPress = () => {
    console.log("on back button pressed");
    navigation.goBack();
  };

  const onSkipButtonPressed = () => {
    console.log("on skip button pressed");
    navigation.navigate("HomeScreen");
  };

  const onNextButtonPressed = () => {
    console.log("on next button pressed");
    navigation.navigate("AddRatesScreen");
  };

  function onMultiChange() {
    return (item) => setSelectedTeams(xorBy(selectedTeams, [item], "id"));
  }

  return (
    <>
      <AppScreen style={[styles.screen]}>
        {/* //////////// sub: Header ///////////// */}
        <AppNavBar
          navbarTitleText="Add Interest Screen"
          onBackButtonPress={onBackButtonPress}
        />
        {/* //////////// sub: Header ///////////// */}
        <View style={[styles.container]}>
          {/* //////////// sub: Body ///////////// */}
          <View style={[styles.categoryContainer]}>
            <AppSelectBox data={categories} />
          </View>
          {/* //////////// sub: Body ///////////// */}
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
              onPress={onNextButtonPressed}
            >
              <AppButton
                ContainerStyle={[
                  styles.buttonContainerStyle,
                  { backgroundColor: AppColors.primaryBlack },
                ]}
                title="Next"
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
      </AppScreen>
    </>
  );
}

const styles = StyleSheet.create({
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

  categoryContainer: {
    alignItems: "center",
    marginTop: 12,
    width: "90%",
  },

  container: {
    flex: 1,
    alignItems: "center",
  },

  header: {
    fontSize: 24,
    fontFamily: "SemiBold",
    textAlign: "center",
    textTransform: "capitalize",
    marginTop: 24,
  },

  screen: {
    backgroundColor: AppColors.primaryWhite,
    flex: 1,
    width: width,
  },
});
export default AddInterestScreen;

// main: welcome screen 
import React, { useState } from "react";
import { Dimensions, Image, StyleSheet, View } from "react-native";
//////////////////////////////////////////////////////////////////
import AppButton from "../../Components/AppComponents/AppButton";
import AppColors from "../../Config/AppColors";
import AppScreen from "../../Components/AppComponents/AppScreen";
import AppText from "../../Components/AppComponents/AppText";
import AppTouchableOpacity from "../../Components/AppComponents/AppTouchableOpacity";
import AppTouchableHighlight from "../../Components/AppComponents/AppTouchableHighlight";
//////////////////////////////////////////////////////////////////
const { width } = Dimensions.get("screen");
//////////////////////////////////////////////////////////////////

function WelcomeScreen({ navigation }) {
  const [showMoreOptions, setShowMoreOptions] = useState(false);

  //:: Google Button
  const onGoogleLogInPressed = () => {
    console.log("on google login pressed");
    navigation.navigate("HomeScreen");
  };

  //:: Facebook Log In
  const onFacebookLogInPress = () => {
    console.log("on Facebook log in pressed");
    navigation.navigate("HomeScreen");
  };

  //:; Linked In Log In
  const onLinkedInLogInPress = () => {
    console.log("on Linked In Press");
    navigation.navigate("HomeScreen");
  };

  //:: On Email / Phone Text Press
  const onEmailOrPhoneTextTouch = () => {
    console.log("on email or phone text");
    navigation.navigate("SignInScreen");
  };

  //:: More Text Button
  const onMoreOptionsPress = () => {
    console.log("on more options press");
    setShowMoreOptions(!showMoreOptions);
  };

  //:: Om privacy policy text
  const onPrivacyPoliciesTextTouch = () => {
    console.log("on privacy policy text");
  };

  //:: Terms and Conditions
  const onTermsAndConditionsPress = () => {
    console.log("On Terms and conditions");
  };

  //:: Create One Text
  const onCreateOneTextTouch = () => {
    console.log("create one text");
    navigation.navigate("SignUpOptionsScreen");
  };

  return (
    <>
      <AppScreen style={[styles.screen]}>
        <View style={[styles.container]}>
          {/* ////////////////// :: sub: Header ///////////////////// */}
          <View>
            {/* :: Logo   */}
            <Image
              source={require("../../Assets/logo.png")}
              style={[styles.logo]}
              resizeMode="contain"
            />
            {/* :: Tag Line  */}
            <AppText style={[styles.text]}>Welcome Text or tag line</AppText>
          </View>
          {/* ////////////////// :: sub: Header ///////////////////// */}

          {/* ////////////////// :: sub: Body ///////////////////// */}
          <View style={[styles.optionsContainer]}>
            {/* :: Terms And Conditions  */}
            {!showMoreOptions && (
              <AppText
                style={[
                  styles.text,
                  { marginVertical: 12, fontFamily: "Medium" },
                ]}
              >
                By Login You agree with our{" "}
                <AppText
                  style={[styles.text, { color: "red" }]}
                  onPress={onTermsAndConditionsPress}
                >
                  Terms and conditions{" "}
                </AppText>
                and{" "}
                <AppText
                  style={[styles.text, { color: "red" }]}
                  onPress={onPrivacyPoliciesTextTouch}
                >
                  Privacy Policies.
                </AppText>
              </AppText>
            )}

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
            {!showMoreOptions && (
              <>
                <AppTouchableOpacity onPress={onMoreOptionsPress}>
                  <AppText
                    style={[
                      styles.text,
                      {
                        fontSize: 16,
                        marginTop: 13,
                        padding: 13,
                      },
                    ]}
                  >
                    More Options
                  </AppText>
                </AppTouchableOpacity>
              </>
            )}

            {/* :: Other LogIn Options  */}
            {showMoreOptions && (
              <>
                {/* //:: facebook LogIn  */}
                <AppTouchableOpacity
                  onPress={onFacebookLogInPress}
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

                {/* //:: LinkedIn */}
                <AppTouchableOpacity
                  onPress={onLinkedInLogInPress}
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

                {/* :: Log In with Email/Phone  */}
                <View style={{ marginVertical: 8 }}>
                  <AppText style={[styles.text]}>
                    Log In With{" "}
                    <AppText
                      style={[styles.text, { color: "red" }]}
                      onPress={onEmailOrPhoneTextTouch}
                    >
                      Email / Phone
                    </AppText>
                  </AppText>

                  <AppText style={[styles.text]}>
                    Don't have an account ?{" "}
                    <AppText
                      style={[styles.text, { color: "red" }]}
                      onPress={onCreateOneTextTouch}
                    >
                      Create One
                    </AppText>
                  </AppText>
                </View>
              </>
            )}
          </View>
          {/* ////////////////// :: sub: Body ///////////////////// */}
        </View>
      </AppScreen>
    </>
  );
}

const styles = StyleSheet.create({
  buttonTextStyle: {
    color: AppColors.primaryBlack,
    fontFamily: "SemiBold",
    fontSize: 15,
    textTransform: "uppercase",
  },

  container: {
    flex: 1,
    marginHorizontal: 12,
    alignItems: "center",
    justifyContent: "space-between",
  },

  logo: {
    width: width * 0.8,
    marginTop: width * 0.35,
  },

  optionsContainer: {
    width: "100%",
    marginBottom: width * 0.1,
    padding: width * 0.05,
  },

  screen: {
    backgroundColor: AppColors.primaryWhite,
    flex: 1,
    width: width,
  },

  signInOptionContainer: {
    borderRadius: 100,
    backgroundColor: AppColors.primaryWhite,
    elevation: 10,
    justifyContent: "flex-start",
    marginVertical: 14,
    padding: 12,
    paddingHorizontal: 18,
  },

  text: {
    textAlign: "center",
    fontFamily: "SemiBold",
    fontSize: 14,
    marginHorizontal: 8,
  },
});
export default WelcomeScreen;

