import React from "react";
import { StyleSheet, View } from "react-native";
///////////////////////////////////////////////////////////////////////////
import AppButton from "../../Components/AppComponents/AppButton";
import AppScreen from "../../Components/AppComponents/AppScreen";
import AppText from "../../Components/AppComponents/AppText";
import AppTouchableOpacity from "../../Components/AppComponents/AppTouchableOpacity";
///////////////////////////////////////////////////////////////////////////
function ConfirmationMailSendScreen({ navigation }) {
  const onBackButtonPressed = () => {
    console.log("on back button pressed");
    navigation.navigate("SignInScreen");
  };

  return (
    <>
      <AppScreen style={[styles.screen]}>
        <View style={[styles.container]}>
          <AppText style={[styles.text]}>
            A confirmation mail send to your mail. Check it out
          </AppText>
          <AppTouchableOpacity onPress={onBackButtonPressed}>
            <AppButton title="Click Here to get Back" />
          </AppTouchableOpacity>
        </View>
      </AppScreen>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "green",
    flex: 1,
    justifyContent: "center",
  },

  screen: {
    backgroundColor: "red",
    flex: 1,
  },

  text: {
    fontFamily: "Bold",
    fontSize: 24,
  },
});
export default ConfirmationMailSendScreen;
