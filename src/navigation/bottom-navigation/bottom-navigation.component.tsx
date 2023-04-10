import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StatusBar } from "expo-status-bar";
import { RouteNames } from "../../common/interfaces";
import { bottomRoutes } from "./routes";

const Tab = createBottomTabNavigator();

export const BottomNavigation = () => {
  return (
    <NavigationContainer>
      <StatusBar />
      <Tab.Navigator
        initialRouteName={RouteNames.Home}
        screenOptions={{
          tabBarActiveTintColor: "#3a856f",
        }}
      >
        {bottomRoutes.map((route) => (
          <Tab.Screen
            name={route.name}
            component={route.component}
            options={route.options}
          />
        ))}
      </Tab.Navigator>
    </NavigationContainer>
  );
};
