import React from "react";
import { View, StyleSheet, Image, requireNativeComponent } from "react-native";
/////////////////////////////////////////////////////////////////////////////////////////
import AppButton from "../../Components/AppComponents/AppButton";
import AppText from "../../Components/AppComponents/AppText";
import AppScreen from "../../Components/AppComponents/AppScreen";
import AppColors from "../../Config/AppColors";
import AppTouchableOpacity from "../../Components/AppComponents/AppTouchableOpacity";
/////////////////////////////////////////////////////////////////////////////////////////

function InsufficientBalanceScreen({
  image = require("../../Assets/balance.png"),
  message = "Insufficient Balance",
  balance = 200,
  description = "you need to have atleast 1,500 credits for a min 15 minutes of video call",
}) {
  return (
    <>
      <AppScreen style={styles.screen}>
        <View style={styles.container}>
          <View style={styles.detailsContainer}>
            <Image source={image} style={[styles.image]} resizeMode="contain" />
            <View>
              <AppText style={styles.text}>{message}</AppText>
              <AppText style={[styles.text, { fontSize: 22 }]}>
                {balance}
              </AppText>
            </View>
          </View>

          <AppText
            style={[
              styles.text,
              {
                fontSize: 16,
                fontFamily: "SemiBold",
                color: AppColors.secondaryBlack,
              },
            ]}
          >
            {description}
          </AppText>
          <AppTouchableOpacity style={styles.button}>
            <AppButton title="Add credits" textStyle={styles.buttonText} />
          </AppTouchableOpacity>
        </View>
      </AppScreen>
    </>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "100%",
  },

  buttonText: {
    fontSize: 20,
    fontFamily: "SemiBold",
  },

  container: {
    backgroundColor: AppColors.primaryWhite,
    width: "80%",
    height: "80%",
    justifyContent: "space-evenly",
    alignItems: "center",
  },

  detailsContainer: {
    alignItems: "center",
  },

  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },

  screen: {
    backgroundColor: AppColors.primaryWhite,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    fontSize: 18,
    fontFamily: "Bold",
    color: AppColors.primaryBlack,
    textTransform: "capitalize",
    textAlign: "center",
  },
});
export default InsufficientBalanceScreen;
