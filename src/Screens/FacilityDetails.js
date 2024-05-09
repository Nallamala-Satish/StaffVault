import {View, Text,Image,TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { COLORS } from '../Constants/Color';
import { useNavigation } from '@react-navigation/native';



const FacilityDetails = () => {
   const navigation = useNavigation()


  return (
    <View style={{flex:1}}>
      <View style={{flexDirection:'row',padding:10,backgroundColor:COLORS.white,}}>
        <TouchableOpacity onPress={()=>{
          navigation.goBack()
        }}>
          <MaterialCommunityIcons
          name='keyboard-backspace'
          size={30}
          color={'gray'}
          style={{alignSelf:'flex-start'}}
          /> 
      </TouchableOpacity>
        <Text style={{alignSelf:'center',fontWeight:'bold',fontSize:20,color:COLORS.black,marginLeft:70}}>Facility Details</Text>
      </View>
      <ScrollView>
      <Image
      source={require('../assets/hospital.png')}
       style={{borderRadius:10,margin:10,alignSelf:'center',width:300,height:200}}
      />
      <View style={{margin:5}}>
      <Text style={{color:COLORS.black,fontWeight:'bold',fontSize:20,margin:5}}>Ridgecrest Healthcare</Text>
      <Text style={{marginLeft:10}}>2972 westheimer Rd.Santa Ana, Illinois 85486</Text>
      </View>
      <View style={{flexDirection:'row',justifyContent:'space-around',margin:10}}>
        <TouchableOpacity style={{borderRadius:5,borderWidth:2,borderColor:'#DFDCE3',padding:10,margin:5,width:'40%'}}>
          <Text style={{alignSelf:'center',fontWeight:'bold',color:COLORS.violet}}>Nursing Home</Text>
          <Text style={{alignSelf:'center',fontSize:10,margin:5}}>Type</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{borderRadius:5,borderWidth:2,borderColor:'#DFDCE3',padding:10,margin:5,width:'40%'}}>
          <Text style={{alignSelf:'center',fontWeight:'bold',color:COLORS.violet}}>10</Text>
          <Text style={{alignSelf:'center',fontSize:10,margin:5}}>No.Of Beds</Text>
        </TouchableOpacity>
      </View>
      <View style={{marginTop:10,margin:10}}>
         <Text style={{fontWeight:'bold',color:'black',fontSize:20}}>About Facility</Text>
         <Text style={{alignSelf:'center',padding:5,color:'black'}}>A healthcare facility is a place that provides care or treatment for physical, mental, 
         or emotional diseases, or other medical conditions. These facilities can include hospitals, clinics, long-term care facilities,
          outpatient care centers, and specialized care centers. They can also include associated sites like pharmacies and outpatient laboratories
          Healthcare facilities can be classified into two categories: public health services and private health facilities. When choosing a healthcare facility,
           you might want to consider how close it is to where you live or work, and whether your health insurance covers it.
          </Text>
      </View>
      </ScrollView>
    </View>
  );
};

export default FacilityDetails;
