import React, { useState } from "react";
import { Dimensions, StyleSheet, ScrollView, View } from "react-native";
import { TextInput } from "react-native-paper";
import SelectableChips from "react-native-chip/SelectableChips";
///////////////////////////////////////////////////////////////////////
import AppText from "../../Components/AppComponents/AppText";
import AppScreen from "../../Components/AppComponents/AppScreen";
import AppTouchableOpacity from "../../Components/AppComponents/AppTouchableOpacity";
import AppColors from "../../Config/AppColors";
import AppButton from "../../Components/AppComponents/AppButton";
import AppSelectBox from "../../Components/AppComponents/AppSelectBox";
import AppNavBar from "../../Components/AppComponents/AppNavBar";
///////////////////////////////////////////////////////////////////////
const { width, height } = Dimensions.get("screen");
const categoryType = [
  "Nikhil",
  "Deepak",
  "Varsa",
  "Anju",
  "Kaplana",
  "Vishal",
  "Sumit",
  "Archit",
  "Shubham",
];
///////////////////////////////////////////////////////////////////////

function AddMoreDetails({ navigation }) {
  const [username, setUserName] = useState("");
  const [about, setAbout] = React.useState("");
  const [website, setWebsite] = React.useState("");

  const onBackButtonPress = () => {
    console.log("on back button press");
    navigation.goBack();
  };

  const onChangeChips = (Chips) => {
    console.log(Chips);
  };

  const onRegisterButtonPress = () => {
    console.log("Register");
    navigation.navigate("SetRatesScreen");
  };

  const onSkipButtonPress = () => {
    console.log("on Skip Button Press");
    navigation.navigate("HomeScreen");
  };

  const onTermsOfUseTouched = () => {
    console.log("on terms of use");
    navigation.navigate("TermsOfUseScreen");
  };

  const onPrivacyPolicyTouched = () => {
    console.log("privacy policy");
    navigation.navigate("PrivacyPolicy");
  };

  return (
    <>
      <AppScreen style={[styles.screen]}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          stickyHeaderIndices={[0]}
        >
          {/* ///////////// sub: Header /////////////// */}
          <AppNavBar
            navbarTitleText="Become a Professional ?"
            navbarContainerStyle={[styles.appNavBar]}
            onBackButtonPress={onBackButtonPress}
          />
          {/* ///////////// sub: Header /////////////// */}

          {/* ///////////// sub: Body /////////////// */}
          <View style={[styles.bodyContainer]}>
            {/* :: UserName  */}
            <TextInput
              activeUnderlineColor={AppColors.primaryBlack}
              label="username"
              onChangeText={(username) => setUserName(username)}
              style={[styles.textInput]}
              value={username}
            />

            {/* :: About  */}
            <TextInput
              activeUnderlineColor={AppColors.primaryBlack}
              label="About"
              value={about}
              onChangeText={(about) => setAbout(about)}
              style={[styles.textInput]}
              multiline={true}
            />
            {/* :: Website  */}
            <TextInput
              activeUnderlineColor={AppColors.primaryBlack}
              label="Enter Your Website"
              onChangeText={(website) => setWebsite(website)}
              style={[styles.textInput]}
              value={website}
            />
            {/* :: Interest Chips  */}
            <AppText style={[styles.text]}>Select Your Categories</AppText>
            <SelectableChips
              initialChips={categoryType}
              onChangeChips={onChangeChips}
              alertRequired={false}
              chipStyle={[styles.chipsStyle]}
              valueStyle={[styles.valueStyle]}
              chipStyleSelected={[styles.chipStyleSelected]}
              valueStyleSelected={[styles.valueStyleSelected]}
            />
            {/* :: Register */}
            <AppTouchableOpacity
              onPress={onRegisterButtonPress}
              style={{ width: "100%" }}
            >
              <AppButton
                ContainerStyle={{
                  borderRadius: 100,
                  elevation: 10,
                  marginVertical: 14,
                }}
                textStyle={styles.buttonTextStyle}
                title="Be A Professional"
              ></AppButton>
            </AppTouchableOpacity>
            {/* :: Skip Button */}
            <AppTouchableOpacity
              onPress={onSkipButtonPress}
              style={{ width: "100%" }}
            >
              <AppButton
                ContainerStyle={{
                  backgroundColor: "transparent",
                  borderWidth: 2,
                  borderRadius: 100,
                  marginVertical: 14,
                }}
                textStyle={[
                  styles.buttonTextStyle,
                  { color: AppColors.primaryBlack },
                ]}
                title="Skip"
              ></AppButton>
            </AppTouchableOpacity>
            {/* :: Terms Of Use & Privacy Policy */}
            <AppText style={[styles.byRegisteringText]}>
              By registering, you Confirm that you accept our{" "}
              <AppText
                style={{ color: "red", fontFamily: "SemiBold" }}
                onPress={onTermsOfUseTouched}
              >
                Terms of Use
              </AppText>{" "}
              and{" "}
              <AppText
                style={{ color: "red", fontFamily: "SemiBold" }}
                onPress={onPrivacyPolicyTouched}
              >
                Privacy Policy
              </AppText>
            </AppText>
          </View>
          {/* ///////////// sub: Body /////////////// */}
        </ScrollView>
      </AppScreen>
    </>
  );
}

const styles = StyleSheet.create({
  byRegisteringText: {
    fontFamily: "Medium",
    marginTop: 12,
    textAlign: "center",
  },

  bodyContainer: {
    alignItems: "center",
    padding: width * 0.05,
  },

  buttonTextStyle: {
    color: AppColors.primaryWhite,
    fontSize: 16,
    fontFamily: "SemiBold",
  },

  chipsStyle: {
    backgroundColor: AppColors.primaryWhite,
    borderColor: AppColors.primaryBlack,
  },

  chipStyleSelected: {
    backgroundColor: AppColors.primaryBlack,
  },

  screen: {
    backgroundColor: AppColors.primaryWhite,
    // backgroundColor: "red",
    flex: 1,
    width: width,
  },

  text: {
    fontSize: 18,
    fontFamily: "SemiBold",
    marginVertical: width * 0.05,
    borderBottomWidth: 2,
  },

  textInput: {
    backgroundColor: AppColors.primaryWhite,
    marginVertical: width * 0.035,
    width: "100%",
  },

  valueStyle: {
    color: AppColors.primaryBlack,
    fontSize: 18,
    fontWeight: "700",
  },

  valueStyleSelected: {
    color: AppColors.primaryWhite,
  },
});
export default AddMoreDetails;
