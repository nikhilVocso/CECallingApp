import React from "react";
import { View, StyleSheet, Dimensions, ScrollView, Image } from "react-native";
import { TextInput } from "react-native-paper";
/////////////////////////////////////////////////////////////////////////////////////
import AppButton from "../../Components/AppComponents/AppButton";
import AppColors from "../../Config/AppColors";
import AppScreen from "../../Components/AppComponents/AppScreen";
import AppText from "../../Components/AppComponents/AppText";
import AppTouchableOpacity from "../../Components/AppComponents/AppTouchableOpacity";
import AppNavBar from "../../Components/AppComponents/AppNavBar";
/////////////////////////////////////////////////////////////////////////////////////
const { width } = Dimensions.get("screen");
/////////////////////////////////////////////////////////////////////////////////////
function SignUpScreen({ navigation }) {
  const [username, setUserName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");

  const onRegisterButtonPressed = () => {
    console.log("on Register button pressed");
    navigation.navigate("ConfirmationMailSendScreen");
  };

  const onClickHereTextTouched = () => {
    console.log("on create one text pressed");
    navigation.navigate("WelcomeScreen");
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
      <AppScreen style={styles.screen}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          stickyHeaderIndices={[0]}
        >
          {/* ///////////// sub: Header /////////////// */}
          <AppNavBar
            navbarTitleText="Create an account"
            navbarContainerStyle={[styles.appNavBar]}
          />
          {/* ///////////// sub: Header /////////////// */}
          <View style={[styles.container]}>
            <View style={[styles.signInSingUpContainer]}>
              {/* :: username  */}
              <TextInput
                activeUnderlineColor={AppColors.primaryBlack}
                label="Username"
                onChangeText={(username) => setUserName(username)}
                style={[styles.textInput]}
                value={username}
              />
              {/* :: Email */}
              <TextInput
                activeUnderlineColor={AppColors.primaryBlack}
                label="Email"
                onChangeText={(email) => setEmail(email)}
                style={[styles.textInput]}
                value={email}
              />
              {/* :: Phone */}
              <TextInput
                activeUnderlineColor={AppColors.primaryBlack}
                label="Phone"
                onChangeText={(phone) => setPhone(phone)}
                style={[styles.textInput]}
                value={phone}
              />
              {/* :: Password */}
              <TextInput
                activeUnderlineColor={AppColors.primaryBlack}
                label="Password"
                onChangeText={(password) => setPassword(password)}
                style={[styles.textInput]}
                value={password}
              />
              {/* :: Confirm Password */}
              <TextInput
                activeUnderlineColor={AppColors.primaryBlack}
                label="Confirm Password"
                onChangeText={(confirmPassword) =>
                  setConfirmPassword(confirmPassword)
                }
                style={[styles.textInput]}
                value={confirmPassword}
              />

              {/* :: Register Button Pressed */}
              <AppTouchableOpacity onPress={onRegisterButtonPressed}>
                <AppButton
                  ContainerStyle={{
                    borderRadius: 100,
                    elevation: 10,
                    marginVertical: 14,
                  }}
                  textStyle={styles.buttonTextStyle}
                  title="Register"
                ></AppButton>
              </AppTouchableOpacity>
              {/* :: Terms Of Use */}
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
            {/* //////////// sub: Header ////////////// */}

            {/* //////////// sub: Footer ////////////// */}
            <View style={styles.footerStyle}>
              <AppText style={[styles.footerText, { marginVertical: 0 }]}>
                Back To Welcome Screen?
              </AppText>
              <AppTouchableOpacity onPress={onClickHereTextTouched}>
                <AppText
                  style={[
                    styles.footerText,
                    { color: "red", marginVertical: 0 },
                  ]}
                >
                  Click Here
                </AppText>
              </AppTouchableOpacity>
            </View>
            {/* //////////// sub: Footer ////////////// */}
          </View>
        </ScrollView>
      </AppScreen>
    </>
  );
}

/////////////////////////////////////////////////////////////////////////////////
const styles = StyleSheet.create({
  byRegisteringText: {
    fontFamily: "SemiBold",
    fontSize: 16,
    marginTop: 12,
    paddingHorizontal: 12,
    textAlign: "center",
  },

  bodyContainer: {
    marginVertical: 25,
    width: "90%",
  },

  codeTextInput: {
    backgroundColor: AppColors.primaryWhite,
    fontFamily: "Bold",
    fontSize: 18,
    height: width * 0.15,
    marginBottom: 18,
    width: "100%",
  },

  container: {
    alignItems: "center",
  },

  footerStyle: {
    alignItems: "center",
    flexDirection: "column",
    marginVertical: 24,
  },

  footerText: {
    fontFamily: "SemiBold",
    fontSize: 16,
    marginVertical: 10,
  },

  appNavBar: {
    marginBottom: 12,
  },

  logoContainer: {
    height: width * 0.2,
    marginBottom: 25,
    marginTop: 50,
    width: width * 0.5,
  },

  screen: {
    backgroundColor: AppColors.primaryWhite,
    flex: 1,
    width: width,
  },

  signInSingUpContainer: {
    width: "90%",
  },

  textInput: {
    backgroundColor: AppColors.primaryWhite,
    marginVertical: 12,
    width: "100%",
  },
});
export default SignUpScreen;
