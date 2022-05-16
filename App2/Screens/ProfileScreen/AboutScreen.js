import React from "react";
import { View, StyleSheet } from "react-native";
///////////////////////////////////////////////////////////////////////////
import AppText from "../../Components/AppComponents/AppText";
///////////////////////////////////////////////////////////////////////////

function AboutScreen(props) {
  return (
    <>
      <View style={styles.container}>
        <AppText>About Screen</AppText>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
});
export default AboutScreen;
