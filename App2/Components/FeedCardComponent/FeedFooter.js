import React, { useState, useRef, useReducer } from "react";
import { View, StyleSheet } from "react-native";
//////////////////////////////////////////////////////////////////////////
import AppColors from "../../Config/AppColors";
import AppTouchableHighlight from "../AppComponents/AppTouchableHighlight";
import AppFabButton from "../AppComponents/AppFABButton";
import AppText from "../AppComponents/AppText";
import AppTouchablOpacity from "../AppComponents/AppTouchableOpacity";
//////////////////////////////////////////////////////////////////////////

function FeedFooter({ style, navigation }) {
  const [likesColor, setLikesColor] = useState(AppColors.secondaryBlack);
  const [sharesColor, setSharesColor] = useState(AppColors.secondaryBlack);
  const [callButtonColor, setCallButtonColor] = useState(
    AppColors.primaryWhite
  );

  const [likes, setLikes] = useState(0);
  const [shares, setShares] = useState(0);

  const onLikesButton = () => {
    console.log("ON Likes Button");
    setLikesColor(AppColors.primaryRed);
    setLikes(likes + 1);
  };

  const onSharesButton = () => {
    console.log("ON Likes Button");
    setSharesColor(AppColors.primaryRed);
    setShares(shares + 1);
  };

  const onCallButton = () => {
    console.log("on call button");
    setCallButtonColor(AppColors.primaryWhite);
    navigation.navigate("InitiateCallScreen");
  };

  return (
    <>
      <View style={[styles.container, style]}>
        <View style={styles.likesAndShareButtonContainer}>
          <AppTouchableHighlight
            style={styles.iconContainer}
            onPress={onLikesButton}
          >
            <AppFabButton
              color={likesColor}
              name="favorite"
              size={24}
              style={styles.icon}
            />
            <AppText style={styles.text}>{likes + " likes"}</AppText>
          </AppTouchableHighlight>

          <AppTouchableHighlight
            style={styles.iconContainer}
            onPress={onSharesButton}
          >
            <AppFabButton
              color={sharesColor}
              name="share"
              size={24}
              style={styles.icon}
            />
            <AppText style={styles.text}>{shares + " shares"}</AppText>
          </AppTouchableHighlight>
        </View>

        <AppTouchablOpacity
          style={styles.callButtonContainer}
          onPress={onCallButton}
        >
          <AppFabButton
            color={callButtonColor}
            name="call"
            size={18}
            style={styles.callButton}
          />
        </AppTouchablOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
  },

  likesAndShareButtonContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },

  iconContainer: {
    width: "32%",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 20,
    paddingLeft: 10,
  },

  icon: {
    padding: 0,
    backgroundColor: "transparent",
    paddingRight: 2,
  },

  callButtonContainer: {
    paddingRight: 10,
  },

  text: {
    fontFamily: "Bold",
    color: AppColors.secondaryBlack,
  },

  callButton: {
    backgroundColor: AppColors.primaryGreen,
  },
});

export default FeedFooter;
