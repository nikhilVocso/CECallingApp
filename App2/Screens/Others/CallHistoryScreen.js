import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";

import AppScreen from "../../Components/AppComponents/AppScreen";
import CallAndMinutes from "../../Components/Others/CallAndMinutes";
import CallCount from "../../Components/Others/CallCount";
import CallHistory from "../../Components/Others/CallHistory";
import CallsByCategory from "../../Components/Others/CallsByCategory";
import AppColors from "../../Config/AppColors";
/////////////////////////////////////////////////////
const callHistoryData = [
  {
    iconType: "call-made",
    typeResult: 0,
    subTitle: "Developer",
    charges: 250,
    date: "25 Nov 2022",
    duration: "48:22",
    id: 1,
    title: "nikhil menan",
    time: "11:30",
    idOrTotalCall: 15155454,
  },
];

function CallHistoryScreen({}) {
  return (
    <>
      <AppScreen style={styles.screen}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <CallCount isCallHistoryScreen={true} />
          <CallsByCategory />
          <CallAndMinutes />
          <CallHistory data={callHistoryData} isCallHistoryScreen={true} />
        </ScrollView>
      </AppScreen>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},

  screen: {
    backgroundColor: AppColors.secondaryWhite,
    paddingHorizontal: 15,
  },
});
export default CallHistoryScreen;
