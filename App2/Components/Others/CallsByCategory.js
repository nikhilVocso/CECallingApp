import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { VictoryPie } from "victory-native";
/////////////////////////////////////////////////////////////////////
import AppText from "../AppComponents/AppText";
import AppColors from "../../Config/AppColors";
/////////////////////////////////////////////////////////////////////
const { width, height } = Dimensions.get("screen");

const pieData = [
  { source: "facebook", y: 35 },
  { source: "Insta", y: 40 },
  { source: "Twitter", y: 55 },
  { source: "Google", y: 55 },
  { source: "LinkedIn", y: 55 },
];
/////////////////////////////////////////////////////////////////////
function CallsByCategory({ totalCount = "25.6K" }) {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.titleTextContainer}>
          <AppText style={[styles.secondaryText, styles.titleText]}>
            Call History
          </AppText>
        </View>
        <VictoryPie
          data={pieData}
          colorScale={["tomato", "orange", "gold", "cyan", "navy"]}
          radius={({ datum }) => width * 0.25 + datum.y * 1}
          innerRadius={width * 0.2}
          labelRadius={({ innerRadius, datum }) => innerRadius + datum.y / 2}
          labels={({ datum }) => datum.source}
          style={{
            labels: {
              fill: AppColors.primaryWhite,
              fontWeight: "bold",
            },
          }}
          animate={{
            duration: 2000,
          }}
        />
        <View style={styles.centerText}>
          <AppText style={{ fontSize: 16, fontFamily: "Bold" }}>
            {totalCount}
          </AppText>
          <AppText style={{ fontSize: 12, fontFamily: "Medium" }}>
            Total Emails Senders
          </AppText>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: AppColors.primaryWhite,
    borderRadius: 10,
    marginBottom: 20,
    width: "100%",
  },

  // centerText: {
  //   color: AppColors.primaryBlack,
  //   textAlign: "center",
  //   fontSize: 16,
  //   fontFamily: "Bold",
  //   padding: 16,
  // },

  centerText: {
    justifyContent: "center",
    alignItems: "center",
    bottom: width * 0.55,
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
export default CallsByCategory;
