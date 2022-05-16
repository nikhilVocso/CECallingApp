import React from "react";
import { View, StyleSheet } from "react-native";
import { Rating, AirbnbRating } from "react-native-ratings";
///////////////////////////////////////////////////////////////////////////////
import AppColors from "../../Config/AppColors";
import AppText from "../AppComponents/AppText";
///////////////////////////////////////////////////////////////////////////////

function UserRatingContainer({
  callTime = 1200,
  rating = 5,
  style,
  totalRating = 10,
}) {
  onRatingComplete = (rating) => {
    console.log("Rating is: " + rating);
  };

  return (
    <>
      <View style={[styles.container, style]}>
        <View style={styles.ratingContainer}>
          <AppText
            style={[styles.text, { fontSize: 18, fontFamily: "SemiBold" }]}
          >
            {callTime > 1000
              ? Math.round(callTime / 100) * 100 + "+"
              : callTime}
          </AppText>
          <AppText style={styles.text}>minutes</AppText>
        </View>
        <View style={styles.ratingContainer}>
          {/* ///////////////////////fixme:////////////////////////// */}
          <Rating
            type="custom"
            fractions="{1}"
            startingValue="{3.3}"
            ratingColor={AppColors.primaryGreen}
            ratingBackgroundColor={AppColors.secondaryBlack}
            ratingCount={5}
            imageSize={20}
            onFinishRating={onRatingComplete}
            style={{ paddingVertical: 4 }}
            tintColor={AppColors.primaryWhite}
          />
          {/* ///////////////////////fixme:////////////////////////// */}
          <AppText style={styles.text}>
            {rating && totalRating && `${rating} ( ${totalRating} ratings )`}
          </AppText>
        </View>
      </View>
    </>
  );
}
///////////////////////////////////////////////////////////////////////////////

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.primaryWhite,
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-end",
  },

  ratingContainer: {
    paddingRight: 18,
  },

  text: {
    fontSize: 12,
    fontFamily: "Medium",
    textTransform: "capitalize",
  },
});
export default UserRatingContainer;
