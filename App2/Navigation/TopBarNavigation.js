import React from "react";
import { StyleSheet } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";
/////////////////////////////////////////////////////////////////////////////
import PostScreen from "../Screens/ProfileScreen/PostScreen";
import ReviewsScreen from "../Screens/ProfileScreen/ReviewsScreen";
import ScheduleScreen from "../Screens/ProfileScreen/ReviewsScreen";
import AboutScreen from "../Screens/ProfileScreen/AboutScreen";
/////////////////////////////////////////////////////////////////////////////
const ProfileScreenTab = createMaterialTopTabNavigator();
/////////////////////////////////////////////////////////////////////////////
function TopBarNavigation({}) {
  return (
    <>
      <NavigationContainer>
        <ProfileScreenTab.Navigator>
          <ProfileScreenTab.Screen name="Post" component={PostScreen} />
          <ProfileScreenTab.Screen name="Reviews" component={ReviewsScreen} />
          <ProfileScreenTab.Screen name="Schedule" component={ScheduleScreen} />
          <ProfileScreenTab.Screen name="About" component={AboutScreen} />
        </ProfileScreenTab.Navigator>
      </NavigationContainer>
    </>
  );
}
/////////////////////////////////////////////////////////////////////////////
const styles = StyleSheet.create({
  container: {},
});
export default TopBarNavigation;
