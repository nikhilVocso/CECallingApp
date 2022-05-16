import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Switch,
  ToastAndroid,
  Platform,
  AlertIOS,
} from "react-native";
///////////////////////////////////////////////////////////////////////////////
import AppText from "../AppComponents/AppText";
import AppTouchableOpacity from "../AppComponents/AppTouchableOpacity";
import AppTouchableHighlight from "../AppComponents/AppTouchableHighlight";
import AppButton from "../AppComponents/AppButton";
import AppFABButton from "../AppComponents/AppFABButton";
import AppScreen from "../AppComponents/AppScreen";
import AppColors from "../../Config/AppColors";
import AppComponentHorizontalSeparator from "../AppComponents/AppComponentHorizontalSeparator";
import AppComponentVerticalSeparator from "../AppComponents/AppComponentVerticalSeparator";
import CallHistoryDetails from "../Others/CallHistoryDetails";
///////////////////////////////////////////////////////////////////////////////
function CallHistoryScreen({ isCallHistoryScreen, isCEWalletScreen }) {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);

    if (Platform.OS === "android") {
      isEnabled === false
        ? ToastAndroid.show(
            "You Are Online",
            ToastAndroid.SHORT,
            ToastAndroid.TOP
          )
        : ToastAndroid.show("You Are Offline", ToastAndroid.SHORT);
    } else {
      isEnabled === false
        ? AlertIOS.alert("You Are Online")
        : AlertIOS.alert("You Are Offline");
    }
  };

  const onAddMoneyButtonPress = () => {
    console.log("On Add Money Button Press");
  };

  const onWithDrawPress = () => {
    console.log("On WithDraw Button Press");
  };

  return (
    <>
      {/* ///////////////////////////////// */}
      <View style={styles.container}>
        <View>
          <View style={styles.totalCallsContainer}>
            <View style={styles.totalCall}>
              <AppText style={[styles.secondaryText]}>
                Total Call Connected
              </AppText>
              <View style={styles.totalCallCount}>
                <AppText
                  style={[
                    styles.primaryText,
                    { fontSize: 28, marginRight: 10 },
                  ]}
                >
                  1500
                </AppText>
                <AppFABButton name="arrow-drop-up" style={[styles.button]} />
                <AppFABButton name="add" size={12} style={[styles.button]} />
                <AppText style={[styles.ternaryText]}>24</AppText>
              </View>
            </View>
            {isCallHistoryScreen && (
              <View style={styles.switchBUtton}>
                <Switch
                  trackColor={{
                    false: AppColors.secondaryBlack,
                    true: AppColors.primaryGreen,
                  }}
                  thumbColor={AppColors.primaryWhite}
                  ios_backgroundColor={AppColors.secondaryBlack}
                  onValueChange={toggleSwitch}
                  value={isEnabled}
                  style={{ transform: [{ scaleX: 1.1 }, { scaleY: 1.1 }] }}
                />
                <AppText style={[styles.ternaryText, { textAlign: "right" }]}>
                  You're currently available for calls
                </AppText>
              </View>
            )}
          </View>
          {isCEWalletScreen && (
            <View style={styles.moneyButtonContainer}>
              <AppTouchableOpacity onPress={onAddMoneyButtonPress}>
                <AppButton
                  title="+ Add Money"
                  ContainerStyle={[
                    styles.moneyButtonStyle,
                    { backgroundColor: AppColors.primaryGreen },
                  ]}
                  textStyle={[
                    styles.moneyButtonTextStyle,
                    { color: AppColors.primaryWhite },
                  ]}
                />
              </AppTouchableOpacity>
              <AppTouchableOpacity onPress={onWithDrawPress}>
                <AppButton
                  title="Withdraw"
                  ContainerStyle={[styles.moneyButtonStyle]}
                  textStyle={styles.moneyButtonTextStyle}
                />
              </AppTouchableOpacity>
            </View>
          )}
        </View>
        <AppComponentHorizontalSeparator />
        {/* /////////////////////////////////////// */}
        <View style={styles.callDetailsContainer}>
          <CallHistoryDetails />
          <AppComponentVerticalSeparator />
          <CallHistoryDetails />
        </View>
        <View style={styles.callDetailsContainer}>
          <CallHistoryDetails />
          <AppComponentVerticalSeparator />
          <CallHistoryDetails />
          {isCallHistoryScreen && (
            <>
              <AppComponentVerticalSeparator />
              <CallHistoryDetails />
            </>
          )}
        </View>
        {/* /////////////////////////////////////// */}
      </View>
    </>
  );
}
///////////////////////////////////////////////////////////////////////////////
const styles = StyleSheet.create({
  button: {
    color: AppColors.primaryGreen,
    backgroundColor: "transparent",
    padding: 0,
  },

  callDetailsContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingVertical: 12,
    marginTop: 12,
  },

  container: {
    backgroundColor: AppColors.primaryWhite,
    marginVertical: 20,
    padding: 12,
    paddingTop: 0,
    borderRadius: 10,
  },

  moneyButtonContainer: {
    marginBottom: 18,
  },

  moneyButtonStyle: {
    backgroundColor: AppColors.secondaryWhite,
    marginVertical: 8,
    padding: 12,
    borderRadius: 100,
  },

  moneyButtonTextStyle: {
    fontSize: 18,
    color: AppColors.primaryBlack,
    fontFamily: "SemiBold",
  },

  switchBUtton: {
    flex: 1,
  },

  totalCall: {
    flex: 2,
  },

  totalCallsContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginVertical: 18,
  },

  totalCallCount: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },

  ///////////// note: Texts //////////////////////

  primaryText: {
    fontSize: 22,
    fontFamily: "Bold",
    color: AppColors.primaryBlack,
    textTransform: "capitalize",
  },

  secondaryText: {
    fontSize: 18,
    fontFamily: "SemiBold",
    color: AppColors.primaryBlack,
    textTransform: "capitalize",
  },

  ternaryText: {
    fontSize: 12,
    fontFamily: "Medium",
    color: AppColors.primaryBlack,
    textTransform: "capitalize",
  },
});
export default CallHistoryScreen;
