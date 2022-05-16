import React from "react";
import { View, StyleSheet } from "react-native";
////////////////////////////////////////////////////////////////
import AppText from "../../Components/AppComponents/AppText";
////////////////////////////////////////////////////////////////
function ScheduleScreen(props) {
  return (
    <>
      <View style={styles.container}>
        <AppText>Schedule Screen</AppText>
      </View>
    </>
  );
}
////////////////////////////////////////////////////////////////
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
});
export default ScheduleScreen;
