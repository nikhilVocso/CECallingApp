// :: main: AddInterestScreen
import React, { useState } from "react";
import { Dimensions, View, StyleSheet, Text } from "react-native";
import SelectBox from "react-native-multi-selectbox";
import { xorBy } from "lodash";
//////////////////////////////////////////////////////////////////////////
import AppText from "../../Components/AppComponents/AppText";
import AppScreen from "../../Components/AppComponents/AppScreen";
import AppTouchableOpacity from "../../Components/AppComponents/AppTouchableOpacity";
import AppButton from "../../Components/AppComponents/AppButton";
import AppColors from "../../Config/AppColors";
import AppNavBar from "../../Components/AppComponents/AppNavBar";
import AppSelectBox from "../../Components/AppComponents/AppSelectBox";
//////////////////////////////////////////////////////////////////////////
const { width } = Dimensions.get("screen");
const categories = [
  {
    item: "nikhil",
    id: 1,
  },
  {
    item: "deepak",
    id: 2,
  },
  {
    item: "shafali",
    id: 3,
  },
  {
    item: "varsa",
    id: 4,
  },
  {
    item: "kalpana",
    id: 5,
  },
  {
    item: "prem",
    id: 6,
  },
  {
    item: "darban",
    id: 7,
  },
  {
    item: "anju",
    id: 8,
  },
];
//////////////////////////////////////////////////////////////////////////

function AddInterestScreen({ navigation }) {
  const [selectedTeams, setSelectedTeams] = useState([]);

  const onBackButtonPress = () => {
    console.log("on back button pressed");
    navigation.goBack();
  };

  const onSkipButtonPressed = () => {
    console.log("on skip button pressed");
    navigation.navigate("HomeScreen");
  };

  const onNextButtonPressed = () => {
    console.log("on next button pressed");
    navigation.navigate("AddRatesScreen");
  };

  function onMultiChange() {
    return (item) => setSelectedTeams(xorBy(selectedTeams, [item], "id"));
  }

  return (
    <>
      <AppScreen style={[styles.screen]}>
        {/* //////////// sub: Header ///////////// */}
        <AppNavBar
          navbarTitleText="Add Interest Screen"
          onBackButtonPress={onBackButtonPress}
        />
        {/* //////////// sub: Header ///////////// */}
        <View style={[styles.container]}>
          {/* //////////// sub: Body ///////////// */}
          <View style={[styles.categoryContainer]}>
            <AppSelectBox data={categories} />
          </View>
          {/* //////////// sub: Body ///////////// */}
          {/* //////////// sub: Footer ///////////// */}
          <View style={[styles.buttonContainer]}>
            <AppTouchableOpacity
              style={[styles.buttonContainerTouch]}
              onPress={onSkipButtonPressed}
            >
              <AppButton
                ContainerStyle={[styles.buttonContainerStyle]}
                title="Skip"
                textStyle={[styles.buttonText]}
                style={[styles.button]}
              />
            </AppTouchableOpacity>
            <AppTouchableOpacity
              style={[styles.buttonContainerTouch]}
              onPress={onNextButtonPressed}
            >
              <AppButton
                ContainerStyle={[
                  styles.buttonContainerStyle,
                  { backgroundColor: AppColors.primaryBlack },
                ]}
                title="Next"
                textStyle={[
                  styles.buttonText,
                  { color: AppColors.primaryWhite },
                ]}
                style={[styles.button]}
              />
            </AppTouchableOpacity>
          </View>
          {/* //////////// sub: Footer ///////////// */}
        </View>
      </AppScreen>
    </>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: 32,
    paddingHorizontal: 6,
  },

  buttonContainerStyle: {
    borderColor: AppColors.primaryBlack,
    borderRadius: 100,
    borderWidth: 2,
    backgroundColor: "transparent",
    marginVertical: 8,
    padding: 10,
  },

  buttonContainerTouch: {
    width: "42%",
  },

  buttonText: {
    color: AppColors.primaryBlack,
    fontSize: 16,
    fontFamily: "SemiBold",
  },

  categoryContainer: {
    alignItems: "center",
    marginTop: 12,
    width: "90%",
  },

  container: {
    flex: 1,
    alignItems: "center",
  },

  header: {
    fontSize: 24,
    fontFamily: "SemiBold",
    textAlign: "center",
    textTransform: "capitalize",
    marginTop: 24,
  },

  screen: {
    backgroundColor: AppColors.primaryWhite,
    flex: 1,
    width: width,
  },
});
export default AddInterestScreen;
