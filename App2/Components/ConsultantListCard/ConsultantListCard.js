import React, { useState } from "react";
import { View, StyleSheet, Dimensions, Alert } from "react-native";
//////////////////////////////////////////////////////////////////////////////
import ProfilePictureContainer from "./ProfilePictureContainer";
import UserDetailsContainer from "./UserDetailsContainer";
import UserRatingContainer from "./UserRatingContainer";
import UserCategoryContainer from "./UserCategoryContainer";
import UserCallButtons from "./UserCallButtons";
import AppColors from "../../Config/AppColors";
//////////////////////////////////////////////////////////////////////////////
function ConsultantListCard({
  callTime,
  city,
  categories,
  image,
  name,
  profile,
  style,
  verify,
  available,
  navigation,
}) {
  const [color, setColor] = useState(false);

  const onIconPress = () => {
    console.log("On Icon Press");
    setColor(() => !color);
  };

  const onVideoCallButton = () => {
    available
      ? navigation.navigate("InitiateCallScreen")
      : Alert.alert(
          "User Not Available",
          "This is decorate after getting proper ui of alert"
        );
  };

  const onAudioCallButton = () => {
    available
      ? navigation.navigate("InitiateCallScreen")
      : Alert.alert(
          "User Not Available",
          "This is decorate after getting proper ui of alert"
        );
  };

  const onProfilePicturePress = () => {
    Alert.alert(
      "this will route you to consultant profile",
      "get later from server"
    );
    console.log("On Profile Picture Press");
  };

  return (
    <>
      <View style={[styles.container, style]}>
        <View style={styles.pictureContainer}>
          <ProfilePictureContainer
            color={color}
            image={image}
            onIconPress={onIconPress}
            onProfilePicturePress={onProfilePicturePress}
            style={styles.ProfilePictureContainer}
            iconName="favorite"
            available={available}
          />
        </View>
        <View style={styles.detailsContainer}>
          <UserDetailsContainer
            city={city}
            name={name}
            profile={profile}
            style={styles.cardDetailsContainer}
            verify={verify}
          />
          <UserRatingContainer
            callTime={callTime}
            style={styles.cardDetailsContainer}
            rating={25}
            totalRating={100}
          />
          <UserCategoryContainer
            categories={categories}
            style={styles.cardDetailsContainer}
          />
          <UserCallButtons
            buttonStyle={styles.buttonStyle}
            ContainerStyle={{
              backgroundColor: available
                ? AppColors.primaryGreen
                : AppColors.secondaryBlack,
            }}
            onVideoCallButton={onVideoCallButton}
            onAudioCallButton={onAudioCallButton}
            style={[styles.cardDetailsContainer]}
          />
        </View>
      </View>
    </>
  );
}

//////////////////////////////////////////////////////////////////////////////
const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.primaryWhite,
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
    // marginBottom: 12,
  },

  ProfilePictureContainer: {
    paddingRight: 12,
    flex: 1,
  },

  cardDetailsContainer: {
    paddingBottom: 8,
  },

  detailsContainer: {
    flex: 2,
  },

  buttonStyle: {
    width: "45%",
  },
});
export default ConsultantListCard;
