import React, {FC} from 'react';
import {
  createBottomTabNavigator,
  BottomTabBar,
} from '@react-navigation/bottom-tabs';
import colors from '../styles/colors';
import {Image, StyleSheet} from 'react-native';
import * as Screens from '../Screens'; //import all screens
import imagePath from '../constants/imagePath';
import navigationStrings from '../constants/navigationStrings';

const BottomTab = createBottomTabNavigator();

const TabRoutes: FC = () => {
  return (
    <BottomTab.Navigator
      tabBar={tabsProps => (
        <>
          <BottomTabBar {...tabsProps} />
        </>
      )}
      initialRouteName={navigationStrings.LISTING}
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.black,
        tabBarShowLabel: false,
        tabBarActiveBackgroundColor: colors.green,
      }}>
      <BottomTab.Screen
        name={navigationStrings.LISTING}
        component={Screens.ItemsList}
        options={{
          tabBarIcon: ({focused}) => {
            return focused ? (
              <Image
                source={imagePath.listing}
                style={{height: 25, width: 25}}
              />
            ) : (
              <Image
                source={imagePath.listing}
                style={{height: 25, width: 25}}
              />
            );
          },
        }}
      />
      <BottomTab.Screen
        name={navigationStrings.MAP}
        component={Screens.MapScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return focused ? (
              <Image source={imagePath.map} style={{height: 25, width: 25}} />
            ) : (
              <Image source={imagePath.map} style={{height: 25, width: 25}} />
            );
          },
        }}
      />
    </BottomTab.Navigator>
  );
};

const styles = StyleSheet.create({
  customBottomtabsStyle: {
    //height: moderateScale(60)
  },
});

export default TabRoutes;
