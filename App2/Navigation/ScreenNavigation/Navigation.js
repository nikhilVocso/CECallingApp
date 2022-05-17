import React from "react";
import {
  Dimensions,
  StyleSheet,
  Image,
  View,
  ScrollView,
  Alert,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
//:: External Files
import AppColors from "../../Config/AppColors";
import AppIcon from "../../Components/AppComponents/AppIcon";
import AppScreen from "../../Components/AppComponents/AppScreen";
//:: Others
import AddMoneyScreen from "../../Screens/Others/AddMoneyScreen";
import AvailabilityScreen from "../../Screens/Others/AvailabilityScreen";
import CallBusyScreen from "../../Screens/Others/CallBusyScreen";
import CallDialingScreen from "../../Screens/Others/CallDialingScreen";
import CallFinishRatingScreen from "../../Screens/Others/CallFinishRatingScreen";
import CallHistoryScreen from "../../Screens/Others/CallHistoryScreen";
import CallHomeScreen from "../../Screens/Others/CallHomeScreen";
import CallRingingScreen from "../../Screens/Others/CallRingingScreen";
import CallScreen from "../../Screens/Others/CallScreen";
import CECallSettings from "../../Screens/Others/CECallSettings";
import CEWalletScreen from "../../Screens/Others/CEWalletScreen";
import ChatScreen from "../../Screens/Others/ChatScreen";
import ChatWindowScreen from "../../Screens/Others/ChatWindowScreen";
import ConsultantScreen from "../../Screens/Others/ConsultantScreen";
import DayAvailability from "../../Screens/Others/DayAvailability";
import HomeScreen from "../../Screens/Others/HomeScreen";
import InitiateCallScreen from "../../Screens/Others/InitiateCallScreen";
import InsufficientBalanceScreen from "../../Screens/Others/InsufficientBalanceScreen";
import SetScheduleScreen from "../../Screens/Others/SetScheduleScreen";
//:: Profile Screen
import AboutScreen from "../../Screens/ProfileScreen/AboutScreen";
import PostScreen from "../../Screens/ProfileScreen/PostScreen";
import ProfileScreen from "../../Screens/ProfileScreen/ProfileScreen";
import ReviewsScreen from "../../Screens/ProfileScreen/ReviewsScreen";
import ScheduleScreen from "../../Screens/ProfileScreen/ScheduleScreen";
//:: Sign In Screen
import AddInterestScreen from "../../Screens/SignInScreen/AddInterestScreen";
import AddMoreDetails from "../../Screens/SignInScreen/AddMoreDetails";
import AddRatesScreen from "../../Screens/SignInScreen/AddRatesScreen";
import ConfirmationMailSendScreen from "../../Screens/SignInScreen/ConfirmationMailSendScreen";
import ConfirmationScreen from "../../Screens/SignInScreen/ConfirmationScreen";
import CookiesPolicy from "../../Screens/SignInScreen/CookiesPolicy";
import ForgetPasswordScreen from "../../Screens/SignInScreen/ForgetPasswordScreen";
import NewPasswordScreen from "../../Screens/SignInScreen/NewPasswordScreen";
import PrivacyPolicy from "../../Screens/SignInScreen/PrivacyPolicy";
import SignInScreen from "../../Screens/SignInScreen/SignInScreen";
import SignUpOptionsScreen from "../../Screens/SignInScreen/SignUpOptionsScreen";
import SignUpScreen from "../../Screens/SignInScreen/SignUpScreen";
import TermsOfUseScreen from "../../Screens/SignInScreen/TermsOfUseScreen";
import WelcomeScreen from "../../Screens/SignInScreen/WelcomeScreen";
//:: Profile Card
import CategoryChip from "../../Components/ProfileCard/CategoryChip";
import ProfileScreenCard from "../../Components/ProfileCard/ProfileScreenCard";
import ProfileScreenHeader from "../../Components/ProfileCard/ProfileScreenHeader";
import UserBio from "../../Components/ProfileCard/UserBio";
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const ProfileScreenTab = createMaterialTopTabNavigator();
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const { width, height } = Dimensions.get("screen");
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// :: Profile Screen Navigator
function ProfileNavigation({}) {
  const onProfilePicturePress = () => {
    console.log("on Profile picture press");
    Alert.alert(
      "This touch will open profile picture in a new screen with full size"
    );
  };

  return (
    <AppScreen style={{ flex: 1 }}>
      <ProfileScreenHeader />
      <ScrollView style={styles.scroll} stickyHeaderIndices={[1]}>
        <ProfileScreenCard onProfilePicturePress={onProfilePicturePress} />
        <View style={{ height: height }}>
          <ProfileScreenTab.Navigator>
            <ProfileScreenTab.Screen name="Post" component={PostScreen} />
            <ProfileScreenTab.Screen name="Reviews" component={ReviewsScreen} />
            <ProfileScreenTab.Screen
              name="Schedule"
              component={ScheduleScreen}
            />
            <ProfileScreenTab.Screen name="About" component={AboutScreen} />
          </ProfileScreenTab.Navigator>
        </View>
      </ScrollView>
    </AppScreen>
  );
}

// :: Home Screen Navigator
function Home() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: width * 0.2,
          paddingBottom: 8,
          paddingTop: 14,
        },
        tabBarActiveTintColor: "#000",
        tabBarInactiveTintColor: "#A8A8A8",
      }}
    >
      {/* todo: Home Screen  */}
      {/* <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size, focused }) => (
            <AppIcon
              icon={require("../../Assets/home.png")}
              size={focused ? 8 : 7}
              style={{ opacity: focused ? 1 : 0.5 }}
            />
          ),
          tabBarLabelStyle: {
            fontSize: 14,
            fontWeight: "700",
          },
        }}
      /> */}
      {/* todo: Home Screen  */}

      <Tab.Screen
        name="Consultant"
        component={ConsultantScreen}
        options={{
          tabBarLabel: "Consultants",
          tabBarIcon: ({ color, size, focused }) => (
            <AppIcon
              icon={require("../../Assets/application.png")}
              size={focused ? 8 : 7}
              style={{ opacity: focused ? 1 : 0.5 }}
            />
          ),
          tabBarLabelStyle: {
            fontSize: 14,
            fontWeight: "700",
          },
        }}
      />

      <Tab.Screen
        name="Call"
        component={CallHomeScreen}
        options={{
          tabBarLabel: "Call",
          tabBarIcon: ({ color, size, focused }) => (
            <AppIcon
              icon={require("../../Assets/phone-call.png")}
              size={focused ? 8 : 7}
              style={{ opacity: focused ? 1 : 0.5 }}
            />
          ),
          tabBarLabelStyle: {
            fontSize: 14,
            fontWeight: "700",
          },
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileNavigation}
        options={{
          tabBarLabel: "Account",
          tabBarIcon: ({ color, size, focused }) => (
            <AppIcon
              icon={require("../../Assets/user.png")}
              size={focused ? 8 : 7}
              style={{ opacity: focused ? 1 : 0.5 }}
            />
          ),
          tabBarLabelStyle: {
            fontSize: 14,
            fontWeight: "700",
          },
        }}
      />
    </Tab.Navigator>
  );
}

// main: Navigation
function Navigation({}) {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
          <Stack.Screen name="AddMoneyScreen" component={AddMoneyScreen} />
          <Stack.Screen
            name="AvailabilityScreen"
            component={AvailabilityScreen}
          />
          <Stack.Screen name="CallBusyScreen" component={CallBusyScreen} />
          <Stack.Screen
            name="CallDialingScreen"
            component={CallDialingScreen}
          />
          <Stack.Screen
            name="CallFinishRatingScreen"
            component={CallFinishRatingScreen}
          />
          <Stack.Screen
            name="CallHistoryScreen"
            component={CallHistoryScreen}
          />
          <Stack.Screen name="CallHomeScreen" component={CallHomeScreen} />
          <Stack.Screen
            name="CallRingingScreen"
            component={CallRingingScreen}
          />
          <Stack.Screen name="CallScreen" component={CallScreen} />
          <Stack.Screen name="CECallSettings" component={CECallSettings} />
          <Stack.Screen name="CEWalletScreen" component={CEWalletScreen} />
          <Stack.Screen name="ChatScreen" component={ChatScreen} />
          <Stack.Screen name="ChatWindowsScreen" component={ChatWindowScreen} />
          <Stack.Screen name="ConsultantScreen" component={ConsultantScreen} />
          <Stack.Screen name="DayAvailability" component={DayAvailability} />
          <Stack.Screen name="HomeScreen" component={Home} />
          <Stack.Screen
            name="InitiateCallScreen"
            component={InitiateCallScreen}
          />
          <Stack.Screen
            name="InsufficientBalanceScreen"
            component={InsufficientBalanceScreen}
          />
          <Stack.Screen
            name="SetScheduleScreen"
            component={SetScheduleScreen}
          />
          <Stack.Screen name="AboutScreen" component={AboutScreen} />
          <Stack.Screen name="PostScreen" component={PostScreen} />
          <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
          <Stack.Screen name="ReviewsScreen" component={ReviewsScreen} />
          <Stack.Screen name="ScheduleScreen" component={ScheduleScreen} />
          <Stack.Screen
            name="AddInterestScreen"
            component={AddInterestScreen}
          />
          <Stack.Screen name="AddMoreDetails" component={AddMoreDetails} />
          <Stack.Screen name="AddRatesScreen" component={AddRatesScreen} />
          <Stack.Screen
            name="ConfirmationMailSendScreen"
            component={ConfirmationMailSendScreen}
          />
          <Stack.Screen
            name="ConfirmationScreen"
            component={ConfirmationScreen}
          />
          <Stack.Screen name="CookiesPolicy" component={CookiesPolicy} />
          <Stack.Screen
            name="ForgetPasswordScreen"
            component={ForgetPasswordScreen}
          />
          <Stack.Screen
            name="NewPasswordScreen"
            component={NewPasswordScreen}
          />
          <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
          <Stack.Screen name="SignInScreen" component={SignInScreen} />
          <Stack.Screen
            name="SignUpOptionsScreen"
            component={SignUpOptionsScreen}
          />
          <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
          <Stack.Screen name="TermsOfUseScreen" component={TermsOfUseScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

//////////////////////////////////////////////////////////////////////////////
const styles = StyleSheet.create({
  container: {},
});
export default Navigation;
