import React from "react";
import { View, Text, StyleSheet, ScrollView, Dimensions } from "react-native";
//////////////////////////////////////////////////////////////////////////////////
import AppButton from "../../Components/AppComponents/AppButton";
import AppColors from "../../Config/AppColors";
import AppScreen from "../../Components/AppComponents/AppScreen";
import AppText from "../../Components/AppComponents/AppText";
import AppTouchableOpacity from "../../Components/AppComponents/AppTouchableOpacity";
import AppNavBar from "../../Components/AppComponents/AppNavBar";
//////////////////////////////////////////////////////////////////////////////////
const { width } = Dimensions.get("screen");
//////////////////////////////////////////////////////////////////////////////////
export default function TermsOfUseScreen({ navigation }) {
  const onBackButtonPress = () => {
    console.log("on Back button pressed");
    navigation.goBack();
  };

  return (
    <AppScreen style={[styles.screen]}>
      <ScrollView style={[styles.container]}>
        <AppNavBar
          navbarTitleText="Terms Of Use"
          onBackButtonPress={onBackButtonPress}
        />
        <View style={[styles.termsAndConditions]}>
          <AppText style={[styles.text, { fontSize: 18, fontFamily: "Bold" }]}>
            What you can expect from us, which describes how we provide and
            develop our services What we expect from you, which establishes
            certain rules for using our services Content in Google services,
            which describes the intellectual property rights to the content you
            find in our services — whether that content belongs to you, Google,
            or others In case of problems or disagreements, which describes
            other legal rights you have, and what to expect in case someone
            violates these terms
          </AppText>
          <AppText style={[styles.text]}>
            What you can expect from us, which describes how we provide and
            develop our services What we expect from you, which establishes
            certain rules for using our services Content in Google services,
            which describes the intellectual property rights to the content you
            find in our services — whether that content belongs to you, Google,
            or others In case of problems or disagreements, which describes
            other legal rights you have, and what to expect in case someone
            violates these terms
          </AppText>
          <AppText style={[styles.text]}>
            What you can expect from us, which describes how we provide and
            develop our services What we expect from you, which establishes
            certain rules for using our services Content in Google services,
            which describes the intellectual property rights to the content you
            find in our services — whether that content belongs to you, Google,
            or others In case of problems or disagreements, which describes
            other legal rights you have, and what to expect in case someone
            violates these terms
          </AppText>
        </View>
      </ScrollView>
    </AppScreen>
  );
}

//////////////////////////////////////////////////////////////////////////////////
const styles = StyleSheet.create({
  screen: {
    backgroundColor: AppColors.primaryWhite,
    flex: 1,
    width: width,
  },

  container: {
    flex: 1,
  },

  termsAndConditions: {
    alignItems: "center",
    paddingHorizontal: 18,
  },

  text: {
    fontSize: 14,
    fontFamily: "Medium",
    marginVertical: 6,
    textAlign: "justify",
  },
});
