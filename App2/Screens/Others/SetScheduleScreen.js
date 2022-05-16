import React from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  Image,
  FlatList,
  ScrollView,
} from "react-native";
////////////////////////////////////////////////////////////////////////////////////////////////////
import AppScreen from "../../Components/AppComponents/AppScreen";
import AppText from "../../Components/AppComponents/AppText";
import AppSchedule from "../../Components/ScheduleCardComponent/AppSchedule";
import AppSetSchedule from "../../Components/ScheduleCardComponent/AppSetSchedule";
import AppColors from "../../Config/AppColors";
import AppComponentHorizontalSeparator from "../../Components/AppComponents/AppComponentHorizontalSeparator";
import ScheduleScreenHeader from "../../Components/ScheduleCardComponent/ScheduleScreenHeader";
import AppTouchableOpacity from "../../Components/AppComponents/AppTouchableOpacity";
import AppTouchableHighlight from "../../Components/AppComponents/AppTouchableHighlight";
import AppButton from "../../Components/AppComponents/AppButton";
import AppNavBar from "../../Components/AppComponents/AppNavBar";
////////////////////////////////////////////////////////////////////////////////////////////////////
const { width, height } = Dimensions.get("screen");

const scheduleData = [
  {
    day: "Monday",
    id: 1,
    schedule: [
      {
        from: "10:00",
        to: "11:00",
        id: 1,
      },
    ],
  },
  {
    day: "Tuesday",
    id: 2,
    schedule: [
      {
        from: "10:00",
        to: "11:00",
        id: 1,
      },
      {
        from: "11:00",
        to: "12:00",
        id: 2,
      },
    ],
  },
  {
    day: "Wednesday",
    id: 3,
    schedule: [
      {
        from: "10:00",
        to: "11:00",
        id: 1,
      },
      {
        from: "11:00",
        to: "12:00",
        id: 2,
      },
      {
        from: "12:00",
        to: "01:00",
        id: 3,
      },
    ],
  },
  {
    day: "Thursday",
    id: 4,
    schedule: [
      {
        from: "10:00",
        to: "11:00",
        id: 1,
      },
      {
        from: "11:00",
        to: "12:00",
        id: 2,
      },
      {
        from: "12:00",
        to: "01:00",
        id: 3,
      },
      {
        from: "12:00",
        to: "01:00",
        id: 4,
      },
    ],
  },
  {
    day: "Friday",
    id: 5,
    schedule: [
      {
        from: "10:00",
        to: "11:00",
        id: 1,
      },
      {
        from: "11:00",
        to: "12:00",
        id: 2,
      },
      {
        from: "12:00",
        to: "01:00",
        id: 3,
      },
      {
        from: "12:00",
        to: "01:00",
        id: 4,
      },
      {
        from: "12:00",
        to: "01:00",
        id: 5,
      },
    ],
  },
  {
    day: "Saturday",
    id: 6,
    schedule: [
      {
        from: "10:00",
        to: "11:00",
        id: 1,
      },
      {
        from: "11:00",
        to: "12:00",
        id: 2,
      },
      {
        from: "12:00",
        to: "01:00",
        id: 3,
      },
      {
        from: "12:00",
        to: "01:00",
        id: 4,
      },
      {
        from: "12:00",
        to: "01:00",
        id: 5,
      },
      {
        from: "12:00",
        to: "01:00",
        id: 6,
      },
    ],
  },
  {
    day: "Sunday",
    id: 7,
    schedule: [
      {
        from: "10:00",
        to: "11:00",
        id: 1,
      },
      {
        from: "11:00",
        to: "12:00",
        id: 2,
      },
      {
        from: "12:00",
        to: "01:00",
        id: 3,
      },
      {
        from: "12:00",
        to: "01:00",
        id: 4,
      },
      {
        from: "12:00",
        to: "01:00",
        id: 5,
      },
      {
        from: "12:00",
        to: "01:00",
        id: 6,
      },
      {
        from: "12:00",
        to: "01:00",
        id: 7,
      },
    ],
  },
];
////////////////////////////////////////////////////////////////////////////////////////////////////
function SetScheduleScreen({ navigation }) {
  const onSkipButtonPressed = () => {
    console.log("on skip button pressed");
    navigation.navigate("HomeScreen");
  };

  const onNextButtonPressed = () => {
    console.log("on next button pressed");
    navigation.navigate("HomeScreen");
  };

  return (
    <>
      <AppScreen style={styles.screen}>
        <ScrollView stickyHeaderIndices={[0]}>
          <AppNavBar navbarTitleText="Set Schedule Screen" />
          <View style={styles.container}>
            <ScheduleScreenHeader />
            <View style={{ marginBottom: 25 }}>
              <FlatList
                data={scheduleData}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                  <>
                    <View style={{ margin: 15 }}>
                      <AppSetSchedule
                        day={item.day}
                        id={item.id}
                        scheduleData={item.schedule}
                      />
                    </View>
                    <AppComponentHorizontalSeparator />
                  </>
                )}
              />
            </View>
          </View>
          {/* //////////// sub: Footer ///////////// */}
          <View style={[styles.buttonContainer]}>
            <AppTouchableOpacity
              style={[styles.buttonContainerTouch]}
              onPress={onSkipButtonPressed}
            >
              <AppButton
                ContainerStyle={[styles.buttonContainerStyle]}
                title="Skip"
                textStyle={[styles.buttonText]}
                style={[styles.button]}
              />
            </AppTouchableOpacity>
            <AppTouchableOpacity
              style={[styles.buttonContainerTouch]}
              onPress={onNextButtonPressed}
            >
              <AppButton
                ContainerStyle={[
                  styles.buttonContainerStyle,
                  { backgroundColor: AppColors.primaryBlack },
                ]}
                title="Next"
                textStyle={[
                  styles.buttonText,
                  { color: AppColors.primaryWhite },
                ]}
                style={[styles.button]}
              />
            </AppTouchableOpacity>
          </View>
          {/* //////////// sub: Footer ///////////// */}
        </ScrollView>
      </AppScreen>
    </>
  );
}
////////////////////////////////////////////////////////////////////////////////////////////////////
const styles = StyleSheet.create({
  buttonContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    // marginTop: 32,
    marginBottom: 12,
    paddingHorizontal: 6,
  },

  buttonContainerStyle: {
    borderColor: AppColors.primaryBlack,
    borderRadius: 100,
    borderWidth: 2,
    backgroundColor: "transparent",
    marginVertical: 8,
    padding: 10,
  },

  buttonContainerTouch: {
    width: "42%",
  },

  buttonText: {
    color: AppColors.primaryBlack,
    fontSize: 16,
    fontFamily: "SemiBold",
  },

  container: {
    width: width,
  },

  screen: {
    backgroundColor: AppColors.primaryWhite,
  },
});
export default SetScheduleScreen;
