import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { List } from "react-native-paper";
//sub: App Component
import AppScreen from "../AppComponents/AppScreen";
import AppColors from "../../Config/AppColors";
import AppTouchableHighlight from "../AppComponents/AppTouchableHighlight";
import AppTouchableOpacity from "../AppComponents/AppTouchableOpacity";
import AppText from "../AppComponents/AppText";
import AppComponentHorizontalSeparator from "../AppComponents/AppComponentHorizontalSeparator";
//sub: Extra
const { width, height } = Dimensions.get("screen");

function ScheduleCard({
  day = "monday",
  daySchedule = [
    {
      from: "11:00AM",
      to: "05:00PM",
    },
    {
      from: "11:30AM",
      to: "06:00PM",
    },
  ],
}) {
  return (
    <>
      <View style={[styles.container]}>
        {/* ///////////////// schedule /////////////////// */}
        <List.Section>
          <List.Accordion
            title={day}
            titleStyle={styles.title}
            style={{ backgroundColor: "white", padding: 0 }}
          >
            {daySchedule.map((item) => (
              <View style={{ flexDirection: "row" }}>
                <AppText style={styles.text}>{item.from}</AppText>
                <AppText style={styles.text}> - </AppText>
                <AppText style={styles.text}>{item.to}</AppText>
              </View>
            ))}
          </List.Accordion>
          <AppComponentHorizontalSeparator />
        </List.Section>
        {/* ///////////////// schedule /////////////////// */}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "yellow",
    flex: 1,
    width: "100%",
  },

  screen: {
    backgroundColor: "red",
    flex: 1,
    width: width,
  },

  text: {
    // backgroundColor: "yellow",
    color: AppColors.primaryBlack,
    fontSize: 16,
    fontFamily: "Medium",
    textTransform: "capitalize",
    padding: 15,
  },

  title: {
    color: AppColors.primaryBlack,
    fontSize: 16,
    fontFamily: "SemiBold",
    textTransform: "capitalize",
    marginLeft: 6,
  },
});
export default ScheduleCard;
