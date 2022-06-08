import React from "react";
import { Alert, Dimensions, Image, StyleSheet, View } from "react-native";
import { TextInput } from "react-native-paper";
//sub: App Component
import AppScreen from "../../Components/AppComponents/AppScreen";
import AppColors from "../../Config/AppColors";
import AppTouchableHighlight from "../../Components/AppComponents/AppTouchableHighlight";
import AppTouchableOpacity from "../../Components/AppComponents/AppTouchableOpacity";
import AppText from "../../Components/AppComponents/AppText";
import AppButton from "../../Components/AppComponents/AppButton";
import AppFABButtonSecond from "../../Components/AppComponents/AppFABButtonSecond";
// sub: Extra
const { width, height } = Dimensions.get("screen");

function WithdrawalRequestScreen({ balance = "29,500", navigation }) {
  const [amount, setAmount] = React.useState("");
  const [UPIAddress, setUPIAddress] = React.useState("");
  const [bankDetails, setBandDetails] = React.useState("");

  const onCloseIconPress = () => {
    navigation.goBack();
  };

  const onSubmitButtonPress = () => {};

  return (
    <>
      <AppScreen style={[styles.screen]}>
        <View style={[styles.container]}>
          {/* //:: Header  */}
          <AppFABButtonSecond
            icon={require("../../Assets/close.png")}
            iconContainerStyle={[styles.iconContainerStyle]}
            size={0.1}
            backgroundColor={AppColors.primaryWhite}
            onPress={onCloseIconPress}
          />
          <View style={[styles.headerContainer]}>
            <Image
              source={require("../../Assets/withdraw.png")}
              style={[styles.headerImage]}
              resizeMode="contain"
            />
            <AppText
              style={[styles.text, { fontSize: 18, fontFamily: "SemiBold" }]}
            >
              Withdraw Request
            </AppText>
          </View>

          {/* //:: Header  */}
          {/* // :: Body  */}
          <View style={[styles.bodyContainer]}>
            <View>
              <AppText
                style={[styles.text, { fontSize: 24, fontFamily: "Bold" }]}
              >
                ₹ {balance}
              </AppText>
              <AppText style={[styles.text]}>Available Balance</AppText>
            </View>

            <View>
              <TextInput
                activeUnderlineColor={AppColors.primaryBlack}
                label="Enter Withdraw Amount ( ₹ )"
                onChangeText={(amount) => setAmount(amount)}
                style={[styles.textInput]}
                value={amount}
                keyboardType="numeric"
                // onBlur={(amount) => console.log(amount)}
                onBlur={() => console.log("nikhil")}
              />
              <AppText
                style={[
                  styles.text,
                  {
                    fontSize: 10,
                    color: AppColors.secondaryWhite,
                    marginTop: 8,
                  },
                ]}
              >
                Minimum withdrawal amount ₹ 500
              </AppText>
            </View>

            <TextInput
              activeUnderlineColor={AppColors.primaryBlack}
              label="UPI Address"
              onChangeText={(UPIAddress) => setUPIAddress(UPIAddress)}
              style={[styles.textInput]}
              value={UPIAddress}
            />

            <TextInput
              activeUnderlineColor={AppColors.primaryBlack}
              label="Bank Account Details"
              onChangeText={(bankDetails) => setBandDetails(bankDetails)}
              style={[styles.textInput]}
              value={bankDetails}
            />

            <AppTouchableOpacity onPress={onSubmitButtonPress}>
              <AppButton
                title="Submit Request"
                ContainerStyle={[styles.buttonContainer]}
              />
            </AppTouchableOpacity>
          </View>
          {/* // :: Body  */}
        </View>
      </AppScreen>
    </>
  );
}

const styles = StyleSheet.create({
  bodyContainer: {
    flex: 1,
    width: "100%",
    justifyContent: "space-evenly",
  },

  buttonContainer: {
    backgroundColor: AppColors.secondaryGreen,
  },

  container: {
    backgroundColor: AppColors.primaryWhite,
    width: width * 0.8,
    height: height * 0.8,
    padding: width * 0.1,
    justifyContent: "space-evenly",
  },

  headerContainer: {
    width: "100%",
    alignItems: "center",
  },

  headerImage: {
    width: width * 0.2,
    height: width * 0.2,
    marginVertical: width * 0.03,
  },

  iconContainerStyle: {
    position: "absolute",
    right: width * 0.05,
    top: width * 0.05,
  },

  screen: {
    backgroundColor: AppColors.secondaryWhite,
    flex: 1,
    width: width,
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    fontSize: 14,
    fontFamily: "Medium",
    color: AppColors.primaryBlack,
  },

  textInput: {
    backgroundColor: AppColors.primaryWhite,
    paddingHorizontal: 0,
    fontSize: 14,
    color: AppColors.primaryBlack,
  },
});
export default WithdrawalRequestScreen;
