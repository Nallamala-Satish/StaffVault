import * as React from 'react';
import{View,Text,Image} from 'react-native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Home from '../Screens/Home';
import Profile from '../Screens/Profile';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { COLORS } from '../Constants/Color';
import Shifts from '../Screens/Shifts';
import Schedule from '../Screens/Schedule';
import TopTabs from './TopTabs';


const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: COLORS.white,
          height: 50,
         borderTopStartRadius:10,borderTopEndRadius:10
        },
        tabBarActiveTintColor: COLORS.violet,
        // tabBarLabelStyle: {fontSize: 12},
        tabBarInactiveTintColor: COLORS.black,
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
                  {fontSize: 20, color: COLORS.black},
                  focused && {tintColor: COLORS.violet, fontSize: 25, color: COLORS.violet,},
                ]}
              />
            );
          },
        }}
      
      />
       <Tab.Screen
        name="Shifts"
        component={Shifts}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <FontAwesome6
                name="briefcase-medical"
                style={[
                  {fontSize: 25, color: COLORS.black},
                  focused && {tintColor: COLORS.violet, fontSize: 25, color: COLORS.violet,},
                
                ]}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Schedule"
        component={TopTabs}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <MaterialIcons
                name="calendar-month"
                style={[
                  {fontSize: 25, color: COLORS.black},
                  focused && {tintColor: COLORS.violet, fontSize: 25, color: COLORS.violet,},
                
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
                  focused && {tintColor: COLORS.violet, fontSize: 25, color: COLORS.violet},
                ]}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
