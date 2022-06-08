import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
//:: sub: App Component
import AppText from "../../Components/AppComponents/AppText";
import AppTouchableHighlight from "../../Components/AppComponents/AppTouchableHighlight";
import AppTouchableOpacity from "../../Components/AppComponents/AppTouchableOpacity";
import AppScreen from "../../Components/AppComponents/AppScreen";
import AppColors from "../../Config/AppColors";
import AppButton from "../../Components/AppComponents/AppButton";
//:: sub: Extra
const { width, height } = Dimensions.get("screen");

function ProfileDetailsScreen({ navigation }) {
  const onBackButtonPress = () => {
    console.log("on Back Button Press");
    navigation.goBack();
  };

  return (
    <>
      <AppScreen style={[styles.screen]}>
        <View style={[styles.container]}>
          <AppText style={[{ backgroundColor: "red", fontSize: 24 }]}>
            Wallet Screen
          </AppText>
          <AppTouchableOpacity
            onPress={onBackButtonPress}
            style={{ width: "100%" }}
          >
            <AppButton title="Back" />
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
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  screen: {
    backgroundColor: "red",
    flex: 1,
    width: width,
  },
});
export default ProfileDetailsScreen;
