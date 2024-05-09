import {View, Text,TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { COLORS } from '../Constants/Color';
import { useNavigation } from '@react-navigation/native';

const JobDetails = () => {
   const navigation= useNavigation();

  return (
    <View style={{flex:1}}>
      <View style={{flex:1}}>
      <View style={{flexDirection:'row',padding:10,backgroundColor:COLORS.white,justifyContent:'space-between'}}>
      <TouchableOpacity onPress={()=>{
          navigation.goBack()
        }}>
          <MaterialCommunityIcons
          name='keyboard-backspace'
          size={30}
          color={'gray'}
          style={{alignSelf:'flex-start',alignSelf:'center'}}
          />
          </TouchableOpacity>
        <Text style={{alignSelf:'center',fontWeight:'bold',fontSize:20,color:COLORS.black}}>Job Details</Text>
          <TouchableOpacity style={{alignSelf:'center'}}>
           <AntDesign
                 name='star'
                 size={15}
                 color={'orange'}
                 style={{alignSelf:'center'}}
              />
           </TouchableOpacity>
      </View>
      <ScrollView>
      <View style={{margin:5}}>
          <Text style={{fontSize:20,fontWeight:'bold',color:COLORS.black,alignSelf:'center'}}>Registered Nurse RN-Long Term Care</Text>
          <View style={{flexDirection:'row',justifyContent:'space-between',margin:5}}>
            <View style={{flexDirection:'row'}}>
                 <Text>Licence type</Text>
                 <TouchableOpacity style={{padding:5,backgroundColor:'#DFDCE3',borderRadius:5,marginLeft:20}}>
                          <Text style={{alignSelf:'center',fontSize:10,fontWeight:'bold',color:COLORS.violet}}>{'RN'}</Text>
                  </TouchableOpacity>
            </View>
            <TouchableOpacity>
              <AntDesign
              name='sharealt'
              size={20}
               color={COLORS.violet}
              />
            </TouchableOpacity>
          </View>
          <View style={{margin:5}}>
             <Text style={{padding:5}}>Pay per hour  <Text style={{fontWeight:'bold',color:COLORS.black,}}>$50</Text></Text>
             <Text style={{padding:5}}>Pay per hour  <Text style={{fontWeight:'bold',color:COLORS.black,}}>$400</Text></Text>
             <Text style={{padding:5}}>Shift Date  <Text style={{fontWeight:'bold',color:COLORS.black,}}>Jun 9, 2023</Text></Text>
             <Text style={{padding:5}}>Shift Time  <Text style={{fontWeight:'bold',color:COLORS.black,}}>8 AM - 5 PM</Text></Text>
          </View>
          <View style={{marginTop:10}}>
              <Text style={{fontWeight:'bold',color:COLORS.black,fontSize:17,marginLeft:5}}>Job Description </Text>     
              <Text style={{alignSelf:'center',padding:5}}>A nursing course is an educational program that prepares people for a career in nursing.
               Nursing is a healthcare profession that focuses on promoting health, preventing illness, and providing care and support to individuals, 
               families, and communities. Nursing courses are offered at various levels, including diploma, associate degree, bachelor's degree, master's degree, and doctoral programs</Text>
          </View>
          <View style={{marginTop:10}}>
              <Text style={{fontWeight:'bold',color:COLORS.black,fontSize:17,marginLeft:5}}>Your Responsibilities </Text>     
              <Text style={{alignSelf:'center',padding:5}}>{'\u2022'} A nursing course is an educational program that prepares people for a career in nursing.
               Nursing is a healthcare profession that focuses on promoting health, preventing illness, and providing care and support to individuals, 
               families, and communities.</Text>
              <Text style={{alignSelf:'center',padding:5}}>{'\u2022'} Nursing courses are offered at various levels, including diploma, associate degree, bachelor's degree, master's degree, and doctoral programs.</Text>
          </View>
      </View>
      </ScrollView>
      </View>
       <View style={{}}>
        <TouchableOpacity style={{padding:10,borderRadius:30,alignSelf:'center',backgroundColor:COLORS.blue,width:'95%',bottom:5}}
        onPress={()=>{
           navigation.navigate('FacilityDetails')
        }}>
          <Text style={{alignSelf:'center',color:COLORS.white,fontWeight:'bold'}}>Apply Now</Text>
        </TouchableOpacity>
       </View>
     
    </View>
  );
};

export default JobDetails;
