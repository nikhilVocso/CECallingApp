import React from "react";
import { Dimensions, Image, View, StyleSheet } from "react-native";
///////////////////////////////////////////////////////////////////////////////////
import AppColors from "../../Config/AppColors";
import AppScreen from "../../Components/AppComponents/AppScreen";
import AppText from "../../Components/AppComponents/AppText";
///////////////////////////////////////////////////////////////////////////////////
const { width } = Dimensions.get("screen");
///////////////////////////////////////////////////////////////////////////////////

function SplashScreen({}) {
  const onPress = () => {
    console.log("navigate to welcome screen");
  };

  return (
    <>
      <AppScreen style={[styles.screen]}>
        <View style={[styles.container]}>
          <Image
            source={require("../../Assets/logo.png")}
            style={[styles.logo]}
            resizeMode="contain"
          />
          <AppText style={[styles.tagLine]}>Best Consultease App</AppText>
        </View>

        <AppText
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginHorizontal: 14,
            textAlign: "center",
          }}
          onPress={onPress}
        >
          Click Here (in future this is automatically navigate to welcome
          screen)
        </AppText>
      </AppScreen>
    </>
  );
}
///////////////////////////////////////////////////////////////////////////////////

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginBottom: 24,
  },

  logo: {
    marginBottom: 8,
  },

  screen: {
    backgroundColor: AppColors.primaryWhite,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: width,
  },

  tagLine: {
    fontSize: 16,
    fontFamily: "Medium",
  },
});
export default SplashScreen;
