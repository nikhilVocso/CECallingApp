import React from "react";
import { Dimensions, View, StyleSheet } from "react-native";
import { Avatar, Badge } from "react-native-paper";
/////////////////////////////////////////////////////////////////////////////////
import AppText from "../AppComponents/AppText";
import AppButton from "../AppComponents/AppBigButton";
import AppTouchableHighlight from "../AppComponents/AppTouchableHighlight";
import AppTouchableOpacity from "../AppComponents/AppTouchableOpacity";
import AppFABButton from "../AppComponents/AppFABButton";
import AppColors from "../../Config/AppColors";
/////////////////////////////////////////////////////////////////////////////////
const { width, height } = Dimensions.get("screen");
/////////////////////////////////////////////////////////////////////////////////

function ProfilePictureContainer({
  available = true,
  avatarStyle,
  badgeStyle,
  color,
  image = require("../../Assets/photo.jpeg"),
  iconName,
  onIconPress = () => console.log("on Icon Press"),
  onProfilePicturePress = () => console.log("on Profile Picture Press"),
  style,
  size = 124,
}) {
  return (
    <>
      <View style={[styles.container, style]}>
        {image && (
          <>
            <AppTouchableOpacity onPress={onProfilePicturePress}>
              <Avatar.Image
                size={size}
                source={require("../../Assets/photo.jpeg")}
                containerStyle={[avatarStyle]}
              />
            </AppTouchableOpacity>
            <Badge
              style={[
                styles.badge,
                badgeStyle,
                { backgroundColor: available ? "green" : "red" },
              ]}
              size={16}
            />
          </>
        )}

        {iconName && (
          <AppFABButton
            color={color ? AppColors.primaryRed : AppColors.secondaryBlack}
            name={iconName}
            onPress={onIconPress}
            size={28}
            style={styles.Icon}
          />
        )}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  badge: {
    backgroundColor: "green",
    left: 16,
    position: "absolute",
    top: 4,
  },

  container: {
    alignItems: "center",
  },

  Icon: {
    backgroundColor: "transparent",
    padding: 8,
  },
});
export default ProfilePictureContainer;
