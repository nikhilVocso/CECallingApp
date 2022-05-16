import React, { useState } from "react";
import { View, StyleSheet, Dimensions, Switch, FlatList } from "react-native";
///////////////////////////////////////////////////////////////////
import AppColors from "../../Config/AppColors";
import AppText from "../AppComponents/AppText";
import AppButton from "../AppComponents/AppButton";
import AppTouchableHighlight from "../AppComponents/AppTouchableHighlight";
import AppTouchableOpacity from "../AppComponents/AppTouchableOpacity";
import Schedule from "./Schedule";
///////////////////////////////////////////////////////////////////
const { width, height } = Dimensions.get("screen");
///////////////////////////////////////////////////////////////////
function AppSetSchedule({ day, id, scheduleData }) {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.scheduleContainer}>
          <View style={styles.headContainer}>
            <AppText style={[styles.primaryText]}>{day}</AppText>
            {isEnabled ? (
              <Schedule scheduleData={scheduleData} />
            ) : (
              <AppText style={[styles.ternaryText]}>Closed</AppText>
            )}
          </View>
          <Switch
            trackColor={{
              false: AppColors.secondaryBlack,
              true: AppColors.primaryGreen,
            }}
            thumbColor={AppColors.primaryWhite}
            ios_backgroundColor={AppColors.secondaryBlack}
            onValueChange={toggleSwitch}
            value={isEnabled}
            style={{ transform: [{ scaleX: 1.1 }, { scaleY: 1.1 }] }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "yellow",
    width: "100%",
  },

  headContainer: {
    // backgroundColor: "red",
    flex: 1,
  },

  primaryText: {
    color: "black",
    fontFamily: "SemiBold",
    fontSize: 18,
  },

  scheduleContainer: {
    // backgroundColor: "orange",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },

  secondaryText: {
    color: "black",
    fontFamily: "SemiBold",
    fontSize: 20,
  },

  ternaryText: {
    color: "black",
    fontFamily: "SemiBold",
    fontSize: 14,
  },

  fourthText: {
    color: "black",
    fontFamily: "SemiBold",
    fontSize: 16,
  },
});
export default AppSetSchedule;
