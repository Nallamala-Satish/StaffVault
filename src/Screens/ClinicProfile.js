import { View, Text,ImageBackground, ScrollView,TouchableOpacity,Image } from 'react-native'
import React from 'react'
import { COLORS } from '../Constants/Color'
import Entypo from 'react-native-vector-icons/Entypo'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'

const ClinicProfile = () => {
    const navigation =  useNavigation()
  return (
    <View style={{flex:1}}>
      
            <View style={{backgroundColor:'#ECF1F6'}}>
        <ImageBackground
         source={require('../assets/clinic.png')}
         style={{height:200, backgroundColor:COLORS.black,opacity:0.4}}
        >
            <View>
            <View style={{flexDirection:'row',justifyContent:'space-between',margin:5}}>
    
    <TouchableOpacity style={{alignSelf:'center'}}
    onPress={()=>{navigation.goBack()}}>
      <Ionicons
      name='arrow-back'
      size={25}
      color={COLORS.white}
      />
    </TouchableOpacity>
    <TouchableOpacity style={{marginLeft:10}}>
        <Entypo
        name='dots-three-vertical'
        size={20}
        color={COLORS.white}
        />
    </TouchableOpacity>

    </View>
    </View>
  </ImageBackground>
  <TouchableOpacity>
        <Image
           source={require('../assets/profile.png')}
           style={{borderRadius:100,width:60,height:60,marginLeft:10,alignSelf:'center',marginTop:-30}}
        />
         </TouchableOpacity>
      <Text style={{alignSelf:'center',fontWeight:'bold',color:COLORS.black,fontSize:25}}>Clinic Name</Text>
      <Text style={{alignSelf:'center',}}>Demoatology - 20 years Experience</Text>
      <View style={{alignSelf:'center',margin:5}}>
      <TouchableOpacity style={{flexDirection:'row',padding:5,backgroundColor:'white',borderRadius:5}}>
     
        <Ionicons
      name='chatbubble'
      size={25}
      color={COLORS.blue}
      />
        <Text style={{color:COLORS.blue,alignSelf:'center',marginLeft:10}}>Message</Text>
      </TouchableOpacity>
      </View>
      </View>
        <ScrollView>
            <View style={{}}>
              <View style={{flexDirection:'row',justifyContent:'space-between',margin:10}}>
                 <TouchableOpacity style={{width:'48%',padding:10,borderRadius:5,backgroundColor:'white'}}>
                    <Text style={{alignSelf:'center'}}>Hourly Rate</Text>
                    <Text style={{alignSelf:'center'}}>$85 per hour</Text>
                 </TouchableOpacity>
                 <TouchableOpacity style={{width:'48%',padding:10,borderRadius:5,backgroundColor:'white'}}>
                    <Text style={{alignSelf:'center'}}>Completed</Text>
                    <Text style={{alignSelf:'center'}}>35 Consultenations</Text>
                 </TouchableOpacity>
              </View>
              <View>
              <Text style={{color:COLORS.black,margin:5}}>Biography</Text>
              <Text style={{marginLeft:10}}>Medical School</Text>
              </View>
              <View style={{flexDirection:'row',marginTop:10}}>
              <TouchableOpacity>
                    <Image
                     source={''}
                     style={{borderRadius:10,width:50,height:50,marginLeft:10,alignSelf:'center',backgroundColor:'lightgray'}}
                       />
                 </TouchableOpacity>
                 <View style={{marginLeft:30,alignSelf:'center' }}>
                   <Text> Harward Medical School</Text>
                   <Text style={{}}>Boston Texas USA</Text>
                 </View>
              </View>
              <Text style={{marginLeft:10,margin:5}}>Education</Text>
              <Text style={{marginLeft:10}}>UCL, MIT Standford University</Text>
              <Text style={{marginLeft:10,margin:5}}>Awards</Text>
              <Text style={{marginLeft:10}}>CMS Stage 1 EHR (2013) , AAD Fellow (2016)</Text>
              <Text style={{margin:5,color:COLORS.black,fontWeight:'bold'}}></Text>
              <View style={{flexDirection:'row',justifyContent:'space-between',}}>
                 <TouchableOpacity style={{width:'48%',padding:10,borderRadius:5,backgroundColor:'white',borderColor:COLORS.blue}}>
                    <Text style={{alignSelf:'center'}}>October 25</Text>
                    <Text style={{alignSelf:'center'}}>Avialable</Text>
                 </TouchableOpacity>
                 <TouchableOpacity style={{width:'48%',padding:10,borderRadius:5,backgroundColor:'white',borderColor:COLORS.blue}}>
                 <Text style={{alignSelf:'center'}}>October 25</Text>
                 <Text style={{alignSelf:'center'}}>Avialable</Text>
                 </TouchableOpacity>
              </View>
              <View>
              <Text style={{color:COLORS.black,fontWeight:'bold',margin:5}}>John Doe wants to donote blood</Text>
              <Text style={{alignSelf:'center'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry</Text>
              </View>
            </View>
        </ScrollView>
    </View>
  )
}

export default ClinicProfile