import {View, Text,FlatList,TouchableOpacity} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { COLORS } from '../Constants/Color';

const Read = () => {
    const navigation = useNavigation()
  const data=[
    {id:1,message:'John deo wants to donate blood',details:'Lorem Ipsum is simply dummy text of the printing and typesetting industry',time:'20 days ago'},
    {id:2,message:'John deo wants to donate blood',details:'Lorem Ipsum is simply dummy text of the printing and typesetting industry',time:'30 days ago'},
    {id:3,message:'John deo wants to donate blood',details:'Lorem Ipsum is simply dummy text of the printing and typesetting industry',time:'20 days ago'},
    {id:4,message:'John deo wants to donate blood',details:'Lorem Ipsum is simply dummy text of the printing and typesetting industry',time:'30 days ago'},
    {id:5,message:'John deo wants to donate blood',details:'Lorem Ipsum is simply dummy text of the printing and typesetting industry',time:'20 days ago'},
    {id:6,message:'John deo wants to donate blood',details:'Lorem Ipsum is simply dummy text of the printing and typesetting industry',time:'30 days ago'}
  ]

  const Item = ({item})=>{
    return(
      <View style={{margin:5}}>
        <TouchableOpacity onPress={()=>{
           navigation.navigate('NotificationDetails',{item:item})
        }}
          style={{padding:5}}>
          <Text style={{color:COLORS.black,fontWeight:'bold'}}>{item.message}</Text>
          <Text>{item.details}</Text>
          <Text>{item.time}</Text>
        </TouchableOpacity>
        <View style={{backgroundColor:'lightgray',height:1,}}/>
      </View>
    )
  }

  return (
    <View style={{flex:1,backgroundColor:COLORS.white}}>
    <View style={{flex:1}}>
        <FlatList
        data={data}
        renderItem={Item}
        keyExtractor={item =>item.id}
        />   
    </View>
  </View>
  );
};

export default Read;
