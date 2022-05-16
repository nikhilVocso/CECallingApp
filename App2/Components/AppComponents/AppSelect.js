import React, { useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { Picker } from "@react-native-picker/picker";

import AppColors from "../../Config/AppColors";
import AppTouchableHightLight from "../AppComponents/AppTouchableHighlight";
import AppTouchableOpacity from "../AppComponents/AppTouchableOpacity";

const AppSelect = ({ containerStyle, categoryData = ["nikhil", "menan"] }) => {
  const [selectedValue, setSelectedValue] = useState(categoryData[0]);

  return (
    <View style={[styles.container, containerStyle]}>
      <Picker
        mode="dropdown"
        selectedValue={selectedValue}
        style={styles.pickerContainer}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        {categoryData.map((item) => (
          <Picker.Item label={item} value={item} />
        ))}
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.primaryWhite,
    width: "100%",
    borderBottomWidth: 2,
    borderBottomColor: AppColors.primaryBlack,
  },

  pickerContainer: {
    width: "100%",
    color: AppColors.primaryBlack,
  },
});

export default AppSelect;
