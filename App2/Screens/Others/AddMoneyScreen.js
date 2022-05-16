import React from "react";
import { View, StyleSheet, Image } from "react-native";
/////////////////////////////////////////////////////////////////////////////////////////
import AppScreen from "../../Components/AppComponents/AppScreen";
import AppColors from "../../Config/AppColors";
import AppText from "../../Components/AppComponents/AppText";
import AppTouchableHighlight from "../../Components/AppComponents/AppTouchableHighlight";
import AppTouchableOpacity from "../../Components/AppComponents/AppTouchableOpacity";
import AppButton from "../../Components/AppComponents/AppButton";
/////////////////////////////////////////////////////////////////////////////////////////

function AddMoneyScreen({
  balance = 1500,
  description = "one ce credits equals ₹ one",
  image = require("../../Assets/rupees.png"),
  message = "Buy CE Credits",
  totalBalance = 1500,
}) {
  return (
    <>
      <AppScreen style={styles.screen}>
        <View style={styles.container}>
          <View style={styles.detailsContainer}>
            <Image source={image} style={styles.image} />
            <AppText style={styles.text}>{message}</AppText>
          </View>
          <View style={styles.creditContainer}>
            <AppText
              style={[
                styles.text,
                {
                  backgroundColor: AppColors.secondaryBlack,
                  padding: 15,
                  color: AppColors.primaryWhite,
                },
              ]}
            >
              {balance}
            </AppText>
            <AppText
              style={[
                styles.text,
                {
                  backgroundColor: AppColors.primaryYellow,
                  padding: 15,
                  marginBottom: 10,
                },
              ]}
            >
              ₹ {+totalBalance}
            </AppText>
            <AppText
              style={[
                styles.text,
                { fontSize: 14, color: AppColors.secondaryBlack },
              ]}
            >
              {description}
            </AppText>
          </View>
          <AppTouchableOpacity style={{ width: "100%" }}>
            <AppButton
              textStyle={styles.buttonText}
              ContainerStyle={styles.buttonContainer}
              title="Proceed To Pay"
            />
          </AppTouchableOpacity>
        </View>
      </AppScreen>
    </>
  );
}

/////////////////////////////////////////////////////////////////////////////////////////

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: AppColors.secondaryGreen,
  },

  buttonText: {
    fontSize: 18,
    fontFamily: "SemiBold",
  },

  container: {
    backgroundColor: AppColors.primaryWhite,
    width: "80%",
    height: "80%",
    justifyContent: "space-evenly",
    alignItems: "center",
  },

  creditContainer: {
    width: "100%",
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
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    fontSize: 22,
    fontFamily: "Bold",
    color: AppColors.primaryBlack,
    textTransform: "capitalize",
    textAlign: "center",
  },
});
export default AddMoneyScreen;
