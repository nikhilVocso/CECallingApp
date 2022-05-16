import React, { useRef } from "react";
import { View, StyleSheet, FlatList, Alert } from "react-native";
////////////////////////////////////////////////////////////////////////////////
import FeedCard from "../../Components/FeedCardComponent/FeedCard";
import AppColors from "../../Config/AppColors";
import feedCardData from "../../Config/FeedCardData";
////////////////////////////////////////////////////////////////////////////////

function PostScreen({ navigation }) {
  const onPostDataPress = () => {
    console.log("ON Post data press");
    Alert.alert("On touch", "Later this will open in a separate screen");
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.feedDCardContainer}>
          <FlatList
            nestedScrollEnabled
            data={feedCardData}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <>
                <FeedCard
                  profileName={item.profileName}
                  profilePicture={item.profilePicture}
                  postingTime={item.postingTime}
                  postText={item.postText}
                  postData={item.postData}
                  onMoreIconPress={item.onMoreIconPress}
                  onHeaderDetailsContainer={item.onHeaderDetailsContainer}
                  onHeaderPictureContainer={item.onHeaderPictureContainer}
                  style={styles.feedCard}
                  onPostDataPress={onPostDataPress}
                  navigation={navigation}
                />
              </>
            )}
          />
        </View>
      </View>
    </>
  );
}
////////////////////////////////////////////////////////////////////////////////

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.secondaryWhite,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },

  feedCard: {
    backgroundColor: AppColors.primaryWhite,
    // marginBottom: 14,
  },
});
export default PostScreen;
