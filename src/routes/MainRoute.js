import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {View, Text} from 'react-native';

import DrawerNavigation from './DrawerNavigation';
import BottomTabs from './BottomTabs';
import JobDetails from '../Screens/JobDetails';
import FacilityDetails from '../Screens/FacilityDetails';
import Calender from '../Screens/Calender';

const Stack = createStackNavigator();

const MainRoute = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {/* <Stack.Screen name="DrawerNavigation" component={DrawerNavigation} />  */}
      <Stack.Screen name={'BottomTabs'} component={BottomTabs} />
      <Stack.Screen name={'JobDetails'} component={JobDetails} />
      <Stack.Screen name={'FacilityDetails'} component={FacilityDetails} />
      <Stack.Screen name={'Calender'} component={Calender} />
    </Stack.Navigator>
  );
};

export default MainRoute;
