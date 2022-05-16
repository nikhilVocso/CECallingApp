import React, { useState } from "react";
import { Dimensions, Image, StyleSheet, View } from "react-native";
///////////////////////////////////////////////////////////////////////////////
import AppColors from "../../Config/AppColors";
import AppText from "../AppComponents/AppText";
import AppTouchableOpacity from "../AppComponents/AppTouchableOpacity";
///////////////////////////////////////////////////////////////////////////////

const { width, height } = Dimensions.get("screen");

///////////////////////////////////////////////////////////////////////////////

function FeedContent({ postData, postText, onPostDataPress }) {
  const [showMore, setShowMore] = useState(false);

  const [showOption, setShowOption] = useState(false);

  return (
    <>
      <View style={styles.container}>
        {postText ? (
          <AppText style={styles.postText}>
            {postText.length > 120 ? (
              showMore ? (
                <>
                  <AppText style={styles.postText}>{postText + "..."}</AppText>
                  <AppText
                    onPress={() => setShowMore(!showMore)}
                    style={styles.showText}
                  >
                    See less
                  </AppText>
                </>
              ) : (
                <>
                  <AppText style={styles.postText}>{`${postText.slice(
                    0,
                    120
                  )}...`}</AppText>
                  <AppText
                    onPress={() => setShowMore(!showMore)}
                    style={styles.showText}
                  >
                    See more
                  </AppText>
                </>
              )
            ) : (
              <AppText style={styles.postText}>{postText + "..."}</AppText>
            )}
          </AppText>
        ) : null}

        <AppTouchableOpacity style={styles.postData} onPress={onPostDataPress}>
          {postData ? (
            <Image source={postData} onPress={onPostDataPress} />
          ) : null}
        </AppTouchableOpacity>
      </View>
    </>
  );
}

///////////////////////////////////////////////////////////////////////////////

const styles = StyleSheet.create({
  container: {
    width: "100%",
    maxHeight: 600,
  },

  postData: {
    flexWrap: "wrap",
    minHeight: 0,
    width: "100%",
  },

  postDescription: {
    color: AppColors.primaryBlack,
    fontSize: 14,
    fontWeight: "500",
  },

  postText: {
    fontFamily: "Bold",
    padding: 10,
    width: "100%",
  },

  showText: {
    color: AppColors.secondaryBlack,
  },
});

export default FeedContent;
