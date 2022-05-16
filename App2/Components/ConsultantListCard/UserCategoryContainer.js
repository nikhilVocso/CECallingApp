import React from "react";
import { View, StyleSheet } from "react-native";
/////////////////////////////////////////////////////////////////////
import AppText from "../AppComponents/AppText";
import AppColors from "../../Config/AppColors";
/////////////////////////////////////////////////////////////////////

function UserCategoryContainer({ categories, style }) {
  return (
    <>
      <View style={[styles.container, style]}>
        <AppText style={styles.categories} numberOfLines={2}>
          {categories}
        </AppText>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.primaryWhite,
    width: "100%",
  },

  categories: {
    fontSize: 12,
    fontFamily: "Regular",
    textTransform: "capitalize",
  },
});
export default UserCategoryContainer;
