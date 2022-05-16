import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import SelectBox from "react-native-multi-selectbox";
import { xorBy } from "lodash";
///////////////////////////////////////////////////////////////////
import AppColors from "../../Config/AppColors";
///////////////////////////////////////////////////////////////////

function AppSelectBox({ data }) {
  const [selectedTeams, setSelectedTeams] = useState([]);

  function onMultiChange() {
    return (item) => setSelectedTeams(xorBy(selectedTeams, [item], "id"));
  }

  return (
    <>
      <SelectBox
        label="Choose a category"
        options={data}
        selectedValues={selectedTeams}
        onMultiSelect={onMultiChange()}
        onTapClose={onMultiChange()}
        isMulti
        arrowIconColor={AppColors.primaryBlack}
        searchIconColor={AppColors.primaryBlack}
        toggleIconColor={AppColors.primaryBlack}
        multiOptionsLabelStyle={{
          fontSize: 16,
          textTransform: "capitalize",
        }}
        containerStyle={{
          alignItems: "center",
          paddingHorizontal: 12,
        }}
        multiOptionContainerStyle={{
          backgroundColor: AppColors.primaryBlack,
        }}
        optionContainerStyle={{
          borderRadius: 5,
          marginVertical: 4,
          paddingHorizontal: 12,
        }}
        optionsLabelStyle={{
          // color: AppColors.primaryBlack,
          textTransform: "capitalize",
        }}
        inputFilterStyle={{
          fontSize: 18,
          paddingHorizontal: 12,
        }}
      />
    </>
  );
}

///////////////////////////////////////////////////////////////////
const styles = StyleSheet.create({
  categoryContainer: {},
});
export default AppSelectBox;
