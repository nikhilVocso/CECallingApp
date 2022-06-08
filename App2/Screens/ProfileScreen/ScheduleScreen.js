import React from "react";
import { Dimensions, FlatList, StyleSheet, View } from "react-native";
//sub: App Component
import AppScreen from "../../Components/AppComponents/AppScreen";
import AppTouchableHighlight from "../../Components/AppComponents/AppTouchableHighlight";
import AppTouchableOpacity from "../../Components/AppComponents/AppTouchableOpacity";
import AppColors from "../../Config/AppColors";
import AppText from "../../Components/AppComponents/AppText";
import ScheduleCard from "../../Components/Others/ScheduleCard";
import AppComponentHorizontalSeparator from "../../Components/AppComponents/AppComponentHorizontalSeparator";
//sub: Extra
const { width, height } = Dimensions.get("screen");

const data = [
  {
    day: "Monday",
    id: 1,
    schedule: [
      {
        from: "11:00AM",
        to: "05:00PM",
      },
      {
        from: "11:00AM",
        to: "05:00PM",
      },
    ],
  },
  {
    day: "Tueday",
    id: 2,
    schedule: [
      {
        from: "11:00AM",
        to: "05:00PM",
      },
      {
        from: "11:00AM",
        to: "05:00PM",
      },
    ],
  },
  {
    day: "Wednesday",
    id: 3,
    schedule: [
      {
        from: "11:00AM",
        to: "05:00PM",
      },
      {
        from: "11:00AM",
        to: "05:00PM",
      },
      {
        from: "11:00AM",
        to: "05:00PM",
      },
    ],
  },
  {
    day: "Thursday",
    id: 4,
    schedule: [
      {
        from: "11:00AM",
        to: "05:00PM",
      },
      {
        from: "11:00AM",
        to: "05:00PM",
      },
    ],
  },
  {
    day: "Friday",
    id: 5,
    schedule: [
      {
        from: "11:00AM",
        to: "05:00PM",
      },
      {
        from: "11:00AM",
        to: "05:00PM",
      },
      {
        from: "11:00AM",
        to: "05:00PM",
      },
    ],
  },
  {
    day: "Saturday",
    id: 6,
    schedule: [
      {
        from: "11:00AM",
        to: "05:00PM",
      },
    ],
  },
  {
    day: "Sunday",
    id: 7,
    schedule: [
      {
        from: "11:00AM",
        to: "05:00PM",
      },
      {
        from: "11:00AM",
        to: "05:00PM",
      },
      {
        from: "11:00AM",
        to: "05:00PM",
      },
      {
        from: "11:00AM",
        to: "05:00PM",
      },
    ],
  },
];

function ScheduleScreen({}) {
  return (
    <>
      <View style={[styles.container]}>
        {/* ///////////////// sub: next schedule /////////////////// */}
        <View style={[styles.nextScheduleContainer]}>
          <View style={[styles.titleContainer]}>
            <AppText
              style={[
                styles.text,
                {
                  fontFamily: "SemiBold",
                  textDecorationLine: "underline",
                  fontSize: 16,
                },
              ]}
            >
              Next Schedule
            </AppText>
          </View>
          <View style={[styles.nextSchedule]}>
            <AppText style={styles.text}>{data[0].schedule[0].from}</AppText>
            <AppText style={styles.text}> - </AppText>
            <AppText style={styles.text}>{data[0].schedule[0].to}</AppText>
          </View>
        </View>
        <AppComponentHorizontalSeparator />
        {/* ///////////////// sub: next schedule /////////////////// */}
        {/* ///////////////// sub: schedule /////////////////// */}
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <>
              <ScheduleCard day={item.day} daySchedule={item.schedule} />
            </>
          )}
        />
        {/* ///////////////// sub: schedule /////////////////// */}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.primaryWhite,
    flex: 1,
    width: "100%",
    padding: 12,
  },

  nextScheduleContainer: {
    alignItems: "center",
    marginBottom: width * 0.01,
  },

  nextSchedule: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
    paddingHorizontal: width * 0.1,
    paddingVertical: width * 0.02,
  },

  titleContainer: {
    width: "100%",
    alignItems: "center",
    paddingVertical: width * 0.02,
  },

  text: {
    fontSize: 20,
    fontFamily: "Regular",
  },
});
export default ScheduleScreen;
