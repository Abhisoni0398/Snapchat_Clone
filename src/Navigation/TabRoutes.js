import React from "react";
import { Image } from "react-native";
import {
  BottomTabBar,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";

import navigationStrings from "../Constants/navigationStrings";
import { Map, Chat, Camera, Stories } from "../Screens/Index";
import imagePath from "../Constants/imagePath";
import colors from "../styles/colors";

const BottomTab = createBottomTabNavigator();

const TabRoutes = () => {
  return (
    <BottomTab.Navigator
      tabBar={(tabsProps) => (
        <>
          <BottomTabBar {...tabsProps} />
        </>
      )}
      initialRouteName={navigationStrings.CHAT}
      tabBarOptions={{
        showLabel: false,
      }}
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "black",
        },
      }}
    >
      <BottomTab.Screen
        name={navigationStrings.MAP}
        component={Map}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Image
                style={{
                  tintColor: focused ? colors.green : colors.white,
                  width: 40,
                  height: 40,
                }}
                source={imagePath.icLoc}
              />
            );
          },
        }}
      />
      <BottomTab.Screen
        name={navigationStrings.CHAT}
        component={Chat}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return (
              <Image
                style={{
                  tintColor: focused ? colors.green : colors.white,
                  width: 40,
                  height: 40,
                }}
                source={imagePath.icChat}
              />
            );
          },
        }}
      />
      <BottomTab.Screen
        name={navigationStrings.CAMERA}
        component={Camera}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Image
                style={{
                  tintColor: focused ? colors.green : colors.white,
                  width: 40,
                  height: 40,
                }}
                source={imagePath.icCamera}
              />
            );
          },
        }}
      />
      <BottomTab.Screen
        name={navigationStrings.STORIES}
        component={Stories}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Image
                style={{
                  tintColor: focused ? colors.green : colors.white,
                  width: 40,
                  height: 40,
                }}
                source={imagePath.icPeople}
              />
            );
          },
        }}
      />
    </BottomTab.Navigator>
  );
};

export default TabRoutes;
