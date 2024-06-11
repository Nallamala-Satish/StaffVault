import {View, Text,TouchableOpacity} from 'react-native';
import React from 'react';
import { COLORS } from '../Constants/Color';
import { useNavigation } from '@react-navigation/native';
import Entypo from 'react-native-vector-icons/Entypo'
import Ionicons from 'react-native-vector-icons/Ionicons'
import TopTabs from '../routes/TopTabs';

const Notifications = () => {
  const navigation = useNavigation()

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
  );
};

export default Notifications;
