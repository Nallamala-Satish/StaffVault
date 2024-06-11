import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {View, Text} from 'react-native';

import DrawerNavigation from './DrawerNavigation';
import BottomTabs from './BottomTabs';
import JobDetails from '../Screens/JobDetails';
import FacilityDetails from '../Screens/FacilityDetails';
import Calender from '../Screens/Calender';
import Notifications from '../Screens/Notifications';
import ScheduleInfo from '../Screens/ScheduleInfo';
import Message1 from '../Screens/Message1';
import TopTabs from './TopTabs';

const Stack = createStackNavigator();

const MainRoute = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {/* <Stack.Screen name="DrawerNavigation" component={DrawerNavigation} />  */}
      <Stack.Screen name={'BottomTabs'} component={BottomTabs} />
      <Stack.Screen name={'TopTabs'} component={TopTabs} />
      <Stack.Screen name={'JobDetails'} component={JobDetails} />
      <Stack.Screen name={'FacilityDetails'} component={FacilityDetails} />
      <Stack.Screen name={'Notifications'} component={Notifications} />
      <Stack.Screen name={'Calender'} component={Calender} />
      <Stack.Screen name={'ScheduleInfo'} component={ScheduleInfo} />
      <Stack.Screen name={'Message1'} component={Message1} />
    </Stack.Navigator>
  );
};

export default MainRoute;
