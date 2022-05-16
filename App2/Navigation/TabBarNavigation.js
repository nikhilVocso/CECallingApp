import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
/////////////////////////////////////////////////////////////////////////////////////////////
import HomeScreen from "../Screens/Others/HomeScreen";
import ProfileScreen from "../Screens/ProfileScreen/ProfileScreen";
import ConsultantScreen from "../Screens/Others/ConsultantScreen";
import ProfileScreenCard from "../Components/ProfileCard/ProfileScreenCard";
import PostScreen from "../Screens/ProfileScreen/PostScreen";
import ReviewsScreen from "../Screens/ProfileScreen/ReviewsScreen";
import ScheduleScreen from "../Screens/ProfileScreen/ReviewsScreen";
import AboutScreen from "../Screens/ProfileScreen/AboutScreen";
/////////////////////////////////////////////////////////////////////////////////////////////

const Tab = createBottomTabNavigator();
const ProfileScreenTab = createMaterialTopTabNavigator();
/////////////////////////////////////////////////////////////////////////////////////////////

function ProfileScreenTabs() {
  return (
    <>
      <ProfileScreenCard />
      <ProfileScreenTab.Navigator>
        <ProfileScreenTab.Screen name="Post" component={PostScreen} />
        <ProfileScreenTab.Screen name="Reviews" component={ReviewsScreen} />
        <ProfileScreenTab.Screen name="Schedule" component={ScheduleScreen} />
        <ProfileScreenTab.Screen name="About" component={AboutScreen} />
      </ProfileScreenTab.Navigator>
    </>
  );
}
/////////////////////////////////////////////////////////////////////////////////////////////
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Consultant" component={ConsultantScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
