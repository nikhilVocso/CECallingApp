import React from "react";
import { Dimensions, Image, StyleSheet, View } from "react-native";
// sub: App Component
import AppScreen from "../../Components/AppComponents/AppScreen";
import AppColors from "../../Config/AppColors";
import AppTouchableHighlight from "../../Components/AppComponents/AppTouchableHighlight";
import AppTouchableOpacity from "../../Components/AppComponents/AppTouchableOpacity";
import AppText from "../../Components/AppComponents/AppText";
import AppFABButtonSecond from "../../Components/AppComponents/AppFABButtonSecond";
import AppButton from "../../Components/AppComponents/AppButton";
// sub: Extra
const { width, height } = Dimensions.get("screen");

function AddMoneyMessageScreen({ amount = 500, navigation }) {
  const onCloseIconPress = () => {
    console.log("icon press");
    navigation.goBack();
  };

  const onOkayButtonPress = () => {
    console.log("on okay button press");
    navigation.navigate("HomeScreen");
  };

  return (
    <>
      <AppScreen style={[styles.screen]}>
        <View style={[styles.container]}>
          <AppFABButtonSecond
            icon={require("../../Assets/close.png")}
            onPress={onCloseIconPress}
            size={0.1}
            iconContainerStyle={[styles.iconContainerStyle]}
            backgroundColor={AppColors.primaryWhite}
          />
          <View style={[{ paddingHorizontal: width * 0.1 }]}>
            {/* // :: header  */}
            <View style={[styles.headerContainer]}>
              <Image
                source={require("../../Assets/thumbs-up.png")}
                style={[styles.headerImage]}
                resizeMode="contain"
              />
              <AppText
                style={[styles.text, { fontSize: 18, fontFamily: "SemiBold" }]}
              >
                Credit Add To Your Wallet
              </AppText>
            </View>
            {/* // :: header  */}
            {/* //:: Body  */}
            <View style={[styles.bodyContainer]}>
              <AppText style={[styles.text]}>
                <AppText style={[styles.text, { fontFamily: "SemiBold" }]}>
                  ₹{amount}
                </AppText>{" "}
                credits add to your wallet.
              </AppText>
              <AppTouchableOpacity onPress={onOkayButtonPress}>
                <AppButton
                  title="Okay"
                  ContainerStyle={[styles.buttonContainerStyle]}
                />
              </AppTouchableOpacity>
            </View>
            {/* //:: Body  */}
          </View>
        </View>
      </AppScreen>
    </>
  );
}

const styles = StyleSheet.create({
  bodyContainer: {
    marginVertical: width * 0.1,
  },

  buttonContainerStyle: {
    backgroundColor: AppColors.secondaryGreen,
    marginVertical: width * 0.1,
    alignSelf: "center",
  },

  container: {
    backgroundColor: AppColors.primaryWhite,
    width: width * 0.8,
  },

  headerContainer: {
    width: "100%",
    alignItems: "center",
  },

  headerImage: {
    width: width * 0.2,
    height: width * 0.2,
    marginVertical: width * 0.05,
  },

  iconContainerStyle: {
    alignSelf: "flex-end",
    marginTop: width * 0.05,
    marginRight: width * 0.05,
  },

  screen: {
    backgroundColor: AppColors.secondaryWhite,
    flex: 1,
    width: width,
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    fontSize: 16,
    fontFamily: "Medium",
    color: AppColors.primaryBlack,
    textAlign: "center",
  },
});
export default AddMoneyMessageScreen;
