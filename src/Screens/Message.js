import {View, Text,TouchableOpacity,Image,FlatList} from 'react-native';
import React from 'react';
import { COLORS } from '../Constants/Color';
import Entypo from 'react-native-vector-icons/Entypo'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native';

const Message = () => {
  const navigation = useNavigation()
  const data=[
    {id:1,name:'John Lyne',message:'i must tell you interview this',count:'02',time:'01:52',image:require('../assets/profile.png')},
    {id:2,name:'John Deo',message:'i must tell you interview this',count:'02',time:'01:52',image:require('../assets/profile.png')},
    {id:3,name:'John Lyne',message:'i must tell you interview this',count:'02',time:'01:52',image:require('../assets/profile.png')},
    {id:4,name:'John Deo',message:'i must tell you interview this',count:'02',time:'01:52',image:require('../assets/profile.png')},
    {id:5,name:'John Lyne',message:'i must tell you interview this',count:'02',time:'01:52',image:require('../assets/profile.png')},
    {id:6,name:'John Deo',message:'i must tell you interview this',count:'02',time:'01:52',image:require('../assets/profile.png')},
  ]

  const Item = ({item})=>{
    return(
      <View style={{margin:5}}>
          <TouchableOpacity style={{flexDirection:'row',justifyContent:'space-between',margin:10}}
          onPress={()=>{navigation.navigate('Message1',{item:item})}}>
            <View style={{flexDirection:'row'}}>
        <TouchableOpacity>
        <Image
           source={item.image}
           style={{borderRadius:100,width:50,height:50,}}
        />
         </TouchableOpacity>
        <View style={{marginLeft:10,alignSelf:'center',}}>
          <Text style={{color:COLORS.black,fontSize:18}}>{item.name}</Text>
            <Text style={{alignSelf:'center',}}>{item.message}</Text>
        </View> 
            </View>
            <View style={{}}>
                <Text style={{backgroundColor:COLORS.red,borderRadius:100,padding:5,alignSelf:'center',color:COLORS.white,fontSize:10}}>{item.count}</Text>
                <Text style={{marginTop:5}}>{item.time}</Text>
            </View>
        </TouchableOpacity> 
        <View style={{backgroundColor:'lightgray',height:1}}/>
      </View>
    )
  }

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
        <Text style={{alignSelf:'center',fontSize:20,color:COLORS.black,fontWeight:'bold',marginLeft:10}}> Messages</Text>
      </View>
      <View style={{flexDirection:'row',margin:10,}}>
      <TouchableOpacity>
            <Ionicons
            name='search-outline'
            size={25}
            color={COLORS.black}
            />
        </TouchableOpacity>
        <TouchableOpacity style={{marginLeft:10}}>
            <Entypo
            name='dots-three-vertical'
            size={20}
            color={COLORS.black}
            />
        </TouchableOpacity>
        </View>
      </View>
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

export default Message;
