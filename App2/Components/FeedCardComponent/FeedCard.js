import React from "react";
import { View, StyleSheet } from "react-native";
//////////////////////////////////////////////////////////////////////
import FeedHeader from "./FeedHeader";
import FeedContent from "./FeedContent";
import FeedFooter from "./FeedFooter";
//////////////////////////////////////////////////////////////////////

function FeedCard({
  profilePicture,
  profileName,
  postingTime,
  onHeaderPictureContainer,
  onHeaderDetailsContainer,
  onMoreIconPress,
  postText,
  postData,
  style,
  onPostDataPress,
  navigation,
}) {
  return (
    <>
      <View style={[style]}>
        <FeedHeader
          profileName={profileName}
          profilePicture={profilePicture}
          postingTime={postingTime}
          onMoreIconPress={onMoreIconPress}
          onHeaderDetailsContainer={onHeaderDetailsContainer}
          onHeaderPictureContainer={onHeaderPictureContainer}
        />
        <FeedContent
          postText={postText}
          postData={postData}
          onPostDataPress={onPostDataPress}
        />
        <FeedFooter navigation={navigation} />
      </View>
    </>
  );
}

export default FeedCard;
