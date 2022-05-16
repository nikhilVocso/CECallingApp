import React from "react";
import { View, StyleSheet, Dimensions, ScrollView, Image } from "react-native";
import { TextInput } from "react-native-paper";
/////////////////////////////////////////////////////////////////////////////////////
import AppText from "../AppComponents/AppText";
import AppButton from "../AppComponents/AppButton";
import AppTouchableOpacity from "../AppComponents/AppTouchableOpacity";
import AppScreen from "../AppComponents/AppScreen";
/////////////////////////////////////////////////////////////////////////////////////
const { width } = Dimensions.get("screen");
/////////////////////////////////////////////////////////////////////////////////////

function SocialSignInOptions({
  onGoogleSignInPressed,
  onFacebookSignInPressed,
  onInstagramSignInPressed,
  onLinkedInSignInPressed,
  onEmailOrPhoneButtonPressed,
  type,
}) {
  return (
    <>
      <View>
        {/* :: Sign In with Google  */}
        {onGoogleSignInPressed && (
          <AppTouchableOpacity onPress={onGoogleSignInPressed}>
            <AppButton
              IconImage={require("../../Assets/google.png")}
              title={`${type} with google`}
              ContainerStyle={[
                styles.signInOptionContainer,
                { backgroundColor: "#dd4d4a" },
              ]}
              iconImageStyle={{ borderRadius: 0, marginHorizontal: 5 }}
            />
          </AppTouchableOpacity>
        )}

        {/* :: Sign In with Facebook  */}
        {onFacebookSignInPressed && (
          <AppTouchableOpacity onPress={onFacebookSignInPressed}>
            <AppButton
              IconImage={require("../../Assets/facebook2.png")}
              title={`${type} with facebook`}
              ContainerStyle={[
                styles.signInOptionContainer,
                { backgroundColor: "#4765a9" },
              ]}
              iconImageStyle={{ borderRadius: 0, marginHorizontal: 5 }}
            />
          </AppTouchableOpacity>
        )}

        {/* :: Sign In with Instagram */}
        {onInstagramSignInPressed && (
          <AppTouchableOpacity onPress={onInstagramSignInPressed}>
            <AppButton
              IconImage={require("../../Assets/instagram2.png")}
              title={`${type} with instagram`}
              ContainerStyle={[
                styles.signInOptionContainer,
                { backgroundColor: "#ff0000" },
              ]}
              iconImageStyle={{ borderRadius: 0, marginHorizontal: 5 }}
            />
          </AppTouchableOpacity>
        )}

        {/* :: Sign In with LinkedIn  */}
        {onLinkedInSignInPressed && (
          <AppTouchableOpacity onPress={onLinkedInSignInPressed}>
            <AppButton
              IconImage={require("../../Assets/linkedIn2.png")}
              title={`${type} with linkedIn`}
              ContainerStyle={[
                styles.signInOptionContainer,
                { backgroundColor: "#0072b1" },
              ]}
              iconImageStyle={{ borderRadius: 0, marginHorizontal: 5 }}
            />
          </AppTouchableOpacity>
        )}

        {/* :: Sign In with Email / Phone  */}
        {onEmailOrPhoneButtonPressed && (
          <AppTouchableOpacity onPress={onEmailOrPhoneButtonPressed}>
            <AppButton
              IconImage={require("../../Assets/mail.png")}
              title={`${type} with Email / Phone`}
              ContainerStyle={[
                styles.signInOptionContainer,
                { backgroundColor: "#dd4d4a" },
              ]}
              iconImageStyle={{ borderRadius: 0, marginHorizontal: 5 }}
            />
          </AppTouchableOpacity>
        )}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  signInOptionContainer: {
    padding: 12,
    justifyContent: "flex-start",
    paddingHorizontal: 18,
    borderRadius: 100,
    marginVertical: 8,
    elevation: 10,
  },
});
export default SocialSignInOptions;
