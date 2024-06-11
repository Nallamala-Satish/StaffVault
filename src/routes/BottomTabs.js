import * as React from 'react';
import {View, Text, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Home from '../Screens/Home';
import Profile from '../Screens/Profile';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {COLORS} from '../Constants/Color';
import Shifts from '../Screens/Shifts';
import Schedule from '../Screens/Schedule';
import TopTabs from './TopTabs';
import Notifications from '../Screens/Notifications';
import Message from '../Screens/Message';
import Menu from '../Screens/Menu';
import Calender from '../Screens/Calender';




const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: COLORS.white,
          height: 50,
          borderTopStartRadius: 10,
          borderTopEndRadius: 10,
        },
        tabBarActiveTintColor: COLORS.blue,
        // tabBarLabelStyle: {fontSize: 12},
        // tabBarInactiveTintColor: COLORS.black,
        tabBarActiveBackgroundColor: COLORS.white,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <MaterialCommunityIcons
                name="home-variant-outline"
                style={[
                  {fontSize: 20, },
                  focused && {
                    tintColor: COLORS.blue,
                    fontSize: 25,
                    color: COLORS.blue,
                  },
                ]}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Messages"
        component={Message}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Ionicons
                name="chatbubble-ellipses-outline"
                style={[
                  {fontSize: 25, },
                  focused && {
                    tintColor: COLORS.blue,
                    fontSize: 25,
                    color: COLORS.blue,
                  },
                ]}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Calender"
        component={Calender}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <MaterialIcons
                name="calendar-month"
                style={[
                  {fontSize: 25, },
                  focused && {
                    tintColor: COLORS.blue,
                    fontSize: 25,
                    color: COLORS.blue,
                  },
                ]}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Menu"
        component={Menu}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Ionicons
                name="menu"
                style={[
                  {fontSize: 25,},
                  focused && {
                    tintColor: COLORS.blue,
                    fontSize: 25,
                    color: COLORS.blue,
                  },
                ]}
              />
            );
          },
        }}
      />
      {/* <Tab.Screen
        name="Schedule"
        component={TopTabs}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <MaterialIcons
                name="calendar-month"
                style={[
                  {fontSize: 25, color: COLORS.black},
                  focused && {
                    tintColor: COLORS.violet,
                    fontSize: 25,
                    color: COLORS.violet,
                  },
                ]}
              />
            );
          },
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <FontAwesome
                name="user"
                style={[
                  {fontSize: 25, color: COLORS.black},
                  focused && {
                    tintColor: COLORS.violet,
                    fontSize: 25,
                    color: COLORS.violet,
                  },
                ]}
              />
            );
          },
        }}
      /> */}
    </Tab.Navigator>
  );
};

export default BottomTabs;
