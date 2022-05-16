import React from "react";
import { View, StyleSheet, Dimensions, ScrollView, Image } from "react-native";
import { TextInput } from "react-native-paper";
/////////////////////////////////////////////////////////////////////////////////////
import AppButton from "../../Components/AppComponents/AppButton";
import AppColors from "../../Config/AppColors";
import AppText from "../../Components/AppComponents/AppText";
import AppTouchableOpacity from "../../Components/AppComponents/AppTouchableOpacity";
import AppScreen from "../../Components/AppComponents/AppScreen";
/////////////////////////////////////////////////////////////////////////////////////
const { width } = Dimensions.get("screen");
/////////////////////////////////////////////////////////////////////////////////////

function SignInScreen({ navigation }) {
  const [text, setText] = React.useState("");

  const onSignInButtonPressed = () => {
    console.log("on sign in button pressed");
    navigation.navigate("HomeScreen");
  };

  const onForgetPasswordPressed = () => {
    console.log("on Forget Password Pressed");
    navigation.navigate("ForgetPasswordScreen");
  };

  const onCreateOneTextPressed = () => {
    console.log("on create one text pressed");
    navigation.navigate("SignUpOptionsScreen");
  };

  return (
    <>
      <AppScreen style={styles.screen}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={[styles.container]}>
            {/* //////////// sub: Header ////////////// */}
            <View style={[styles.logoContainer]}>
              <Image
                resizeMode="contain"
                source={require("../../Assets/vocso.png")}
                style={{ width: "100%", height: "100%" }}
              />
            </View>
            <View style={[styles.signInSingUpContainer]}>
              <TextInput
                activeOutlineColor={AppColors.primaryBlack}
                label="Email/Mobile Number"
                mode="outlined"
                onChangeText={(text) => setText(text)}
                style={[styles.codeTextInput]}
                value={text}
              />
              <TextInput
                activeOutlineColor={AppColors.primaryBlack}
                label="Password"
                mode="outlined"
                onChangeText={(text) => setText(text)}
                style={[styles.codeTextInput]}
                value={text}
              />
              {/* :: Sign IN Button */}
              <AppTouchableOpacity onPress={onSignInButtonPressed}>
                <AppButton
                  ContainerStyle={{ borderRadius: 100, elevation: 10 }}
                  textStyle={styles.buttonTextStyle}
                  title="Sign In"
                ></AppButton>
              </AppTouchableOpacity>
              {/* :: Forget Password Button */}
              <AppTouchableOpacity onPress={onForgetPasswordPressed}>
                <AppButton
                  ContainerStyle={{ backgroundColor: "transparent" }}
                  textStyle={[styles.buttonTextStyle, { color: "black" }]}
                  title="Forget Password ? "
                ></AppButton>
              </AppTouchableOpacity>
            </View>
            {/* //////////// sub: Header ////////////// */}

            {/* //////////// sub: Footer ////////////// */}
            <View style={styles.footerStyle}>
              <AppText style={[styles.footerText, { marginRight: 5 }]}>
                Dont't have an account?
              </AppText>
              <AppTouchableOpacity onPress={onCreateOneTextPressed}>
                <AppText style={[styles.footerText, { color: "red" }]}>
                  Create one
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

const styles = StyleSheet.create({
  bodyContainer: {
    marginVertical: 25,
    width: "90%",
  },

  codeTextInput: {
    backgroundColor: AppColors.primaryWhite,
    height: width * 0.15,
    fontFamily: "Bold",
    fontSize: 18,
    marginBottom: 18,
    width: "100%",
  },

  container: {
    alignItems: "center",
  },

  footerStyle: {
    flexDirection: "row",
    marginBottom: 32,
  },

  footerText: {
    fontFamily: "SemiBold",
    fontSize: 16,
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
});
export default SignInScreen;
