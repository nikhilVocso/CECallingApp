import React from "react";
import { View, StyleSheet } from "react-native";
/////////////////////////////////////////////////////////
import AppScreen from "../../Components/AppComponents/AppScreen";
import AppText from "../../Components/AppComponents/AppText";
/////////////////////////////////////////////////////////

function CallHomeScreen(props) {
  return (
    <>
      <AppScreen style={[styles.screen]}>
        <View style={[styles.container]}>
          <AppText style={[styles.text]}>This is call screen</AppText>
        </View>
      </AppScreen>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "green",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  screen: {
    backgroundColor: "red",
    flex: 1,
  },

  text: {
    fontSize: 24,
    fontFamily: "Bold",
  },
});
export default CallHomeScreen;
