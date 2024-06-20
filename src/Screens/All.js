import {View, Text,FlatList,TouchableOpacity} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { COLORS } from '../Constants/Color';

const All = () => {
  const navigation = useNavigation()
  const data=[
    {id:1,message:'Everest healthcare is looking for nursing services for a patient Monday to Friday 9:00 AM to 5:00 PM',details:'Lorem Ipsum is simply dummy text of the printing and typesetting industry',time:'20 days ago'},
    {id:2,message:'Everest healthcare is looking for nursing services for a patient Monday to Friday 9:00 AM to 5:00 PM',details:'Lorem Ipsum is simply dummy text of the printing and typesetting industry',time:'30 days ago'},
    {id:3,message:'Everest healthcare is looking for nursing services for a patient Monday to Friday 9:00 AM to 5:00 PM',details:'Lorem Ipsum is simply dummy text of the printing and typesetting industry',time:'20 days ago'},
    {id:4,message:'Everest healthcare is looking for nursing services for a patient Monday to Friday 9:00 AM to 5:00 PM',details:'Lorem Ipsum is simply dummy text of the printing and typesetting industry',time:'30 days ago'},
    {id:5,message:'Everest healthcare is looking for nursing services for a patient Monday to Friday 9:00 AM to 5:00 PM',details:'Lorem Ipsum is simply dummy text of the printing and typesetting industry',time:'20 days ago'},
    {id:6,message:'Everest healthcare is looking for nursing services for a patient Monday to Friday 9:00 AM to 5:00 PM',details:'Lorem Ipsum is simply dummy text of the printing and typesetting industry',time:'30 days ago'}
  ]

  const Item = ({item})=>{
    return(
      <View style={{margin:5,backgroundColor:'#72afd3',borderRadius:5}}>
        <TouchableOpacity onPress={()=>{
          navigation.navigate('NotificationDetails',{item:item})
        }}
          style={{padding:10}}>
          <Text style={{color:COLORS.white,fontWeight:'500',width:280}}>{item.message}</Text>
          <Text style={{marginTop:5,color:COLORS.white,}}>Zip Code 60504,</Text>
         <Text style={{color:COLORS.white,}}>Pay rate: Optional</Text>
         <Text style={{color:COLORS.white,}}>Diagnosis/Comments:</Text>
         <View style={{flexDirection:'row',justifyContent:'space-between'}}>
         <TouchableOpacity style={{padding:5,backgroundColor:COLORS.green,margin:5,padding:10,width:150,borderRadius:5}}
         onPress={()=>{}}>
        <Text style={{alignSelf:'center',color:COLORS.white}}>Accept</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{padding:5,backgroundColor:'#f74242',margin:5,padding:10,width:150,borderRadius:5}}
         onPress={()=>{}}>
        <Text style={{alignSelf:'center',color:COLORS.white}}>Decline</Text>
      </TouchableOpacity>
         </View>
        </TouchableOpacity>
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

export default All;
