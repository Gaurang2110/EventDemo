import {StyleSheet} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {routes, strings} from '../helper/appconstant';
import Login from '../container/auth/login';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SearchScreen from '../container/home/searchScreen';
import CalendarScreen from '../container/home/calendarScreen';
import FavScreen from '../container/home/favScreen';
import ProfileScreen from '../container/home/profileScreen';
import SvgIcon from '../assets/svgs/SvgIcon';
import { colors } from '../assets/colors';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        labelStyle: {fontSize: 18},
        headerShown:false,
        tabBarActiveTintColor:colors.blackColor,
        tabBarHideOnKeyboard:true
      }}>
      <Tab.Screen
        options={{
          tabBarLabel: strings.search,
          tabBarIcon: () => <SvgIcon.SearchIcon />,
        }}
        name={routes.search}
        component={SearchScreen}
      />
      <Tab.Screen
        options={{
          tabBarLabel: strings.events,
          tabBarIcon: () => <SvgIcon.CalIcon />,
        }}
        name={routes.cal}
        component={CalendarScreen}
      />
      <Tab.Screen
        options={{
          tabBarLabel: strings.favourites,
          tabBarIcon: () => <SvgIcon.HeartIcon />,
        }}
        name={routes.fav}
        component={FavScreen}
      />
      <Tab.Screen
        options={{
          tabBarLabel: strings.profile,
          tabBarIcon: () => <SvgIcon.ProfileIcon />,
        }}
        name={routes.profile}
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
};
const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName={routes.login}>
        <Stack.Screen name={routes.login} component={Login} />
        <Stack.Screen name={routes.tab} component={TabNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;

const styles = StyleSheet.create({});
