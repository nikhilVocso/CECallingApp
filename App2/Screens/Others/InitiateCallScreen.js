import React, { useState } from "react";
import {
  Alert,
  View,
  StyleSheet,
  Dimensions,
  TextInput,
  Modal,
} from "react-native";
//////////////////////////////////////////////////////////////////////////////////////
import AppColors from "../../Config/AppColors";
import AppText from "../../Components/AppComponents/AppText";
import AppScreen from "../../Components/AppComponents/AppScreen";
import AppSelect from "../../Components/AppComponents/AppSelect";
import AppBigButton from "../../Components/AppComponents/AppBigButton";
import AppTouchableOpacity from "../../Components/AppComponents/AppTouchableOpacity";
import AppTouchableHighlight from "../../Components/AppComponents/AppTouchableHighlight";
import AppTextInput from "../../Components/AppComponents/AppTextInput";
import AppIcon from "../../Components/AppComponents/AppIcon";
//////////////////////////////////////////////////////////////////////////////////////
const { width, height } = Dimensions.get("screen");

const categoryData = [
  "categoryOne",
  "categoryTwo",
  "categoryThree",
  "categoryFour",
];

//////////////////////////////////////////////////////////////////////////////////////
function InitiateCallScreen({
  name = "name",
  videoCallCharge = 100,
  voiceCallCharge = 165,
  totalBalance = 150,
  navigation,
}) {
  const [text, setText] = React.useState("");

  const onVideoCallPress = () => {
    console.log("on Video call");
    videoCallCharge < totalBalance
      ? navigation.navigate("CallDialingScreen")
      : navigation.navigate("CallDialingScreen");
  };

  const onAudioCallPress = () => {
    console.log("on Voice call");
    voiceCallCharge < totalBalance
      ? navigation.navigate("CallDialingScreen")
      : Alert.alert(
          `Insufficient Balance ₹ ${totalBalance}`,
          "You don't have enough balance to make a call, Please add some credit in your wallet",
          [
            {
              text: "Cancel",
              onPress: () => navigation.goBack(),
            },
            {
              text: "Okay",
              onPress: () => navigation.navigate("AddMoneyScreen"),
            },
          ]
        );
  };

  const onAddMoreCreditPress = () => {
    console.log(" On Add More credit press");
    navigation.navigate("AddMoneyScreen");
  };

  const onCloseIconButtonPress = () => {
    console.log("on close icon button pressed");
    navigation.goBack();
  };

  return (
    <>
      <AppScreen style={styles.screen}>
        <View style={styles.container}>
          <AppTouchableOpacity
            onPress={onCloseIconButtonPress}
            style={[styles.closeIcon]}
          >
            <AppIcon icon={require("../../Assets/close.png")} size={5} />
          </AppTouchableOpacity>
          <AppText style={styles.headerText}>
            Start a live call with {name}
          </AppText>
          <View style={styles.categorySelectContainer}>
            <AppText style={styles.text}>Select a category</AppText>
            <AppSelect categoryData={categoryData} />
            <AppText style={[styles.text, { paddingTop: 15 }]}>
              Discussion topic details
            </AppText>
            <View
              style={{
                width: "100%",
                minHeight: 50,
                justifyContent: "center",
                borderBottomWidth: 2,
              }}
            >
              <AppTextInput
                placeholder="Explain your issue briefly"
                multiline={true}
                style={{ maxHeight: 50 }}
              ></AppTextInput>
            </View>
          </View>
          <View style={styles.callButtons}>
            <AppTouchableOpacity onPress={onVideoCallPress}>
              <AppBigButton
                title="Video Call"
                subTitle={"INR " + videoCallCharge + "/min"}
                iconName="videocam"
                iconColor="white"
                ContainerStyle={styles.buttonContainerStyle}
              />
            </AppTouchableOpacity>
            <AppTouchableOpacity onPress={onAudioCallPress}>
              <AppBigButton
                title="Voice Call"
                subTitle={"INR " + voiceCallCharge + "/min"}
                iconName="call"
                iconColor="white"
                ContainerStyle={[
                  styles.buttonContainerStyle,
                  { backgroundColor: "black" },
                ]}
              />
            </AppTouchableOpacity>
          </View>
          <View style={{ alignItems: "center" }}>
            <AppText style={[styles.text, { fontSize: 12 }]}>
              Current balance{" "}
              <AppText style={{ color: "red" }}>INR {totalBalance}</AppText>
            </AppText>
            <AppTouchableHighlight onPress={onAddMoreCreditPress}>
              <AppText
                style={{
                  fontSize: 12,
                  fontFamily: "Bold",
                  color: "black",
                  textDecorationLine: "underline",
                }}
              >
                Add More Credits
              </AppText>
            </AppTouchableHighlight>
          </View>
        </View>
      </AppScreen>
    </>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: AppColors.secondaryBlack,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  container: {
    backgroundColor: "white",
    height: height * 0.8,
    width: width * 0.8,
    padding: 32,
    justifyContent: "space-evenly",
  },

  headerText: {
    fontSize: 22,
    fontFamily: "Bold",
    color: "black",
    textAlign: "center",
    paddingBottom: 15,
  },

  text: {
    fontSize: 14,
    fontFamily: "SemiBold",
    color: "gray",
    paddingTop: 5,
  },

  callButtons: {
    width: "100%",
    justifyContent: "space-between",
    marginTop: 30,
  },

  closeIcon: {
    position: "absolute",
    right: 24,
    top: 24,
  },

  buttonContainerStyle: {
    backgroundColor: "green",
    marginBottom: 20,
    paddingHorizontal: 30,
    justifyContent: "space-evenly",
  },
});
export default InitiateCallScreen;
