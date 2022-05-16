import React, { useState } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  ScrollView,
  Dimensions,
} from "react-native";
import { List } from "react-native-paper";
///////////////////////////////////////////////////////////////////////////////////////////////////
import AppText from "../AppComponents/AppText";
import AppColors from "../../Config/AppColors";
import AppComponentHorizontalSeparator from "../AppComponents/AppComponentHorizontalSeparator";
///////////////////////////////////////////////////////////////////////////////////////////////////
const { height, width } = Dimensions.get("screen");

const dataObject = [
  {
    id: 1,
    day: "mon",
    from: "10:00AM",
    to: "10:00PM",
  },
  {
    id: 2,
    day: "tue",
    from: "10:00AM",
    to: "10:00PM",
  },
  {
    id: 3,
    day: "wed",
    from: "10:00AM",
    to: "10:00PM",
  },
  {
    id: 4,
    day: "Thu",
    from: "10:00AM",
    to: "10:00PM",
  },
  {
    id: 5,
    day: "Fri",
    from: "10:00AM",
    to: "10:00PM",
  },
  {
    id: 6,
    day: "Sat",
    from: "10:00AM",
    to: "10:00PM",
  },
  {
    id: 7,
    day: "Sun",
    from: "10:00AM",
    to: "10:00PM",
  },
];
///////////////////////////////////////////////////////////////////////////////////////////////////

function AppSchedule({}) {
  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);

  return (
    <>
      <View style={styles.root}>
        <FlatList
          data={dataObject}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <List.Section>
              <List.Accordion
                title={item.day}
                titleStyle={styles.title}
                style={{ backgroundColor: "white", padding: 0 }}
              >
                <View style={{ flexDirection: "row" }}>
                  <AppText style={styles.text}>{item.from}</AppText>
                  <AppText style={styles.text}> - </AppText>
                  <AppText style={styles.text}>{item.to}</AppText>
                </View>
                <AppComponentHorizontalSeparator />
              </List.Accordion>
              {/* <ComponentSeparator /> */}
            </List.Section>
          )}
        />
      </View>
    </>
  );
}
///////////////////////////////////////////////////////////////////////////////////////////////////

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-start",
    marginTop: 10,
  },

  days: {
    backgroundColor: AppColors.secondaryWhite,
    width: 70,
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    marginRight: 10,
  },

  text: {
    color: AppColors.primaryBlack,
    fontSize: 16,
    fontFamily: "Bold",
    textTransform: "capitalize",
    padding: 15,
  },

  title: {
    color: AppColors.primaryBlack,
    fontSize: 16,
    fontFamily: "Bold",
    textTransform: "capitalize",
  },

  times: {
    backgroundColor: AppColors.secondaryWhite,
    flexDirection: "row",
    justifyContent: "center",
    padding: 20,
    marginBottom: 10,
  },

  timeText: {
    fontSize: 14,
    fontFamily: "Bold",
  },

  root: {
    backgroundColor: AppColors.primaryWhite,
    paddingHorizontal: 10,
    height: height * 0.8,
  },
});
export default AppSchedule;
