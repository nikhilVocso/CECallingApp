import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { Rating, AirbnbRating } from "react-native-ratings";
//sub:: App Component
import AppScreen from "../AppComponents/AppScreen";
import AppColors from "../../Config/AppColors";
import AppText from "../../Components/AppComponents/AppText";
import AppTouchableHighlight from "../AppComponents/AppTouchableHighlight";
import AppTouchableOpacity from "../AppComponents/AppTouchableOpacity";
import AppComponentHorizontalSeparator from "../AppComponents/AppComponentHorizontalSeparator";
//sub:: Extra
const { width, height } = Dimensions.get("screen");

function ReviewCard({
  date = "25 Nov 2022",
  time = "6:00 PM",
  callerID = 5451151,
  name = "nikhil menan",
  duration = "12:45",
  rating = "3",
  containerStyle,
}) {
  onRatingComplete = (rating) => {
    console.log("Rating is: " + rating);
  };

  return (
    <>
      <View style={[styles.container, containerStyle]}>
        <AppText style={[styles.text, { fontFamily: "SemiBold" }]}>
          {`${date}, ${time}`}
        </AppText>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <AppText style={[styles.text]}>#{callerID}</AppText>
          <AppText style={[styles.text, { textTransform: "capitalize" }]}>
            {name.replace(name.substring(1, name.length - 1), "*********")}
          </AppText>
          <AppText style={[styles.text]}>{duration}</AppText>

          {/* ///////////////////////fixme:////////////////////////// */}
          <Rating
            type="custom"
            fractions="{1}"
            startingValue="{3.3}"
            ratingColor={AppColors.primaryGreen}
            ratingBackgroundColor={AppColors.secondaryBlack}
            ratingCount={5}
            imageSize={14}
            onFinishRating={onRatingComplete}
            style={{ paddingVertical: 4 }}
            tintColor={AppColors.primaryWhite}
          />
          {/* ///////////////////////fixme:////////////////////////// */}
        </View>
      </View>
      <AppComponentHorizontalSeparator />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.primaryWhite,
    padding: 12,
  },

  text: {
    fontSize: 12,
    fontFamily: "Medium",
  },
});
export default ReviewCard;
