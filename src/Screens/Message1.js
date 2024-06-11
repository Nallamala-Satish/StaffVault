import {View, Text,TouchableOpacity,Image} from 'react-native';
import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { COLORS } from '../Constants/Color';
import Entypo from 'react-native-vector-icons/Entypo'
import Ionicons from 'react-native-vector-icons/Ionicons'


const Message1 = () => {
  const navigation = useNavigation()
  const route = useRoute()
  const {item}= route.params

  return (
    <View style={{flex:1,backgroundColor:COLORS.white}}>
    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
  <View style={{flexDirection:'row',margin:10}}>
    <TouchableOpacity style={{alignSelf:'center'}}
    onPress={()=>{navigation.goBack()}}>
      <Ionicons
      name='arrow-back'
      size={25}
      color={COLORS.black}
      />
    </TouchableOpacity>
    <TouchableOpacity>
        <Image
           source={item.image}
           style={{borderRadius:100,width:40,height:40,marginLeft:10}}
        />
         </TouchableOpacity>
    <View>
    <Text style={{alignSelf:'center',fontSize:20,color:COLORS.black,fontWeight:'bold',marginLeft:10}}> {item.name}</Text>
     <Text style={{marginLeft:15,}}>Active</Text>
    </View>
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
  <View>

  </View>
    </View>
  );
};

export default Message1;
