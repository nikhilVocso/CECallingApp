import React from "react";
import { View, Text, StyleSheet, ScrollView, Dimensions } from "react-native";
//////////////////////////////////////////////////////////////////////////////////
// import CustomButton from "../../Components/SignInScreenComponent/CustomButton";
import AppScreen from "../../Components/AppComponents/AppScreen";
import AppTextInput from "../../Components/AppComponents/AppTextInput";
import AppTouchableHighlight from "../../Components/AppComponents/AppTouchableHighlight";
import AppTouchableOpacity from "../../Components/AppComponents/AppTouchableOpacity";
import AppButton from "../../Components/AppComponents/AppButton";
import AppText from "../../Components/AppComponents/AppText";
import AppColors from "../../Config/AppColors";
//////////////////////////////////////////////////////////////////////////////////
const { width, height } = Dimensions.get("screen");
//////////////////////////////////////////////////////////////////////////////////

export default function CookiesPolicy({ navigation }) {
  ////:: Sign In Func
  const onSignUp = () => {
    console.log("Sing Up");
    // navigation.navigate("SignUp");
  };

  const onBackToSignInButtonPressed = () => {
    console.log("on back to sign in pressed");
    navigation.navigate("WelcomeScreen");
  };

  return (
    <AppScreen style={[styles.screen]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={[styles.scrollView]}
        stickyHeaderIndices={[0]}
      >
        <View style={[styles.titleContainer]}>
          <AppText style={[styles.title]}>Cookies Policy</AppText>
        </View>
        <View style={[styles.container]}>
          <Text style={[styles.subTitle]}>
            We know it’s tempting to skip these Terms of Service, but it’s
            important to establish what you can expect from us as you use Google
            services, and what we expect from you.
          </Text>
          <AppText style={[styles.subTitle]}>
            We know it’s tempting to skip these Terms of Service, but it’s
            important to establish what you can expect from us as you use Google
            services, and what we expect from you.
          </AppText>
          <Text style={[styles.details, { marginBottom: 12 }]}>
            These Terms of Service reflect the way Google’s business works, the
            laws that apply to our company, and certain things we’ve always
            believed to be true. As a result, these Terms of Service help define
            Google’s relationship with you as you interact with our services.
            For example, these terms include the following topic headings:
          </Text>
          <Text style={styles.details}>
            What you can expect from us, which describes how we provide and
            develop our services What we expect from you, which establishes
            certain rules for using our services Content in Google services,
            which describes the intellectual property rights to the content you
            find in our services — whether that content belongs to you, Google,
            or others In case of problems or disagreements, which describes
            other legal rights you have, and what to expect in case someone
            violates these terms
          </Text>
          <Text style={styles.details}>
            What you can expect from us, which describes how we provide and
            develop our services What we expect from you, which establishes
            certain rules for using our services Content in Google services,
            which describes the intellectual property rights to the content you
            find in our services — whether that content belongs to you, Google,
            or others In case of problems or disagreements, which describes
            other legal rights you have, and what to expect in case someone
            violates these terms
          </Text>
          <Text style={styles.details}>
            What you can expect from us, which describes how we provide and
            develop our services What we expect from you, which establishes
            certain rules for using our services Content in Google services,
            which describes the intellectual property rights to the content you
            find in our services — whether that content belongs to you, Google,
            or others In case of problems or disagreements, which describes
            other legal rights you have, and what to expect in case someone
            violates these terms
          </Text>
          <Text style={[styles.details, { marginBottom: 0 }]}>
            What you can expect from us, which describes how we provide and
            develop our services What we expect from you, which establishes
            certain rules for using our services Content in Google services,
            which describes the intellectual property rights to the content you
            find in our services — whether that content belongs to you, Google,
            or others In case of problems or disagreements, which describes
            other legal rights you have, and what to expect in case someone
            violates these terms
          </Text>
          {/* :: Back To Sign In Button */}
          <AppTouchableOpacity
            onPress={onBackToSignInButtonPressed}
            style={[styles.buttonContainer]}
          >
            <AppButton
              title="Back To Sign In"
              textStyle={[
                styles.buttonTextStyle,
                { color: AppColors.primaryWhite },
              ]}
              ContainerStyle={[
                styles.buttonContainerStyle,
                { borderWidth: 2, borderColor: AppColors.primaryBlack },
              ]}
            ></AppButton>
          </AppTouchableOpacity>
        </View>
      </ScrollView>
    </AppScreen>
  );
}
//////////////////////////////////////////////////////////////////////////////////
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 18,
  },

  buttonContainerStyle: {
    padding: 12,
  },

  buttonContainer: {
    width: "100%",
    marginBottom: 18,
  },

  buttonTextStyle: {
    fontSize: 18,
  },

  details: {
    fontSize: 16,
    textAlign: "justify",
  },

  screen: {
    backgroundColor: AppColors.primaryWhite,
    flex: 1,
    width: width,
  },

  titleContainer: {
    backgroundColor: AppColors.secondaryWhite,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
    padding: 12,
  },

  title: {
    fontSize: 24,
    fontFamily: "SemiBold",
    textAlign: "center",
  },

  subTitle: {
    fontSize: 16,
    fontFamily: "SemiBold",
    marginBottom: 12,
    textAlign: "justify",
  },

  scrollView: {},
});
