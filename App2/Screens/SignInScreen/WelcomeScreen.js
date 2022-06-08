import React from "react";
import { Dimensions, Image, StyleSheet, View } from "react-native";
import ImageSlider from "react-native-image-slider";
// sub: App Component
import AppScreen from "../../Components/AppComponents/AppScreen";
import AppColors from "../../Config/AppColors";
import AppTouchableHighlight from "../../Components/AppComponents/AppTouchableHighlight";
import AppTouchableOpacity from "../../Components/AppComponents/AppTouchableOpacity";
import AppText from "../../Components/AppComponents/AppText";
import AppButton from "../../Components/AppComponents/AppButton";
import App from "../../Navigation/TabBarNavigation";
// sub: Extra
const { width, height } = Dimensions.get("screen");
const images = [
  require("../../Assets/ImageSlider1.png"),
  require("../../Assets/ImageSlider2.png"),
  // require("../../Assets/Image2.jpg"),
  // require("../../Assets/Image3.jpg"),
  // require("../../Assets/Image4.jpg"),
  // require("../../Assets/Image5.jpg"),
];

function WelcomeScreen({ navigation }) {
  const onTermsAndConditionTouch = () => {
    console.log("Terms and conditions");
    navigation.navigate("TermsOfUseScreen");
  };

  const onPrivacyPolicyTouch = () => {
    console.log("Privacy Policy");
    navigation.navigate("PrivacyPolicy");
  };

  const onContinueViaPhoneButtonPress = () => {
    console.log("continue with phone");
    navigation.navigate("AddMobileNumberScreen");
  };

  return (
    <>
      {/* <AppScreen style={[styles.screen]}> */}
      <View style={[styles.container]}>
        {/* sub: Image Slider  */}
        <View style={[styles.imageSliderContainer]}>
          <ImageSlider
            images={images}
            loopBothSides
            loop
            autoPlayWithInterval={2000}
            backgroundColor="red"
            // customButtons={() => <View></View>}
            customSlide={({ index, item }) => (
              <View key={index} style={[styles.imagesSlider]}>
                <Image
                  source={item}
                  style={[styles.images]}
                  resizeMode="contain"
                />
              </View>
            )}
          />
        </View>
        {/* sub: Log In Options */}
        <View style={[styles.logInContainer]}>
          {/* <AppText style={[styles.text]}>Have a Referral Code ?</AppText> */}
          <AppTouchableOpacity
            onPress={onContinueViaPhoneButtonPress}
            style={{ width: "100%" }}
          >
            <AppButton
              title="Continue via Phone"
              IconImage={require("../../Assets/phone.png")}
              ContainerStyle={[styles.buttonContainerStyle]}
              iconImageStyle={[styles.buttonImageStyle]}
              textStyle={[
                styles.text,
                { fontSize: 14, color: AppColors.primaryWhite },
              ]}
            />
          </AppTouchableOpacity>
          <AppText style={[styles.text]}>
            By Clicking, I accept the{" "}
            <AppText
              style={[
                styles.text,
                {
                  textDecorationLine: "underline",
                },
              ]}
              onPress={onTermsAndConditionTouch}
            >
              terms & conditions
            </AppText>
          </AppText>
          <AppText style={[styles.text, { marginTop: width * 0.04 }]}>
            © ConsultEase.com 2022
          </AppText>
        </View>
        {/* sub: Footer  */}
      </View>
      {/* </AppScreen> */}
    </>
  );
}

const styles = StyleSheet.create({
  buttonContainerStyle: {
    backgroundColor: AppColors.primaryBlack,
    marginTop: width * 0.15,
    marginBottom: width * 0.06,
    width: "80%",
    alignSelf: "center",
    padding: 12,
  },

  buttonImageStyle: {
    marginRight: 6,
    borderRadius: 0,
  },

  container: {
    flex: 1,
    width: width,
    alignItems: "center",
  },

  imageSliderContainer: {
    height: "70%",
    backgroundColor: "#A0C3D9",
    borderBottomRightRadius: 50,
    overflow: "hidden",
  },

  imagesSlider: {
    backgroundColor: AppColors.primaryWhite,
    justifyContent: "center",
    alignItems: "center",
  },

  images: {
    backgroundColor: "#A0C3D9",
    width: width,
    // height: width,
  },

  logInContainer: {
    width: "100%",
    alignItems: "center",
    paddingHorizontal: width * 0.05,
  },

  screen: {
    backgroundColor: AppColors.primaryWhite,
    flex: 1,
    width: width,
  },

  text: {
    color: AppColors.primaryBlack,
    textAlign: "center",
    fontSize: 12,
    fontFamily: "Medium",
  },
});
export default WelcomeScreen;
