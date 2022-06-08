import React from "react";
import { FlatList, View, StyleSheet, ScrollView } from "react-native";
/////////////////////////////////////////////////////
import AppScreen from "../../Components/AppComponents/AppScreen";
import CallAndMinutes from "../../Components/Others/CallAndMinutes";
import CallCount from "../../Components/Others/CallCount";
import CallHistory from "../../Components/Others/CallHistory";
import CallsByCategory from "../../Components/Others/CallsByCategory";
import AppColors from "../../Config/AppColors";
import AppText from "../../Components/AppComponents/AppText";
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
  {
    iconType: "call-made",
    typeResult: 0,
    subTitle: "Developer",
    charges: 250,
    date: "25 Nov 2022",
    duration: "48:22",
    id: 2,
    title: "nikhil menan",
    time: "11:30",
    idOrTotalCall: 15155454,
  },
  {
    iconType: "call-made",
    typeResult: 0,
    subTitle: "Developer",
    charges: 250,
    date: "25 Nov 2022",
    duration: "48:22",
    id: 3,
    title: "nikhil menan",
    time: "11:30",
    idOrTotalCall: 15155454,
  },
];

function CallHistoryScreen(props) {
  return (
    <>
      <AppScreen style={styles.screen}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <CallCount isCallHistoryScreen={true} />
          <CallsByCategory />
          <CallAndMinutes />
          {/* //////////////////////////////////////////////////////////////// */}
          <View style={[styles.callHistoryContainer]}>
            {/* ////////////////////////////////// */}
            <View style={styles.titleTextContainer}>
              <AppText style={[styles.secondaryText, styles.titleText]}>
                Call History
              </AppText>
            </View>
            <FlatList
              data={callHistoryData}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <>
                  {/* ////////////////////////////////// */}
                  <CallHistory
                    isCallHistoryScreen={true}
                    iconType={item.iconType}
                    title={item.title}
                    subTitle={item.subTitle}
                    date={item.date}
                    time={item.time}
                    duration={item.duration}
                    idOrTotalCall={item.idOrTotalCall}
                    charges={item.charges}
                  />
                </>
              )}
            />
            {/* ////////////////////////////////// */}
          </View>
          {/* //////////////////////////////////////////////////////////////// */}
        </ScrollView>
      </AppScreen>
    </>
  );
}

const styles = StyleSheet.create({
  callHistoryContainer: {
    // backgroundColor: "red",
    backgroundColor: AppColors.primaryWhite,
    width: "100%",
    justifyContent: "center",
    padding: 15,
    borderRadius: 10,
  },

  container: {},

  screen: {
    backgroundColor: AppColors.secondaryWhite,
    paddingHorizontal: 15,
  },

  secondaryText: {
    fontSize: 18,
    fontFamily: "SemiBold",
    color: AppColors.primaryBlack,
    textTransform: "capitalize",
  },

  titleTextContainer: {
    alignItems: "center",
    // marginBottom: 10,
  },

  titleText: {
    textAlign: "center",
    padding: 10,
    borderBottomWidth: 3,
  },
});
export default CallHistoryScreen;
