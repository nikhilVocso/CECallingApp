// :: main: AddInterestScreen
import React, { useState } from "react";
import { Dimensions, View, StyleSheet, Text } from "react-native";
import SelectBox from "react-native-multi-selectbox";
import { xorBy } from "lodash";
//////////////////////////////////////////////////////////////////////////
import AppText from "../../Components/AppComponents/AppText";
import AppScreen from "../../Components/AppComponents/AppScreen";
import AppTouchableOpacity from "../../Components/AppComponents/AppTouchableOpacity";
import AppButton from "../../Components/AppComponents/AppButton";
import AppColors from "../../Config/AppColors";
import AppNavBar from "../../Components/AppComponents/AppNavBar";
import AppSelectBox from "../../Components/AppComponents/AppSelectBox";
//////////////////////////////////////////////////////////////////////////
const { width } = Dimensions.get("screen");
const categories = [
  {
    item: "nikhil",
    id: 1,
  },
  {
    item: "deepak",
    id: 2,
  },
  {
    item: "shafali",
    id: 3,
  },
  {
    item: "varsa",
    id: 4,
  },
  {
    item: "kalpana",
    id: 5,
  },
  {
    item: "prem",
    id: 6,
  },
  {
    item: "darban",
    id: 7,
  },
  {
    item: "anju",
    id: 8,
  },
];
//////////////////////////////////////////////////////////////////////////

function AddInterestScreen({ navigation }) {
  const [selectedTeams, setSelectedTeams] = useState([]);

  const onBackButtonPress = () => {
    console.log("on back button pressed");
    navigation.goBack();
  };

  const onSkipButtonPressed = () => {
    console.log("on skip button pressed");
    navigation.navigate("HomeScreen");
  };

  const onNextButtonPressed = () => {
    console.log("on next button pressed");
    navigation.navigate("AddRatesScreen");
  };

  function onMultiChange() {
    return (item) => setSelectedTeams(xorBy(selectedTeams, [item], "id"));
  }

  return (
    <>
      <AppScreen style={[styles.screen]}>
        {/* //////////// sub: Header ///////////// */}
        <AppNavBar
          navbarTitleText="Add Interest Screen"
          onBackButtonPress={onBackButtonPress}
        />
        {/* //////////// sub: Header ///////////// */}
        <View style={[styles.container]}>
          {/* //////////// sub: Body ///////////// */}
          <View style={[styles.categoryContainer]}>
            <AppSelectBox data={categories} />
          </View>
          {/* //////////// sub: Body ///////////// */}
          {/* //////////// sub: Footer ///////////// */}
          <View style={[styles.buttonContainer]}>
            <AppTouchableOpacity
              style={[styles.buttonContainerTouch]}
              onPress={onSkipButtonPressed}
            >
              <AppButton
                ContainerStyle={[styles.buttonContainerStyle]}
                title="Skip"
                textStyle={[styles.buttonText]}
                style={[styles.button]}
              />
            </AppTouchableOpacity>
            <AppTouchableOpacity
              style={[styles.buttonContainerTouch]}
              onPress={onNextButtonPressed}
            >
              <AppButton
                ContainerStyle={[
                  styles.buttonContainerStyle,
                  { backgroundColor: AppColors.primaryBlack },
                ]}
                title="Next"
                textStyle={[
                  styles.buttonText,
                  { color: AppColors.primaryWhite },
                ]}
                style={[styles.button]}
              />
            </AppTouchableOpacity>
          </View>
          {/* //////////// sub: Footer ///////////// */}
        </View>
      </AppScreen>
    </>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: 32,
    paddingHorizontal: 6,
  },

  buttonContainerStyle: {
    borderColor: AppColors.primaryBlack,
    borderRadius: 100,
    borderWidth: 2,
    backgroundColor: "transparent",
    marginVertical: 8,
    padding: 10,
  },

  buttonContainerTouch: {
    width: "42%",
  },

  buttonText: {
    color: AppColors.primaryBlack,
    fontSize: 16,
    fontFamily: "SemiBold",
  },

  categoryContainer: {
    alignItems: "center",
    marginTop: 12,
    width: "90%",
  },

  container: {
    flex: 1,
    alignItems: "center",
  },

  header: {
    fontSize: 24,
    fontFamily: "SemiBold",
    textAlign: "center",
    textTransform: "capitalize",
    marginTop: 24,
  },

  screen: {
    backgroundColor: AppColors.primaryWhite,
    flex: 1,
    width: width,
  },
});
export default AddInterestScreen;

// main: welcome screen
import React, { useState } from "react";
import { Dimensions, Image, StyleSheet, View } from "react-native";
//////////////////////////////////////////////////////////////////
import AppButton from "../../Components/AppComponents/AppButton";
import AppColors from "../../Config/AppColors";
import AppScreen from "../../Components/AppComponents/AppScreen";
import AppText from "../../Components/AppComponents/AppText";
import AppTouchableOpacity from "../../Components/AppComponents/AppTouchableOpacity";
import AppTouchableHighlight from "../../Components/AppComponents/AppTouchableHighlight";
//////////////////////////////////////////////////////////////////
const { width } = Dimensions.get("screen");
//////////////////////////////////////////////////////////////////

function WelcomeScreen({ navigation }) {
  const [showMoreOptions, setShowMoreOptions] = useState(false);

  //:: Google Button
  const onGoogleLogInPressed = () => {
    console.log("on google login pressed");
    navigation.navigate("HomeScreen");
  };

  //:: Facebook Log In
  const onFacebookLogInPress = () => {
    console.log("on Facebook log in pressed");
    navigation.navigate("HomeScreen");
  };

  //:; Linked In Log In
  const onLinkedInLogInPress = () => {
    console.log("on Linked In Press");
    navigation.navigate("HomeScreen");
  };

  //:: On Email / Phone Text Press
  const onEmailOrPhoneTextTouch = () => {
    console.log("on email or phone text");
    navigation.navigate("SignInScreen");
  };

  //:: More Text Button
  const onMoreOptionsPress = () => {
    console.log("on more options press");
    setShowMoreOptions(!showMoreOptions);
  };

  //:: Om privacy policy text
  const onPrivacyPoliciesTextTouch = () => {
    console.log("on privacy policy text");
  };

  //:: Terms and Conditions
  const onTermsAndConditionsPress = () => {
    console.log("On Terms and conditions");
  };

  //:: Create One Text
  const onCreateOneTextTouch = () => {
    console.log("create one text");
    navigation.navigate("SignUpOptionsScreen");
  };

  return (
    <>
      <AppScreen style={[styles.screen]}>
        <View style={[styles.container]}>
          {/* ////////////////// :: sub: Header ///////////////////// */}
          <View>
            {/* :: Logo   */}
            <Image
              source={require("../../Assets/logo.png")}
              style={[styles.logo]}
              resizeMode="contain"
            />
            {/* :: Tag Line  */}
            <AppText style={[styles.text]}>Welcome Text or tag line</AppText>
          </View>
          {/* ////////////////// :: sub: Header ///////////////////// */}

          {/* ////////////////// :: sub: Body ///////////////////// */}
          <View style={[styles.optionsContainer]}>
            {/* :: Terms And Conditions  */}
            {!showMoreOptions && (
              <AppText
                style={[
                  styles.text,
                  { marginVertical: 12, fontFamily: "Medium" },
                ]}
              >
                By Login You agree with our{" "}
                <AppText
                  style={[styles.text, { color: "red" }]}
                  onPress={onTermsAndConditionsPress}
                >
                  Terms and conditions{" "}
                </AppText>
                and{" "}
                <AppText
                  style={[styles.text, { color: "red" }]}
                  onPress={onPrivacyPoliciesTextTouch}
                >
                  Privacy Policies.
                </AppText>
              </AppText>
            )}

            {/* :: Google Log In  */}
            <AppTouchableOpacity
              onPress={onGoogleLogInPressed}
              style={{ width: "100%" }}
            >
              <AppButton
                ContainerStyle={[styles.signInOptionContainer]}
                IconImage={require("../../Assets/google2.png")}
                iconImageStyle={{ borderRadius: 0, marginHorizontal: 5 }}
                textStyle={[styles.buttonTextStyle]}
                title="Log in with google"
              />
            </AppTouchableOpacity>

            {/* :: More Options  */}
            {!showMoreOptions && (
              <>
                <AppTouchableOpacity onPress={onMoreOptionsPress}>
                  <AppText
                    style={[
                      styles.text,
                      {
                        fontSize: 16,
                        marginTop: 13,
                        padding: 13,
                      },
                    ]}
                  >
                    More Options
                  </AppText>
                </AppTouchableOpacity>
              </>
            )}

            {/* :: Other LogIn Options  */}
            {showMoreOptions && (
              <>
                {/* //:: facebook LogIn  */}
                <AppTouchableOpacity
                  onPress={onFacebookLogInPress}
                  style={{ width: "100%" }}
                >
                  <AppButton
                    ContainerStyle={[styles.signInOptionContainer]}
                    IconImage={require("../../Assets/facebook.png")}
                    iconImageStyle={{ borderRadius: 0, marginHorizontal: 5 }}
                    textStyle={[styles.buttonTextStyle]}
                    title="Log in with facebook"
                  />
                </AppTouchableOpacity>

                {/* //:: LinkedIn */}
                <AppTouchableOpacity
                  onPress={onLinkedInLogInPress}
                  style={{ width: "100%" }}
                >
                  <AppButton
                    ContainerStyle={[styles.signInOptionContainer]}
                    IconImage={require("../../Assets/linkedin.png")}
                    iconImageStyle={{ borderRadius: 0, marginHorizontal: 5 }}
                    textStyle={[styles.buttonTextStyle]}
                    title="Log in with linkedin"
                  />
                </AppTouchableOpacity>

                {/* :: Log In with Email/Phone  */}
                <View style={{ marginVertical: 8 }}>
                  <AppText style={[styles.text]}>
                    Log In With{" "}
                    <AppText
                      style={[styles.text, { color: "red" }]}
                      onPress={onEmailOrPhoneTextTouch}
                    >
                      Email / Phone
                    </AppText>
                  </AppText>

                  <AppText style={[styles.text]}>
                    Don't have an account ?{" "}
                    <AppText
                      style={[styles.text, { color: "red" }]}
                      onPress={onCreateOneTextTouch}
                    >
                      Create One
                    </AppText>
                  </AppText>
                </View>
              </>
            )}
          </View>
          {/* ////////////////// :: sub: Body ///////////////////// */}
        </View>
      </AppScreen>
    </>
  );
}

const styles = StyleSheet.create({
  buttonTextStyle: {
    color: AppColors.primaryBlack,
    fontFamily: "SemiBold",
    fontSize: 15,
    textTransform: "uppercase",
  },

  container: {
    flex: 1,
    marginHorizontal: 12,
    alignItems: "center",
    justifyContent: "space-between",
  },

  logo: {
    width: width * 0.8,
    marginTop: width * 0.35,
  },

  optionsContainer: {
    width: "100%",
    marginBottom: width * 0.1,
    padding: width * 0.05,
  },

  screen: {
    backgroundColor: AppColors.primaryWhite,
    flex: 1,
    width: width,
  },

  signInOptionContainer: {
    borderRadius: 100,
    backgroundColor: AppColors.primaryWhite,
    elevation: 10,
    justifyContent: "flex-start",
    marginVertical: 14,
    padding: 12,
    paddingHorizontal: 18,
  },

  text: {
    textAlign: "center",
    fontFamily: "SemiBold",
    fontSize: 14,
    marginHorizontal: 8,
  },
});
export default WelcomeScreen;

//main: Consultant List Card
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
  // totalBalance,
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
      : navigation.navigate("DayAvailability");
  };

  const onAudioCallButton = () => {
    available
      ? navigation.navigate("InitiateCallScreen")
      : navigation.navigate("DayAvailability");
  };

  const onProfilePicturePress = () => {
    Alert.alert("Profile Picture will be open in a new screen in full size");
    console.log("On Profile Picture Press");
  };

  const onUserNamePress = () => {
    Alert.alert(
      "this will be route to the consultant profile screen comes from the server"
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
            size={78}
          />
        </View>
        <View style={styles.detailsContainer}>
          <UserDetailsContainer
            city={city}
            name={name}
            profile={profile}
            style={styles.cardDetailsContainer}
            verify={verify}
            onUserNamePress={onUserNamePress}
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

//main: Profile Picture Container
import React from "react";
import { Dimensions, View, StyleSheet } from "react-native";
import { Avatar, Badge } from "react-native-paper";
/////////////////////////////////////////////////////////////////////////////////
import AppText from "../AppComponents/AppText";
import AppButton from "../AppComponents/AppBigButton";
import AppTouchableHighlight from "../AppComponents/AppTouchableHighlight";
import AppTouchableOpacity from "../AppComponents/AppTouchableOpacity";
import AppFABButton from "../AppComponents/AppFABButton";
import AppColors from "../../Config/AppColors";
/////////////////////////////////////////////////////////////////////////////////
const { width, height } = Dimensions.get("screen");
/////////////////////////////////////////////////////////////////////////////////

function ProfilePictureContainer({
  available = true,
  avatarStyle,
  badgeStyle,
  color,
  image = require("../../Assets/photo.jpeg"),
  iconName,
  onIconPress = () => console.log("on Icon Press"),
  onProfilePicturePress = () => console.log("on Profile Picture Press"),
  style,
  size = 124,
}) {
  return (
    <>
      <View style={[styles.container, style]}>
        {image && (
          <>
            <AppTouchableOpacity onPress={onProfilePicturePress}>
              <Avatar.Image
                size={size}
                source={require("../../Assets/photo.jpeg")}
                containerStyle={[avatarStyle]}
              />
            </AppTouchableOpacity>
            <Badge
              style={[
                styles.badge,
                badgeStyle,
                { backgroundColor: available ? "green" : "red" },
              ]}
              size={14}
            />
          </>
        )}

        {iconName && (
          <AppFABButton
            color={color ? AppColors.primaryRed : AppColors.secondaryBlack}
            name={iconName}
            onPress={onIconPress}
            size={28}
            style={styles.Icon}
          />
        )}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  badge: {
    backgroundColor: "green",
    left: 16,
    position: "absolute",
    top: 4,
  },

  container: {
    alignItems: "center",
  },

  Icon: {
    backgroundColor: "transparent",
    padding: 8,
  },
});
export default ProfilePictureContainer;

//main: Profile Picture Container
import React from "react";
import { Dimensions, Image, StyleSheet, View } from "react-native";
import { Badge } from "react-native-paper";
//:: sub: AppComponent
import AppText from "../AppComponents/AppText";
import AppScreen from "../AppComponents/AppScreen";
import AppTouchableHighlight from "../AppComponents/AppTouchableHighlight";
import AppTouchableOpacity from "../AppComponents/AppTouchableOpacity";
import AppButton from "../AppComponents/AppButton";
import { Component } from "react/cjs/react.production.min";
//:: sub: Extra
const { width, height } = Dimensions.get("screen");

function ProfilePictureContainer({
  BadgeColor = "red",
  BadgeSize = 16,
  badgeStyle,
  profilePictureContainerStyle,
  ProfilePicture = require("../../Assets/photo.jpeg"),
  profilePictureStyle,
  profilePictureContainerSize = 0.4,
}) {
  return (
    <>
      <View
        style={[
          styles.profilePictureContainerStyle,
          profilePictureContainerStyle,
          {
            width: width * profilePictureContainerSize,
            height: width * profilePictureContainerSize,
          },
        ]}
      >
        {ProfilePicture && (
          <Image
            source={ProfilePicture}
            style={[styles.profilePictureStyle, profilePictureStyle]}
            resizeMode="cover"
          />
        )}
        {BadgeColor && (
          <Badge style={[styles.badgeStyle, badgeStyle]} size={BadgeSize} />
        )}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  badgeStyle: {
    backgroundColor: "green",
    position: "absolute",
    right: "14%",
    bottom: "4%",
  },

  profilePictureContainerStyle: {
    backgroundColor: "yellow",
  },

  profilePictureStyle: {
    backgroundColor: "yellow",
    width: "100%",
    height: "100%",
    borderRadius: 100,
  },
});
export default ProfilePictureContainer;

// main: Call History Component
import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
  FlatList,
} from "react-native";
//////////////////////////////////////////////////////////////////////////////////////////////////
import AppText from "../AppComponents/AppText";
import AppColors from "../../Config/AppColors";
import AppComponentHorizontalSeparator from "../AppComponents/AppComponentHorizontalSeparator";
import AppFABButton from "../AppComponents/AppFABButton";
import AppButton from "../AppComponents/AppButton";
import AppTouchableOpacity from "../AppComponents/AppTouchableOpacity";
//////////////////////////////////////////////////////////////////////////////////////////////////
const { width, height } = Dimensions.get("screen");
//////////////////////////////////////////////////////////////////////////////////////////////////

function CallHistory({
  data,
  isCEWalletScreen,
  isCallHistoryScreen,
  headerShow = true,
  containerStyle,
}) {
  const [play, setPlay] = useState(true);

  const onPlayButton = (id) => {
    // console.log(id);
    console.log("on Play Button");
    // setPlay(() => !play);

    data.map((item) => item.id === id && setPlay(!play));
  };

  return (
    <>
      <View style={[styles.container, containerStyle]}>
        <View style={styles.titleTextContainer}>
          {headerShow && (
            <AppText style={[styles.secondaryText, styles.titleText]}>
              Call History
            </AppText>
          )}
        </View>
        {/* ///////////////////////////////////////// */}
        <FlatList
          showsVerticalScrollIndicator={false}
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <>
              {/* ///////////////////////////////////////// */}
              <View style={styles.callDetailsContainer}>
                <AppFABButton
                  color="red"
                  name={item.iconType}
                  style={styles.callIcon}
                  size={22}
                />
                <View style={styles.detailsContainer}>
                  <View style={styles.columnOne}>
                    <AppText
                      style={[
                        styles.fourthText,
                        { fontFamily: "Bold", textTransform: "capitalize" },
                      ]}
                    >
                      {item.title}
                    </AppText>
                    <AppText style={styles.fourthText}>{item.subTitle}</AppText>
                    <AppText style={styles.fourthText}>
                      {item.date}; {item.time}
                    </AppText>
                  </View>
                  <View style={styles.columnTwo}>
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "flex-start",
                      }}
                    >
                      {item.duration && (
                        <>
                          <AppText style={styles.fourthText}>
                            {item.duration}
                          </AppText>
                          <AppTouchableOpacity onPress={onPlayButton(item.id)}>
                            <AppFABButton
                              color="black"
                              name={play ? "play-arrow" : "pause"}
                              size={20}
                              style={{
                                padding: 0,
                                backgroundColor: "transparent",
                              }}
                            />
                          </AppTouchableOpacity>
                        </>
                      )}
                    </View>
                    <AppText style={styles.fourthText}>
                      {isCallHistoryScreen && `#${item.idOrTotalCall}`}
                      {isCEWalletScreen && `CE#${item.idOrTotalCall}`}
                    </AppText>
                    <AppText
                      style={[
                        styles.fourthText,
                        { color: "red", fontFamily: "Bold" },
                      ]}
                    >
                      ₹{" "}
                      <AppText
                        style={[
                          styles.fourthText,
                          { color: "red", fontFamily: "Bold" },
                        ]}
                      >
                        {item.charges}
                      </AppText>
                    </AppText>
                  </View>
                </View>
              </View>
              {/* ////////////////////////////////////// */}
              <AppComponentHorizontalSeparator />
            </>
          )}
        />
        {/* ///////////////////////////////////////// */}
      </View>
    </>
  );
}
//////////////////////////////////////////////////////////////////////////////////////////////////
const styles = StyleSheet.create({
  callDetailsContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginVertical: 15,
  },

  callIcon: {
    backgroundColor: AppColors.secondaryWhite,
    backgroundColor: "transparent",
    marginRight: 6,
  },

  columnOne: {
    // backgroundColor: "yellow",
    flex: 1,
  },

  columnTwo: {
    // backgroundColor: "green",
    // flex: 1,
    justifyContent: "flex-end",
    // marginRight: 10,
  },

  container: {
    // backgroundColor: "red",
    backgroundColor: AppColors.primaryWhite,
    width: "100%",
    justifyContent: "center",
    padding: 15,
    borderRadius: 10,
  },

  detailsContainer: {
    // backgroundColor: "green",
    flexDirection: "row",
    justifyContent: "space-evenly",
    flex: 1,
  },

  fourthText: {
    color: AppColors.primaryBlack,
    fontSize: 14,
    fontFamily: "Medium",
    paddingVertical: 2,
  },

  primaryText: {
    fontSize: 22,
    fontFamily: "Bold",
    color: AppColors.primaryBlack,
    textTransform: "capitalize",
  },

  secondaryText: {
    fontSize: 18,
    fontFamily: "SemiBold",
    color: AppColors.primaryBlack,
    textTransform: "capitalize",
  },

  ternaryText: {
    fontSize: 12,
    fontFamily: "Medium",
    color: AppColors.primaryBlack,
    textTransform: "capitalize",
  },

  titleText: {
    textAlign: "center",
    padding: 10,
    borderBottomWidth: 3,
  },

  titleTextContainer: {
    alignItems: "center",
    marginBottom: 10,
  },
});

export default CallHistory;

// main: Call History
import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
  FlatList,
} from "react-native";
//////////////////////////////////////////////////////////////////////////////////////////////////
import AppText from "../AppComponents/AppText";
import AppColors from "../../Config/AppColors";
import AppComponentHorizontalSeparator from "../AppComponents/AppComponentHorizontalSeparator";
import AppFABButton from "../AppComponents/AppFABButton";
import AppButton from "../AppComponents/AppButton";
import AppTouchableOpacity from "../AppComponents/AppTouchableOpacity";
import ConsultantScreen from "./Screens/Others/ConsultantScreen";
//////////////////////////////////////////////////////////////////////////////////////////////////
const { width, height } = Dimensions.get("screen");
//////////////////////////////////////////////////////////////////////////////////////////////////

function CallHistory({
  data,
  isCEWalletScreen,
  isCallHistoryScreen,
  headerShow = true,
  containerStyle,
}) {
  const [play, setPlay] = useState(true);

  const onPlayButton = (id) => {
    console.log("on Play Button");
    setPlay(() => !play);
  };

  return (
    <>
      <View style={[styles.container, containerStyle]}>
        <View style={styles.titleTextContainer}>
          {headerShow && (
            <AppText style={[styles.secondaryText, styles.titleText]}>
              Call History
            </AppText>
          )}
        </View>
        {/* ///////////////////////////////////////// */}
        <FlatList
          showsVerticalScrollIndicator={false}
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <>
              {/* ///////////////////////////////////////// */}
              <View style={styles.callDetailsContainer}>
                <AppFABButton
                  color="red"
                  name={item.iconType}
                  style={styles.callIcon}
                  size={22}
                />
                <View style={styles.detailsContainer}>
                  <View style={styles.columnOne}>
                    <AppText
                      style={[
                        styles.fourthText,
                        { fontFamily: "Bold", textTransform: "capitalize" },
                      ]}
                    >
                      {item.title}
                    </AppText>
                    <AppText style={styles.fourthText}>{item.subTitle}</AppText>
                    <AppText style={styles.fourthText}>
                      {item.date}; {item.time}
                    </AppText>
                  </View>
                  <View style={styles.columnTwo}>
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "flex-start",
                      }}
                    >
                      {item.duration && (
                        <>
                          <AppText style={styles.fourthText}>
                            {item.duration}
                          </AppText>
                          <AppTouchableOpacity onPress={onPlayButton}>
                            <AppFABButton
                              color="black"
                              name={play ? "play-arrow" : "pause"}
                              size={20}
                              style={{
                                padding: 0,
                                backgroundColor: "transparent",
                              }}
                            />
                          </AppTouchableOpacity>
                        </>
                      )}
                    </View>
                    <AppText style={styles.fourthText}>
                      {isCallHistoryScreen && `#${item.idOrTotalCall}`}
                      {isCEWalletScreen && `CE#${item.idOrTotalCall}`}
                    </AppText>
                    <AppText
                      style={[
                        styles.fourthText,
                        { color: "red", fontFamily: "Bold" },
                      ]}
                    >
                      ₹{" "}
                      <AppText
                        style={[
                          styles.fourthText,
                          { color: "red", fontFamily: "Bold" },
                        ]}
                      >
                        {item.charges}
                      </AppText>
                    </AppText>
                  </View>
                </View>
              </View>
              {/* ////////////////////////////////////// */}
              <AppComponentHorizontalSeparator />
            </>
          )}
        />
        {/* ///////////////////////////////////////// */}
      </View>
    </>
  );
}
//////////////////////////////////////////////////////////////////////////////////////////////////
const styles = StyleSheet.create({
  callDetailsContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginVertical: 15,
  },

  callIcon: {
    backgroundColor: AppColors.secondaryWhite,
    backgroundColor: "transparent",
    marginRight: 6,
  },

  columnOne: {
    // backgroundColor: "yellow",
    flex: 1,
  },

  columnTwo: {
    // backgroundColor: "green",
    // flex: 1,
    justifyContent: "flex-end",
    // marginRight: 10,
  },

  container: {
    // backgroundColor: "red",
    backgroundColor: AppColors.primaryWhite,
    width: "100%",
    justifyContent: "center",
    padding: 15,
    borderRadius: 10,
  },

  detailsContainer: {
    // backgroundColor: "green",
    flexDirection: "row",
    justifyContent: "space-evenly",
    flex: 1,
  },

  fourthText: {
    color: AppColors.primaryBlack,
    fontSize: 14,
    fontFamily: "Medium",
    paddingVertical: 2,
  },

  primaryText: {
    fontSize: 22,
    fontFamily: "Bold",
    color: AppColors.primaryBlack,
    textTransform: "capitalize",
  },

  secondaryText: {
    fontSize: 18,
    fontFamily: "SemiBold",
    color: AppColors.primaryBlack,
    textTransform: "capitalize",
  },

  ternaryText: {
    fontSize: 12,
    fontFamily: "Medium",
    color: AppColors.primaryBlack,
    textTransform: "capitalize",
  },

  titleText: {
    textAlign: "center",
    padding: 10,
    borderBottomWidth: 3,
  },

  titleTextContainer: {
    alignItems: "center",
    marginBottom: 10,
  },
});

export default CallHistory;

// main: ConsultantScreen
import React, { useState } from "react";
import { Alert, Dimensions, Image, StyleSheet, View } from "react-native";
import { Badge } from "react-native-paper";
import { Rating, AirbnbRating } from "react-native-ratings";

//:: sub: App Component
import AppText from "../AppComponents/AppText";
import AppTouchableOpacity from "../AppComponents/AppTouchableOpacity";
import AppColors from "../../Config/AppColors";
import AppFABButton from "../AppComponents/AppFABButton";
import AppFABButtonSecond from "../AppComponents/AppFABButtonSecond";

//::sub: Extra
const { width } = Dimensions.get("screen");

function ConsultantListCard({
  Available = true,
  BadgeSize = 12,
  Color,
  IconName = "favorite",
  MainContainerStyle,
  Name = "nikhil menan",
  OnCallButtonPress,
  OnFavIconPress = () => console.log("On FavIcon Press"),
  OnProfilePicturePress = () => console.log("on Profile Picture Touch"),
  OnRatingComplete = () => console.log("rating"),
  OnUserNamePress = () => console.log("on UserName Press"),
  Profile = "Coder",
  ProfilePicture = require("../../Assets/photo.jpeg"),
  ProfilePictureContainerStyle,
  ProfilePictureStyle,
  Rating = 5,
  TotalRating = 10,
  Verify = true,
  VerifiedIcon = require("../../Assets/verify.png"),
}) {
  return (
    <>
      <View style={[styles.consultantListContainer, MainContainerStyle]}>
        {/* //sub:: Profile Picture Container  */}
        <View
          style={[
            styles.profilePictureContainerStyle,
            ProfilePictureContainerStyle,
          ]}
        >
          {ProfilePicture && (
            <AppTouchableOpacity onPress={OnProfilePicturePress}>
              <Image
                source={ProfilePicture}
                style={[styles.profilePictureStyle, ProfilePictureStyle]}
                resizeMode="cover"
              />
            </AppTouchableOpacity>
          )}
          <Badge
            style={[
              styles.badgeStyle,
              { backgroundColor: Available ? "green" : "red" },
            ]}
            size={BadgeSize}
          />
        </View>
        <View style={{ marginLeft: 12, flex: 1 }}>
          {/* //sub:: User Details Container  */}
          <AppTouchableOpacity
            style={[styles.userDetailsContainerStyle]}
            onPress={OnUserNamePress}
          >
            <View style={[styles.usernameContainer]}>
              <AppText style={[styles.primaryText, { marginRight: 8 }]}>
                {Name}
              </AppText>

              {Verify && (
                <Image
                  source={VerifiedIcon}
                  style={[styles.verifyIconStyle]}
                  resizeMode="cover"
                />
              )}
            </View>
            <AppText style={[styles.secondaryText]}>{Profile}</AppText>
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
                onFinishRating={OnRatingComplete}
                style={{
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                }}
                tintColor={AppColors.primaryWhite}
              />
              {/* ///////////////////////fixme:////////////////////////// */}
              <AppText style={styles.ternaryText}>
                {Rating &&
                  TotalRating &&
                  `${Rating} ( ${TotalRating} ratings )`}
              </AppText>
            </View>

            {/* //sub: Fav Call Button Container  */}
            <View style={[styles.favCallButtonContainer]}>
              {IconName && (
                <AppFABButton
                  color={
                    Color ? AppColors.primaryRed : AppColors.secondaryBlack
                  }
                  name={IconName}
                  onPress={OnFavIconPress}
                  size={20}
                  style={styles.favIcon}
                />
              )}
              <AppFABButtonSecond
                BackgroundColor={
                  Available ? AppColors.primaryGreen : AppColors.secondaryBlack
                }
                Size={0.13}
                IconContainerStyle={{ marginLeft: 28 }}
                OnPress={OnCallButtonPress}
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
    width: width * 0.24,
    height: width * 0.24,
  },

  profilePictureStyle: {
    width: "100%",
    height: "100%",
    borderRadius: 100,
  },

  //:: User Details Container
  userDetailsContainerStyle: {},

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
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    justifyContent: "flex-end",
  },
});
export default ConsultantListCard;

// MainContainerStyle,
// ProfilePictureContainerStyle,
// ProfilePicture = require("../../Assets/photo.jpeg"),
// OnProfilePicturePress = () => console.log("on Profile Picture Press"),
// ProfilePictureStyle,
// BackgroundColor,
// BadgeSize,
// OnUserNamePress = () => console.log("on User Name Press"),
// Name,
// Verify,
// VerifiedIcon = require("../../Assets/verify.png"),
// Profile,
// OnRatingComplete = () => console.log("on Rating Complete"),
// Rating = 5,
// TotalRating = 10,
// IconName = "favorite",
// OnFavIconPress = () => console.log("on Fav Icon Press"),
// OnCallButtonPress = () => console.log("on Call Button Press"),
// Available,
// Color,

// main: new Call History Screen
import React from "react";
import {
  Dimensions,
  FlatList,
  View,
  StyleSheet,
  ScrollView,
} from "react-native";
/////////////////////////////////////////////////////
import AppScreen from "../../Components/AppComponents/AppScreen";
import CallAndMinutes from "../../Components/Others/CallAndMinutes";
import CallCount from "../../Components/Others/CallCount";
import CallHistory from "../../Components/Others/CallHistory";
import CallsByCategory from "../../Components/Others/CallsByCategory";
import AppColors from "../../Config/AppColors";
import AppText from "../../Components/AppComponents/AppText";
import AppNavBar from "../../Components/AppComponents/AppNavBar";
/////////////////////////////////////////////////////
const { width, height } = Dimensions.get("screen");
/////////////////////////////////////////////////////
const callHistoryData = [
  {
    iconType: "call-made",
    typeResult: 0,
    subTitle: "Developer",
    charges: 250,
    date: "25 Nov 2022",
    duration: "48:22",
    id: 1,
    title: "nikhil menan",
    time: "11:30",
    idOrTotalCall: 15155454,
  },
  {
    iconType: "call-made",
    typeResult: 0,
    subTitle: "Developer",
    charges: 250,
    date: "25 Nov 2022",
    duration: "48:22",
    id: 2,
    title: "nikhil menan",
    time: "11:30",
    idOrTotalCall: 15155454,
  },
  {
    iconType: "call-made",
    typeResult: 0,
    subTitle: "Developer",
    charges: 250,
    date: "25 Nov 2022",
    duration: "48:22",
    id: 3,
    title: "nikhil menan",
    time: "11:30",
    idOrTotalCall: 15155454,
  },
];

function CallHistoryScreen({}) {
  const onBackButtonPress = () => {
    console.log("on back button press");
  };

  return (
    <>
      <AppScreen style={styles.screen}>
        <View style={[styles.container]}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            stickyHeaderIndices={[0]}
          >
            <AppNavBar
              navbarTitleText="Call History"
              onBackButtonPress={onBackButtonPress}
            />
            <View style={[{ paddingHorizontal: 15 }]}>
              <CallCount
                isCallHistoryScreen={true}
                ContainerStyle={styles.componentsStyle}
              />
              <CallsByCategory ContainerStyle={styles.componentsStyle} />
              <CallAndMinutes ContainerStyle={styles.componentsStyle} />
              <View
                style={[
                  {
                    backgroundColor: "white",
                    borderRadius: 10,
                    paddingVertical: 24,
                    paddingHorizontal: 4,
                  },
                  styles.componentsStyle,
                ]}
              >
                <View style={styles.titleTextContainer}>
                  <AppText style={[styles.text, styles.titleText]}>
                    Call History
                  </AppText>
                </View>
                <FlatList
                  data={callHistoryData}
                  keyExtractor={(item) => item.id}
                  renderItem={({ item }) => (
                    <>
                      <CallHistory
                        Title={item.title}
                        SubTitle={item.subTitle}
                        Date={item.date}
                        Time={item.time}
                        Duration={item.duration}
                        IdOrTotalCall={item.idOrTotalCall}
                        Charges={item.charges}
                        IconType={item.iconType}
                        isCEWalletScreen={true}
                      />
                    </>
                  )}
                />
              </View>
            </View>
          </ScrollView>
        </View>
      </AppScreen>
    </>
  );
}

const styles = StyleSheet.create({
  componentsStyle: {
    elevation: 6,
  },

  screen: {
    backgroundColor: AppColors.secondaryWhite,
    backgroundColor: AppColors.primaryWhite,
    flex: 1,
    width: width,
  },

  titleTextContainer: {
    alignItems: "center",
  },

  text: {
    color: AppColors.primaryBlack,
    fontFamily: "SemiBold",
    fontSize: 18,
    textTransform: "capitalize",
    padding: 10,
    borderBottomColor: AppColors.primaryBlack,
    borderBottomWidth: 3,
  },
});
export default CallHistoryScreen;

// main: New Call History Component
import React, { useState } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
//:: sub: App Component
import AppText from "../AppComponents/AppText";
import AppTouchableHighlight from "../AppComponents/AppTouchableHighlight";
import AppTouchableOpacity from "../AppComponents/AppTouchableOpacity";
import AppScreen from "../AppComponents/AppScreen";
import AppColors from "../../Config/AppColors";
import AppFABButton from "../AppComponents/AppFABButton";
import AppComponentHorizontalSeparator from "../AppComponents/AppComponentHorizontalSeparator";
//::sub: Extra
const { width, height } = Dimensions.get("screen");

function CallHistory({
  Title = "Title",
  SubTitle = "SubTitle",
  Date = "Date",
  Time = "Time",
  Duration = "48:22",
  IdOrTotalCall = 4512125,
  Charges = 250,
  isCallHistoryScreen,
  isCEWalletScreen,
  IconType = "call-made",
  CallDetailsContainerStyle,
}) {
  const [play, setPlay] = useState(true);

  const onPlayButton = () => {
    console.log("on Play Button");
    setPlay(() => !play);
  };

  return (
    <>
      <View
        style={{
          marginHorizontal: 12,
        }}
      >
        <View style={[styles.callDetailsContainer, CallDetailsContainerStyle]}>
          <AppFABButton
            color="red"
            name={IconType}
            style={styles.callIcon}
            size={22}
          />
          <View style={styles.detailsContainer}>
            <View style={styles.columnOne}>
              <AppText
                style={[
                  styles.fourthText,
                  { fontFamily: "Bold", textTransform: "capitalize" },
                ]}
              >
                {Title}
              </AppText>
              <AppText style={styles.fourthText}>{SubTitle}</AppText>
              <AppText style={styles.fourthText}>
                {Date}; {Time}
              </AppText>
            </View>
            <View style={styles.columnTwo}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-start",
                }}
              >
                {Duration && (
                  <>
                    <AppText style={styles.fourthText}>{Duration}</AppText>
                    <AppTouchableOpacity onPress={onPlayButton}>
                      <AppFABButton
                        color="black"
                        name={play ? "play-arrow" : "pause"}
                        size={20}
                        style={{
                          padding: 0,
                          backgroundColor: "transparent",
                        }}
                      />
                    </AppTouchableOpacity>
                  </>
                )}
              </View>
              <AppText style={styles.fourthText}>
                {isCallHistoryScreen && `#${IdOrTotalCall}`}
                {isCEWalletScreen && `CE#${IdOrTotalCall}`}
              </AppText>
              <AppText
                style={[
                  styles.fourthText,
                  { color: "red", fontFamily: "Bold" },
                ]}
              >
                ₹{" "}
                <AppText
                  style={[
                    styles.fourthText,
                    { color: "red", fontFamily: "Bold" },
                  ]}
                >
                  {Charges}
                </AppText>
              </AppText>
            </View>
          </View>
        </View>
        <AppComponentHorizontalSeparator />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  callDetailsContainer: {
    backgroundColor: AppColors.primaryWhite,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginVertical: 15,
  },

  callIcon: {
    backgroundColor: "transparent",
    // marginRight: 6,
    paddingLeft: 0,
  },

  columnOne: {
    // backgroundColor: "yellow",
    flex: 1,
  },

  columnTwo: {
    // backgroundColor: "green",
    // flex: 1,
    justifyContent: "flex-end",
    // marginRight: 10,
  },

  container: {
    // backgroundColor: "red",
    backgroundColor: AppColors.primaryWhite,
    width: "100%",
    justifyContent: "center",
    padding: 15,
    borderRadius: 10,
  },

  detailsContainer: {
    // backgroundColor: "green",
    flexDirection: "row",
    justifyContent: "space-evenly",
    flex: 1,
  },

  fourthText: {
    color: AppColors.primaryBlack,
    fontSize: 14,
    fontFamily: "Medium",
    paddingVertical: 2,
  },

  primaryText: {
    fontSize: 22,
    fontFamily: "Bold",
    color: AppColors.primaryBlack,
    textTransform: "capitalize",
  },

  secondaryText: {
    fontSize: 18,
    fontFamily: "SemiBold",
    color: AppColors.primaryBlack,
    textTransform: "capitalize",
  },

  ternaryText: {
    fontSize: 12,
    fontFamily: "Medium",
    color: AppColors.primaryBlack,
    textTransform: "capitalize",
  },

  titleText: {
    textAlign: "center",
    padding: 10,
    borderBottomWidth: 3,
  },

  titleTextContainer: {
    alignItems: "center",
    marginBottom: 10,
  },
});
export default CallHistory;

// main: Schedule Card
import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
//sub:: App Component
import AppScreen from "../AppComponents/AppScreen";
import AppColors from "../../Config/AppColors";
import AppText from "../AppComponents/AppText";
import AppTouchableHighlight from "../AppComponents/AppTouchableHighlight";
import AppTouchableOpacity from "../AppComponents/AppTouchableOpacity";
//sub:: Extra
const { width, height } = Dimensions.get("screen");

function ScheduleCard({}) {
  return (
    <>
      <AppScreen style={[styles.screen]}>
        <View style={[styles.container]}>
          {/* ///////////////////////////////////////////// */}
          <View style={[styles.scheduleContainer]}>
            <View style={[styles.dayNameContainer]}>
              <AppText>Hello</AppText>
            </View>

            <View style={[styles.scheduleDetailsContainer]}>
              <View
                style={{
                  flexDirection: "row",
                  backgroundColor: "pink",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                  padding: width * 0.05,
                }}
              >
                <AppText>From</AppText>
                <AppText>-</AppText>
                <AppText>To</AppText>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  backgroundColor: "pink",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                  padding: width * 0.05,
                }}
              >
                <AppText>this is nikhil</AppText>
                <AppText>-</AppText>
                <AppText>this is nikhil</AppText>
              </View>
            </View>
          </View>
          {/* ///////////////////////////////////////////// */}
        </View>
      </AppScreen>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "green",
    flex: 1,
    width: "100%",
  },

  dayNameContainer: {
    backgroundColor: "pink",
    width: width * 0.15,
    height: width * 0.15,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
  },

  screen: {
    backgroundColor: "red",
    flex: 1,
    width: width,
  },

  scheduleContainer: {
    backgroundColor: "yellow",
    flexDirection: "row",
  },

  scheduleDetailsContainer: {
    backgroundColor: "orange",
    flex: 1,
  },
});
export default ScheduleCard;

////////////////////////////////////////////
<FlatList
  data={dataObject}
  keyExtractor={(item) => item.id}
  renderItem={({ item }) => (
    <List.Section>
      <List.Accordion
        title={item.day}
        titleStyle={styles.title}
        style={{ backgroundColor: "white", padding: 0 }}
      >
        <View style={{ flexDirection: "row" }}>
          <AppText style={styles.text}>{item.from}</AppText>
          <AppText style={styles.text}> - </AppText>
          <AppText style={styles.text}>{item.to}</AppText>
        </View>
        <AppComponentHorizontalSeparator />
      </List.Accordion>
      {/* <ComponentSeparator /> */}
    </List.Section>
  )}
/>;

// main: Schedule Card
import React, { useState } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  ScrollView,
  Dimensions,
} from "react-native";
import { List } from "react-native-paper";

// import AppText from "../AppText";
// import AppColors from "../../Config/AppColors";
// import ComponentSeparator from "../ComponentSeparator";
import AppText from "../AppComponents/AppText";
import AppColors from "../../Config/AppColors";
import AppComponentHorizontalSeparator from "../AppComponents/AppComponentHorizontalSeparator";

const { height, width } = Dimensions.get("screen");

const dataObject = [
  {
    id: 1,
    day: "mon",
    from: "10:00AM",
    to: "10:00PM",
  },
  {
    id: 2,
    day: "tue",
    from: "10:00AM",
    to: "10:00PM",
  },
  {
    id: 3,
    day: "wed",
    from: "10:00AM",
    to: "10:00PM",
  },
  {
    id: 4,
    day: "Thu",
    from: "10:00AM",
    to: "10:00PM",
  },
  {
    id: 5,
    day: "Fri",
    from: "10:00AM",
    to: "10:00PM",
  },
  {
    id: 6,
    day: "Sat",
    from: "10:00AM",
    to: "10:00PM",
  },
  {
    id: 7,
    day: "Sun",
    from: "10:00AM",
    to: "10:00PM",
  },
];

function AppSchedule({}) {
  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);

  return (
    <>
      <View style={styles.container}>
        <FlatList
          data={dataObject}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <List.Section>
              <List.Accordion
                title={item.day}
                titleStyle={styles.title}
                style={{ backgroundColor: "white", padding: 0 }}
              >
                <View style={{ flexDirection: "row" }}>
                  <AppText style={styles.text}>{item.from}</AppText>
                  <AppText style={styles.text}> - </AppText>
                  <AppText style={styles.text}>{item.to}</AppText>
                </View>
                <AppComponentHorizontalSeparator />
              </List.Accordion>
              {/* <ComponentSeparator /> */}
            </List.Section>
          )}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-start",
    marginTop: 10,
  },

  days: {
    backgroundColor: AppColors.secondaryWhite,
    width: 70,
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    marginRight: 10,
  },

  text: {
    color: AppColors.primaryBlack,
    fontSize: 16,
    fontFamily: "Bold",
    textTransform: "capitalize",
    padding: 15,
  },

  title: {
    color: AppColors.primaryBlack,
    fontSize: 16,
    fontFamily: "Bold",
    textTransform: "capitalize",
  },

  times: {
    backgroundColor: AppColors.secondaryWhite,
    flexDirection: "row",
    justifyContent: "center",
    padding: 20,
    marginBottom: 10,
  },

  timeText: {
    fontSize: 14,
    fontFamily: "Bold",
  },

  root: {
    backgroundColor: AppColors.primaryWhite,
    paddingHorizontal: 10,
    height: height * 0.8,
  },
});
export default AppSchedule;

// main: Schedule Screen  elevation
import React from "react";
import { Dimensions, FlatList, StyleSheet, View } from "react-native";
//sub: App Component
import AppScreen from "../../Components/AppComponents/AppScreen";
import AppTouchableHighlight from "../../Components/AppComponents/AppTouchableHighlight";
import AppTouchableOpacity from "../../Components/AppComponents/AppTouchableOpacity";
import AppColors from "../../Config/AppColors";
import AppText from "../../Components/AppComponents/AppText";
import ScheduleCard from "../../Components/Others/ScheduleCard";
import AppComponentHorizontalSeparator from "../../Components/AppComponents/AppComponentHorizontalSeparator";
//sub: Extra
const { width, height } = Dimensions.get("screen");

const data = [
  {
    day: "Monday",
    id: 1,
    schedule: [
      {
        from: "11:00AM",
        to: "05:00PM",
      },
      {
        from: "11:00AM",
        to: "05:00PM",
      },
    ],
  },
  {
    day: "Tueday",
    id: 2,
    schedule: [
      {
        from: "11:00AM",
        to: "05:00PM",
      },
      {
        from: "11:00AM",
        to: "05:00PM",
      },
    ],
  },
  {
    day: "Wednesday",
    id: 3,
    schedule: [
      {
        from: "11:00AM",
        to: "05:00PM",
      },
      {
        from: "11:00AM",
        to: "05:00PM",
      },
      {
        from: "11:00AM",
        to: "05:00PM",
      },
    ],
  },
  {
    day: "Thursday",
    id: 4,
    schedule: [
      {
        from: "11:00AM",
        to: "05:00PM",
      },
      {
        from: "11:00AM",
        to: "05:00PM",
      },
    ],
  },
  {
    day: "Friday",
    id: 5,
    schedule: [
      {
        from: "11:00AM",
        to: "05:00PM",
      },
      {
        from: "11:00AM",
        to: "05:00PM",
      },
      {
        from: "11:00AM",
        to: "05:00PM",
      },
    ],
  },
  {
    day: "Saturday",
    id: 6,
    schedule: [
      {
        from: "11:00AM",
        to: "05:00PM",
      },
    ],
  },
  {
    day: "Sunday",
    id: 7,
    schedule: [
      {
        from: "11:00AM",
        to: "05:00PM",
      },
      {
        from: "11:00AM",
        to: "05:00PM",
      },
      {
        from: "11:00AM",
        to: "05:00PM",
      },
      {
        from: "11:00AM",
        to: "05:00PM",
      },
    ],
  },
];

function ScheduleScreen({}) {
  return (
    <>
      <View style={[styles.container]}>
        {/* ///////////////// next schedule /////////////////// */}
        <View style={[styles.nextScheduleContainer]}>
          <View style={[styles.titleContainer]}>
            <AppText
              style={[
                styles.text,
                {
                  fontFamily: "SemiBold",
                  textDecorationLine: "underline",
                  fontSize: 16,
                },
              ]}
            >
              Next Schedule
            </AppText>
          </View>
          <View style={[styles.nextSchedule]}>
            <AppText style={styles.text}>{data[0].schedule[0].from}</AppText>
            <AppText style={styles.text}> - </AppText>
            <AppText style={styles.text}>{data[0].schedule[0].to}</AppText>
          </View>
        </View>
        {/* ///////////////// next schedule /////////////////// */}
        {/* <View style={[styles.titleContainer]}>
          <AppText
            style={[
              styles.text,
              {
                fontFamily: "SemiBold",
                textTransform: "capitalize",
                textDecorationLine: "underline",
              },
            ]}
          >
            Week Schedule
          </AppText>
        </View> */}

        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <>
              <ScheduleCard day={item.day} daySchedule={item.schedule} />
            </>
          )}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.primaryWhite,
    flex: 1,
    width: "100%",
    padding: width * 0.03,
  },

  nextScheduleContainer: {
    // backgroundColor: AppColors.primaryWhite,
    // padding: width * 0.03,
    // borderRadius: 15,
    // marginVertical: width * 0.02,
    // elevation: 5,
    // alignItems: "center",
    /////////////////////////////////
    alignItems: "center",
  },

  nextSchedule: {
    // backgroundColor: "yellow",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },

  titleContainer: {
    // backgroundColor: "pink",
    marginBottom: 8,
  },

  text: {
    // backgroundColor: "orange",
    fontSize: 20,
    fontFamily: "Regular",
  },
});
export default ScheduleScreen;

// main: Schedule Screen Simple
import React from "react";
import { Dimensions, FlatList, StyleSheet, View } from "react-native";
//sub: App Component
import AppScreen from "../../Components/AppComponents/AppScreen";
import AppTouchableHighlight from "../../Components/AppComponents/AppTouchableHighlight";
import AppTouchableOpacity from "../../Components/AppComponents/AppTouchableOpacity";
import AppColors from "../../Config/AppColors";
import AppText from "../../Components/AppComponents/AppText";
import ScheduleCard from "../../Components/Others/ScheduleCard";
import AppComponentHorizontalSeparator from "../../Components/AppComponents/AppComponentHorizontalSeparator";
//sub: Extra
const { width, height } = Dimensions.get("screen");

const data = [
  {
    day: "Monday",
    id: 1,
    schedule: [
      {
        from: "11:00AM",
        to: "05:00PM",
      },
      {
        from: "11:00AM",
        to: "05:00PM",
      },
    ],
  },
  {
    day: "Tueday",
    id: 2,
    schedule: [
      {
        from: "11:00AM",
        to: "05:00PM",
      },
      {
        from: "11:00AM",
        to: "05:00PM",
      },
    ],
  },
  {
    day: "Wednesday",
    id: 3,
    schedule: [
      {
        from: "11:00AM",
        to: "05:00PM",
      },
      {
        from: "11:00AM",
        to: "05:00PM",
      },
      {
        from: "11:00AM",
        to: "05:00PM",
      },
    ],
  },
  {
    day: "Thursday",
    id: 4,
    schedule: [
      {
        from: "11:00AM",
        to: "05:00PM",
      },
      {
        from: "11:00AM",
        to: "05:00PM",
      },
    ],
  },
  {
    day: "Friday",
    id: 5,
    schedule: [
      {
        from: "11:00AM",
        to: "05:00PM",
      },
      {
        from: "11:00AM",
        to: "05:00PM",
      },
      {
        from: "11:00AM",
        to: "05:00PM",
      },
    ],
  },
  {
    day: "Saturday",
    id: 6,
    schedule: [
      {
        from: "11:00AM",
        to: "05:00PM",
      },
    ],
  },
  {
    day: "Sunday",
    id: 7,
    schedule: [
      {
        from: "11:00AM",
        to: "05:00PM",
      },
      {
        from: "11:00AM",
        to: "05:00PM",
      },
      {
        from: "11:00AM",
        to: "05:00PM",
      },
      {
        from: "11:00AM",
        to: "05:00PM",
      },
    ],
  },
];

function ScheduleScreen({}) {
  return (
    <>
      <View style={[styles.container]}>
        {/* ///////////////// next schedule /////////////////// */}
        <View style={[styles.nextScheduleContainer]}>
          <View style={[styles.titleContainer]}>
            <AppText
              style={[
                styles.text,
                {
                  fontFamily: "SemiBold",
                  textDecorationLine: "underline",
                  fontSize: 16,
                },
              ]}
            >
              Next Schedule
            </AppText>
          </View>
          <View style={[styles.nextSchedule]}>
            <AppText style={styles.text}>{data[0].schedule[0].from}</AppText>
            <AppText style={styles.text}> - </AppText>
            <AppText style={styles.text}>{data[0].schedule[0].to}</AppText>
          </View>
        </View>
        <AppComponentHorizontalSeparator />
        {/* ///////////////// next schedule /////////////////// */}
        {/* <View style={[styles.titleContainer]}>
          <AppText
            style={[
              styles.text,
              {
                fontFamily: "SemiBold",
                textTransform: "capitalize",
                textDecorationLine: "underline",
              },
            ]}
          >
            Week Schedule
          </AppText>
        </View> */}
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <>
              <ScheduleCard day={item.day} daySchedule={item.schedule} />
            </>
          )}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.primaryWhite,
    flex: 1,
    width: "100%",
    padding: 12,
  },

  nextScheduleContainer: {
    // backgroundColor: "red",
    alignItems: "center",
    marginBottom: 18,
  },

  nextSchedule: {
    // backgroundColor: "pink",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
    paddingHorizontal: width * 0.1,
    paddingVertical: width * 0.02,
  },

  titleContainer: {
    // backgroundColor: "yellow",
    width: "100%",
    alignItems: "center",
    paddingVertical: width * 0.02,
  },

  text: {
    fontSize: 20,
    fontFamily: "Regular",
  },
});
export default ScheduleScreen;

// main: profile details screen
import React, { useState } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { TextInput } from "react-native-paper";
import * as ImagePicker from "expo-image-picker";
// sub: App Component
import AppScreen from "../../Components/AppComponents/AppScreen";
import AppColors from "../../Config/AppColors";
import AppTouchableHighlight from "../../Components/AppComponents/AppTouchableHighlight";
import AppTouchableOpacity from "../../Components/AppComponents/AppTouchableOpacity";
import AppText from "../../Components/AppComponents/AppText";
import AppButton from "../../Components/AppComponents/AppButton";
/////////////////////////////////////////////////////////////////////////////
import AppNavBar from "../../Components/AppComponents/AppNavBar";
import AppFABButtonSecond from "../../Components/AppComponents/AppFABButtonSecond";
// sub: Extra
const { width, height } = Dimensions.get("screen");

function ProfileDetailsScreen({
  name = "Nikhil Menan",
  username = "iamnikhilmenan",
  about = "This is bio",
  categories = ["music", "fashion"],
}) {
  const [image, setImage] = useState(null);
  const [businessName, setBusinessName] = useState("");

  //:: Back Button
  const onBackButtonPress = () => {
    console.log("on back button press");
  };

  //:: Image Picker
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <>
      <AppScreen style={[styles.screen]}>
        {/* ////////// sub: header ////////// */}
        <AppNavBar
          navbarTitleText="Profile Screen"
          onBackButtonPress={onBackButtonPress}
        />
        {/* ////////// sub: header ////////// */}
        <View style={[styles.container]}>
          {/* //////////// sub: body ///////////// */}
          {/* //:: Profile Picture Update  */}
          <AppButton title="nikhil" onPress={pickImage} />
          {image && (
            <Image
              source={{ uri: image }}
              style={{ width: 200, height: 200 }}
            />
          )}
          {/* :: Business Name  */}
          <TextInput
            activeUnderlineColor={AppColors.primaryBlack}
            label="Enter Your Business Name"
            onChangeText={(businessName) => setBusinessName(businessName)}
            style={[styles.textInput]}
            value={businessName}
            right={<TextInput.Affix text="/100" />}
          />
          {/* //////////// sub: body ///////////// */}
        </View>
      </AppScreen>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "green",
    flex: 1,
    width: "100%",
    paddingHorizontal: width * 0.05,
  },

  fieldContainer: {
    backgroundColor: "yellow",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: width * 0.1,
  },

  screen: {
    backgroundColor: "red",
    flex: 1,
    width: width,
  },

  textInput: {
    backgroundColor: AppColors.primaryWhite,
    marginVertical: 12,
    width: "100%",
    // paddingHorizontal: 0,
  },
});
export default ProfileDetailsScreen;

// main: profile details screen
import React, { useState } from "react";
import { Dimensions, Image, StyleSheet, View } from "react-native";
import * as ImagePicker from "expo-image-picker";
//:; sub: App Component
import AppScreen from "../../Components/AppComponents/AppScreen";
import AppColors from "../../Config/AppColors";
import AppTouchableHighlight from "../../Components/AppComponents/AppTouchableHighlight";
import AppTouchableOpacity from "../../Components/AppComponents/AppTouchableOpacity";
import AppText from "../../Components/AppComponents/AppText";
import AppButton from "../../Components/AppComponents/AppButton";
//:: sub: Extra
const { width, height } = Dimensions.get("screen");

function ProfileDetailsScreen({}) {
  const [profilePicture, setProfilePicture] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <>
      <AppScreen style={[styles.screen]}>
        <View style={[styles.container]}>
          {/* //:: Profile Picture Picker  */}
          <View style={[styles.profilePicturePicker]}>
            {profilePicture && (
              <Image
                source={{ uri: profilePicture }}
                style={[styles.profilePicture]}
              />
            )}
            <AppText style={[styles.text]} onPress={pickImage}>
              Change Your Profile Picture
            </AppText>
          </View>
        </View>
      </AppScreen>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "green",
    flex: 1,
    width: "100%",
  },

  profilePicturePicker: {
    backgroundColor: "yellow",
    alignItems: "center",
  },

  profilePicture: {
    backgroundColor: "orange",
    width: width * 0.35,
    height: width * 0.35,
    borderRadius: 100,
  },

  screen: {
    backgroundColor: "red",
    flex: 1,
    width: width,
  },

  text: {
    backgroundColor: "pink",
    padding: width * 0.03,
  },
});
export default ProfileDetailsScreen;

// main: Profile Details Screen
import React, { useState } from "react";
import {
  Alert,
  Dimensions,
  Image,
  StyleSheet,
  ScrollView,
  View,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { TextInput } from "react-native-paper";
//:; sub: App Component
import AppScreen from "../../Components/AppComponents/AppScreen";
import AppColors from "../../Config/AppColors";
import AppTouchableHighlight from "../../Components/AppComponents/AppTouchableHighlight";
import AppTouchableOpacity from "../../Components/AppComponents/AppTouchableOpacity";
import AppText from "../../Components/AppComponents/AppText";
import AppFABButtonSecond from "../../Components/AppComponents/AppFABButtonSecond";
import AppNavBar from "../../Components/AppComponents/AppNavBar";
//:: sub: Extra
const { width, height } = Dimensions.get("screen");

function ProfileDetailsScreen({}) {
  const [image, setImage] = useState(null);
  const [name, setName] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [about, setAbout] = React.useState("");
  const [website, setWebsite] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const onProfilePicturePress = () => {
    image &&
      Alert.alert("Alert", "Do you want to remove profile picture ?", [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "OK", onPress: () => setImage(null) },
      ]);
  };

  return (
    <>
      <AppScreen style={[styles.screen]}>
        {/* //:: navbar  */}
        <View style={[styles.navbarContainer]}>
          <AppFABButtonSecond
            icon={require("../../Assets/close.png")}
            size={0.1}
            backgroundColor="transparent"
          />
          <AppText style={[styles.text, { fontSize: 18 }]}>
            Edit profile
          </AppText>
          <AppFABButtonSecond
            icon={require("../../Assets/tick.png")}
            size={0.1}
            backgroundColor="transparent"
          />
        </View>
        <ScrollView style={[styles.container]}>
          {/* //:: Profile Picture Picker  */}
          <View style={[styles.profilePicturePickerContainer]}>
            <AppTouchableOpacity
              style={[styles.profilePictureContainer]}
              onPress={onProfilePicturePress}
            >
              {image && (
                <Image
                  source={{ uri: image }}
                  style={styles.profilePicture}
                  resizeMode="contain"
                />
              )}
              {!image && (
                <Image
                  source={require("../../Assets/user.png")}
                  style={[styles.profilePicture, { opacity: 0.5 }]}
                  resizeMode="contain"
                />
              )}
            </AppTouchableOpacity>
            <AppFABButtonSecond
              onPress={pickImage}
              icon={require("../../Assets/add-photo.png")}
              backgroundColor={AppColors.primaryWhite}
              size={0.08}
              iconContainerStyle={[styles.cameraIcon]}
              iconStyle={{
                width: "60%",
                height: "60%",
              }}
            />
          </View>
          {/* //:: Name  */}
          <TextInput
            activeUnderlineColor={AppColors.primaryBlack}
            label="Name"
            onChangeText={(name) => setName(name)}
            style={[styles.textInput]}
            value={name}
            right={<TextInput.Affix text="/100" />}
          />
          {/* //:: Username  */}
          <TextInput
            activeUnderlineColor={AppColors.primaryBlack}
            label="Username"
            onChangeText={(username) => setUsername(username)}
            style={[styles.textInput]}
            value={username}
            right={<TextInput.Affix text="/100" />}
          />
          {/* //:: About  */}
          <TextInput
            activeUnderlineColor={AppColors.primaryBlack}
            label="About"
            onChangeText={(about) => setAbout(about)}
            style={[styles.textInput]}
            value={about}
            right={<TextInput.Affix text="/100" />}
          />
          {/* //:: Website  */}
          <TextInput
            activeUnderlineColor={AppColors.primaryBlack}
            label="Website"
            onChangeText={(website) => setWebsite(website)}
            style={[styles.textInput]}
            value={website}
            right={<TextInput.Affix text="/100" />}
          />
          {/* //:: Update Email  */}
          <TextInput
            activeUnderlineColor={AppColors.primaryBlack}
            label="Update your email address"
            onChangeText={(email) => setEmail(email)}
            style={[styles.textInput]}
            value={email}
            right={<TextInput.Affix text="/100" />}
          />
          {/* //:: Update Phone Number  */}
          <TextInput
            activeUnderlineColor={AppColors.primaryBlack}
            label="Update your mobile number"
            onChangeText={(phoneNumber) => setPhoneNumber(phoneNumber)}
            style={[styles.textInput]}
            value={phoneNumber}
            right={<TextInput.Affix text="/100" />}
          />
        </ScrollView>
      </AppScreen>
    </>
  );
}

const styles = StyleSheet.create({
  cameraIcon: {
    borderWidth: 0.1,
    position: "absolute",
    right: width * 0.02,
    bottom: width * 0.02,
    borderWidth: 0.1,
    elevation: 10,
  },

  container: {
    // backgroundColor: "green",
    flex: 1,
    width: "100%",
    paddingHorizontal: width * 0.04,
  },

  navbarContainer: {
    backgroundColor: AppColors.primaryWhite,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: width * 0.04,
    elevation: 5,
  },

  profilePicturePickerContainer: {
    // backgroundColor: "yellow",
    alignItems: "center",
    paddingTop: width * 0.05,
    alignSelf: "center",
  },

  profilePictureContainer: {
    // backgroundColor: "orange",
    backgroundColor: AppColors.primaryWhite,
    width: width * 0.35,
    height: width * 0.35,
    borderRadius: 100,
    overflow: "hidden",
    borderWidth: 0.1,
  },

  profilePicture: {
    // backgroundColor: "orange",
    width: "100%",
    height: "100%",
    borderRadius: 100,
  },

  screen: {
    // backgroundColor: "red",
    backgroundColor: AppColors.primaryWhite,
    flex: 1,
    width: width,
  },

  text: {
    // backgroundColor: "pink",
    padding: width * 0.03,
    color: "black",
    fontFamily: "SemiBold",
    fontSize: 16,
  },

  textInput: {
    backgroundColor: AppColors.primaryWhite,
    marginVertical: width * 0.02,
    width: "100%",
  },
});
export default ProfileDetailsScreen;

// main: Profile details screen with modal
import React, { useState, useEffect } from "react";
import { Dimensions, Image, StyleSheet, ScrollView, View } from "react-native";
import { Modal, Portal, Text, Button, Provider } from "react-native-paper";
//:; sub: App Component
import AppScreen from "../../Components/AppComponents/AppScreen";
import AppColors from "../../Config/AppColors";
import AppTouchableHighlight from "../../Components/AppComponents/AppTouchableHighlight";
import AppTouchableOpacity from "../../Components/AppComponents/AppTouchableOpacity";
import AppText from "../../Components/AppComponents/AppText";
import AppFABButtonSecond from "../../Components/AppComponents/AppFABButtonSecond";
import AppNavBar from "../../Components/AppComponents/AppNavBar";
import AppComponentHorizontalSeparator from "../../Components/AppComponents/AppComponentHorizontalSeparator";
import AvailabilityScreen from "./Screens/Others/AvailabilityScreen";
//:: sub: Extra
const { width, height } = Dimensions.get("screen");

function ProfileDetailsScreen({}) {
  const [visible, setVisible] = React.useState(false);
  const [image, setImage] = useState(null);
  const [name, setName] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [about, setAbout] = React.useState("");
  const [website, setWebsite] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const onProfilePicturePress = () => {
    image &&
      Alert.alert("Alert", "Do you want to remove profile picture ?", [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "OK", onPress: () => setImage(null) },
      ]);
  };

  const onCameraPress = () => {
    console.log("on camera");
    pickImage();
  };

  const onGalleryPress = () => {
    console.log("on Gallery");
    pickImage();
  };

  return (
    <>
      <AppScreen style={[styles.screen]}>
        <View style={[styles.container]}>
          {/* // sub: navbar  */}
          <View style={[styles.navbarContainer]}>
            <AppFABButtonSecond
              icon={require("../../Assets/close.png")}
              size={0.1}
              backgroundColor="transparent"
            />
            <AppText style={[styles.text, { fontSize: 18 }]}>
              Edit profile
            </AppText>
            <AppFABButtonSecond
              icon={require("../../Assets/tick.png")}
              size={0.1}
              backgroundColor="transparent"
            />
          </View>
          <ScrollView style={[styles.scrollContainer]}>
            {/* //sub: Profile Picture Picker  */}
            <View style={[styles.profilePicturePickerContainer]}>
              <AppTouchableOpacity
                style={[styles.profilePictureContainer]}
                onPress={onProfilePicturePress}
              >
                {image && (
                  <Image
                    source={{ uri: image }}
                    style={styles.profilePicture}
                    resizeMode="contain"
                  />
                )}
                {!image && (
                  <Image
                    source={require("../../Assets/user.png")}
                    style={[styles.profilePicture, { opacity: 0.5 }]}
                    resizeMode="contain"
                  />
                )}
              </AppTouchableOpacity>
              <AppFABButtonSecond
                onPress={showModal}
                icon={require("../../Assets/add-photo.png")}
                backgroundColor={AppColors.primaryWhite}
                size={0.08}
                iconContainerStyle={[styles.cameraIcon]}
                iconStyle={{
                  width: "60%",
                  height: "60%",
                }}
              />
            </View>
          </ScrollView>
          {/* //:: Modal  */}
          <Provider>
            <Portal>
              <Modal
                visible={visible}
                onDismiss={hideModal}
                contentContainerStyle={styles.modalContainerStyle}
              >
                <AppText style={[styles.text]} onPress={onCameraPress}>
                  Camera
                </AppText>
                <AppComponentHorizontalSeparator />
                <AppText style={[styles.text]} onPress={onGalleryPress}>
                  Gallery
                </AppText>
              </Modal>
            </Portal>
          </Provider>
          {/* //:: Modal  */}
        </View>
      </AppScreen>
    </>
  );
}

const styles = StyleSheet.create({
  cameraIcon: {
    borderWidth: 0.1,
    position: "absolute",
    right: width * 0.02,
    bottom: width * 0.02,
    borderWidth: 0.1,
    elevation: 10,
  },

  container: {
    backgroundColor: "green",
    flex: 1,
    width: "100%",
  },

  scrollContainer: {
    backgroundColor: "pink",
    width: "100%",
    height: "100%",
    // paddingHorizontal: width * 0.04,
  },

  modalContainerStyle: {
    backgroundColor: "red",
    marginHorizontal: width * 0.1,
    alignItems: "center",
    justifyContent: "space-around",
    height: width * 0.4,
    borderRadius: 15,
    elevation: 10,
  },

  navbarContainer: {
    backgroundColor: AppColors.primaryWhite,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: width * 0.04,
    elevation: 5,
  },

  profilePicturePickerContainer: {
    backgroundColor: "yellow",
    alignItems: "center",
    paddingTop: width * 0.05,
    alignSelf: "center",
  },

  profilePictureContainer: {
    backgroundColor: "orange",
    backgroundColor: AppColors.primaryWhite,
    width: width * 0.35,
    height: width * 0.35,
    borderRadius: 100,
    overflow: "hidden",
    borderWidth: 0.1,
  },

  profilePicture: {
    // backgroundColor: "orange",
    width: "100%",
    height: "100%",
    borderRadius: 100,
  },

  screen: {
    backgroundColor: "red",
    flex: 1,
    width: width,
  },

  text: {
    backgroundColor: "pink",
    padding: width * 0.03,
    color: "black",
    fontFamily: "SemiBold",
    fontSize: 16,
  },
});
export default ProfileDetailsScreen;

// main: AvailabilityScreen
import React from "react";
import { View, StyleSheet, Dimensions, Image, ScrollView } from "react-native";
////////////////////////////////////////////////////////////////////////////////////////
import AppScreen from "../../Components/AppComponents/AppScreen";
import AppText from "../../Components/AppComponents/AppText";
import AppColors from "../../Config/AppColors";
import AppButton from "../../Components/AppComponents/AppButton";
import AppSchedule from "../../Components/ScheduleCardComponent/AppSchedule";
import AppTouchableOpacity from "../../Components/AppComponents/AppTouchableOpacity";
////////////////////////////////////////////////////////////////////////////////////////
const { width, height } = Dimensions.get("screen");
////////////////////////////////////////////////////////////////////////////////////////

function AvailabilityScreen({
  image = require("../../Assets/Clock.png"),
  name = "nikhil menan",
}) {
  return (
    <>
      <AppScreen style={styles.screen}>
        <ScrollView>
          <View style={styles.container}>
            <View style={{ alignItems: "center" }}>
              <Image source={image} style={styles.image} />
              <AppText style={styles.text}>
                <AppText>{name}</AppText> accepts calls during these slots
              </AppText>
            </View>
            <View style={styles.scheduleContainer}>
              <AppSchedule />
            </View>
            <AppTouchableOpacity style={{ alignItems: "center" }}>
              <AppButton
                title="Okay"
                textStyle={styles.buttonText}
                ContainerStyle={styles.buttonContainer}
              />
            </AppTouchableOpacity>
          </View>
        </ScrollView>
      </AppScreen>
    </>
  );
}

////////////////////////////////////////////////////////////////////////////////////////
const styles = StyleSheet.create({
  buttonContainer: {
    width: "80%",
    borderRadius: 100,
    backgroundColor: AppColors.secondaryGreen,
  },

  buttonText: {
    fontSize: 18,
    fontFamily: "SemiBold",
  },

  image: {
    width: 100,
    height: 100,
    marginVertical: 15,
  },

  text: {
    fontSize: 18,
    fontFamily: "Bold",
    color: AppColors.primaryBlack,
    textTransform: "capitalize",
    textAlign: "center",
  },
});
export default AvailabilityScreen;

// main: Welcome Screen before change
import React, { useState } from "react";
import { Dimensions, Image, StyleSheet, View } from "react-native";
//////////////////////////////////////////////////////////////
import AppText from "../../Components/AppComponents/AppText";
import AppTouchableHighlight from "../../Components/AppComponents/AppTouchableHighlight";
import AppTouchableOpacity from "../../Components/AppComponents/AppTouchableOpacity";
import AppButton from "../../Components/AppComponents/AppButton";
import AppScreen from "../../Components/AppComponents/AppScreen";
import AppColors from "../../Config/AppColors";
//////////////////////////////////////////////////////////////
const { width, height } = Dimensions.get("screen");
//////////////////////////////////////////////////////////////

function WelcomeScreen({ navigation }) {
  const [showMoreOptions, setShowMoreOptions] = useState(false);

  //:: Google Button
  const onGoogleLogInPressed = () => {
    console.log("on google login pressed");
    navigation.navigate("HomeScreen");
  };

  //:: Facebook Log In
  const onFacebookLogInPressed = () => {
    console.log("on facebook log in press");
    navigation.navigate("HomeScreen");
  };

  // :: LinkedIn Log In
  const onLinkedInLogInPressed = () => {
    console.log("on linked in log in");
    navigation.navigate("HomeScreen");
  };

  //:: onEmailOrPhoneLogInTextTouch
  const onEmailOrPhoneLogInTextTouch = () => {
    console.log("on email or phone");
    navigation.navigate("SignInScreen");
  };

  //:: Terms And Conditions
  const onTermsAndConditions = () => {
    console.log("on terms and condition");
    navigation.navigate("TermsOfUseScreen");
  };

  //:: Privacy Policies
  const onPrivacyPoliciesTextTouched = () => {
    console.log("on Privacy Policy");
    navigation.navigate("PrivacyPolicy");
  };

  //:: More Options Text
  const onMoreOptionTextTouched = () => {
    console.log("on more options press");
    setShowMoreOptions(!showMoreOptions);
  };

  //:: Create One Text
  const onCreateOneTextTouched = () => {
    console.log("on create one text touched");
    navigation.navigate("SignUpOptionsScreen");
  };

  return (
    <>
      <AppScreen style={[styles.screen]}>
        <View style={[styles.container]}>
          {/* /////////////// sub: Header ///////////////// */}
          <View style={[styles.header]}>
            <Image
              source={require("../../Assets/logo.png")}
              style={[styles.logo]}
              resizeMode="contain"
            />
            <AppText style={[styles.text]}>This is tag line</AppText>
          </View>
          {/* /////////////// sub: Header ///////////////// */}

          {/* /////////////// sub: Body ///////////////// */}
          <View style={[styles.bodyContainer]}>
            {/* :: Terms and conditions  */}
            <AppText style={[styles.text, { marginVertical: 14 }]}>
              By Clicking "
              <AppText
                style={[
                  styles.text,
                  { color: AppColors.primaryBlack, fontFamily: "SemiBold" },
                ]}
              >
                Log In
              </AppText>
              ", you agree with our
              <AppText
                style={[
                  styles.text,
                  { color: AppColors.primaryRed, fontFamily: "SemiBold" },
                ]}
                onPress={onTermsAndConditions}
              >
                {" "}
                Terms and Conditions{" "}
              </AppText>
              and{" "}
              <AppText
                style={[
                  styles.text,
                  { color: AppColors.primaryRed, fontFamily: "SemiBold" },
                ]}
                onPress={onPrivacyPoliciesTextTouched}
              >
                Privacy Polices
              </AppText>
            </AppText>

            {/* :: Google Log In  */}
            <AppTouchableOpacity
              onPress={onGoogleLogInPressed}
              style={{ width: "100%" }}
            >
              <AppButton
                ContainerStyle={[styles.signInOptionContainer]}
                IconImage={require("../../Assets/google2.png")}
                iconImageStyle={{ borderRadius: 0, marginHorizontal: 5 }}
                textStyle={[styles.buttonTextStyle]}
                title="Log in with google"
              />
            </AppTouchableOpacity>

            {/* :: More Options  */}
            {showMoreOptions && (
              <>
                {/* :: Facebook Log In  */}
                <AppTouchableOpacity
                  onPress={onFacebookLogInPressed}
                  style={{ width: "100%" }}
                >
                  <AppButton
                    ContainerStyle={[styles.signInOptionContainer]}
                    IconImage={require("../../Assets/facebook.png")}
                    iconImageStyle={{ borderRadius: 0, marginHorizontal: 5 }}
                    textStyle={[styles.buttonTextStyle]}
                    title="Log in with facebook"
                  />
                </AppTouchableOpacity>

                {/* :: LinkedIn Log In  */}
                <AppTouchableOpacity
                  onPress={onLinkedInLogInPressed}
                  style={{ width: "100%" }}
                >
                  <AppButton
                    ContainerStyle={[styles.signInOptionContainer]}
                    IconImage={require("../../Assets/linkedin.png")}
                    iconImageStyle={{ borderRadius: 0, marginHorizontal: 5 }}
                    textStyle={[styles.buttonTextStyle]}
                    title="Log in with linkedin"
                  />
                </AppTouchableOpacity>

                {/* :: Email or Phone  */}
                <AppTouchableOpacity
                  style={{
                    paddingTop: width * 0.08,
                    width: "100%",
                  }}
                >
                  {/* //:: LogIn with email / phone  */}
                  <AppText style={[styles.text]}>
                    Log In with{" "}
                    <AppText
                      style={[
                        styles.text,
                        { color: "red", fontFamily: "SemiBold" },
                      ]}
                      onPress={onEmailOrPhoneLogInTextTouch}
                    >
                      Email
                    </AppText>
                    <AppText
                      style={[styles.text, { fontFamily: "SemiBold" }]}
                      onPress={onEmailOrPhoneLogInTextTouch}
                    >
                      {" "}
                      /{" "}
                    </AppText>
                    <AppText
                      style={[
                        styles.text,
                        { color: "red", fontFamily: "SemiBold" },
                      ]}
                      onPress={onEmailOrPhoneLogInTextTouch}
                    >
                      Phone
                    </AppText>
                  </AppText>
                </AppTouchableOpacity>
                {/* //:: Create One  */}
                <AppTouchableOpacity
                  style={{
                    paddingVertical: width * 0.06,
                    width: "100%",
                  }}
                >
                  <AppText style={[styles.text]}>
                    Don't have an account ?{" "}
                    <AppText
                      style={[
                        styles.text,
                        { color: "red", fontFamily: "SemiBold" },
                      ]}
                      onPress={onCreateOneTextTouched}
                    >
                      Create One
                    </AppText>
                  </AppText>
                </AppTouchableOpacity>
              </>
            )}

            {/* :: More Options Text  */}
            {!showMoreOptions && (
              <>
                <AppTouchableOpacity
                  style={{
                    padding: width * 0.07,
                    width: "100%",
                  }}
                >
                  <AppText
                    style={[
                      styles.text,
                      { fontSize: 16, fontFamily: "SemiBold" },
                    ]}
                    onPress={onMoreOptionTextTouched}
                  >
                    More Options
                  </AppText>
                </AppTouchableOpacity>
              </>
            )}
          </View>
          {/* /////////////// sub: Body ///////////////// */}
        </View>
      </AppScreen>
    </>
  );
}

const styles = StyleSheet.create({
  bodyContainer: {
    width: "85%",
    alignItems: "center",
    marginBottom: width * 0.05,
  },

  buttonTextStyle: {
    color: AppColors.primaryBlack,
    fontSize: 16,
    fontFamily: "SemiBold",
    textTransform: "uppercase",
  },

  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
  },

  header: {
    alignItems: "center",
    width: "80%",
    marginTop: width * 0.4,
  },

  logo: {
    width: width * 0.7,
  },

  screen: {
    backgroundColor: AppColors.primaryWhite,
    flex: 1,
    width: width,
  },

  signInOptionContainer: {
    backgroundColor: AppColors.primaryWhite,
    borderRadius: 100,
    elevation: 10,
    justifyContent: "flex-start",
    marginVertical: 16,
    padding: 12,
    paddingHorizontal: 18,
  },

  text: {
    fontSize: 14,
    fontFamily: "Regular",
    textAlign: "center",
  },
});
export default WelcomeScreen;

// main: Welcome Screen New
import React, { useState, useRef } from "react";
import { Dimensions, FlatList, Image, StyleSheet, View } from "react-native";
// sub: App Component
import AppScreen from "../../Components/AppComponents/AppScreen";
import AppColors from "../../Config/AppColors";
import AppTouchableHighlight from "../../Components/AppComponents/AppTouchableHighlight";
import AppTouchableOpacity from "../../Components/AppComponents/AppTouchableOpacity";
import AppText from "../../Components/AppComponents/AppText";
import AppButton from "../../Components/AppComponents/AppButton";
// sub: Extra
const { width, height } = Dimensions.get("screen");
const images = [
  require("../../Assets/Image1.jpg"),
  require("../../Assets/Image2.jpg"),
  require("../../Assets/Image3.jpg"),
  require("../../Assets/Image4.jpg"),
  require("../../Assets/Image5.jpg"),
];

function WelcomeScreen({}) {
  return (
    <>
      <AppScreen style={[styles.screen]}>
        <View style={[styles.container]}>
          {/* fixme: */}
          <View style={[styles.sliderContainer]}>
            {/* <AppText>Image Slider comes here</AppText> */}
            <FlatList
              data={images}
              keyExtractor={(index) => index}
              renderItem={({ item }) => (
                <>
                  <Image
                    source={item}
                    style={{
                      width: width,
                      height: width,
                    }}
                  />
                </>
              )}
              horizontal
              pagingEnabled
            />
          </View>
          {/* fixme: */}
          <View style={[styles.logInContainer]}>
            <AppText style={[styles.text]}>Have a Referral Code ?</AppText>
            <AppButton
              title="Continue via Phone"
              IconImage={require("../../Assets/photo.jpeg")}
              ContainerStyle={[styles.buttonContainerStyle]}
              iconImageStyle={[styles.buttonImageStyle]}
              textStyle={[styles.text]}
            />
            <AppText style={[styles.text]}>
              By Clicking, I accept the{" "}
              <AppText style={[styles.text, { color: "green" }]}>
                terms & conditions
              </AppText>{" "}
              and{" "}
              <AppText style={[styles.text, { color: "green" }]}>
                Privacy Policy
              </AppText>
              .
            </AppText>
          </View>
        </View>
      </AppScreen>
    </>
  );
}

const styles = StyleSheet.create({
  buttonContainerStyle: {
    justifyContent: "flex-start",
    borderRadius: 100,
    elevation: 5,
    marginVertical: 12,
  },

  buttonImageStyle: {
    marginRight: 12,
  },

  container: {
    backgroundColor: "green",
    flex: 1,
    width: "100%",
    alignItems: "center",
  },

  logInContainer: {
    backgroundColor: "orange",
    flex: 1,
    width: "80%",
    alignItems: "center",
  },

  screen: {
    backgroundColor: "red",
    flex: 1,
    width: width,
  },

  sliderContainer: {
    backgroundColor: "yellow",
    width: "100%",
    height: "70%",
    ////////////////////
    justifyContent: "center",
    alignItems: "center",
  },
});
export default WelcomeScreen;

// main: Welcome Screen
import React, { useState, useRef } from "react";
import {
  Animated,
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  View,
  Text,
} from "react-native";
import ImageSlider from "react-native-image-slider";
// sub: App Component
import AppScreen from "../../Components/AppComponents/AppScreen";
import AppColors from "../../Config/AppColors";
import AppTouchableHighlight from "../../Components/AppComponents/AppTouchableHighlight";
import AppTouchableOpacity from "../../Components/AppComponents/AppTouchableOpacity";
import AppText from "../../Components/AppComponents/AppText";
import AppButton from "../../Components/AppComponents/AppButton";
// sub: Extra
const { width, height } = Dimensions.get("screen");
const images = [
  require("../../Assets/Image1.jpg"),
  require("../../Assets/Image2.jpg"),
  require("../../Assets/Image3.jpg"),
  require("../../Assets/Image4.jpg"),
  require("../../Assets/Image5.jpg"),
];

function WelcomeScreen({}) {
  return (
    <>
      <AppScreen style={[styles.screen]}>
        <View style={[styles.container]}>
          {/* fixme: */}
          <View style={[styles.sliderContainer]}>
            <ImageSlider
              images={images}
              loopBothSides
              autoPlayWithInterval={500}
              customButtons={() => <View></View>}
              customSlide={({ index, item, style, width }) => (
                <View
                  key={index}
                  style={[styles.customSlide, styles.customImageContainer]}
                >
                  <Image source={item} style={[styles.customImage]} />
                </View>
              )}
            />
          </View>
          {/* fixme: */}
          <View style={[styles.logInContainer]}>
            <AppText style={[styles.text]}>Have a Referral Code ?</AppText>
            <AppButton
              title="Continue via Phone"
              IconImage={require("../../Assets/photo.jpeg")}
              ContainerStyle={[styles.buttonContainerStyle]}
              iconImageStyle={[styles.buttonImageStyle]}
              textStyle={[styles.text]}
            />
            <AppText style={[styles.text]}>
              By Clicking, I accept the{" "}
              <AppText style={[styles.text, { color: "green" }]}>
                terms & conditions
              </AppText>{" "}
              and{" "}
              <AppText style={[styles.text, { color: "green" }]}>
                Privacy Policy
              </AppText>
              .
            </AppText>
          </View>
        </View>
      </AppScreen>
    </>
  );
}

const styles = StyleSheet.create({
  buttonContainerStyle: {
    justifyContent: "flex-start",
    borderRadius: 100,
    elevation: 5,
    marginVertical: 12,
  },

  buttonImageStyle: {
    marginRight: 12,
  },

  container: {
    // backgroundColor: "green",
    flex: 1,
    width: "100%",
    alignItems: "center",
  },

  customImageContainer: {
    // backgroundColor: "orange",
    justifyContent: "center",
    alignItems: "center",
  },

  customImage: {
    // backgroundColor: "red",
    width: width,
    height: width,
  },

  logInContainer: {
    // backgroundColor: "orange",
    flex: 1,
    width: "80%",
    alignItems: "center",
  },

  screen: {
    backgroundColor: AppColors.primaryWhite,
    flex: 1,
    width: width,
  },

  sliderContainer: {
    // backgroundColor: "yellow",
    width: "100%",
    height: "70%",
  },
});
export default WelcomeScreen;

// main: Add MObile Number Screen
import React, { useState, useRef } from "react";
import { Dimensions, Image, Modal, StyleSheet, View } from "react-native";
import PhoneInput from "react-native-phone-number-input";
// sub: App Component
import AppScreen from "../../Components/AppComponents/AppScreen";
import AppColors from "../../Config/AppColors";
import AppTouchableOpacity from "../../Components/AppComponents/AppTouchableOpacity";
import AppText from "../../Components/AppComponents/AppText";
import AppButton from "../../Components/AppComponents/AppButton";
import AppComponentHorizontalSeparator from "../../Components/AppComponents/AppComponentHorizontalSeparator";
// sub: Extra
const { width, height } = Dimensions.get("screen");

function AddMobileNumberScreen({}) {
  const [value, setValue] = useState("");
  const [formattedValue, setFormattedValue] = useState("");
  const [valid, setValid] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const phoneInput = useRef < PhoneInput > null;
  const [modalVisible, setModalVisible] = useState(false);

  const onTermsAndConditionTouch = () => {
    console.log("Terms and conditions");
  };

  const onPrivacyPolicyTouch = () => {
    console.log("Privacy Policy");
  };

  const onProceedButtonPress = () => {
    console.log(value);
    console.log(formattedValue);
    console.log(valid);

    setModalVisible(true);
  };

  return (
    <>
      <AppScreen style={[styles.screen]}>
        <View style={[styles.container]}>
          {/* main: Header  */}
          {/* sub: Logo  */}
          <View style={[styles.logoContainer]}>
            <Image
              source={require("../../Assets/logo.png")}
              style={[styles.logo]}
            />
          </View>
          {/* sub: Component Separator  */}
          <AppComponentHorizontalSeparator
            style={[styles.AppComponentHorizontalSeparatorStyle]}
          />

          {/* main: Body  */}
          <View style={[styles.bodyContainer]}>
            <View>
              {/* sub: Title Text  */}
              <AppText style={[styles.text, styles.titleText]}>
                Welcome To ConsultEase
              </AppText>
              {/* sub: subTitle Text  */}
              <AppText style={[styles.text, styles.subTitleText]}>
                Let's start with your number
              </AppText>
              {/* sub: Mobile number input  */}
              <PhoneInput
                useRef={phoneInput}
                defaultValue={value}
                defaultCode="IN"
                layout="first"
                onChangeText={(text) => {
                  setValue(text);
                }}
                onChangeFormattedText={(text) => {
                  setFormattedValue(text);
                }}
                withDarkTheme
                withShadow
                autoFocus
                containerStyle={[styles.InputContainer]}
                textContainerStyle={[styles.InputText]}
                withDarkTheme={false}
              />
            </View>
            <View>
              {/* sub: Proceed Button  */}
              <AppTouchableOpacity onPress={onProceedButtonPress}>
                <AppButton
                  title="Proceed Securely"
                  IconImage={require("../../Assets/security.png")}
                  iconImageStyle={[styles.buttonImageStyle]}
                  ContainerStyle={[styles.buttonContainerStyle]}
                  textStyle={[styles.buttonTextStyle]}
                />
              </AppTouchableOpacity>
              {/* sub: Bottom Text  */}
              <AppText style={[styles.text, styles.bottomText]}>
                By Clicking, I accept the{" "}
                <AppText
                  style={[styles.text, styles.touchableTextStyle]}
                  onPress={onTermsAndConditionTouch}
                >
                  terms & conditions
                </AppText>{" "}
                and{" "}
                <AppText
                  style={[styles.text, styles.touchableTextStyle]}
                  onPress={onPrivacyPolicyTouch}
                >
                  Privacy Policy
                </AppText>
                .
              </AppText>
            </View>
            {/* sub: OTP Verification  */}
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
            >
              <View style={[styles.modalContainer]}>
                {/* sub: Logo  */}
                <View
                  style={[
                    styles.logoContainer,
                    {
                      marginHorizontal: width * 0.05,
                      backgroundColor: "yellow",
                    },
                  ]}
                >
                  <AppText style={[styles.text, { fontSize: 24 }]}>
                    Verify its You!
                  </AppText>
                </View>
                {/* sub: Component Separator  */}
                <AppComponentHorizontalSeparator
                  style={[styles.AppComponentHorizontalSeparatorStyle]}
                />
                <View style={[styles.modalBodyContainer]}>
                  <AppText style={[styles.text]}>
                    Enter the 6-digit you receive.
                  </AppText>
                  <AppText style={[styles.text, { color: "red" }]}>
                    +91 8700913073
                  </AppText>
                </View>
              </View>
            </Modal>
          </View>
        </View>
      </AppScreen>
    </>
  );
}

const styles = StyleSheet.create({
  AppComponentHorizontalSeparatorStyle: {
    borderWidth: width * 0.02,
    borderColor: AppColors.ternaryWhite,
  },

  bodyContainer: {
    // backgroundColor: "orange",
    flex: 1,
    width: "100%",
    padding: width * 0.05,
    justifyContent: "space-between",
  },

  buttonImageStyle: {
    borderRadius: 0,
  },

  buttonContainerStyle: {
    borderRadius: 100,
    elevation: 5,
  },

  buttonTextStyle: {
    fontSize: 18,
  },

  bottomText: {
    margin: width * 0.05,
    textAlign: "center",
  },

  codeInputContainer: {
    width: "100%",
    height: "50%",
    backgroundColor: "red",
  },

  codeInputFieldStyle: {
    width: 30,
    height: 45,
    borderWidth: 0,
    borderBottomWidth: 1,
    color: "black",
    fontSize: 20,
    alignSelf: "center",
  },

  codeInputHighlightStyle: {
    borderColor: "#03DAC6",
  },

  container: {
    // backgroundColor: "green",
    flex: 1,
    alignItems: "center",
  },

  logoContainer: {
    // backgroundColor: "pink",
    width: width * 0.5,
    height: width * 0.25,
    alignItems: "center",
    justifyContent: "center",
  },

  logo: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },

  modalContainer: {
    backgroundColor: "red",
    position: "absolute",
    bottom: 0,
    width: "100%",
  },

  modalBodyContainer: {
    backgroundColor: "orange",
    padding: width * 0.05,
  },

  InputContainer: {
    backgroundColor: AppColors.primaryWhite,
    width: "100%",
    borderRadius: 4,
    borderWidth: 1,
    overflow: "hidden",
  },

  InputText: {
    backgroundColor: AppColors.primaryWhite,
  },

  screen: {
    backgroundColor: AppColors.primaryWhite,
    flex: 1,
    width: width,
  },

  subTitleText: {
    color: AppColors.fourthBlack,
    marginTop: width * 0.06,
    marginBottom: width * 0.02,
    fontSize: 18,
  },

  text: {
    color: AppColors.primaryBlack,
    // textAlign: "center",
    fontSize: 14,
    fontFamily: "Medium",
  },

  touchableTextStyle: {
    color: "blue",
    fontFamily: "SemiBold",
  },

  titleText: {
    fontSize: 18,
    fontFamily: "SemiBold",
  },

  textInput: {
    backgroundColor: AppColors.primaryWhite,
    marginVertical: width * 0.05,
    // paddingHorizontal: 0,
  },
});
export default AddMobileNumberScreen;
//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
{
  /* sub: OTP Verification  */
}
<Modal animationType="slide" transparent={true} visible={modalVisible}>
  <View style={[styles.modalContainer]}>
    {/* sub: Logo  */}
    <View
      style={[
        styles.logoContainer,
        {
          marginHorizontal: width * 0.05,
        },
      ]}
    >
      <AppText style={[styles.text, { fontSize: 24 }]}>Verify its You!</AppText>
    </View>
    {/* sub: Component Separator  */}
    <AppComponentHorizontalSeparator
      style={[styles.AppComponentHorizontalSeparatorStyle]}
    />
    <View style={[styles.modalBodyContainer]}>
      {/* sub: Body Title  */}
      <AppText style={[styles.text]}>Enter the 6-digit you receive.</AppText>
      {/* sub: Body SubTitle  */}
      <AppText style={[styles.text, { color: "red" }]}>+91 8700913073</AppText>

      {/* sub: OTP Container  */}
      <OTPInputView
        style={[styles.codeInputContainer]}
        pinCount={6}
        autoFocusOnLoad
        codeInputFieldStyle={styles.codeInputFieldStyle}
        codeInputHighlightStyle={styles.codeInputHighlightStyle}
        onCodeFilled={(code) => {
          console.log(`Code is ${code}, you are good to go!`);
        }}
      />

      {/* sub: Body Footer  */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginVertical: width * 0.1,
        }}
      >
        <AppText style={[styles.text]}>Did not receive code?</AppText>
        <AppText style={[styles.text, { color: AppColors.secondaryBlue }]}>
          Resend
        </AppText>
        <AppText style={[styles.text]}>00:28 Sec</AppText>
      </View>

      {/* sub: Verify and proceed Button  */}
      {/* sub: Proceed Button  */}
      <AppTouchableOpacity onPress={onVerifyButtonPress}>
        <AppButton
          title="Verify and Proceed"
          IconImage={require("../../Assets/check-mark.png")}
          iconImageStyle={[styles.buttonImageStyle]}
          ContainerStyle={[styles.buttonContainerStyle]}
          textStyle={[styles.buttonTextStyle]}
        />
      </AppTouchableOpacity>
    </View>
  </View>
</Modal>;

// main: Sign UP Screen
import React from "react";
import { View, StyleSheet, Dimensions, ScrollView, Image } from "react-native";
import { TextInput } from "react-native-paper";
/////////////////////////////////////////////////////////////////////////////////////
import AppButton from "../../Components/AppComponents/AppButton";
import AppColors from "../../Config/AppColors";
import AppScreen from "../../Components/AppComponents/AppScreen";
import AppText from "../../Components/AppComponents/AppText";
import AppTouchableOpacity from "../../Components/AppComponents/AppTouchableOpacity";
import AppNavBar from "../../Components/AppComponents/AppNavBar";
/////////////////////////////////////////////////////////////////////////////////////
const { width } = Dimensions.get("screen");
/////////////////////////////////////////////////////////////////////////////////////
function SignUpScreen({ navigation }) {
  const [username, setUserName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");

  const onRegisterButtonPressed = () => {
    console.log("on Register button pressed");
    navigation.navigate("ConfirmationMailSendScreen");
  };

  const onClickHereTextTouched = () => {
    console.log("on create one text pressed");
    navigation.navigate("WelcomeScreen");
  };

  const onTermsOfUseTouched = () => {
    console.log("on terms of use");
    navigation.navigate("TermsOfUseScreen");
  };

  const onPrivacyPolicyTouched = () => {
    console.log("privacy policy");
    navigation.navigate("PrivacyPolicy");
  };

  const onBackButtonPress = () => {
    console.log("on back button press");
    navigation.goBack();
  };

  return (
    <>
      <AppScreen style={styles.screen}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          stickyHeaderIndices={[0]}
        >
          {/* ///////////// sub: Header /////////////// */}
          <AppNavBar
            navbarTitleText="Create an account"
            navbarContainerStyle={[styles.appNavBar]}
            onBackButtonPress={onBackButtonPress}
          />
          {/* ///////////// sub: Header /////////////// */}
          <View style={[styles.container]}>
            <View style={[styles.signInSingUpContainer]}>
              {/* :: username  */}
              <TextInput
                activeUnderlineColor={AppColors.primaryBlack}
                label="Username"
                onChangeText={(username) => setUserName(username)}
                style={[styles.textInput]}
                value={username}
              />
              {/* :: Email */}
              <TextInput
                activeUnderlineColor={AppColors.primaryBlack}
                label="Email"
                onChangeText={(email) => setEmail(email)}
                style={[styles.textInput]}
                value={email}
              />
              {/* :: Phone */}
              <TextInput
                activeUnderlineColor={AppColors.primaryBlack}
                label="Phone"
                onChangeText={(phone) => setPhone(phone)}
                style={[styles.textInput]}
                value={phone}
              />
              {/* :: Password */}
              <TextInput
                activeUnderlineColor={AppColors.primaryBlack}
                label="Password"
                onChangeText={(password) => setPassword(password)}
                style={[styles.textInput]}
                value={password}
              />
              {/* :: Confirm Password */}
              <TextInput
                activeUnderlineColor={AppColors.primaryBlack}
                label="Confirm Password"
                onChangeText={(confirmPassword) =>
                  setConfirmPassword(confirmPassword)
                }
                style={[styles.textInput]}
                value={confirmPassword}
              />

              {/* :: Register Button Pressed */}
              <AppTouchableOpacity onPress={onRegisterButtonPressed}>
                <AppButton
                  ContainerStyle={{
                    borderRadius: 100,
                    elevation: 10,
                    marginVertical: 14,
                  }}
                  textStyle={styles.buttonTextStyle}
                  title="Register"
                ></AppButton>
              </AppTouchableOpacity>
              {/* :: Terms Of Use */}
              <AppText style={[styles.byRegisteringText]}>
                By registering, you Confirm that you accept our{" "}
                <AppText
                  style={{ color: "red", fontFamily: "SemiBold" }}
                  onPress={onTermsOfUseTouched}
                >
                  Terms of Use
                </AppText>{" "}
                and{" "}
                <AppText
                  style={{ color: "red", fontFamily: "SemiBold" }}
                  onPress={onPrivacyPolicyTouched}
                >
                  Privacy Policy
                </AppText>
              </AppText>
            </View>
            {/* //////////// sub: Header ////////////// */}

            {/* //////////// sub: Footer ////////////// */}
            <View style={styles.footerStyle}>
              <AppText style={[styles.footerText, { marginVertical: 0 }]}>
                Back To Welcome Screen?
              </AppText>
              <AppTouchableOpacity onPress={onClickHereTextTouched}>
                <AppText
                  style={[
                    styles.footerText,
                    { color: "red", marginVertical: 0 },
                  ]}
                >
                  Click Here
                </AppText>
              </AppTouchableOpacity>
            </View>
            {/* //////////// sub: Footer ////////////// */}
          </View>
        </ScrollView>
      </AppScreen>
    </>
  );
}

/////////////////////////////////////////////////////////////////////////////////
const styles = StyleSheet.create({
  byRegisteringText: {
    fontFamily: "SemiBold",
    fontSize: 16,
    marginTop: 12,
    paddingHorizontal: 12,
    textAlign: "center",
  },

  bodyContainer: {
    marginVertical: 25,
    width: "90%",
  },

  codeTextInput: {
    backgroundColor: AppColors.primaryWhite,
    fontFamily: "Bold",
    fontSize: 18,
    height: width * 0.15,
    marginBottom: 18,
    width: "100%",
  },

  container: {
    alignItems: "center",
  },

  footerStyle: {
    alignItems: "center",
    flexDirection: "column",
    marginVertical: 24,
  },

  footerText: {
    fontFamily: "SemiBold",
    fontSize: 16,
    marginVertical: 10,
  },

  appNavBar: {
    marginBottom: 12,
  },

  logoContainer: {
    height: width * 0.2,
    marginBottom: 25,
    marginTop: 50,
    width: width * 0.5,
  },

  screen: {
    backgroundColor: AppColors.primaryWhite,
    flex: 1,
    width: width,
  },

  signInSingUpContainer: {
    width: "90%",
  },

  textInput: {
    backgroundColor: AppColors.primaryWhite,
    marginVertical: 12,
    width: "100%",
  },
});
export default SignUpScreen;

// main: Add More Details
import React, { useState } from "react";
import { Dimensions, View, StyleSheet } from "react-native";
import SelectBox from "react-native-multi-selectbox";
import { xorBy } from "lodash";
import { TextInput } from "react-native-paper";
///////////////////////////////////////////////////////////////////////
import AppText from "../../Components/AppComponents/AppText";
import AppScreen from "../../Components/AppComponents/AppScreen";
import AppTouchableOpacity from "../../Components/AppComponents/AppTouchableOpacity";
import AppColors from "../../Config/AppColors";
import AppButton from "../../Components/AppComponents/AppButton";
import AppSelectBox from "../../Components/AppComponents/AppSelectBox";
import AppNavBar from "../../Components/AppComponents/AppNavBar";
///////////////////////////////////////////////////////////////////////
const { width } = Dimensions.get("screen");
const categories = [
  {
    item: "nikhil",
    id: 1,
  },
  {
    item: "deepak",
    id: 2,
  },
  {
    item: "shafali",
    id: 3,
  },
  {
    item: "varsa",
    id: 4,
  },
  {
    item: "kalpana",
    id: 5,
  },
  {
    item: "prem",
    id: 6,
  },
  {
    item: "darban",
    id: 7,
  },
  {
    item: "anju",
    id: 8,
  },
];
///////////////////////////////////////////////////////////////////////

function AddMoreDetails({ navigation }) {
  const [selectedTeams, setSelectedTeams] = useState([]);
  const [businessName, setBusinessName] = React.useState("");
  const [about, setAbout] = React.useState("");
  const [website, setWebsite] = React.useState("");

  function onMultiChange() {
    return (item) => setSelectedTeams(xorBy(selectedTeams, [item], "id"));
  }

  const onBackButtonPress = () => {
    console.log("on back button pressed");
    navigation.goBack();
  };

  const onNextButtonPressed = () => {
    console.log("on next button pressed");
    navigation.navigate("SetScheduleScreen");
  };

  return (
    <>
      <AppScreen style={[styles.screen]}>
        {/* //////////// sub: Header ///////////// */}
        <AppNavBar
          navbarTitleText="Add More Details"
          onBackButtonPress={onBackButtonPress}
        />
        {/* //////////// sub: Header ///////////// */}
        <View style={[styles.container]}>
          {/* //////////// sub: Body ///////////// */}
          <View style={[styles.bodyContainer]}>
            {/* :: Select category  */}
            <View style={[styles.categoryContainer]}>
              <AppSelectBox data={categories} />
            </View>
            {/* :: Business Name  */}
            <TextInput
              activeUnderlineColor={AppColors.primaryBlack}
              label="Enter Your Business Name"
              onChangeText={(businessName) => setBusinessName(businessName)}
              style={[styles.textInput]}
              value={businessName}
              right={<TextInput.Affix text="/100" />}
            />
            {/* :: About  */}
            <TextInput
              activeUnderlineColor={AppColors.primaryBlack}
              label="About"
              value={about}
              onChangeText={(about) => setAbout(about)}
              style={[styles.textInput]}
              multiline={true}
            />
            {/* :: Website  */}
            <TextInput
              activeUnderlineColor={AppColors.primaryBlack}
              label="Enter Your Website"
              onChangeText={(website) => setWebsite(website)}
              style={[styles.textInput]}
              value={website}
            />
            {/* :: Next Button  */}
            {/* //////////// sub: Footer ///////////// */}
            <View style={[styles.buttonContainer]}>
              <AppTouchableOpacity
                style={[styles.buttonContainerTouch]}
                onPress={onNextButtonPressed}
              >
                <AppButton
                  ContainerStyle={[
                    styles.buttonContainerStyle,
                    { backgroundColor: AppColors.primaryBlack },
                  ]}
                  title="Next"
                  textStyle={[
                    styles.buttonText,
                    { color: AppColors.primaryWhite },
                  ]}
                  style={[styles.button]}
                />
              </AppTouchableOpacity>
            </View>
            {/* //////////// sub: Footer ///////////// */}
          </View>
          {/* //////////// sub: Body ///////////// */}
        </View>
      </AppScreen>
    </>
  );
}

const styles = StyleSheet.create({
  about: {
    width: "100%",
    maxHeight: 150,
  },

  buttonContainer: {
    alignItems: "center",
    marginVertical: 18,
    width: "100%",
  },

  buttonContainerStyle: {
    borderColor: AppColors.primaryBlack,
    borderRadius: 100,
    borderWidth: 2,
    backgroundColor: "transparent",
    marginVertical: 8,
    padding: 10,
  },

  buttonContainerTouch: {
    width: "100%",
    alignItems: "center",
  },

  buttonText: {
    color: AppColors.primaryBlack,
    fontSize: 18,
    fontFamily: "SemiBold",
  },

  bodyContainer: {
    width: "90%",
    alignItems: "center",
  },

  businessName: {
    width: "100%",
    marginVertical: 16,
  },

  categoryContainer: {
    alignItems: "center",
    width: "100%",
    marginVertical: 16,
  },

  container: {
    flex: 1,
    alignItems: "center",
  },

  header: {
    fontSize: 24,
    fontFamily: "SemiBold",
    textAlign: "center",
    textTransform: "capitalize",
    marginVertical: 12,
  },

  screen: {
    backgroundColor: AppColors.primaryWhite,
    flex: 1,
    width: width,
  },

  textInput: {
    backgroundColor: AppColors.primaryWhite,
    marginVertical: 12,
    width: "100%",
    // paddingHorizontal: 0,
  },
});
export default AddMoreDetails;

// main: Welcome Screen
import React from "react";
import { Dimensions, Image, StyleSheet, View } from "react-native";
import ImageSlider from "react-native-image-slider";
// sub: App Component
import AppScreen from "../../Components/AppComponents/AppScreen";
import AppColors from "../../Config/AppColors";
import AppTouchableHighlight from "../../Components/AppComponents/AppTouchableHighlight";
import AppTouchableOpacity from "../../Components/AppComponents/AppTouchableOpacity";
import AppText from "../../Components/AppComponents/AppText";
import AppButton from "../../Components/AppComponents/AppButton";
import App from "../../Navigation/TabBarNavigation";
// sub: Extra
const { width, height } = Dimensions.get("screen");
const images = [
  require("../../Assets/Image1.jpg"),
  require("../../Assets/Image2.jpg"),
  require("../../Assets/Image3.jpg"),
  require("../../Assets/Image4.jpg"),
  require("../../Assets/Image5.jpg"),
];

function WelcomeScreen({ navigation }) {
  const onTermsAndConditionTouch = () => {
    console.log("Terms and conditions");
    navigation.navigate("TermsOfUseScreen");
  };

  const onPrivacyPolicyTouch = () => {
    console.log("Privacy Policy");
    navigation.navigate("PrivacyPolicy");
  };

  const onContinueViaPhoneButtonPress = () => {
    console.log("continue with phone");
    navigation.navigate("AddMobileNumberScreen");
  };

  return (
    <>
      <AppScreen style={[styles.screen]}>
        <View style={[styles.container]}>
          {/* sub: Image Slider  */}
          <View style={{ height: "70%", backgroundColor: "#A0C3D9" }}>
            <ImageSlider
              images={images}
              loopBothSides
              loop
              autoPlayWithInterval={2000}
              // customButtons={() => <View></View>}
              customSlide={({ index, item }) => (
                <View key={index} style={[styles.imagesContainer]}>
                  <Image
                    source={item}
                    style={[styles.images]}
                    resizeMode="contain"
                  />
                </View>
              )}
            />
          </View>
          {/* sub: Log In Options */}
          <View style={[styles.logInContainer]}>
            {/* <AppText style={[styles.text]}>Have a Referral Code ?</AppText> */}
            <AppTouchableOpacity
              onPress={onContinueViaPhoneButtonPress}
              style={{ width: "100%" }}
            >
              <AppButton
                title="Continue via Phone"
                IconImage={require("../../Assets/phone.png")}
                ContainerStyle={[styles.buttonContainerStyle]}
                iconImageStyle={[styles.buttonImageStyle]}
                textStyle={[
                  styles.text,
                  { fontSize: 16, color: AppColors.primaryWhite },
                ]}
              />
            </AppTouchableOpacity>
            <AppText style={[styles.text]}>
              By Clicking, I accept the{" "}
              <AppText
                style={[styles.text, { color: "blue", fontFamily: "SemiBold" }]}
                onPress={onTermsAndConditionTouch}
              >
                terms & conditions
              </AppText>{" "}
              and{" "}
              <AppText
                style={[styles.text, { color: "blue", fontFamily: "SemiBold" }]}
                onPress={onPrivacyPolicyTouch}
              >
                Privacy Policy
              </AppText>
              .
            </AppText>
          </View>
          {/* sub: Footer  */}
        </View>
      </AppScreen>
    </>
  );
}

const styles = StyleSheet.create({
  buttonContainerStyle: {
    backgroundColor: AppColors.primaryBlack,
    justifyContent: "flex-start",
    borderRadius: 100,
    elevation: 5,
    marginVertical: 12,
  },

  buttonImageStyle: {
    marginRight: 6,
    borderRadius: 0,
  },

  container: {
    flex: 1,
    width: width,
    alignItems: "center",
  },

  imagesContainer: {
    backgroundColor: AppColors.primaryWhite,
    justifyContent: "center",
    alignItems: "center",
  },

  images: {
    width: width,
    height: width,
  },

  logInContainer: {
    width: "100%",
    alignItems: "center",
    paddingHorizontal: width * 0.05,
  },

  screen: {
    backgroundColor: AppColors.primaryWhite,
    flex: 1,
    width: width,
  },

  text: {
    color: AppColors.primaryBlack,
    textAlign: "center",
    fontSize: 14,
    fontFamily: "Medium",
  },
});
export default WelcomeScreen;
