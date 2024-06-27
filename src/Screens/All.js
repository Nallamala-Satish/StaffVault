import {View, Text,FlatList,TouchableOpacity} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { COLORS } from '../Constants/Color';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';

const All = () => {
  const navigation = useNavigation()
  const data=[
    {id:1,message:'Everest healthcare is looking for nursing services for a patient',details:'Lorem Ipsum is simply dummy text of the printing and typesetting industry',time:'Monday to Friday 9:00 AM to 5:00 PM'},
    {id:2,message:'Everest healthcare is looking for nursing services for a patient',details:'Lorem Ipsum is simply dummy text of the printing and typesetting industry',time:'Monday to Friday 9:00 AM to 5:00 PM'},
    {id:3,message:'Everest healthcare is looking for nursing services for a patient',details:'Lorem Ipsum is simply dummy text of the printing and typesetting industry',time:'Monday to Friday 9:00 AM to 5:00 PM'},
    {id:4,message:'Everest healthcare is looking for nursing services for a patient',details:'Lorem Ipsum is simply dummy text of the printing and typesetting industry',time:'Monday to Friday 9:00 AM to 5:00 PM'},
    {id:5,message:'Everest healthcare is looking for nursing services for a patient',details:'Lorem Ipsum is simply dummy text of the printing and typesetting industry',time:'Monday to Friday 9:00 AM to 5:00 PM'},
    {id:6,message:'Everest healthcare is looking for nursing services for a patient',details:'Lorem Ipsum is simply dummy text of the printing and typesetting industry',time:'Monday to Friday 9:00 AM to 5:00 PM'}
  ]

  const Item = ({item})=>{
    return(
      <View style={{margin:10,backgroundColor:'white',borderRadius:5, shadowColor: 'gray',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 1.84,
        elevation: 5,}}>
        <TouchableOpacity onPress={()=>{
          navigation.navigate('NotificationDetails',{item:item})
        }}
          style={{padding:10}}>
          <Text style={{color:COLORS.black,fontWeight:'500',width:280}}>{item.message}</Text>
          <Text style={{color:COLORS.black,fontWeight:'300',width:280,marginTop:5}}>{item.time}</Text>
          <Text style={{marginTop:5,color:COLORS.black,}}>Zip Code 60504,</Text>
         <Text style={{color:COLORS.black,}}>Pay rate: Optional</Text>
         <Text style={{color:COLORS.black,}}>Diagnosis/Comments:</Text>
         <View style={{flexDirection:'row',justifyContent:'space-between'}}>
         <TouchableOpacity style={{padding:5,backgroundColor:COLORS.green,margin:5,padding:10,width:150,borderRadius:5,flexDirection:'row',alignSelf:'center'}}
         onPress={()=>{}}>
          <FontAwesome
          name='check'
          color={'white'}
          size={20}
          style={{alignSelf:'center',marginLeft:20}}
          />
        <Text style={{alignSelf:'center',color:COLORS.white,marginLeft:20}}>Accept</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{padding:5,backgroundColor:'#f74242',margin:5,padding:10,width:150,borderRadius:5,flexDirection:'row',alignSelf:'center'}}
         onPress={()=>{}}>
          <Entypo
          name="cross"
          color={'white'}
          size={20}
          style={{alignSelf:'center',marginLeft:20}}
          />
        <Text style={{alignSelf:'center',color:COLORS.white,marginLeft:20}}>Decline</Text>
      </TouchableOpacity>
         </View>
        </TouchableOpacity>
      </View>
    )
  }

  return (
    <View style={{flex:1,}}>
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
