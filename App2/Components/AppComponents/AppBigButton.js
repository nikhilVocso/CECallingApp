import React from "react";
import { Text, View, StyleSheet } from "react-native";

import AppFABButton from "./AppFABButton";
import AppText from "./AppText";
import AppColors from "../../Config/AppColors";

function AppButton({
  ContainerStyle,
  title,
  textStyle,
  iconName,
  iconColor,
  onPress,
  iconSize,
  iconStyle,
  subTitle,
  titleStyle,
  subTitleStyle,
}) {
  return (
    <View style={[styles.container, ContainerStyle]} onPress={onPress}>
      <View>
        {title && <AppText style={[styles.title, titleStyle]}>{title}</AppText>}
        {subTitle && (
          <AppText style={[styles.subTitle, subTitleStyle]}>{subTitle}</AppText>
        )}
      </View>

      <View style={styles.icon}>
        {iconName && (
          <AppFABButton
            name={iconName}
            color={iconColor}
            size={iconSize}
            style={[iconStyle, { padding: 0, backgroundColor: "transparent" }]}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    backgroundColor: AppColors.primaryBlack,
    color: AppColors.primaryWhite,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },

  title: {
    fontSize: 16,
    color: AppColors.primaryWhite,
    fontFamily: "SemiBold",
    paddingHorizontal: 5,
    // textTransform: "capitalize",
  },

  subTitle: {
    fontSize: 12,
    color: AppColors.primaryWhite,
    paddingHorizontal: 5,
    fontFamily: "Regular",
    // textTransform: "capitalize",
  },
});

export default AppButton;
