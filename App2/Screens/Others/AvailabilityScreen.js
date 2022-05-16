import React from "react";
import { View, StyleSheet, Dimensions, Image, ScrollView } from "react-native";
////////////////////////////////////////////////////////////////////////////////////////
import AppScreen from "../../Components/AppComponents/AppScreen";
import AppText from "../../Components/AppComponents/AppText";
import AppColors from "../../Config/AppColors";
import AppButton from "../../Components/AppComponents/AppButton";
import AppSchedule from "../../Components/ScheduleCardComponent/AppSchedule";
import AppTouchableOpacity from "../../Components/AppComponents/AppTouchableOpacity";
////////////////////////////////////////////////////////////////////////////////////////
const { width, height } = Dimensions.get("screen");
////////////////////////////////////////////////////////////////////////////////////////

function AvailabilityScreen({
  image = require("../../Assets/Clock.png"),
  name = "nikhil menan",
}) {
  return (
    <>
      <AppScreen style={styles.screen}>
        <ScrollView>
          <View style={styles.container}>
            <View style={{ alignItems: "center" }}>
              <Image source={image} style={styles.image} />
              <AppText style={styles.text}>
                <AppText>{name}</AppText> accepts calls during these slots
              </AppText>
            </View>
            <View style={styles.scheduleContainer}>
              <AppSchedule />
            </View>
            <AppTouchableOpacity style={{ alignItems: "center" }}>
              <AppButton
                title="Okay"
                textStyle={styles.buttonText}
                ContainerStyle={styles.buttonContainer}
              />
            </AppTouchableOpacity>
          </View>
        </ScrollView>
      </AppScreen>
    </>
  );
}

////////////////////////////////////////////////////////////////////////////////////////
const styles = StyleSheet.create({
  buttonContainer: {
    width: "80%",
    borderRadius: 100,
    backgroundColor: AppColors.secondaryGreen,
  },

  buttonText: {
    fontSize: 18,
    fontFamily: "SemiBold",
  },

  image: {
    width: 100,
    height: 100,
    marginVertical: 15,
  },

  text: {
    fontSize: 18,
    fontFamily: "Bold",
    color: AppColors.primaryBlack,
    textTransform: "capitalize",
    textAlign: "center",
  },
});
export default AvailabilityScreen;
