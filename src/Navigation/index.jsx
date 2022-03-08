import React, { useEffect, useState } from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Icon } from "../design";
import HomeNav from "./Home";
import FavsNav from "./Favorites";
import AudiosNav from './Audio'

const Tab = createBottomTabNavigator();

export default function Navigation () {

  return (
    <NavigationContainer>
      <StatusBar />
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarActiveTintColor: "#00261E",
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeNav}
          options={{
            headerShown: false,
            tabBarLabel: "الأذكار",
            tabBarIcon: ({ color, size }) => (
              <Icon iconName="home" color={color} raised={false} />
            ),
          }}
        />
        <Tab.Screen
          name="Chats"
          component={FavsNav}
          options={{
            tabBarLabel: "المفضلة",
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Icon iconName="heart" color={color} raised={false} />
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={AudiosNav}
          options={{
            tabBarLabel: "الصوتيات",
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Icon iconName="play" color={color} raised={false} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
