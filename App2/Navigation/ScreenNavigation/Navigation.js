import React, { useState } from "react";
import {
  Dimensions,
  StyleSheet,
  Image,
  View,
  ScrollView,
  Alert,
} from "react-native";
import { Modal, Portal, Text, Button, Provider } from "react-native-paper";
//:: sub: App Component
import AppText from "../../Components/AppComponents/AppText";
import AppTouchableHighlight from "../../Components/AppComponents/AppTouchableHighlight";
import AppTouchableOpacity from "../../Components/AppComponents/AppTouchableOpacity";
import AppColors from "../../Config/AppColors";
import AppIcon from "../../Components/AppComponents/AppIcon";
import AppScreen from "../../Components/AppComponents/AppScreen";

///////////////////////////////////////////////////////////////////////////////
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

//:: Others Screen
import AddMoneyScreen from "../../Screens/Others/AddMoneyScreen";
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
import HomeScreen from "../../Screens/Others/HomeScreen";
import InitiateCallScreen from "../../Screens/Others/InitiateCallScreen";
import InsufficientBalanceScreen from "../../Screens/Others/InsufficientBalanceScreen";
import SetScheduleScreen from "../../Screens/Others/SetScheduleScreen";
import CameraScreen from "../../Screens/Others/CameraScreen";
import WithdrawalMessageScreen from "../../Screens/Others/WithdrawalMessageScreen";
import WithdrawalRequestScreen from "../../Screens/Others/WithdrawalRequestScreen";
import AddMoneyMessageScreen from "../../Screens/Others/AddMoneyMessageScreen";
// main:
import ProfileDetailsScreen from "../../Screens/Others/ProfileDetailsScreen";
import AboutConsultEaseScreen from "../../Screens/Others/AboutConsultEaseScreen";
import ContactScreen from "../../Screens/Others/ContactScreen";
//:: Profile Screen
import AboutScreen from "../../Screens/ProfileScreen/AboutScreen";
import PostScreen from "../../Screens/ProfileScreen/PostScreen";
import ProfileScreen from "../../Screens/ProfileScreen/ProfileScreen";
import ReviewsScreen from "../../Screens/ProfileScreen/ReviewsScreen";
import ScheduleScreen from "../../Screens/ProfileScreen/ScheduleScreen";
//:: Sign In Screen
import AddMoreDetails from "../../Screens/SignInScreen/AddMoreDetails";
import AddRatesScreen from "../../Screens/SignInScreen/AddRatesScreen";
import AddMobileNumberScreen from "../../Screens/SignInScreen/AddMobileNumberScreen";
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
import SetRatesScreen from "../../Screens/SignInScreen/SetRatesScreen";
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

// :: Profile Screen Navigator
function ProfileNavigation({ navigation }) {
  const [visible, setVisible] = useState(false);
  const [professionalAccount, setProfessionalAccount] = useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {
    backgroundColor: "white",
    width: width,
    position: "absolute",
    bottom: 0,
    borderTopRightRadius: 24,
    borderTopLeftRadius: 24,
    overflow: "hidden",
  };

  const onProfilePicturePress = () => {
    console.log("on Profile picture press");
    Alert.alert(
      "This touch will open profile picture in a new screen with full size"
    );
  };

  const onBackButtonPress = () => {
    console.log("on back button press");
    // navigation.navigate("ConsultantScreen");
  };

  const onMoreIconPress = () => {
    console.log("on more icon press");
    showModal();
  };

  const onProfileDetailsPress = () => {
    console.log("on profile details press");
    navigation.navigate("ProfileDetailsScreen");
  };

  const onCallSettingsPress = () => {
    console.log("on call settings screen");
    navigation.navigate("CECallSettings");
  };

  const onSetScheduleSettings = () => {
    console.log("on set schedule settings");
    navigation.navigate("SetScheduleScreen");
  };

  const onInterestPress = () => {
    console.log("on interest press");
  };

  const onWalletPress = () => {
    console.log("on wallet press");
    navigation.navigate("CEWalletScreen");
  };

  const onReferPress = () => {
    console.log("on refer press");
    Alert.alert("A refrer link will be sent to another person");
  };

  const onAboutConsultEasePress = () => {
    console.log("on about consultEase Press");
    navigation.navigate("AboutConsultEaseScreen");
  };

  const onContactPress = () => {
    console.log("on contact press");
    navigation.navigate("ContactScreen");
  };

  const onLogoutPress = () => {
    console.log("on logout press");
    navigation.navigate("WelcomeScreen");
  };

  const onSwitchToProfessionalAccountPress = () => {
    console.log("onSwitchToProfessionalAccountPress");
    setProfessionalAccount(!professionalAccount);
  };

  return (
    <AppScreen style={{ flex: 1 }}>
      <ProfileScreenHeader
        onBackButtonPress={onBackButtonPress}
        onMoreIconPress={onMoreIconPress}
      />
      <ScrollView style={styles.scroll} stickyHeaderIndices={[1]}>
        <ProfileScreenCard onProfilePicturePress={onProfilePicturePress} />
        <View style={{ height: height }}>
          <ProfileScreenTab.Navigator>
            <ProfileScreenTab.Screen
              options={{
                tabBarShowLabel: false,
                tabBarIcon: ({ color, size, focused }) => (
                  <AppIcon
                    icon={require("../../Assets/about.png")}
                    size={focused ? 6 : 5.5}
                    style={{
                      opacity: focused ? 1 : 0.5,
                    }}
                  />
                ),
                tabBarLabelStyle: {
                  fontSize: 14,
                  fontWeight: "700",
                },
              }}
              name="Post"
              component={PostScreen}
            />
            <ProfileScreenTab.Screen
              options={{
                tabBarShowLabel: false,
                tabBarIcon: ({ color, size, focused }) => (
                  <AppIcon
                    icon={require("../../Assets/review.png")}
                    size={focused ? 6 : 5.5}
                    style={{
                      opacity: focused ? 1 : 0.5,
                    }}
                  />
                ),
                tabBarLabelStyle: {
                  fontSize: 14,
                  fontWeight: "700",
                },
              }}
              name="Reviews"
              component={ReviewsScreen}
            />
            <ProfileScreenTab.Screen
              options={{
                tabBarShowLabel: false,
                tabBarIcon: ({ color, size, focused }) => (
                  <AppIcon
                    icon={require("../../Assets/Clock.png")}
                    size={focused ? 6 : 5.5}
                    style={{
                      opacity: focused ? 1 : 0.5,
                    }}
                  />
                ),
                tabBarLabelStyle: {
                  fontSize: 14,
                  fontWeight: "700",
                },
              }}
              name="Schedule"
              component={ScheduleScreen}
            />
            <ProfileScreenTab.Screen
              options={{
                tabBarShowLabel: false,
                tabBarIcon: ({ color, size, focused }) => (
                  <AppIcon
                    icon={require("../../Assets/feed.png")}
                    size={focused ? 6 : 5.5}
                    style={{
                      opacity: focused ? 1 : 0.5,
                    }}
                  />
                ),
                tabBarLabelStyle: {
                  fontSize: 14,
                  fontWeight: "700",
                },
              }}
              name="About"
              component={AboutScreen}
            />
          </ProfileScreenTab.Navigator>
        </View>
      </ScrollView>
      {/* //////////////////////////////////////////// */}
      <Provider>
        <Portal>
          <Modal
            visible={visible}
            onDismiss={hideModal}
            contentContainerStyle={containerStyle}
          >
            <View style={[styles.modalContainer]}>
              <View
                style={{
                  borderColor: AppColors.primaryBlack,
                  borderWidth: 2,
                  width: width * 0.1,
                  alignSelf: "center",
                  borderRadius: 100,
                  position: "absolute",
                  marginTop: width * 0.04,
                }}
              ></View>
              {/* //:: sub: Profile Details  */}
              <AppTouchableHighlight
                style={[styles.option]}
                onPress={onProfileDetailsPress}
              >
                <Image
                  source={require("../../Assets/account.png")}
                  style={[styles.icon]}
                />
                <AppText style={[styles.optionText]}>Profile Details</AppText>
              </AppTouchableHighlight>
              {professionalAccount && (
                <>
                  {/* //:: sub: Call Settings  */}
                  <AppTouchableHighlight
                    style={[styles.option]}
                    onPress={onCallSettingsPress}
                  >
                    <Image
                      source={require("../../Assets/account.png")}
                      style={[styles.icon]}
                    />
                    <AppText style={[styles.optionText]}>Call Settings</AppText>
                  </AppTouchableHighlight>
                  {/* //:: sub: Set Schedule Settings  */}
                  <AppTouchableHighlight
                    style={[styles.option]}
                    onPress={onSetScheduleSettings}
                  >
                    <Image
                      source={require("../../Assets/account.png")}
                      style={[styles.icon]}
                    />
                    <AppText style={[styles.optionText]}>
                      Call Schedule Settings
                    </AppText>
                  </AppTouchableHighlight>
                </>
              )}
              {/* //:: sub: Interest  */}
              <AppTouchableHighlight
                style={[styles.option]}
                onPress={onInterestPress}
              >
                <Image
                  source={require("../../Assets/heart.png")}
                  style={[styles.icon]}
                />
                <AppText style={[styles.optionText]}>Interest</AppText>
              </AppTouchableHighlight>
              {/* //:: sub: Wallet  */}
              <AppTouchableHighlight
                style={[styles.option]}
                onPress={onWalletPress}
              >
                <Image
                  source={require("../../Assets/wallet.png")}
                  style={[styles.icon]}
                />
                <AppText style={[styles.optionText]}>Wallet</AppText>
              </AppTouchableHighlight>
              {/* //:: sub: Settings  */}
              {!professionalAccount && (
                <AppTouchableHighlight
                  style={[styles.option]}
                  onPress={onSwitchToProfessionalAccountPress}
                >
                  <Image
                    source={require("../../Assets/settings.png")}
                    style={[styles.icon]}
                  />
                  <AppText style={[styles.optionText]}>
                    Switch To Professional Account
                  </AppText>
                </AppTouchableHighlight>
              )}

              {/* //:: sub: About ConsultEase  */}
              <AppTouchableHighlight
                style={[styles.option]}
                onPress={onAboutConsultEasePress}
              >
                <Image
                  source={require("../../Assets/info.png")}
                  style={[styles.icon]}
                />
                <AppText style={[styles.optionText]}>About ConsultEase</AppText>
              </AppTouchableHighlight>
              {/* //:: sub: Logout  */}
              <AppTouchableHighlight
                style={[styles.option]}
                onPress={onLogoutPress}
              >
                <Image
                  source={require("../../Assets/logout.png")}
                  style={[styles.icon]}
                />
                <AppText style={[styles.optionText]}>Logout</AppText>
              </AppTouchableHighlight>
            </View>
          </Modal>
        </Portal>
      </Provider>
      {/* //////////////////////////////////////////// */}
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: AppColors.primaryWhite,
    paddingTop: 24,
  },

  option: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 12,
  },

  icon: {
    width: width * 0.07,
    height: width * 0.07,
    marginRight: 12,
  },

  optionText: {
    fontSize: 16,
    fontFamily: "Medium",
  },
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// :: Home Screen Navigator
function Home() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: width * 0.2,
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
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size, focused }) => (
            <AppIcon
              icon={require("../../Assets/home.png")}
              size={focused ? 8 : 7}
              style={{ opacity: focused ? 1 : 0.5 }}
            />
            // <HomeIcon width={120} height={120} />
          ),
          tabBarLabelStyle: {
            fontSize: 14,
            fontWeight: "700",
          },
        }}
      />

      <Tab.Screen
        name="history"
        component={CallHomeScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size, focused }) => (
            <AppIcon
              icon={require("../../Assets/history.png")}
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
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size, focused }) => (
            <AppIcon
              icon={require("../../Assets/account.png")}
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

          <Stack.Screen
            name="ProfileDetailsScreen"
            component={ProfileDetailsScreen}
          />
          <Stack.Screen
            name="AboutConsultEaseScreen"
            component={AboutConsultEaseScreen}
          />
          <Stack.Screen name="ContactScreen" component={ContactScreen} />
          <Stack.Screen name="CameraScreen" component={CameraScreen} />
          <Stack.Screen
            name="WithdrawalMessageScreen"
            component={WithdrawalMessageScreen}
          />
          <Stack.Screen
            name="WithdrawalRequestScreen"
            component={WithdrawalRequestScreen}
          />
          <Stack.Screen
            name="AddMoneyMessageScreen"
            component={AddMoneyMessageScreen}
          />
          <Stack.Screen
            name="AddMobileNumberScreen"
            component={AddMobileNumberScreen}
          />
          <Stack.Screen name="SetRatesScreen" component={SetRatesScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

//////////////////////////////////////////////////////////////////////////////
export default Navigation;
