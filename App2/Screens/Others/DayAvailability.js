import React from "react";
import { View, StyleSheet, Image, Dimensions, Button } from "react-native";
////////////////////////////////////////////////////////////////////////////////
import AppScreen from "../../Components/AppComponents/AppScreen";
import AppText from "../../Components/AppComponents/AppText";
import AppColors from "../../Config/AppColors";
import AppButton from "../../Components/AppComponents/AppButton";
////////////////////////////////////////////////////////////////////////////////
const { width, height } = Dimensions.get("screen");
////////////////////////////////////////////////////////////////////////////////

function DayAvailability(props) {
  return (
    <>
      <AppScreen style={styles.screen}>
        <Image
          source={require("../../Assets/Clock.png")}
          style={styles.image}
        />
        <AppText style={styles.text}>
          nikhil menan accepts calls during these slots
        </AppText>
        <View style={styles.scheduleContainer}>
          <AppText>Mon</AppText>
          <AppText>Tue</AppText>
        </View>
        <Button title="Okay" />
      </AppScreen>
    </>
  );
}

////////////////////////////////////////////////////////////////////////////////

const styles = StyleSheet.create({
  container: {
    backgroundColor: "gray",
    width: "100%",
    height: "100%",
    justifyContent: "space-around",
    alignItems: "center",
  },

  image: {
    backgroundColor: "blue",
    width: width * 0.5,
    height: width * 0.5,
    borderRadius: 100,
    borderWidth: 5,
    borderColor: "red",
  },

  screen: {
    backgroundColor: "red",
    flex: 1,
  },
});
export default DayAvailability;
