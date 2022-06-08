import React from "react";
import {
  FlatList,
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
} from "react-native";
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

function CEWalletScreen({ navigation, professionalAccount = true }) {
  const onBackButtonPress = () => {
    console.log("on back button press wallet screen");
    navigation.goBack();
  };

  const onAddMoneyButtonPress = () => {
    console.log("Add moeny ce wallet screen");
    navigation.navigate("AddMoneyScreen");
  };

  const onWithDrawPress = () => {
    console.log("on withdrawal ce wallet screen");
    navigation.navigate("WithdrawalRequestScreen");
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
              <CallCount
                name="nikhil menan"
                isCEWalletScreen={true}
                title="Total Available Balance"
                professionalAccount={professionalAccount}
                onAddMoneyButtonPress={onAddMoneyButtonPress}
                onWithDrawPress={onWithDrawPress}
              />
              {/* //////////////////////////////////////////////////////////////// */}
              <View style={[styles.callHistoryContainer]}>
                {/* ////////////////////////////////// */}
                <View style={styles.titleTextContainer}>
                  <AppText style={[styles.secondaryText, styles.titleText]}>
                    All Transactions
                  </AppText>
                </View>
                <FlatList
                  data={CEWalletData}
                  keyExtractor={(item) => item.id}
                  renderItem={({ item }) => (
                    <>
                      {/* ////////////////////////////////// */}
                      <CallHistory
                        isCEWalletScreen={true}
                        iconType={item.iconType}
                        title={item.title}
                        subTitle={item.subTitle}
                        date={item.date}
                        time={item.time}
                        duration={item.duration}
                        idOrTotalCall={item.idOrTotalCall}
                        charges={item.charges}
                      />
                    </>
                  )}
                />
                {/* ////////////////////////////////// */}
              </View>
              {/* //////////////////////////////////////////////////////////////// */}
            </View>
          </ScrollView>
        </View>
      </AppScreen>
    </>
  );
}

const styles = StyleSheet.create({
  callHistoryContainer: {
    // backgroundColor: "red",
    backgroundColor: AppColors.primaryWhite,
    width: "100%",
    justifyContent: "center",
    padding: 15,
    borderRadius: 10,
  },

  titleTextContainer: {
    alignItems: "center",
    // marginBottom: 10,
  },

  secondaryText: {
    fontSize: 18,
    fontFamily: "SemiBold",
    color: AppColors.primaryBlack,
    textTransform: "capitalize",
  },

  titleText: {
    textAlign: "center",
    padding: 10,
    borderBottomWidth: 3,
  },

  screen: {
    backgroundColor: AppColors.secondaryWhite,
    flex: 1,
    width: width,
  },
});
export default CEWalletScreen;
