import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
  FlatList,
} from "react-native";

import AppText from "../AppComponents/AppText";
import AppColors from "../../Config/AppColors";
import AppComponentHorizontalSeparator from "../AppComponents/AppComponentHorizontalSeparator";
import AppFABButton from "../AppComponents/AppFABButton";
import AppButton from "../AppComponents/AppButton";
import AppTouchableOpacity from "../AppComponents/AppTouchableOpacity";
// import AppButton from "./AppBigButton";

const { width, height } = Dimensions.get("screen");

function CallHistory({
  isCEWalletScreen,
  isCallHistoryScreen,
  iconType = "call-made",
  title = "nikhil menan",
  subTitle = "devloper",
  date = "25 Nov 2022",
  time = "11:30",
  duration = "48:22",
  idOrTotalCall = 4512545,
  charges = 250,
}) {
  const [play, setPlay] = useState(false);

  const onPlayButton = () => {
    console.log("on Play Button");
    setPlay(() => !play);
  };

  return (
    <>
      {/* <View style={styles.container}> */}
      {/* ////////////////////////////////// */}
      <View style={styles.callDetailsContainer}>
        <AppFABButton
          color="red"
          name={iconType}
          style={styles.callIcon}
          size={22}
        />
        <View style={styles.detailsContainer}>
          <View style={styles.columnOne}>
            <AppText
              style={[
                styles.fourthText,
                { fontFamily: "Bold", textTransform: "capitalize" },
              ]}
            >
              {title}
            </AppText>
            <AppText style={styles.fourthText}>{subTitle}</AppText>
            <AppText style={styles.fourthText}>
              {date}; {time}
            </AppText>
          </View>
          <View style={styles.columnTwo}>
            {isCallHistoryScreen && (
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-start",
                }}
              >
                {duration && (
                  <>
                    <AppText style={styles.fourthText}>{duration}</AppText>
                    <AppTouchableOpacity onPress={onPlayButton}>
                      <AppFABButton
                        color="black"
                        name={play ? "play-arrow" : "pause"}
                        size={20}
                        style={{
                          padding: 0,
                          backgroundColor: "transparent",
                        }}
                      />
                    </AppTouchableOpacity>
                  </>
                )}
              </View>
            )}

            <AppText style={styles.fourthText}>
              {isCallHistoryScreen && `#${idOrTotalCall}`}
              {isCEWalletScreen && `CE#${idOrTotalCall}`}
            </AppText>
            <AppText
              style={[styles.fourthText, { color: "red", fontFamily: "Bold" }]}
            >
              ₹{" "}
              <AppText
                style={[
                  styles.fourthText,
                  { color: "red", fontFamily: "Bold" },
                ]}
              >
                {charges}
              </AppText>
            </AppText>
          </View>
        </View>
      </View>
      {/* ////////////////////////////////// */}
      <AppComponentHorizontalSeparator />
      {/* </View> */}
    </>
  );
}

const styles = StyleSheet.create({
  callDetailsContainer: {
    backgroundColor: AppColors.primaryWhite,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginVertical: 15,
  },

  callIcon: {
    backgroundColor: AppColors.secondaryWhite,
    backgroundColor: "transparent",
    marginRight: 6,
    paddingLeft: 0,
  },

  columnOne: {
    // backgroundColor: "yellow",
    flex: 1,
  },

  columnTwo: {
    // backgroundColor: "green",
    // flex: 1,
    justifyContent: "flex-end",
    // marginRight: 10,
  },

  container: {
    // backgroundColor: "red",
    backgroundColor: AppColors.primaryWhite,
    width: "100%",
    justifyContent: "center",
    padding: 15,
    borderRadius: 10,
  },

  detailsContainer: {
    // backgroundColor: "green",
    flexDirection: "row",
    justifyContent: "space-evenly",
    flex: 1,
  },

  fourthText: {
    color: AppColors.primaryBlack,
    fontSize: 14,
    fontFamily: "Medium",
    paddingVertical: 2,
    textTransform: "capitalize",
  },

  primaryText: {
    fontSize: 22,
    fontFamily: "Bold",
    color: AppColors.primaryBlack,
    textTransform: "capitalize",
  },

  secondaryText: {
    fontSize: 18,
    fontFamily: "SemiBold",
    color: AppColors.primaryBlack,
    textTransform: "capitalize",
  },

  ternaryText: {
    fontSize: 12,
    fontFamily: "Medium",
    color: AppColors.primaryBlack,
    textTransform: "capitalize",
  },

  titleText: {
    textAlign: "center",
    padding: 10,
    borderBottomWidth: 3,
  },

  titleTextContainer: {
    alignItems: "center",
    marginBottom: 10,
  },
});

export default CallHistory;
