import React from "react";
import { View, Text, StyleSheet } from "react-native";
/////////////////////////////////////////////////////////////////////////////
export default function CallButtonSecond(props) {
  return (
    <>
      <View style={styles.root}>
        <Text style={styles.text}>{props.title}</Text>
      </View>
    </>
  );
}

/////////////////////////////////////////////////////////////////////////////
const styles = StyleSheet.create({
  root: {
    backgroundColor: "green",
    flex: 1,
    justifyContent: "center",
  },

  text: {
    backgroundColor: "white",
    position: "absolute",
    padding: "8%",
    paddingLeft: "30%",
    paddingRight: "30%",
  },
});
