import React, { useState } from "react";
import { Alert, Dimensions, Image, StyleSheet, View } from "react-native";
import { Badge } from "react-native-paper";
import { Rating, AirbnbRating } from "react-native-ratings";

//:: sub: App Component
import AppText from "../AppComponents/AppText";
import AppScreen from "../AppComponents/AppScreen";
import AppTouchableHighlight from "../AppComponents/AppTouchableHighlight";
import AppTouchableOpacity from "../AppComponents/AppTouchableOpacity";
import AppButton from "../AppComponents/AppButton";
import AppColors from "../../Config/AppColors";
import AppComponentHorizontalSeparator from "../AppComponents/AppComponentHorizontalSeparator";
import UserRatingContainer from "./UserRatingContainer";
import AppFABButton from "../AppComponents/AppFABButton";
import AppFABButtonSecond from "../AppComponents/AppFABButtonSecond";

//::sub: Extra
const { width, height } = Dimensions.get("screen");

function ConsultantListCard({
  available = true,
  badgeSize = 12,
  iconName = "favorite",
  mainContainerStyle,
  name = "nikhil menan",
  profile = "Coder",
  profilePictureContainerStyle,
  profilePicture = require("../../Assets/photo.jpeg"),
  profilePictureStyle,
  rating = 5,
  totalRating = 10,
  verify = true,
  verifiedIcon = require("../../Assets/verify.png"),
  navigation,
}) {
  const [color, setColor] = useState(false);

  const onCallButtonPress = () => {
    console.log("on call button press");
    available
      ? navigation.navigate("InitiateCallScreen")
      : navigation.navigate("NextScheduleScreen");
  };

  const onFavIconPress = () => {
    console.log("On Fav Icon Press");
    setColor(() => !color);
  };

  const onProfilePicturePress = () => {
    console.log("on Profile Picture Touch");
    Alert.alert("Profile Picture Will Be Open In Full Size");
  };

  const onRatingComplete = (rating) => {
    console.log("Rating is: " + rating);
  };

  const onUserNamePress = () => {
    console.log("on Username Press");
    Alert.alert("User will route to the consultant profile screen");
  };

  return (
    <>
      <View style={[styles.consultantListContainer, mainContainerStyle]}>
        {/* //sub:: Profile Picture Container  */}
        <View
          style={[
            styles.profilePictureContainerStyle,
            profilePictureContainerStyle,
          ]}
        >
          {profilePicture && (
            <AppTouchableOpacity onPress={onProfilePicturePress}>
              <Image
                source={profilePicture}
                style={[styles.profilePictureStyle, profilePictureStyle]}
                resizeMode="cover"
              />
            </AppTouchableOpacity>
          )}
          <Badge
            style={[
              styles.badgeStyle,
              { backgroundColor: available ? "green" : "red" },
            ]}
            size={badgeSize}
          />
        </View>
        <View style={{ marginLeft: 12, flex: 1 }}>
          {/* //sub:: User Details Container  */}
          <AppTouchableOpacity
            style={[styles.userDetailsContainerStyle]}
            onPress={onUserNamePress}
          >
            <View style={[styles.usernameContainer]}>
              <AppText style={[styles.primaryText, { marginRight: 8 }]}>
                {name}
              </AppText>

              {verify && (
                <Image
                  source={verifiedIcon}
                  style={[styles.verifyIconStyle]}
                  resizeMode="cover"
                />
              )}
            </View>
            <AppText style={[styles.secondaryText]}>{profile}</AppText>
          </AppTouchableOpacity>

          {/* //sub:: User Rating Container  */}
          <View style={[styles.userRatingContainerStyle]}>
            <View style={{ flex: 1, marginTop: 6 }}>
              {/* ///////////////////////fixme:////////////////////////// */}
              <Rating
                type="custom"
                fractions="{1}"
                startingValue="{3.3}"
                ratingColor={AppColors.primaryGreen}
                ratingBackgroundColor={AppColors.secondaryBlack}
                ratingCount={5}
                imageSize={16}
                onFinishRating={onRatingComplete}
                style={{
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                }}
                tintColor={AppColors.primaryWhite}
              />
              {/* ///////////////////////fixme:////////////////////////// */}
              <AppText style={styles.ternaryText}>
                {rating &&
                  totalRating &&
                  `${rating} ( ${totalRating} ratings )`}
              </AppText>
            </View>

            {/* //sub: Fav Call Button Container  */}
            <View style={[styles.favCallButtonContainer]}>
              {iconName && (
                <AppFABButton
                  color={
                    color ? AppColors.primaryRed : AppColors.secondaryBlack
                  }
                  name={iconName}
                  onPress={onFavIconPress}
                  size={20}
                  style={styles.favIcon}
                />
              )}
              <AppFABButtonSecond
                backgroundColor={
                  available ? AppColors.primaryGreen : AppColors.secondaryBlack
                }
                size={0.13}
                iconContainerStyle={{ marginLeft: 28 }}
                onPress={onCallButtonPress}
              />
            </View>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  consultantListContainer: {
    //:: backgroundColor: "red",
    backgroundColor: AppColors.primaryWhite,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 6,
    elevation: 1,
    padding: 12,
  },

  primaryText: {
    color: AppColors.primaryBlack,
    fontFamily: "SemiBold",
    fontSize: 18,
    textTransform: "capitalize",
  },

  secondaryText: {
    color: AppColors.primaryBlack,
    fontFamily: "Medium",
    fontSize: 12,
    textTransform: "capitalize",
  },

  ternaryText: {
    color: AppColors.primaryBlack,
    fontFamily: "Medium",
    fontSize: 10,
    textTransform: "capitalize",
  },

  //:: Profile Picture Container
  badgeStyle: {
    position: "absolute",
    right: "14%",
    bottom: "4%",
  },

  profilePictureContainerStyle: {
    // backgroundColor: "green",
    width: width * 0.24,
    height: width * 0.24,
  },

  profilePictureStyle: {
    width: "100%",
    height: "100%",
    borderRadius: 100,
  },

  //:: User Details Container
  userDetailsContainerStyle: {
    // backgroundColor: "green",
  },

  usernameContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  verifyIconStyle: {
    width: width * 0.05,
    height: width * 0.05,
  },

  //:: User Rating Container
  userRatingContainerStyle: {
    // backgroundColor: "yellow",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },

  favIcon: {
    backgroundColor: "transparent",
    padding: 0,
  },

  //:: Fav Call Button Container
  favCallButtonContainer: {
    // backgroundColor: "red",
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    justifyContent: "flex-end",
  },
});
export default ConsultantListCard;
