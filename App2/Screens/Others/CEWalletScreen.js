import React from "react";
import { View, StyleSheet, Dimensions, ScrollView } from "react-native";
////////////////////////////////////////////////////////////////////////
import AppText from "../../Components/AppComponents/AppText";
import AppTouchableOpacity from "../../Components/AppComponents/AppTouchableOpacity";
import AppTouchableHighlight from "../../Components/AppComponents/AppTouchableHighlight";
import AppFABButton from "../../Components/AppComponents/AppFABButton";
import AppButton from "../../Components/AppComponents/AppButton";
import AppScreen from "../../Components/AppComponents/AppScreen";
import CallCount from "../../Components/Others/CallCount";
import CallHistory from "../../Components/Others/CallHistory";
import AppNavBar from "../../Components/AppComponents/AppNavBar";
import AppColors from "../../Config/AppColors";
////////////////////////////////////////////////////////////////////////
const { width, height } = Dimensions.get("screen");
////////////////////////////////////////////////////////////////////////

const CEWalletData = [
  {
    iconType: "payment",
    typeResult: 0,
    subTitle: "Calling Creadits Membership Plan",
    charges: 250,
    date: "25 Nov 2022",
    id: 1,
    title: "nikhil menan",
    time: "11:30",
    idOrTotalCall: 15155454,
  },
  {
    iconType: "payment",
    typeResult: 0,
    subTitle: "Calling Creadits Membership Plan",
    charges: 250,
    date: "25 Nov 2022",
    id: 2,
    title: "nikhil menan",
    time: "11:30",
    idOrTotalCall: 15155454,
  },
  {
    iconType: "payment",
    typeResult: 0,
    subTitle: "Calling Creadits Membership Plan",
    charges: 250,
    date: "25 Nov 2022",
    id: 3,
    title: "nikhil menan",
    time: "11:30",
    idOrTotalCall: 15155454,
  },
];

function CEWalletScreen({}) {
  const onBackButtonPress = () => {
    console.log("on back button press wallet screen");
  };

  return (
    <>
      <AppScreen style={styles.screen}>
        <View style={styles.container}>
          <ScrollView stickyHeaderIndices={[0]}>
            <AppNavBar
              onBackButtonPress={onBackButtonPress}
              navbarTitleText="CE Wallet"
            />
            <View style={{ paddingHorizontal: 15 }}>
              <CallCount name="nikhil menan" isCEWalletScreen={true} />
              <View style={{ marginBottom: 18 }}>
                <CallHistory data={CEWalletData} isCEWalletScreen={true} />
              </View>
            </View>
          </ScrollView>
        </View>
      </AppScreen>
    </>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: AppColors.secondaryWhite,
    flex: 1,
    width: width,
  },
});
export default CEWalletScreen;
