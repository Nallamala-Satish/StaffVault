import  React,{useState,useEffect,useRef} from 'react';
import { StyleSheet, Text, View, TouchableOpacity,Image } from 'react-native';
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';
import { useNavigation, useRoute } from '@react-navigation/native'
import Entypo from 'react-native-vector-icons/Entypo'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { COLORS } from '../Constants/Color';

const NotificationDetails = () => {
  const navigation=  useNavigation()
 const route = useRoute()
 const {item} = route.params;
 const sheetRef = useRef(null);
console.log(item)

 const renderContent = () => (
  <View
    style={{
      backgroundColor: 'white',
      padding: 16,
      // height: 150,
    }}
  >
  <TouchableOpacity style={{padding:5,backgroundColor:'#DCFFDD',margin:5,padding:10}}
         onPress={()=>{sheetRef.current.snapTo(0)}}>
        <Text style={{alignSelf:'center',color:COLORS.green}}>Accept</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{padding:5,backgroundColor:'#FFEAEB',margin:5,padding:10}}
         onPress={()=>{sheetRef.current.snapTo(0)}}>
        <Text style={{alignSelf:'center',color:COLORS.red}}>Decline</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{alignSelf:'center',margin:10}}>
        <Text>Close</Text>
      </TouchableOpacity>
  </View>
)



  return (
    <>
    <View style={{flex:1}}>
    <View style={{flexDirection:'row',justifyContent:'space-between',margin:5}}>
    
    <TouchableOpacity style={{alignSelf:'center'}}
    onPress={()=>{navigation.goBack()}}>
      <Ionicons
      name='arrow-back'
      size={25}
      color={COLORS.black}
      />
    </TouchableOpacity>
    <Text style={{alignSelf:'center',fontSize:20,color:COLORS.black,fontWeight:'bold',marginLeft:10}}>{item && item.message}</Text>
    <TouchableOpacity style={{marginLeft:10}}>
        <Entypo
        name='dots-three-vertical'
        size={20}
        color={COLORS.black}
        />
    </TouchableOpacity>

    </View>
    <View style={{flexDirection:'row',margin:10}}>
    <TouchableOpacity>
        <Image
           source={require('../assets/profile.png')}
           style={{borderRadius:100,width:40,height:40,marginLeft:10}}
        />
         </TouchableOpacity>
  
      <View style={{marginLeft:10}}>
        <Text style={{fontWeight:'bold',color:COLORS.black}}>John Lyne</Text>
        <Text>I must tell you me interview this</Text>
      </View>
      </View>
      <View style={{marginLeft:50}}>
        <Text style={{fontWeight:'bold',color:COLORS.black}}>{item && item.message}</Text>
        <Text>{item && item.details}</Text>
        </View>
    
    </View>
    <View style={{flex:1}}>
      <TouchableOpacity style={{padding:5,backgroundColor:'green',alignSelf:'center'}}
         onPress={()=>{sheetRef.current.snapTo(0)}}>
        <Text style={{alignSelf:'center'}}>swipe</Text>
      </TouchableOpacity>
      </View>
    <BottomSheet
        ref={sheetRef}
        snapPoints={[150, 0]}
        borderRadius={10}
        renderContent={renderContent}
      />
    </>
  )
}

export default NotificationDetails