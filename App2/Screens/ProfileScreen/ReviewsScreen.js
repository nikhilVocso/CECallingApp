import React from "react";
import { View, StyleSheet } from "react-native";
//////////////////////////////////////////////////////////////////////////
import AppText from "../../Components/AppComponents/AppText";
//////////////////////////////////////////////////////////////////////////

function ReviewsScreen(props) {
  return (
    <>
      <View style={styles.container}>
        <AppText>Reviews Screen</AppText>
      </View>
    </>
  );
}
//////////////////////////////////////////////////////////////////////////

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
});
export default ReviewsScreen;
