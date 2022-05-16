import React, { useState, useRef } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import {
  VictoryChart,
  VictoryLine,
  VictoryZoomContainer,
  VictoryArea,
  VictoryAxis,
  VictoryTheme,
  VictoryBar,
  VictoryCursorContainer,
  VictoryScatter,
  VictoryVoronoiContainer,
  // VictoryZoomVoronoiContainer,
  createContainer,
  VictoryTooltip,
} from "victory-native";
////////////////////////////////////////////////////////////////////////////////////
import AppColors from "../../Config/AppColors";
import AppText from "../AppComponents/AppText";
////////////////////////////////////////////////////////////////////////////////////
const { width, height } = Dimensions.get("screen");

const graphData = [
  { x: new Date(1982, 1, 1), y: 125 },
  { x: new Date(1987, 1, 1), y: 257 },
  { x: new Date(1993, 1, 1), y: 345 },
  { x: new Date(1997, 1, 1), y: 515 },
  { x: new Date(2001, 1, 1), y: 132 },
  { x: new Date(2005, 1, 1), y: 305 },
  { x: new Date(2011, 1, 1), y: 270 },
  { x: new Date(2015, 1, 1), y: 470 },
];

const VictoryZoomVoronoiContainer = createContainer("zoom", "voronoi");
////////////////////////////////////////////////////////////////////////////////////

function CallAndMinutes(props) {
  return (
    <>
      <View style={styles.container}>
        {/* //////////////// sub: Title /////////////////// */}
        <View style={styles.titleTextContainer}>
          <AppText style={[styles.secondaryText, styles.titleText]}>
            Calls / Minutes
          </AppText>
        </View>
        {/* /////////////////////////////////// */}
        {/* //////////// sub: graph ////////////*/}
        <View style={styles.graphContainer}>
          <VictoryChart
            theme={VictoryTheme.material}
            containerComponent={
              <VictoryZoomVoronoiContainer
                zoomDimension="x"
                voronoiPadding={5}
                labels={({ datum }) =>
                  `${`${datum.x.getUTCDate()}/${datum.x.getMonth()}/${datum.x.getFullYear()}`}, ${
                    datum.y
                  }`
                }
              />
            }
            domainPadding={{ x: [0, 15], y: 15 }}
            scale={{ x: "time" }}
          >
            <VictoryLine
              animate={{
                duration: 2000,
                onLoad: { duration: 1000 },
              }}
              data={graphData}
              interpolation="natural"
              style={{
                data: { stroke: AppColors.primaryBlue },
                labels: { fill: "red" },
              }}
            />
          </VictoryChart>
        </View>
        {/* /////////////////////////////////// */}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.primaryWhite,
    borderRadius: 10,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },

  graphContainer: {
    width: "100%",
  },

  titleText: {
    borderBottomWidth: 3,
    padding: 10,
    textAlign: "center",
  },

  titleTextContainer: {
    alignItems: "center",
  },

  secondaryText: {
    color: AppColors.primaryBlack,
    fontFamily: "SemiBold",
    fontSize: 18,
    textTransform: "capitalize",
  },
});
export default CallAndMinutes;
