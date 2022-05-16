import React from "react";
import { Alert, FlatList, ScrollView, StyleSheet, View } from "react-native";
//////////////////////////////////////////////////////////////////////////////////
import AppColors from "../../Config/AppColors";
import AppScreen from "../../Components/AppComponents/AppScreen";
import CESearchBar from "../../Components/Others/CESearchBar";
import StoryCard from "../../Components/Others/StoryCard";
import FeedCard from "../../Components/FeedCardComponent/FeedCard";
import storyCardData from "../../Config/StoryCardData";
import feedCardData from "../../Config/FeedCardData";
//////////////////////////////////////////////////////////////////////////////////
function HomeScreen({
  profilePicture = require("../../Assets/photo.jpeg"),
  navigation,
}) {
  const onPostDataPress = () => {
    console.log("ON Post data press");
    Alert.alert("On touch", "Later this will open in a separate screen");
  };

  const onCallIconPress = (available) => {
    available
      ? navigation.navigate("InitiateCallScreen")
      : Alert.alert(
          "User Not Available",
          "This is decorate after getting proper ui of alert"
        );
  };

  const onCardPress = () => {
    Alert.alert("This will navigate to user profile screen coming from server");
  };

  const onMoreIconPress = () => {
    console.log("on more icon press");
  };

  const onHeaderDetailsContainer = () => {
    console.log("on header details container");
    Alert.alert("This will navigate to user profile screen coming from server");
  };

  const onHeaderPictureContainer = () => {
    console.log("on header picture container");
    Alert.alert("This will navigate to user profile screen coming from server");
  };

  return (
    <>
      <AppScreen style={styles.screen}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          stickyHeaderIndices={[0]}
        >
          <CESearchBar
            image={profilePicture}
            placeholder="Search a consultant"
          />
          <View style={styles.feedDCardContainer}>
            <FlatList
              data={feedCardData}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <FeedCard
                  profileName={item.profileName}
                  profilePicture={item.profilePicture}
                  postingTime={item.postingTime}
                  postText={item.postText}
                  postData={item.postData}
                  onMoreIconPress={onMoreIconPress}
                  onHeaderDetailsContainer={onHeaderDetailsContainer}
                  onHeaderPictureContainer={onHeaderPictureContainer}
                  style={styles.feedCard}
                  onPostDataPress={onPostDataPress}
                  available={item.available}
                  navigation={navigation}
                />
              )}
              stickyHeaderIndices={[0]}
              ListHeaderComponent={
                <View style={styles.storyCardContainer}>
                  <FlatList
                    data={storyCardData}
                    horizontal={true}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                      <StoryCard
                        available={item.available}
                        category={item.category}
                        charges={item.charges}
                        image={item.Image}
                        name={item.name}
                        style={styles.storyCard}
                        onCardPress={onCardPress}
                        onCallIconPress={() =>
                          item.available && onCallIconPress(item.available)
                        }
                      />
                    )}
                    showsHorizontalScrollIndicator={false}
                  />
                </View>
              }
            />
          </View>
        </ScrollView>
      </AppScreen>
    </>
  );
}

const styles = StyleSheet.create({
  feedCard: {
    backgroundColor: AppColors.primaryWhite,
    marginTop: 14,
  },

  screen: {
    backgroundColor: AppColors.secondaryWhite,
  },

  storyCardContainer: {
    backgroundColor: AppColors.primaryWhite,
    paddingVertical: 12,
  },

  storyCard: {
    marginTop: 22,
  },
});

export default HomeScreen;
