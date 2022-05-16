import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
  FlatList,
} from "react-native";
//////////////////////////////////////////////////////////////////////////////////////////////////
import AppText from "../AppComponents/AppText";
import AppColors from "../../Config/AppColors";
import AppComponentHorizontalSeparator from "../AppComponents/AppComponentHorizontalSeparator";
import AppFABButton from "../AppComponents/AppFABButton";
import AppButton from "../AppComponents/AppButton";
import AppTouchableOpacity from "../AppComponents/AppTouchableOpacity";
//////////////////////////////////////////////////////////////////////////////////////////////////
const { width, height } = Dimensions.get("screen");
//////////////////////////////////////////////////////////////////////////////////////////////////

function CallHistory({ data, isCEWalletScreen, isCallHistoryScreen }) {
  const [play, setPlay] = useState(false);

  const onPlayButton = () => {
    console.log("on Play Button");
    setPlay(() => !play);
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.titleTextContainer}>
          <AppText style={[styles.secondaryText, styles.titleText]}>
            Call History
          </AppText>
        </View>
        {/* ///////////////////////////////////////// */}
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <>
              {/* ///////////////////////////////////////// */}
              <View style={styles.callDetailsContainer}>
                <AppFABButton
                  color="red"
                  name={item.iconType}
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
                      {item.title}
                    </AppText>
                    <AppText style={styles.fourthText}>{item.subTitle}</AppText>
                    <AppText style={styles.fourthText}>
                      {item.date}; {item.time}
                    </AppText>
                  </View>
                  <View style={styles.columnTwo}>
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "flex-start",
                      }}
                    >
                      {item.duration && (
                        <>
                          <AppText style={styles.fourthText}>
                            {item.duration}
                          </AppText>
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
                    <AppText style={styles.fourthText}>
                      {isCallHistoryScreen && `#${item.idOrTotalCall}`}
                      {isCEWalletScreen && `CE#${item.idOrTotalCall}`}
                    </AppText>
                    <AppText
                      style={[
                        styles.fourthText,
                        { color: "red", fontFamily: "Bold" },
                      ]}
                    >
                      ₹{" "}
                      <AppText
                        style={[
                          styles.fourthText,
                          { color: "red", fontFamily: "Bold" },
                        ]}
                      >
                        {item.charges}
                      </AppText>
                    </AppText>
                  </View>
                </View>
              </View>
              {/* ////////////////////////////////////// */}
              <AppComponentHorizontalSeparator />
            </>
          )}
        />
        {/* ///////////////////////////////////////// */}
      </View>
    </>
  );
}
//////////////////////////////////////////////////////////////////////////////////////////////////
const styles = StyleSheet.create({
  callDetailsContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginVertical: 15,
  },

  callIcon: {
    backgroundColor: AppColors.secondaryWhite,
    backgroundColor: "transparent",
    marginRight: 6,
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
