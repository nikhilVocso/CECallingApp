import React from "react";
import { View, StyleSheet, Image, Text, Alert } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
/////////////////////////////////////////////////////////////////////////////
import AppColors from "../../Config/AppColors";
import AppFABButton from "../AppComponents/AppFABButton";
import AppText from "../AppComponents/AppText";
import AppTouchableOpacity from "../AppComponents/AppTouchableOpacity";
import InitiateCallScreen from "../../Screens/Others/InitiateCallScreen";
/////////////////////////////////////////////////////////////////////////////

function StoryCard({
  available,
  name,
  category,
  charges,
  image,
  style,
  onCallIconPress,
  onCardPress,
}) {
  return (
    <>
      <View style={[styles.root, style]}>
        <AppTouchableOpacity style={styles.container} onPress={onCardPress}>
          <Image source={image} style={styles.img} resizeMode="cover" />

          <LinearGradient
            colors={["transparent", "rgba(0,0,0,0.8)"]}
            style={styles.detailsContainer}
          >
            <AppText style={styles.usernameText}>{name}</AppText>
            <AppText style={styles.categoryText}>{category}</AppText>
            <AppText style={styles.chargeText}>
              {"$" + charges + "/min"}
            </AppText>
          </LinearGradient>
        </AppTouchableOpacity>
        <AppTouchableOpacity onPress={onCallIconPress}>
          <AppFABButton
            name="call"
            size={18}
            style={[
              styles.callIcon,
              {
                backgroundColor: available
                  ? AppColors.primaryGreen
                  : AppColors.secondaryBlack,
              },
            ]}
          />
        </AppTouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  callIcon: {
    bottom: 22,
    color: AppColors.primaryWhite,
    left: 20,
    position: "relative",
  },

  categoryText: {
    color: AppColors.primaryWhite,
    fontSize: 14,
    fontFamily: "SemiBold",
  },

  chargeText: {
    color: AppColors.primaryWhite,
    fontSize: 12,
    fontFamily: "Medium",
  },

  container: {
    backgroundColor: AppColors.primaryWhite,
    borderRadius: 5,
    overflow: "hidden",
    width: "100%",
  },

  detailsContainer: {
    bottom: 0,
    padding: 10,
    position: "absolute",
    width: "100%",
  },

  img: {
    height: "100%",
    width: "100%",
  },

  root: {
    alignItems: "center",
    height: 165,
    justifyContent: "center",
    marginLeft: 12,
    width: 120,
  },

  usernameText: {
    color: AppColors.primaryWhite,
    fontFamily: "Black",
    fontSize: 14,
  },
});

export default StoryCard;
