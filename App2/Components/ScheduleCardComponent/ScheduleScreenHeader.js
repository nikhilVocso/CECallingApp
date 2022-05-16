import React from "react";
import { View, StyleSheet, Image, Dimensions } from "react-native";
/////////////////////////////////////////////////////////////////////
import AppColors from "../../Config/AppColors";
import AppText from "../AppComponents/AppText";
/////////////////////////////////////////////////////////////////////
const { width, height } = Dimensions.get("screen");
/////////////////////////////////////////////////////////////////////
function ScheduleScreenHeader({ image = require("../../Assets/Clock.png") }) {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          {/* <Image source={image} style={styles.image} /> */}
          <AppText style={[styles.titleText]}>Set Your Schedule</AppText>
          <AppText style={[styles.subTitleText]}>
            Set a perfect schedule to know the user that your are available at
            which time.
          </AppText>
        </View>
      </View>
    </>
  );
}
/////////////////////////////////////////////////////////////////////
const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.primaryWhite,
    width: "100%",
  },

  header: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 25,
    marginBottom: 20,
    marginHorizontal: 25,
  },

  image: {
    width: 100,
    height: 100,
    marginVertical: 15,
  },

  titleText: {
    fontSize: 18,
    fontFamily: "Bold",
    textAlign: "center",
    textTransform: "capitalize",
  },

  subTitleText: {
    fontSize: 16,
    fontFamily: "Medium",
    textAlign: "center",
    textTransform: "lowercase",
  },
});
export default ScheduleScreenHeader;
