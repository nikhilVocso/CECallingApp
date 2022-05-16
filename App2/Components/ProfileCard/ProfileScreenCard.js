import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
////////////////////////////////////////////////////////////////////////////////////////////
import ProfilePictureContainer from "../ConsultantListCard/ProfilePictureContainer";
import AppTouchableHighlight from "../AppComponents/AppTouchableHighlight";
import AppTouchableOpacity from "../AppComponents/AppTouchableOpacity";
import AppColors from "../../Config/AppColors";
import AppText from "../AppComponents/AppText";
import AppFABButton from "../AppComponents/AppFABButton";
import AppScreen from "../AppComponents/AppScreen";
import UserDetailsContainer from "../ConsultantListCard/UserDetailsContainer";
import UserRatingContainer from "../ConsultantListCard/UserRatingContainer";
import UserBio from "../ProfileCard/UserBio";
import CategoryChip from "../ProfileCard/CategoryChip";
import AppBigButton from "../AppComponents/AppBigButton";
import ComponentSeparator from "../AppComponents/AppComponentHorizontalSeparator";
import ProfileScreenHeader from "../ProfileCard/ProfileScreenHeader";
// import TopBarNavigation from "../../Navigation/TopBarNavigation";
////////////////////////////////////////////////////////////////////////////////////////////

const { width, height } = Dimensions.get("screen");

const userProfileDetails = {
  image: require("../../Assets/photo.jpeg"),
  name: "Nikhil",
  username: "iamnikhilmenan",
  verify: true,
  callTime: 1252,
  rating: 10,
  totalRating: 25,
  bio: "This is bio",
  webSite: "nikhilmenan.com",
  videoCallCharge: 10,
  audioCallCharge: 15,
  categories: [
    "fashion",
    "music",
    "developer",
    "fashion",
    "music",
    "developer",
    "fashion",
    "music",
    "developer",
  ],
};
////////////////////////////////////////////////////////////////////////////////////////////

function ProfileScreenCard({ onProfilePicturePress }) {
  return (
    <>
      <View style={styles.profileCardContainer}>
        <View style={styles.ProfileContainer}>
          <ProfilePictureContainer
            image={userProfileDetails.image}
            imageStyle={styles.imageStyle}
            onProfilePicturePress={onProfilePicturePress}
            size={112}
          />
          <View style={styles.userInfoContainer}>
            <UserDetailsContainer
              name={userProfileDetails.name}
              username={userProfileDetails.username}
              verify={userProfileDetails.verify}
            />
            <UserRatingContainer
              callTime={userProfileDetails.callTime}
              rating={userProfileDetails.rating}
              totalRating={userProfileDetails.totalRating}
            />
          </View>
        </View>

        <View style={styles.bio}>
          <UserBio
            bio={userProfileDetails.bio}
            webSite={userProfileDetails.webSite}
          />
        </View>

        <View style={styles.categoryChip}>
          {userProfileDetails.categories.map((category) => (
            <CategoryChip title={category} />
          ))}
        </View>

        <View style={styles.callButtons}>
          <AppTouchableOpacity
            onPress={(onVideoCallPress = () => console.log("Video Call"))}
          >
            <AppBigButton
              title="video call"
              iconName="videocam"
              iconColor={AppColors.primaryWhite}
              ContainerStyle={{ backgroundColor: "green" }}
              subTitle={"₹ " + userProfileDetails.videoCallCharge + "/min"}
            />
          </AppTouchableOpacity>

          <View>
            <AppTouchableOpacity
              onPress={(onAudioCallPress = () => console.log("Audio Call"))}
            >
              <AppBigButton
                title="Voice Call"
                iconName="call"
                iconColor={AppColors.primaryWhite}
                ContainerStyle={{ backgroundColor: "green" }}
                subTitle={"₹ " + userProfileDetails.audioCallCharge + "/min"}
              />
            </AppTouchableOpacity>
          </View>
        </View>
      </View>
      <ComponentSeparator />
    </>
  );
}

const styles = StyleSheet.create({
  bio: {
    paddingVertical: 6,
  },

  profileCardContainer: {
    backgroundColor: AppColors.primaryWhite,
    paddingHorizontal: 15,
    paddingBottom: 20,
  },

  callButtons: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 6,
  },

  categoryChip: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    paddingVertical: 6,
  },

  headerContainer: {
    backgroundColor: AppColors.primaryWhite,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  ProfileContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingBottom: 10,
  },

  imageStyle: {
    borderRadius: 100,
    height: width * 0.3,
    width: width * 0.3,
  },

  userInfoContainer: {
    paddingHorizontal: 15,
  },
});

export default ProfileScreenCard;
