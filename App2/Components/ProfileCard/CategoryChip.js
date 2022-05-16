import React from "react";
import { View, StyleSheet } from "react-native";
import { Chip } from "react-native-paper";
/////////////////////////////////////////////////////////////////////
import AppColors from "../../Config/AppColors";
import AppText from "../AppComponents/AppText";
/////////////////////////////////////////////////////////////////////

function CategoryChip({ title = "Example Chip", containerStyle, textStyle }) {
  return (
    <>
      <View style={[styles.container, containerStyle]}>
        <AppText style={[styles.text, textStyle]}>{title}</AppText>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.primaryWhite,
    margin: 3,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: AppColors.secondaryWhite,
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    fontSize: 12,
    fontFamily: "SemiBold",
    marginVertical: 2,
    marginHorizontal: 6,
  },
});
export default CategoryChip;
