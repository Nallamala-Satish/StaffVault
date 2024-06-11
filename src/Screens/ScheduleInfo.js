import {View, Text,TouchableOpacity,Image} from 'react-native';
import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { COLORS } from '../Constants/Color';
import Entypo from 'react-native-vector-icons/Entypo'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const ScheduleInfo = () => {
    const navigation= useNavigation()
    const route= useRoute()
    const {item}= route.params;

  return (
    <View style={{flex:1,backgroundColor:COLORS.white}}>
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
        <Text style={{alignSelf:'center',fontSize:20,color:COLORS.black,fontWeight:'bold',marginLeft:10}}> Schedules info</Text>
      </View>
      <View style={{margin:10}}>
        <TouchableOpacity>
            <Entypo
            name='dots-three-vertical'
            size={20}
            color={COLORS.black}
            />
        </TouchableOpacity>
        </View>
      </View>
      <View>
         <View style={{flexDirection:'row',justifyContent:'space-between',margin:10}}>
            <View style={{flexDirection:'row'}}>
        <TouchableOpacity>
        <Image
           source={item.image}
           style={{borderRadius:100,width:50,height:50,}}
        />
         </TouchableOpacity>
        <View style={{marginLeft:10}}>
          <Text style={{color:COLORS.black,fontSize:18}}>{item.name}</Text>
          <TouchableOpacity style={{backgroundColor:item.status == 'Confirmed' ?'lightgreen':'gray',borderRadius:30,padding:5,margin:5}}>
            <Text style={{alignSelf:'center',color:COLORS.white}}>{item.status}</Text>
          </TouchableOpacity>
        </View> 
            </View>
            <View style={{flexDirection:'row'}}>
                <TouchableOpacity style={{margin:5}}>
              <MaterialCommunityIcons
              name='chat'
              size={20}
              color={COLORS.blue}
              style={{alignSelf:'center',padding:5}}
              />
              </TouchableOpacity>
            <TouchableOpacity style={{margin:5}}>
              <Ionicons
              name='call'
              size={20}
              color={COLORS.blue}
              style={{alignSelf:'center',padding:5}}
              />
              </TouchableOpacity>
            </View>
        </View>  
        <View style={{backgroundColor:'lightgray',height:1,margin:5}}/> 
        <View style={{margin:10}}>
            <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:20}}>
               <View>
                    <Text>Date & Time</Text>
                    <Text style={{color:COLORS.black,fontSize:20}}>{item.date}</Text>
                    <Text>{item.time}</Text>
               </View>
               <View>
                <TouchableOpacity>
                  <MaterialIcons
                  name='edit'
                  size={15}
                  />
                </TouchableOpacity>
               </View>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:20}}>
               <View>
                    <Text>Address</Text>
                    <Text style={{color:COLORS.black,fontSize:20}}>{'San Francisco, California'}</Text>
                    <Text>{'0.31 mi away'}</Text>
               </View>
               <View>
                <TouchableOpacity style={{backgroundColor:'lightgray',padding:10,borderRadius:5}}>
                  <MaterialIcons
                  name='location-pin'
                  size={30}
                  color={COLORS.black}
                  />
                </TouchableOpacity>
               </View>
            </View>
            <View style={{marginTop:20}}>
                    <Text>Fee</Text>
                    <Text style={{color:COLORS.black,fontSize:20}}>Total Price{'$85'}</Text>
                    <Text>{'For 30 minutes'}</Text>
               </View>
               <View style={{marginTop:20}}>
                    <Text>Need</Text>
                    <Text style={{color:COLORS.black,fontSize:20}}>Treatment</Text>
                    <Text>{'Any kind of treatment'}</Text>
               </View>
               <View style={{marginTop:20}}>
                    <Text>Remainder</Text>
                    <Text style={{color:COLORS.black,fontSize:20}}>{item.time1}</Text>
                    <Text>{'Repeat off'}</Text>
               </View>
        </View>
        </View>
        <View style={{flex:1,marginTop:20}}>
            <TouchableOpacity style={{padding:10,borderRadius:5,borderWidth:1,borderColor:'lightgray',margin:10,}}>
                <Text style={{alignSelf:'center',fontSize:20}}>Cancel</Text>
            </TouchableOpacity>
        </View>
    </View>
  );
};

export default ScheduleInfo;
