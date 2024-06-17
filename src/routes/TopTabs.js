import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Entypo from 'react-native-vector-icons/Entypo'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Upcoming from '../Screens/Upcoming';
import { COLORS } from '../Constants/Color';
import { useNavigation } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import All from '../Screens/All';
import Past from '../Screens/Past';
import Ongoing from '../Screens/Ongoing';
import Unread from '../Screens/Unread';
import Read from '../Screens/Read';


const Tab = createMaterialTopTabNavigator();

const TopTabs = () => {
    const navigation = useNavigation()
  return (
    <>
      <View style={{backgroundColor:COLORS.white}}>
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
      <View style={{flexDirection:'row',margin:10}}>
        <TouchableOpacity style={{}}
        onPress={()=>{navigation.goBack()}}>
          <Ionicons
          name='arrow-back'
          size={25}
          color={COLORS.black}
          />
        </TouchableOpacity>
        <Text style={{alignSelf:'center',fontSize:20,color:COLORS.black,fontWeight:'bold',marginLeft:10}}> Notifications</Text>
      </View>
      <View style={{flexDirection:'row',margin:10,}}>
        <TouchableOpacity style={{marginLeft:10}}>
            <Entypo
            name='dots-three-vertical'
            size={20}
            color={COLORS.black}
            />
        </TouchableOpacity>
        </View>
      </View>
        </View>
       
      <Tab.Navigator
       tabBarOptions={{
        labelStyle: { textTransform: 'none' },
        activeTintColor: COLORS.red,
        inactiveTintColor: COLORS.black,
        style: { backgroundColor: COLORS.white, },
        indicatorStyle: { backgroundColor: COLORS.red },

      }}
      
      >
         <Tab.Screen name="All" component={All} />
        <Tab.Screen name="Unread" component={Unread} />
        <Tab.Screen name="Read" component={Read} />
 
      </Tab.Navigator>
      <View>
        
      </View>
    </>
  );
}

export default TopTabs;
