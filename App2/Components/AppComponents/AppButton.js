import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
/////////////////////////////////////////////////////////////////////////
import AppFABButton from "./AppFABButton";
import AppText from "./AppText";
import AppColors from "../../Config/AppColors";
/////////////////////////////////////////////////////////////////////////
function AppButton({
  ContainerStyle,
  title,
  textStyle,
  iconName,
  iconColor,
  onPress,
  iconSize,
  iconStyle,
  IconImage,
  iconImageStyle,
}) {
  return (
    <View style={[styles.container, ContainerStyle]} onPress={onPress}>
      <View style={styles.icon}>
        {IconImage && (
          <Image
            source={IconImage}
            style={[styles.iconImage, iconImageStyle]}
          />
        )}
        {iconName && (
          <AppFABButton
            name={iconName}
            color={iconColor}
            size={iconSize}
            style={[iconStyle, { padding: 0, backgroundColor: "transparent" }]}
          />
        )}
      </View>
      <AppText style={[styles.text, textStyle]}>{title && title}</AppText>
    </View>
  );
}
/////////////////////////////////////////////////////////////////////////
const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    backgroundColor: AppColors.primaryBlack,
    color: AppColors.primaryWhite,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  iconImage: {
    borderRadius: 100,
    width: 32,
    height: 32,
  },

  text: {
    color: AppColors.primaryWhite,
    fontFamily: "Medium",
    paddingHorizontal: 5,
  },
});
/////////////////////////////////////////////////////////////////////////
export default AppButton;
