import { View, Text,FlatList,TouchableOpacity,ScrollView,Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { COLORS } from '../Constants/Color'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Fontisto from 'react-native-vector-icons/Fontisto'
const Profile = () => {
  const navigation = useNavigation()

 

  return (
    <View style={{flex:1,backgroundColor:COLORS.white}}>
      <View style={{padding:20,}}>
      <Text style={{alignSelf:'center',fontWeight:'bold',fontSize:20,color:COLORS.black,}}>Profile</Text>
      </View>
         <View style={{}}>
           <TouchableOpacity  style={{borderRadius:100,borderColor:COLORS.violet,borderWidth:2,alignSelf:'center'}}>
            <Image
            source={require('../assets/profile.png')}
            style={{borderRadius:100,width:70,height:70,}}
            />
           </TouchableOpacity>
           <Text style={{alignSelf:'center',fontWeight:'bold',color:COLORS.black,margin:10}}>Brooklyn Simmons</Text>
           <TouchableOpacity style={{padding:5,backgroundColor:'#DFDCE3',borderRadius:5,margin:5,alignSelf:'center'}}>
               <Text  style={{alignSelf:'center',fontSize:10,fontWeight:'bold',color:COLORS.violet}}>{'CNA'}</Text>
           </TouchableOpacity>
         </View>
      
         <ScrollView> 

         <TouchableOpacity style={{margin:5}} onPress={()=>{

         }}>
          <View style={{flexDirection:'row',justifyContent:'space-between',padding:10}}>
            <View style={{flexDirection:'row'}}>
            <MaterialIcons
             name='edit'
             size={25}
             color={COLORS.violet}
            />
             <Text style={{fontWeight:'bold',marginLeft:20,color:COLORS.black,fontSize:20}}>Edit Profile</Text>
            </View>
              <AntDesign
              name='right'
              size={20}
              />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{margin:5}} onPress={()=>{
          
        }}>
         <View style={{flexDirection:'row',justifyContent:'space-between',padding:10}}>
           <View style={{flexDirection:'row'}}>
           <Ionicons
            name='document-text'
            size={25}
            color={COLORS.violet}
           />
            <Text style={{fontWeight:'bold',marginLeft:20,color:COLORS.black,fontSize:20}}>License & Credentials</Text>
           </View>
             <AntDesign
             name='right'
             size={20}
             />
         </View>
       </TouchableOpacity>
       <TouchableOpacity style={{margin:5}} onPress={()=>{
          
        }}>
         <View style={{flexDirection:'row',justifyContent:'space-between',padding:10}}>
           <View style={{flexDirection:'row'}}>
           <Fontisto
            name='wallet'
            size={20}
            color={COLORS.violet}
           />
            <Text style={{fontWeight:'bold',marginLeft:20,color:COLORS.black,fontSize:20}}>Wallet</Text>
           </View>
           <View style={{flexDirection:'row'}}>
              <Text style={{fontWeight:'bold',fontSize:20}}>{'$0.00'}</Text>
             <AntDesign
             name='right'
             size={20}
             style={{marginLeft:10}}
             />
            </View>
         </View>
       </TouchableOpacity>
       <TouchableOpacity style={{margin:5}} onPress={()=>{
          
        }}>
         <View style={{flexDirection:'row',justifyContent:'space-between',padding:10}}>
           <View style={{flexDirection:'row'}}>
           <Fontisto
            name='bell-alt'
            size={25}
            color={COLORS.violet}
           />
            <Text style={{fontWeight:'bold',marginLeft:20,color:COLORS.black,fontSize:20}}>Notifications</Text>
           </View>
             <AntDesign
             name='right'
             size={20}
             />
         </View>
       </TouchableOpacity>
       <TouchableOpacity style={{margin:5}} onPress={()=>{
          
        }}>
         <View style={{flexDirection:'row',justifyContent:'space-between',padding:10}}>
           <View style={{flexDirection:'row'}}>
           <AntDesign
            name='star'
            size={20}
            color={COLORS.violet}
           />
            <Text style={{fontWeight:'bold',marginLeft:20,color:COLORS.black,fontSize:20}}>Saved</Text>
           </View>
             <AntDesign
             name='right'
             size={20}
             />
         </View>
       </TouchableOpacity>
       <TouchableOpacity style={{margin:5}} onPress={()=>{
          
        }}>
         <View style={{flexDirection:'row',justifyContent:'space-between',padding:10}}>
           <View style={{flexDirection:'row'}}>
           <MaterialIcons
            name='chat'
            size={20}
            color={COLORS.violet}
           />
            <Text style={{fontWeight:'bold',marginLeft:20,color:COLORS.black,fontSize:20}}>Chats</Text>
           </View>
             <AntDesign
             name='right'
             size={20}
             />
         </View>
       </TouchableOpacity>
       <TouchableOpacity style={{margin:5}} onPress={()=>{
          
        }}>
         <View style={{flexDirection:'row',justifyContent:'space-between',padding:10}}>
           <View style={{flexDirection:'row'}}>
           <FontAwesome5
            name='user-plus'
            size={20}
            color={COLORS.violet}
           />
            <Text style={{fontWeight:'bold',marginLeft:20,color:COLORS.black,fontSize:20}}>Invite a friend</Text>
           </View>
             <AntDesign
             name='right'
             size={20}
             />
         </View>
       </TouchableOpacity>
       <TouchableOpacity style={{margin:5}} onPress={()=>{
          
        }}>
         <View style={{flexDirection:'row',justifyContent:'space-between',padding:10}}>
           <View style={{flexDirection:'row'}}>
           <MaterialCommunityIcons
             name='disc'
             size={20}
            color={COLORS.violet}
           />
            <Text style={{fontWeight:'bold',marginLeft:20,color:COLORS.black,fontSize:20}}>Help & Support</Text>
           </View>
             <AntDesign
             name='right'
             size={20}
             />
         </View>
       </TouchableOpacity>
       <TouchableOpacity style={{margin:5}} onPress={()=>{
          
        }}>
         <View style={{flexDirection:'row',justifyContent:'space-between',padding:10}}>
           <View style={{flexDirection:'row'}}>
           <Ionicons
            name='log-out'
            size={25}
            color={COLORS.red}
           />
            <Text style={{fontWeight:'bold',marginLeft:20,color:COLORS.red,fontSize:20}}>Sign Out</Text>
           </View>
           
         </View>
       </TouchableOpacity>
        </ScrollView>
    </View>
  )
}


export default Profile