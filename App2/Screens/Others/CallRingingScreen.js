import React from "react";
import { View, StyleSheet, Dimensions, Image } from "react-native";
///////////////////////////////////////////////////////////////////////////////
import AppFABButton from "../../Components/AppComponents/AppFABButton";
import AppScreen from "../../Components/AppComponents/AppScreen";
import AppText from "../../Components/AppComponents/AppText";
import AppColors from "../../Config/AppColors";
import AppCallerImage from "../../Components/AppComponents/AppCallerImage";
import AppTouchableOpacity from "../../Components/AppComponents/AppTouchableOpacity";
///////////////////////////////////////////////////////////////////////////////
const { width } = Dimensions.get("screen");
///////////////////////////////////////////////////////////////////////////////
function CallRingingScreen({
  callType = "video",
  category = "GST Complieances",
  description = "this is description",
  image = require("../../Assets/photo.jpeg"),
  name = "nikhil menan",
}) {
  return (
    <>
      <AppScreen style={styles.screen}>
        <View style={styles.container}>
          <View style={styles.detailsContainer}>
            <AppCallerImage image={image} style={styles.callerImage} />
            <AppText style={[styles.text]}>{callType} call from</AppText>
            <AppText style={[styles.text]}>{name}</AppText>
          </View>
          <View style={styles.category}>
            <AppText
              style={[styles.text, { fontSize: 18, fontFamily: "SemiBold" }]}
            >
              {category}
            </AppText>
            <AppText
              style={[styles.text, { fontSize: 16, fontFamily: "Medium" }]}
            >
              {description}
            </AppText>
          </View>
          <View style={styles.buttonContainer}>
            <AppTouchableOpacity>
              <AppFABButton
                name="call-end"
                style={[
                  styles.button,
                  { backgroundColor: AppColors.primaryRed },
                ]}
                size={28}
                color={AppColors.primaryWhite}
              />
            </AppTouchableOpacity>
            <AppTouchableOpacity>
              <AppFABButton
                name="videocam"
                style={[
                  styles.button,
                  { backgroundColor: AppColors.primaryGreen },
                ]}
                size={28}
                color={AppColors.primaryWhite}
              />
            </AppTouchableOpacity>
            <AppTouchableOpacity>
              <AppFABButton
                name="chat-bubble"
                style={[styles.button]}
                size={28}
                color={AppColors.primaryWhite}
              />
            </AppTouchableOpacity>
          </View>
        </View>
      </AppScreen>
    </>
  );
}
///////////////////////////////////////////////////////////////////////////////
const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    marginBottom: 50,
  },

  button: {
    marginHorizontal: 20,
    padding: 14,
    backgroundColor: AppColors.primaryBlack,
  },

  category: {
    alignItems: "center",
    width: "80%",
  },

  callerImage: {
    marginBottom: 20,
  },

  container: {
    backgroundColor: AppColors.primaryWhite,
    width: "100%",
    height: "100%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
  },

  detailsContainer: {
    alignItems: "center",
  },

  screen: {
    backgroundColor: AppColors.primaryWhite,
    flex: 1,
  },

  text: {
    fontSize: 22,
    fontFamily: "Bold",
    color: AppColors.primaryBlack,
    textTransform: "capitalize",
    textAlign: "center",
  },
});

export default CallRingingScreen;
