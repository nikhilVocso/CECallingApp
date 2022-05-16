import React from "react";
import { Dimensions, View, StyleSheet } from "react-native";
import SelectableChips from "react-native-chip/SelectableChips";
/////////////////////////////////////////////////////////////////////////////////
import AppText from "../../Components/AppComponents/AppText";
import AppScreen from "../../Components/AppComponents/AppScreen";
import AppTouchableHighlight from "../../Components/AppComponents/AppTouchableHighlight";
import AppTouchableOpacity from "../../Components/AppComponents/AppTouchableOpacity";
import AppButton from "../../Components/AppComponents/AppButton";
import AppNavBar from "../../Components/AppComponents/AppNavBar";
import AppColors from "../../Config/AppColors";
/////////////////////////////////////////////////////////////////////////////////
const { width, height } = Dimensions.get("screen");
const categoryType = [
  "Nikhil",
  "Deepak",
  "Varsa",
  "Anju",
  "Kaplana",
  "Vishal",
  "Sumit",
  "Archit",
  "Shubham",
  "Nikhil",
];
/////////////////////////////////////////////////////////////////////////////////
const onChangeChips = (Chips) => {
  console.log(Chips);
};

const onSkipButtonPressed = () => {
  console.log("on skip button pressed");
  navigation.navigate("HomeScreen");
};

const onNextButtonPressed = () => {
  console.log("on next button pressed");
  navigation.navigate("AddRatesScreen");
};

const onBackButtonPress = () => {
  console.log("on back button pressed");
  navigation.goBack();
};
/////////////////////////////////////////////////////////////////////////////////

function AddInterestScreen({ navigation }) {
  return (
    <>
      <AppScreen style={[styles.screen]}>
        <View style={[styles.container]}>
          {/* ////////////// Navbar //////////////// */}
          <AppNavBar
            navbarTitleText="Add Interest Screen"
            onBackButtonPress={onBackButtonPress}
          />
          {/* ////////////// Navbar //////////////// */}

          {/* ////////////// body //////////////// */}
          <View style={[styles.bodyContainer]}>
            <SelectableChips
              initialChips={categoryType}
              onChangeChips={onChangeChips}
              alertRequired={false}
              chipStyle={[styles.chipsStyle]}
              valueStyle={[styles.valueStyle]}
              chipStyleSelected={[styles.chipStyleSelected]}
              valueStyleSelected={[styles.valueStyleSelected]}
            />
          </View>
          {/* ////////////// body //////////////// */}

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
  bodyContainer: {
    marginVertical: 24,
    paddingHorizontal: 18,
  },

  buttonContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
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

  container: {
    flex: 1,
  },

  chipsStyle: {
    backgroundColor: AppColors.primaryWhite,
    borderColor: AppColors.primaryBlack,
  },

  chipStyleSelected: {
    backgroundColor: AppColors.primaryBlack,
  },

  screen: {
    backgroundColor: AppColors.primaryWhite,
    flex: 1,
    width: width,
  },

  valueStyle: {
    color: AppColors.primaryBlack,
    fontSize: 18,
    fontWeight: "700",
  },

  valueStyleSelected: {
    color: AppColors.primaryWhite,
  },
});
export default AddInterestScreen;
