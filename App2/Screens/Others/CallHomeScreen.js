import React from "react";
import { Dimensions, StyleSheet, View, FlatList } from "react-native";
//:: sub: App Component
import AppText from "../../Components/AppComponents/AppText";
import AppTouchableHighlight from "../../Components/AppComponents/AppTouchableHighlight";
import AppTouchableOpacity from "../../Components/AppComponents/AppTouchableOpacity";
import AppScreen from "../../Components/AppComponents/AppScreen";
import AppColors from "../../Config/AppColors";
import AppComponentHorizontalSeparator from "../../Components/AppComponents/AppComponentHorizontalSeparator";
import AppNavBar from "../../Components/AppComponents/AppNavBar";
//:: sub: Custom Component
import CallHistory from "../../Components/Others/CallHistory";
//:: sub: Extra
const { width, height } = Dimensions.get("screen");
const callHistoryData = [
  {
    title: "nikhil menan",
    subTitle: "developer",
    date: "24 Nov 2022",
    time: "11:30",
    duration: "48:25",
    idOrTotalCall: 4541255,
    charges: 250,
    iconType: "call-made",
    id: 1,
  },
  {
    title: "nikhil menan",
    subTitle: "developer",
    date: "24 Nov 2022",
    time: "11:30",
    duration: "48:25",
    idOrTotalCall: 4541255,
    charges: 250,
    iconType: "call-made",
    id: 2,
  },
  {
    title: "nikhil menan",
    subTitle: "developer",
    date: "24 Nov 2022",
    time: "11:30",
    duration: "48:25",
    idOrTotalCall: 4541255,
    charges: 250,
    iconType: "call-made",
    id: 3,
  },
  {
    title: "nikhil menan",
    subTitle: "developer",
    date: "24 Nov 2022",
    time: "11:30",
    duration: "48:25",
    idOrTotalCall: 4541255,
    charges: 250,
    iconType: "call-made",
    id: 4,
  },
  {
    title: "nikhil menan",
    subTitle: "developer",
    date: "24 Nov 2022",
    time: "11:30",
    duration: "48:25",
    idOrTotalCall: 4541255,
    charges: 250,
    iconType: "call-made",
    id: 5,
  },
  {
    title: "nikhil menan",
    subTitle: "developer",
    date: "24 Nov 2022",
    time: "11:30",
    duration: "48:25",
    idOrTotalCall: 4541255,
    charges: 250,
    iconType: "call-made",
    id: 6,
  },
  {
    title: "nikhil menan",
    subTitle: "developer",
    date: "24 Nov 2022",
    time: "11:30",
    duration: "48:25",
    idOrTotalCall: 4541255,
    charges: 250,
    iconType: "call-made",
    id: 7,
  },
  {
    title: "nikhil menan",
    subTitle: "developer",
    date: "24 Nov 2022",
    time: "11:30",
    duration: "48:25",
    idOrTotalCall: 4541255,
    charges: 250,
    iconType: "call-made",
    id: 8,
  },
  {
    title: "nikhil menan",
    subTitle: "developer",
    date: "24 Nov 2022",
    time: "11:30",
    duration: "48:25",
    idOrTotalCall: 4541255,
    charges: 250,
    iconType: "call-made",
    id: 9,
  },
  {
    title: "nikhil menan",
    subTitle: "developer",
    date: "24 Nov 2022",
    time: "11:30",
    duration: "48:25",
    idOrTotalCall: 4541255,
    charges: 250,
    iconType: "call-made",
    id: 10,
  },
  {
    title: "nikhil menan",
    subTitle: "developer",
    date: "24 Nov 2022",
    time: "11:30",
    duration: "48:25",
    idOrTotalCall: 4541255,
    charges: 250,
    iconType: "call-made",
    id: 11,
  },
  {
    title: "nikhil menan",
    subTitle: "developer",
    date: "24 Nov 2022",
    time: "11:30",
    duration: "48:25",
    idOrTotalCall: 4541255,
    charges: 250,
    iconType: "call-made",
    id: 12,
  },
  {
    title: "nikhil menan",
    subTitle: "developer",
    date: "24 Nov 2022",
    time: "11:30",
    duration: "48:25",
    idOrTotalCall: 4541255,
    charges: 250,
    iconType: "call-made",
    id: 13,
  },
  {
    title: "nikhil menan",
    subTitle: "developer",
    date: "24 Nov 2022",
    time: "11:30",
    duration: "48:25",
    idOrTotalCall: 4541255,
    charges: 250,
    iconType: "call-made",
    id: 14,
  },
  {
    title: "nikhil menan",
    subTitle: "developer",
    date: "24 Nov 2022",
    time: "11:30",
    duration: "48:25",
    idOrTotalCall: 4541255,
    charges: 250,
    iconType: "call-made",
    id: 15,
  },
  {
    title: "nikhil menan",
    subTitle: "developer",
    date: "24 Nov 2022",
    time: "11:30",
    duration: "48:25",
    idOrTotalCall: 4541255,
    charges: 250,
    iconType: "call-made",
    id: 16,
  },
  {
    title: "nikhil menan",
    subTitle: "developer",
    date: "24 Nov 2022",
    time: "11:30",
    duration: "48:25",
    idOrTotalCall: 4541255,
    charges: 250,
    iconType: "call-made",
    id: 17,
  },
  {
    title: "nikhil menan",
    subTitle: "developer",
    date: "24 Nov 2022",
    time: "11:30",
    duration: "48:25",
    idOrTotalCall: 4541255,
    charges: 250,
    iconType: "call-made",
    id: 18,
  },
  {
    title: "nikhil menan",
    subTitle: "developer",
    date: "24 Nov 2022",
    time: "11:30",
    duration: "48:25",
    idOrTotalCall: 4541255,
    charges: 250,
    iconType: "call-made",
    id: 19,
  },
  {
    title: "nikhil menan",
    subTitle: "developer",
    date: "24 Nov 2022",
    time: "11:30",
    duration: "48:25",
    idOrTotalCall: 4541255,
    charges: 250,
    iconType: "call-made",
    id: 20,
  },
  {
    title: "nikhil menan",
    subTitle: "developer",
    date: "24 Nov 2022",
    time: "11:30",
    duration: "48:25",
    idOrTotalCall: 4541255,
    charges: 251,
    iconType: "call-made",
    id: 21,
  },
];

function CallHomeScreen({}) {
  const onBackButtonPress = () => {
    console.log("onBackButtonPress");
  };

  return (
    <>
      <AppScreen style={[styles.screen]}>
        <View style={[styles.container]}>
          {/* //////////////////////////////////////////////////////////////// */}
          <View style={[styles.callHistoryContainer]}>
            {/* ////////////////////////////////// */}
            <View style={styles.titleTextContainer}>
              <AppText style={[styles.secondaryText, styles.titleText]}>
                Call History
              </AppText>
            </View>
            <FlatList
              showsVerticalScrollIndicator={false}
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
        </View>
      </AppScreen>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.primaryWhite,
    flex: 1,
    paddingHorizontal: 14,
  },

  screen: {
    backgroundColor: AppColors.primaryWhite,
    flex: 1,
    width: width,
  },

  titleTextContainer: {
    alignItems: "center",
    marginBottom: 10,
  },

  titleText: {
    textAlign: "center",
    padding: 10,
    borderBottomWidth: 3,
  },

  secondaryText: {
    fontSize: 18,
    fontFamily: "SemiBold",
    color: AppColors.primaryBlack,
    textTransform: "capitalize",
  },
});
export default CallHomeScreen;
