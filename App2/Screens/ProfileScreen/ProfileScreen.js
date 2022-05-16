import React from "react";
import { Dimensions, ScrollView, StyleSheet, View } from "react-native";
////////////////////////////////////////////////////////////////////////////////////
import ProfileScreenCard from "../../Components/ProfileCard/ProfileScreenCard";
import ProfileScreenHeader from "../../Components/ProfileCard/ProfileScreenHeader";
import AppScreen from "../../Components/AppComponents/AppScreen";
////////////////////////////////////////////////////////////////////////////////////

function ProfileScreen({}) {
  return (
    <>
      <AppScreen style={styles.screen}>
        <ProfileScreenHeader />
        <ScrollView style={styles.scroll} stickyHeaderIndices={[1]}>
          <ProfileScreenCard />
        </ScrollView>
      </AppScreen>
    </>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
export default ProfileScreen;
