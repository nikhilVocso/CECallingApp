import React from "react";
import { View, StyleSheet, Image, Dimensions } from "react-native";
// import { Rating } from "react-native-elements";
import { Rating, AirbnbRating } from "react-native-ratings";
///////////////////////////////////////////////////////////////////////////////////
import AppScreen from "../../Components/AppComponents/AppScreen";
import AppText from "../../Components/AppComponents/AppText";
import AppColors from "../../Config/AppColors";
import AppButton from "../../Components/AppComponents/AppButton";
import AppTextInput from "../../Components/AppComponents/AppTextInput";
import AppCallerImage from "../../Components/AppComponents/AppCallerImage";
import AppTouchableOpacity from "../../Components/AppComponents/AppTouchableOpacity";
///////////////////////////////////////////////////////////////////////////////////
const { width, height } = Dimensions.get("window");
///////////////////////////////////////////////////////////////////////////////////
function CallFinishRatingScreen({
  image = require("../../Assets/photo.jpeg"),
  message = "Rate your call with",
  name = "nikhil menan",
  placeHolder = "was it helpful, share your experience",
}) {
  onRatingComplete = (rating) => {
    console.log("Rating is: " + rating);
  };

  return (
    <>
      <AppScreen style={styles.screen}>
        <View style={styles.container}>
          <View style={styles.detailsContainer}>
            <AppCallerImage source={image} style={styles.callerImage} />
            <AppText style={styles.text}>{message}</AppText>
            <AppText style={styles.text}>{name}</AppText>
          </View>
          <View style={styles.rating}>
            <AppText
              style={[
                styles.text,
                { fontSize: 18, color: AppColors.secondaryBlack },
              ]}
            >
              select a rating
            </AppText>
            {/* ///////////////////////fixme:////////////////////////// */}
            <Rating
              onFinishRating={onRatingComplete}
              style={{ paddingVertical: 4 }}
              imageSize={20}
            />
            {/* ///////////////////////fixme:////////////////////////// */}
          </View>
          <View style={styles.review}>
            <AppText
              style={[
                styles.text,
                { fontSize: 18, color: AppColors.secondaryBlack },
              ]}
            >
              write a review
            </AppText>
            <AppTextInput
              placeholder={placeHolder}
              multiline={true}
              style={styles.textInput}
            ></AppTextInput>
          </View>
          <AppTouchableOpacity>
            <AppButton title="Add credits" textStyle={styles.buttonText} />
          </AppTouchableOpacity>
        </View>
      </AppScreen>
    </>
  );
}

///////////////////////////////////////////////////////////////////////////////////
const styles = StyleSheet.create({
  buttonText: {
    fontFamily: "SemiBold",
    fontSize: 18,
    textAlign: "center",
    width: "100%",
  },

  callerImage: {
    marginBottom: 20,
  },

  container: {
    alignItems: "center",
    backgroundColor: AppColors.primaryWhite,
    height: height * 0.8,
    justifyContent: "space-evenly",
    width: width * 0.8,
  },

  detailsContainer: {
    alignItems: "center",
    backgroundColor: AppColors.primaryWhite,
  },

  screen: {
    alignItems: "center",
    backgroundColor: AppColors.primaryWhite,
    flex: 1,
    justifyContent: "center",
  },

  review: {
    width: "100%",
  },

  text: {
    color: AppColors.primaryBlack,
    fontFamily: "Bold",
    fontSize: 22,
    textTransform: "capitalize",
    textAlign: "center",
  },

  textInput: {
    borderColor: AppColors.secondaryBlack,
    borderRadius: 5,
    borderWidth: 1,
    color: AppColors.primaryBlack,
    fontSize: 12,
    fontFamily: "SemiBold",
    maxHeight: 80,
    padding: 12,
  },
});
export default CallFinishRatingScreen;
