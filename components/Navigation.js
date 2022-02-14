import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import { createStackNavigator } from "@react-navigation/stack";
import AccountScreen from "../screens/AccountScreen";
import Ionicons from "react-native-vector-icons/Ionicons";
import LoginScreen from "../screens/LoginScreen";

const Navigation = (props) => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerTitle: () => <Text>Header</Text>,
          tabBarIcon: ({ focused, color, size, padding }) => {
            let iconName;
            if (route.name === "Home") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "About") {
              iconName = focused
                ? "information-circle"
                : "information-circle-outline";
            } else if (route.name === "Profile") {
              iconName = focused ? "person" : "person-outline";
            }

            return (
              <Ionicons
                name={iconName}
                size={size}
                color={color}
                style={{ paddingBottom: padding }}
              />
            );
          },
        })}
        tabBarOptions={{
          activeTintColor: "lightseagreen",
          inactiveTintColor: "grey",
          lableStyle: { fontSize: 16 },
          style: { width: fullScreenWidth },
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="AccountScreen" component={AccountScreen} />
        <Tab.Screen name="LoginScreen" component={LoginScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const fullScreenWidth = Dimensions.get("window").width;

const Stack = createStackNavigator();
const HomeStackScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="home" component={HomeScreen} />
    </Stack.Navigator>
  );
};

const AboutStackScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.screen name="About" component={AboutStackScreen} />
    </Stack.Navigator>
  );
};
const SearchStackScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.screen name="Search" component={SearchStackScreen} />
      <Stack.Screem name="MyInfo" component={LoginScreen} />
    </Stack.Navigator>
  );
};

const Tab = createBottomTabNavigator();

const styles = StyleSheet.create({});
export default Navigation;
