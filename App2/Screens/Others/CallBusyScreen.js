import React from "react";
import { View, StyleSheet, Image, Dimensions } from "react-native";
///////////////////////////////////////////////////////////////////////////////////
import AppFABButton from "../../Components/AppComponents/AppFABButton";
import AppScreen from "../../Components/AppComponents/AppScreen";
import AppText from "../../Components/AppComponents/AppText";
import AppColors from "../../Config/AppColors";
import AppCallerImage from "../../Components/AppComponents/AppCallerImage";
import AppTouchableOpacity from "../../Components/AppComponents/AppTouchableOpacity";
import AppTouchableHighlight from "../../Components/AppComponents/AppTouchableHighlight";
///////////////////////////////////////////////////////////////////////////////////
const { width, height } = Dimensions.get("screen");
///////////////////////////////////////////////////////////////////////////////////

function CallBusyScreen({
  name = "nikhil menan",
  message = "this is message",
}) {
  return (
    <>
      <AppScreen style={styles.screen}>
        <View style={styles.container}>
          <View style={styles.detailsContainer}>
            <AppCallerImage
              image={require("../../Assets/photo.jpeg")}
              style={styles.callerImage}
            />
            <AppText style={[styles.text]}>
              {name} is{" "}
              <AppText style={[styles.text, { color: AppColors.ternaryRed }]}>
                busy
              </AppText>
            </AppText>
            <AppText style={[styles.text, { fontFamily: "Medium" }]}>
              replied with the message
            </AppText>
          </View>
          <View style={styles.messageContainer}>
            <View>
              <AppText style={[styles.text, { fontFamily: "Medium" }]}>
                {message}
              </AppText>
              <Image
                source={require("../../Assets/comma.png")}
                style={[styles.commaIcon]}
              />
            </View>
          </View>
          <View style={styles.buttonsContainer}>
            <AppTouchableOpacity>
              <AppFABButton
                name="videocam"
                color="white"
                size={28}
                style={[
                  styles.button,
                  { backgroundColor: AppColors.primaryGreen },
                ]}
              />
            </AppTouchableOpacity>
            <AppTouchableOpacity>
              <AppFABButton
                name="call"
                color="white"
                size={28}
                style={[
                  styles.button,
                  { backgroundColor: AppColors.primaryBlack },
                ]}
              />
            </AppTouchableOpacity>
          </View>
        </View>
        <AppTouchableHighlight
          style={styles.backButton}
          onPress={() => console.log("Back")}
        >
          <AppFABButton
            name="chevron-left"
            style={{ backgroundColor: "transparent" }}
          />
        </AppTouchableHighlight>
      </AppScreen>
    </>
  );
}

///////////////////////////////////////////////////////////////////////////////////
const styles = StyleSheet.create({
  backButton: {
    position: "absolute",
    top: width * 0.12,
    left: height * 0.02,
    backgroundColor: "transparent",
    borderRadius: 100,
  },

  buttonsContainer: {
    flexDirection: "row",
    marginBottom: 70,
  },

  button: { marginHorizontal: width * 0.15, padding: 14 },

  callerImage: {
    marginBottom: 20,
  },

  container: {
    backgroundColor: AppColors.secondaryWhite,
    width: "100%",
    height: "100%",
    justifyContent: "space-around",
    alignItems: "center",
  },

  commaIcon: {
    width: 20,
    height: 20,
    position: "absolute",
    top: "-100%",
    left: "47%",
    backgroundColor: AppColors.secondaryWhite,
    borderRadius: 100,
  },

  detailsContainer: {
    alignItems: "center",
  },

  messageContainer: {
    backgroundColor: AppColors.primaryWhite,
    padding: 15,
    borderRadius: 5,
    width: "80%",
  },

  screen: {
    backgroundColor: AppColors.secondaryWhite,
    flex: 1,
  },

  text: {
    fontSize: 18,
    fontFamily: "Bold",
    color: AppColors.primaryBlack,
    textTransform: "capitalize",
    textAlign: "center",
  },
});
export default CallBusyScreen;
