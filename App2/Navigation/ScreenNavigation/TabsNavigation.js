import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import Home from "../Screens/Home/HomeScreen";
import Consultants from "../Screens/Consultants/ConsultantsScreen";
import Calls from "../Screens/Call/CallScreen";
import Account from "../Screens/Account/AccountScreen";

const Tab = createBottomTabNavigator();

import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function TabsNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarLabelStyle: {
            padding: 15,
          },
          tabBarActiveTintColor: "#000",
          tabBarInactiveTintColor: "#A8A8A8",
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color, size }) => (
              <Feather name="home" size={24} color="black" />
            ),
            tabBarLabelStyle: {
              fontSize: 14,
              fontWeight: "700",
            },
          }}
        />
        <Tab.Screen
          name="Consultants"
          component={Consultants}
          options={{
            tabBarLabel: "Consultants",
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="appstore-o" size={24} color="black" />
            ),
            tabBarLabelStyle: {
              fontSize: 14,
              fontWeight: "700",
            },
          }}
        />
        <Tab.Screen
          name="Calls"
          component={Calls}
          options={{
            tabBarLabel: "Calls",
            tabBarIcon: ({ color, size }) => (
              <Feather name="phone-call" size={24} color="black" />
            ),
            tabBarLabelStyle: {
              fontSize: 14,
              fontWeight: "700",
            },
          }}
        />
        <Tab.Screen
          name="Account"
          component={Account}
          options={{
            tabBarLabel: "Account",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="account-circle-outline"
                size={24}
                color="black"
              />
            ),
            tabBarLabelStyle: {
              fontSize: 14,
              fontWeight: "700",
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
