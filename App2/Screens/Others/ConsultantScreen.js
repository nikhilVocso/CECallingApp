import React, { useState } from "react";
import { View, StyleSheet, FlatList, ScrollView, Alert } from "react-native";
///////////////////////////////////////////////////////////////////////////////////////////
import CESearchBar from "../../Components/Others/CESearchBar";
import AppScreen from "../../Components/AppComponents/AppScreen";
import AppColors from "../../Config/AppColors";
import ConsultantListCard from "../../Components/ConsultantListCard/ConsultantListCard";
import AppComponentHorizontalSeparator from "../../Components/AppComponents/AppComponentHorizontalSeparator";
///////////////////////////////////////////////////////////////////////////////////////////
const consultantListCardData = [
  {
    available: true,
    name: "nikhil menan",
    profile: "Coder",
    rating: 3,
    totalRating: 10,
    ProfilePicture: require("../../Assets/photo.jpeg"),
    verify: true,
    id: 1,
  },
  {
    available: false,
    name: "nikhil menan",
    profile: "Coder",
    rating: 6,
    totalRating: 10,
    ProfilePicture: require("../../Assets/photo.jpeg"),
    verify: false,
    id: 2,
  },
  {
    available: true,
    name: "nikhil menan",
    profile: "Coder",
    rating: 5,
    totalRating: 10,
    ProfilePicture: require("../../Assets/photo.jpeg"),
    verify: true,
    id: 3,
  },
  {
    available: false,
    name: "nikhil menan",
    profile: "Coder",
    rating: 7,
    totalRating: 10,
    ProfilePicture: require("../../Assets/photo.jpeg"),
    verify: true,
    id: 4,
  },
  {
    available: true,
    name: "nikhil menan",
    profile: "Coder",
    rating: 5,
    totalRating: 10,
    ProfilePicture: require("../../Assets/photo.jpeg"),
    verify: false,
    id: 5,
  },
  {
    available: true,
    name: "nikhil menan",
    profile: "Coder",
    rating: 9,
    totalRating: 10,
    profilePicture: require("../../Assets/photo.jpeg"),
    verify: true,
    id: 6,
  },
  {
    available: true,
    name: "nikhil menan",
    profile: "Coder",
    rating: 9,
    totalRating: 10,
    profilePicture: require("../../Assets/photo.jpeg"),
    verify: true,
    id: 7,
  },
  {
    available: true,
    name: "nikhil menan",
    profile: "Coder",
    rating: 9,
    totalRating: 10,
    profilePicture: require("../../Assets/photo.jpeg"),
    verify: true,
    id: 8,
  },
  {
    available: true,
    name: "nikhil menan",
    profile: "Coder",
    rating: 9,
    totalRating: 10,
    profilePicture: require("../../Assets/photo.jpeg"),
    verify: true,
    id: 9,
  },
  {
    available: true,
    name: "nikhil menan",
    profile: "Coder",
    rating: 9,
    totalRating: 10,
    profilePicture: require("../../Assets/photo.jpeg"),
    verify: true,
    id: 10,
  },
];
///////////////////////////////////////////////////////////////////////////////////////////
function ConsultantScreen({ navigation }) {
  return (
    <>
      <AppScreen style={styles.screen}>
        <View style={styles.consultantListCard}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={consultantListCardData}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <>
                <ConsultantListCard
                  available={item.available}
                  name={item.name}
                  profile={item.profile}
                  profilePicture={item.profilePicture}
                  rating={item.rating}
                  totalRating={item.totalRating}
                  verify={item.verify}
                  navigation={navigation}
                />
              </>
            )}
            ListHeaderComponent={
              <CESearchBar
                placeholder="GST Consultant"
                style={{ paddingRight: 0 }}
              />
            }
            stickyHeaderIndices={[0]}
          />
        </View>
      </AppScreen>
    </>
  );
}
///////////////////////////////////////////////////////////////////////////////////////////
const styles = StyleSheet.create({
  screen: {
    backgroundColor: AppColors.secondaryWhite,
    flex: 1,
  },

  consultantListCardStyle: {
    marginBottom: 6,
  },
});
export default ConsultantScreen;
