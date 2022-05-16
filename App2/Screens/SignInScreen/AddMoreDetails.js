import React, { useState } from "react";
import { Dimensions, View, StyleSheet } from "react-native";
import SelectBox from "react-native-multi-selectbox";
import { xorBy } from "lodash";
import { TextInput } from "react-native-paper";

///////////////////////////////////////////////////////////////////////
import AppText from "../../Components/AppComponents/AppText";
import AppScreen from "../../Components/AppComponents/AppScreen";
import AppTouchableOpacity from "../../Components/AppComponents/AppTouchableOpacity";
import AppColors from "../../Config/AppColors";
import AppButton from "../../Components/AppComponents/AppButton";
import AppSelectBox from "../../Components/AppComponents/AppSelectBox";
import AppNavBar from "../../Components/AppComponents/AppNavBar";
///////////////////////////////////////////////////////////////////////
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
///////////////////////////////////////////////////////////////////////

function AddMoreDetails({ navigation }) {
  const [selectedTeams, setSelectedTeams] = useState([]);
  const [businessName, setBusinessName] = React.useState("");
  const [about, setAbout] = React.useState("");
  const [website, setWebsite] = React.useState("");

  function onMultiChange() {
    return (item) => setSelectedTeams(xorBy(selectedTeams, [item], "id"));
  }

  const onBackButtonPress = () => {
    console.log("on back button pressed");
    navigation.goBack();
  };

  const onNextButtonPressed = () => {
    console.log("on next button pressed");
    navigation.navigate("SetScheduleScreen");
  };

  return (
    <>
      <AppScreen style={[styles.screen]}>
        {/* //////////// sub: Header ///////////// */}
        <AppNavBar
          navbarTitleText="Add More Details"
          onBackButtonPress={onBackButtonPress}
        />
        {/* //////////// sub: Header ///////////// */}
        <View style={[styles.container]}>
          {/* //////////// sub: Body ///////////// */}
          <View style={[styles.bodyContainer]}>
            {/* :: Select category  */}
            <View style={[styles.categoryContainer]}>
              <AppSelectBox data={categories} />
            </View>
            {/* :: Business Name  */}
            <TextInput
              activeUnderlineColor={AppColors.primaryBlack}
              label="Enter Your Business Name"
              onChangeText={(businessName) => setBusinessName(businessName)}
              style={[styles.textInput]}
              value={businessName}
              right={<TextInput.Affix text="/100" />}
            />
            {/* :: About  */}
            <TextInput
              activeUnderlineColor={AppColors.primaryBlack}
              label="About"
              value={about}
              onChangeText={(about) => setAbout(about)}
              style={[styles.textInput]}
              multiline={true}
            />
            {/* :: Website  */}
            <TextInput
              activeUnderlineColor={AppColors.primaryBlack}
              label="Enter Your Website"
              onChangeText={(website) => setWebsite(website)}
              style={[styles.textInput]}
              value={website}
            />
            {/* :: Next Button  */}
            {/* //////////// sub: Footer ///////////// */}
            <View style={[styles.buttonContainer]}>
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
          {/* //////////// sub: Body ///////////// */}
        </View>
      </AppScreen>
    </>
  );
}

const styles = StyleSheet.create({
  about: {
    width: "100%",
    maxHeight: 150,
  },

  buttonContainer: {
    alignItems: "center",
    marginVertical: 18,
    width: "100%",
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
    width: "100%",
    alignItems: "center",
  },

  buttonText: {
    color: AppColors.primaryBlack,
    fontSize: 18,
    fontFamily: "SemiBold",
  },

  bodyContainer: {
    width: "90%",
    alignItems: "center",
  },

  businessName: {
    width: "100%",
    marginVertical: 16,
  },

  categoryContainer: {
    alignItems: "center",
    width: "100%",
    marginVertical: 16,
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
    marginVertical: 12,
  },

  screen: {
    backgroundColor: AppColors.primaryWhite,
    flex: 1,
    width: width,
  },

  textInput: {
    backgroundColor: AppColors.primaryWhite,
    marginVertical: 12,
    width: "100%",
    // paddingHorizontal: 0,
  },
});
export default AddMoreDetails;
