import React from "react";
import { StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
//////////////////////////////////////////////////////////////////
import AppColors from "../../Config/AppColors";
//////////////////////////////////////////////////////////////////
function AppFABButton({
  color = "black",
  name = "call",
  onPress,
  size = 24,
  style,
}) {
  return (
    <>
      {(
        <Ionicons
          name={name}
          size={size}
          color={color}
          onPress={onPress}
          style={[styles.button, style]}
        />
      ) && (
        <MaterialIcons
          name={name}
          size={size}
          color={color}
          onPress={onPress}
          style={[styles.button, style]}
        />
      )}
    </>
  );
}
//////////////////////////////////////////////////////////////////
const styles = StyleSheet.create({
  button: {
    backgroundColor: AppColors.secondaryBlack,
    padding: 12,
    borderRadius: 50,
  },
});
//////////////////////////////////////////////////////////////////

export default AppFABButton;
