import {View, Text,TouchableOpacity,Image} from 'react-native';
import React from 'react';
import { COLORS } from '../Constants/Color';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import { useNavigation } from '@react-navigation/native';

const Menu = () => {
  const navigation = useNavigation()
  return (
    <View style={{flex:1,backgroundColor:COLORS.white}}>
      <Text style={{color:COLORS.black,fontWeight:'bold',fontSize:20,margin:10}}>Menu</Text>
      <View style={{flexDirection:'row',justifyContent:'space-between',margin:10}}>
        <View style={{flexDirection:"row"}}>
           <TouchableOpacity  style={{borderRadius:100,borderColor:COLORS.violet,borderWidth:2,alignSelf:'center'}}>
            <Image
            source={require('../assets/profile.png')}
            style={{borderRadius:100,width:30,height:30,}}
            />
           </TouchableOpacity>
           <View style={{marginLeft:10}}>
           <Text style={{color:COLORS.black,fontSize:15,fontWeight:'bold'}}>Rajesh Mehta</Text>
           <Text style={{color:COLORS.black,fontSize:10}}>sam@gmail.com</Text>
           </View>
        </View> 
        <View>
            <TouchableOpacity onPress={()=>{}}>
                <AntDesign
                name='right'
                size={20}
                color={COLORS.black}
                />
            </TouchableOpacity>
        </View>
    </View>
    <View style={{backgroundColor:'lightgray',height:1,margin:5}}/>
    <View style={{margin:10}}>
        <Text>Account</Text>
        <View style={{marginTop:10,}}>
            <TouchableOpacity style={{flexDirection:'row',justifyContent:'space-between',padding:10}}
            onPress={()=>{navigation.navigate('Documents')}}>
                <View style={{flexDirection:'row',}}>
                  <Feather
                   name='user'
                   size={25}
                   color={COLORS.black}
                  />
                  <Text style={{marginLeft:10,color:COLORS.black,alignSelf:'center',fontSize:20}}>Documents</Text>
                </View>
                <View>
                <AntDesign
                name='right'
                size={20}
                color={COLORS.black}
                />
             </View>
            </TouchableOpacity>
            <TouchableOpacity style={{flexDirection:'row',justifyContent:'space-between',padding:10}}
             onPress={()=>{navigation.navigate('TopTabs')}}>
                <View style={{flexDirection:'row',}}>
                  <Feather
                   name='settings'
                   size={25}
                   color={COLORS.black}
                  />
                  <Text style={{marginLeft:10,color:COLORS.black,alignSelf:'center',fontSize:20}}>Notifications</Text>
                </View>
                <View>
                <AntDesign
                name='right'
                size={20}
                color={COLORS.black}
                />
             </View>
            </TouchableOpacity>
            <TouchableOpacity style={{flexDirection:'row',justifyContent:'space-between',padding:10}}>
                <View style={{flexDirection:'row',}}>
                  <Feather
                   name='bookmark'
                   size={25}
                   color={COLORS.black}
                  />
                  <Text style={{marginLeft:10,color:COLORS.black,alignSelf:'center',fontSize:20}}>Shift Requests</Text>
                </View>
                <View>
                <AntDesign
                name='right'
                size={20}
                color={COLORS.black}
                />
             </View>
            </TouchableOpacity>
        </View>
    </View>
    <View style={{margin:10}}>
        <Text>General</Text>
        <View style={{marginTop:10,}}>
            <TouchableOpacity style={{flexDirection:'row',justifyContent:'space-between',padding:10}}>
                <View style={{flexDirection:'row',}}>
                  <Feather
                   name='lock'
                   size={25}
                   color={COLORS.black}
                  />
                  <Text style={{marginLeft:10,color:COLORS.black,alignSelf:'center',fontSize:20}}>Privacy & Policy</Text>
                </View>
                <View>
                <AntDesign
                name='right'
                size={20}
                color={COLORS.black}
                />
             </View>
            </TouchableOpacity>
            <TouchableOpacity style={{flexDirection:'row',justifyContent:'space-between',padding:10}}>
                <View style={{flexDirection:'row',}}>
                  <SimpleLineIcons
                   name='info'
                   size={25}
                   color={COLORS.black}
                  />
                  <Text style={{marginLeft:10,color:COLORS.black,alignSelf:'center',fontSize:20}}>Terms & Conditions</Text>
                </View>
                <View>
                <AntDesign
                name='right'
                size={20}
                color={COLORS.black}
                />
             </View>
            </TouchableOpacity>
            <TouchableOpacity style={{flexDirection:'row',justifyContent:'space-between',padding:10}}>
                <View style={{flexDirection:'row',}}>
                  <MaterialIcons
                   name='logout'
                   size={25}
                   color={COLORS.black}
                  />
                  <Text style={{marginLeft:10,color:COLORS.black,alignSelf:'center',fontSize:20}}>Logout</Text>
                </View>
                <View>
                <AntDesign
                name='right'
                size={20}
                color={COLORS.black}
                />
             </View>
            </TouchableOpacity>
        </View>
    </View>
    </View>
  );
};

export default Menu;
