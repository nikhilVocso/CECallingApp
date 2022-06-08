import React from "react";
import { StyleSheet, Text, View } from "react-native";
///////////////////////////// main: App Components ////////////////////////////////////
import AppBigButton from "./App2/Components/AppComponents/AppBigButton";
import AppButton from "./App2/Components/AppComponents/AppButton";
import AppCallerImage from "./App2/Components/AppComponents/AppCallerImage";
import AppComponentHorizontalSeparator from "./App2/Components/AppComponents/AppComponentHorizontalSeparator";
import AppComponentVerticalSeparator from "./App2/Components/AppComponents/AppComponentVerticalSeparator";
import AppFabButton from "./App2/Components/AppComponents/AppFABButton";
import AppIcon from "./App2/Components/AppComponents/AppIcon";
import AppNavBar from "./App2/Components/AppComponents/AppNavBar";
import AppScreen from "./App2/Components/AppComponents/AppScreen";
import AppSelect from "./App2/Components/AppComponents/AppSelect";
import AppText from "./App2/Components/AppComponents/AppText";
import AppTextInput from "./App2/Components/AppComponents/AppTextInput";
import AppTouchableHighlight from "./App2/Components/AppComponents/AppTouchableHighlight";
import AppTouchableOpacity from "./App2/Components/AppComponents/AppTouchableOpacity";

///////////////////////////// main: Consultant List Card ////////////////////////////////////
import ConsultantListCard from "./App2/Components/ConsultantListCard/ConsultantListCard";
import ProfilePictureContainer from "./App2/Components/ConsultantListCard/ProfilePictureContainer";
import UserCallButton from "./App2/Components/ConsultantListCard/UserCallButtons";
import UserCategoryContainer from "./App2/Components/ConsultantListCard/UserCategoryContainer";
import UserDetailsContainer from "./App2/Components/ConsultantListCard/UserDetailsContainer";
import UserRatingContainer from "./App2/Components/ConsultantListCard/UserRatingContainer";

///////////////////////////// main: Feed Card Component ////////////////////////////////////
import FeedCard from "./App2/Components/FeedCardComponent/FeedCard";
import FeedContent from "./App2/Components/ProfileCard/UserBio";
import FeedFooter from "./App2/Components/FeedCardComponent/FeedFooter";
import FeedHeader from "./App2/Components/FeedCardComponent/FeedHeader";

///////////////////////////// main: Others  ////////////////////////////////////
import CallAndMinutes from "./App2/Components/Others/CallAndMinutes";
import CallCount from "./App2/Components/Others/CallCount";
import CallHistory from "./App2/Components/Others/CallHistory";
import CallHistoryDetails from "./App2/Components/Others/CallHistoryDetails";
import CallsByCategory from "./App2/Components/Others/CallsByCategory";
import CESearchBar from "./App2/Components/Others/CESearchBar";
import ChatScreenHeader from "./App2/Components/Others/ChatScreenHeader";
import ProfilePictureFAB from "./App2/Components/Others/ProfilePictureFAB";
import StoryCard from "./App2/Components/Others/StoryCard";

///////////////////////////// main: Profile Card ////////////////////////////////////
import CategoryChip from "./App2/Components/ProfileCard/CategoryChip";
import ProfileScreenCard from "./App2/Components/ProfileCard/ProfileScreenCard";
import ProfileScreenHeader from "./App2/Components/ProfileCard/ProfileScreenHeader";
import UserBio from "./App2/Components/ProfileCard/UserBio";

///////////////////////////// main: Schedule Card Component ////////////////////////////////////
import AppSchedule from "./App2/Components/ScheduleCardComponent/AppSchedule";
import AppSetSchedule from "./App2/Components/ScheduleCardComponent/AppSetSchedule";
import Schedule from "./App2/Components/ScheduleCardComponent/Schedule";
import ScheduleScreenHeader from "./App2/Components/ScheduleCardComponent/ScheduleScreenHeader";

///////////////////////////// main: Sign In Screen Component ////////////////////////////////////
import CallButtonSecond from "./App2/Components/SignInScreenComponent/CallButtonSecond";
import CustomButton from "./App2/Components/SignInScreenComponent/CustomButton";
import SocialSignInOptions from "./App2/Components/SignInScreenComponent/SocialSignInOptions";
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////

///////////////////////////// main: Others Screens ////////////////////////////////////
import AddMoneyScreen from "./App2/Screens/Others/AddMoneyScreen";
import CallBusyScreen from "./App2/Screens/Others/CallBusyScreen";
import CallDialingScreen from "./App2/Screens/Others/CallDialingScreen";
import CallFinishRatingScreen from "./App2/Screens/Others/CallFinishRatingScreen";
import CallHistoryScreen from "./App2/Screens/Others/CallHistoryScreen";
import CallHomeScreen from "./App2/Screens/Others/CallHomeScreen";
import CallRingingScreen from "./App2/Screens/Others/CallRingingScreen";
import CallScreen from "./App2/Screens/Others/CallScreen";
import CECallSettings from "./App2/Screens/Others/CECallSettings";
import ChatScreen from "./App2/Screens/Others/ChatScreen";
import ChatWindowScreen from "./App2/Screens/Others/ChatWindowScreen";
import ConsultantScreen from "./App2/Screens/Others/ConsultantScreen";
import HomeScreen from "./App2/Screens/Others/HomeScreen";
import InitiateCallScreen from "./App2/Screens/Others/InitiateCallScreen";
import InsufficientBalanceScreen from "./App2/Screens/Others/InsufficientBalanceScreen";
import SetScheduleScreen from "./App2/Screens/Others/SetScheduleScreen";

///////////////////////////// main: Profile Screen ////////////////////////////////////
import AboutScreen from "./App2/Screens/ProfileScreen/AboutScreen";
import PostScreen from "./App2/Screens/ProfileScreen/PostScreen";
import ProfileScreen from "./App2/Screens/ProfileScreen/ProfileScreen";
import ReviewsScreen from "./App2/Screens/ProfileScreen/ReviewsScreen";
import ScheduleScreen from "./App2/Screens/ProfileScreen/ScheduleScreen";

///////////////////////////// main: Sign In Screen ////////////////////////////////////
import AddMoreDetails from "./App2/Screens/SignInScreen/AddMoreDetails";
import ConfirmationMailSendScreen from "./App2/Screens/SignInScreen/ConfirmationMailSendScreen";
import ConfirmationScreen from "./App2/Screens/SignInScreen/ConfirmationScreen";
import CookiesPolicy from "./App2/Screens/SignInScreen/CookiesPolicy";
import ForgetPasswordScreen from "./App2/Screens/SignInScreen/ForgetPasswordScreen";
import NewPasswordScreen from "./App2/Screens/SignInScreen/NewPasswordScreen";
import PrivacyPolicy from "./App2/Screens/SignInScreen/PrivacyPolicy";
import SignInScreen from "./App2/Screens/SignInScreen/SignInScreen";
import SignUpOptionsScreen from "./App2/Screens/SignInScreen/SignUpOptionsScreen";
import SignUpScreen from "./App2/Screens/SignInScreen/SignUpScreen";
import TermsOfUseScreen from "./App2/Screens/SignInScreen/TermsOfUseScreen";
import WelcomeScreen from "./App2/Screens/SignInScreen/WelcomeScreen";
import AddRatesScreen from "./App2/Screens/SignInScreen/AddRatesScreen";

///////////////////////////// main: Navigation ////////////////////////////////////
//:ScreenNavigation
import Navigation from "./App2/Navigation/ScreenNavigation/Navigation";
import TabsNavigation from "./App2/Navigation/TabBarNavigation";
//:: Top And Bottom Bar Navigation
import TopBarNavigation from "./App2/Navigation/TopBarNavigation";
import TabBarNavigation from "./App2/Navigation/TabBarNavigation";

//////////// currently working ///////////////////////
import AppModal from "./App2/Components/AppComponents/AppModal";
import SplashScreen from "./App2/Screens/SignInScreen/SplashScreen";

//////////////////////// current working ////////////////////
import ProfileDetailsScreen from "./App2/Screens/Others/ProfileDetailsScreen";
import AboutConsultEaseScreen from "./App2/Screens/Others/AboutConsultEaseScreen";
import ContactScreen from "./App2/Screens/Others/ContactScreen";

import ReviewCard from "./App2/Components/Others/ReviewCard";
import ScheduleCard from "./App2/Components/Others/ScheduleCard";
import CameraScreen from "./App2/Screens/Others/CameraScreen";

//////////////////////
import WithdrawalRequestScreen from "./App2/Screens/Others/WithdrawalRequestScreen";
import WithdrawalMessageScreen from "./App2/Screens/Others/WithdrawalMessageScreen";
import AddMoneyMessageScreen from "./App2/Screens/Others/AddMoneyMessageScreen";
import AddMobileNumberScreen from "./App2/Screens/SignInScreen/AddMobileNumberScreen";

import Rough from "./App2/Screens/SignInScreen/Rough";
import AddInterestScreen from "./App2/Screens/SignInScreen/AddInterestScreen";
import CEWalletScreen from "./App2/Screens/Others/CEWalletScreen";
import SetRatesScreen from "./App2/Screens/SignInScreen/SetRatesScreen";

export default function App() {
  return (
    <>
      <View style={styles.container}>
        {/* main: Currently Working  */}
        {/* <Navigation /> */}
        {/* <WelcomeScreen /> */}
        <AddMobileNumberScreen />
        {/* <SetScheduleScreen /> */}
        {/* <Rough /> */}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
