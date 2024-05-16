import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Upcoming from '../Screens/Upcoming';
import { COLORS } from '../Constants/Color';
import { useNavigation } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import All from '../Screens/All';
import Past from '../Screens/Past';
import Ongoing from '../Screens/Ongoing';


const Tab = createMaterialTopTabNavigator();

const TopTabs = () => {
    const navigation = useNavigation()
  return (
    <>
      <View style={{backgroundColor:COLORS.white,}}>
      <View style={{backgroundColor:COLORS.white,padding:10,flexDirection:'row',justifyContent:'flex-end'}}>
            <Text style={{alignSelf:'center',fontWeight:'bold',fontSize:20,color:COLORS.black,marginRight:100}}>Schedule</Text>
          <TouchableOpacity style={{padding:5,borderRadius:5,backgroundColor:'#F6F4F4',marginRight:10}}>
          <MaterialIcons
            name="calendar-month"
            size={20}
            color={COLORS.violet}
           style={{alignSelf:'center',}} 
          />
          </TouchableOpacity>
        </View>
        </View>
       
      <Tab.Navigator
       tabBarOptions={{
        labelStyle: { textTransform: 'none' },
        activeTintColor: COLORS.violet,
        inactiveTintColor: COLORS.black,
        style: { backgroundColor: COLORS.white, },
        indicatorStyle: { backgroundColor: COLORS.violet },

      }}
      
      >
         <Tab.Screen name="All" component={All} />
        <Tab.Screen name="Upcoming" component={Upcoming} />
        <Tab.Screen name="Ongoing" component={Ongoing} />
        <Tab.Screen name="Past" component={Past} />
      </Tab.Navigator>
      
    </>
  );
}

export default TopTabs;
