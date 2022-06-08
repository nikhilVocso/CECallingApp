import React from "react";
import { Alert, Dimensions, View, StyleSheet, Image } from "react-native";
import { TextInput } from "react-native-paper";
/////////////////////////////////////////////////////////////////////////////////////////
import AppScreen from "../../Components/AppComponents/AppScreen";
import AppColors from "../../Config/AppColors";
import AppText from "../../Components/AppComponents/AppText";
import AppTouchableHighlight from "../../Components/AppComponents/AppTouchableHighlight";
import AppTouchableOpacity from "../../Components/AppComponents/AppTouchableOpacity";
import AppButton from "../../Components/AppComponents/AppButton";
import AppFABButtonSecond from "../../Components/AppComponents/AppFABButtonSecond";
/////////////////////////////////////////////////////////////////////////////////////////
const { width, height } = Dimensions.get("screen");
/////////////////////////////////////////////////////////////////////////////////////////

function AddMoneyScreen({
  balance = 1500,
  description = "one ce credits equals ₹ one",
  image = require("../../Assets/rupees.png"),
  message = "Buy CE Credits",
  totalBalance = 1500,
  navigation,
}) {
  const [amount, setAmount] = React.useState("");

  const onProceedToPayPress = () => {
    console.log("on Proceed To Pay");
    Number(amount) === 0 || amount === ""
      ? Alert.alert("Please and and amount")
      : navigation.navigate("AddMoneyMessageScreen");
  };

  const onCloseIconPress = () => {
    navigation.goBack();
  };

  return (
    <>
      <AppScreen style={styles.screen}>
        <View style={styles.container}>
          <AppFABButtonSecond
            icon={require("../../Assets/close.png")}
            iconContainerStyle={[styles.iconContainerStyle]}
            size={0.1}
            backgroundColor={AppColors.primaryWhite}
            onPress={onCloseIconPress}
          />
          <View style={styles.detailsContainer}>
            <Image source={image} style={styles.image} />
            <AppText style={styles.text}>{message}</AppText>
          </View>
          <View style={styles.creditContainer}>
            <TextInput
              activeUnderlineColor={AppColors.primaryBlack}
              label="Enter Amount"
              onChangeText={(amount) => setAmount(amount)}
              style={[styles.textInput]}
              value={amount}
              keyboardType="numeric"
            />
            <AppText
              style={[
                styles.text,
                { fontSize: 14, color: AppColors.secondaryBlack },
              ]}
            >
              {description}
            </AppText>
          </View>
          <AppTouchableOpacity onPress={onProceedToPayPress}>
            <AppButton
              textStyle={styles.buttonText}
              ContainerStyle={styles.buttonContainer}
              title="Proceed To Pay"
            />
          </AppTouchableOpacity>
        </View>
      </AppScreen>
    </>
  );
}

/////////////////////////////////////////////////////////////////////////////////////////

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: AppColors.secondaryGreen,
  },

  buttonText: {
    fontSize: 18,
    fontFamily: "SemiBold",
  },

  container: {
    backgroundColor: AppColors.primaryWhite,
    width: width * 0.8,
    height: height * 0.8,
    justifyContent: "space-evenly",
    padding: width * 0.08,
  },

  iconContainerStyle: {
    position: "absolute",
    top: width * 0.05,
    right: width * 0.05,
  },

  image: {
    width: width * 0.3,
    height: width * 0.3,
    marginBottom: width * 0.05,
    alignSelf: "center",
  },

  screen: {
    backgroundColor: AppColors.secondaryWhite,
    flex: 1,
    width: width,
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    fontSize: 22,
    fontFamily: "Bold",
    color: AppColors.primaryBlack,
    textTransform: "capitalize",
    textAlign: "center",
  },

  textInput: {
    backgroundColor: AppColors.primaryWhite,
    marginVertical: width * 0.05,
    // paddingHorizontal: 0,
  },
});
export default AddMoneyScreen;
