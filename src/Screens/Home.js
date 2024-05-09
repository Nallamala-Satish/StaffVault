import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { COLORS } from '../Constants/Color';
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const Home = () => {
  return (
    <View style={{flex:1}}>
      <View style={{flexDirection:'row',justifyContent:'space-between',padding:5,backgroundColor:COLORS.white}}>
         <View style={{padding:10}}>
           <Text style={{fontSize:10}}>Good Morning</Text>
           <Text style={{fontWeight:'bold'}}>Brooklyn Simmons</Text>
         </View>
         <TouchableOpacity style={{padding:10,borderRadius:5,backgroundColor:'#F6F4F4',alignSelf:'center'}}>
        <FontAwesome
         name='bell'
         size={15}
         color={COLORS.violet}
        />
        </TouchableOpacity>
      </View>
      <View>
      <TouchableOpacity style={{borderRadius:5,borderWidth:2,borderColor:'#DFDCE3',padding:15,margin:10,width:'95%',alignSelf:'center'}}>
          <Text style={{alignSelf:'center',fontWeight:'bold',color:COLORS.green}}>05</Text>
          <Text style={{alignSelf:'center',margin:5,fontWeight:'bold'}}>Scheduled Shifts</Text>
        </TouchableOpacity>
        <View style={{flexDirection:'row',justifyContent:'space-around',margin:10}}>
        <TouchableOpacity style={{borderRadius:5,borderWidth:2,borderColor:'#DFDCE3',padding:10,margin:5,width:'40%'}}>
          <Text style={{alignSelf:'center',fontWeight:'bold',color:COLORS.violet}}>132</Text>
          <Text style={{alignSelf:'center',margin:5,fontWeight:'bold'}}>Worked Shifts</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{borderRadius:5,borderWidth:2,borderColor:'#DFDCE3',padding:10,margin:5,width:'45%'}}>
          <Text style={{alignSelf:'center',fontWeight:'bold',color:COLORS.red}}>03</Text>
          <Text style={{alignSelf:'center',margin:5,fontWeight:'bold'}}>Cancelled Shifts</Text>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection:'row',justifyContent:'space-between',margin:10}}>
           <Text style={{fontSize:17,fontWeight:'bold',alignSelf:'center'}}>Shifts Worked</Text>
           <TouchableOpacity style={{borderRadius:5,borderWidth:2,borderColor:'#DFDCE3',padding:5,margin:5,}}>
          <Text style={{alignSelf:'center',margin:5}}>This Month Shifts</Text>
        </TouchableOpacity>
       </View>
       <Text style={{fontSize:17,fontWeight:'bold',marginTop:10,marginLeft:20}}>My Wallet</Text>
       <View style={{flexDirection:'row',justifyContent:'space-around',margin:10}}>
        <TouchableOpacity style={{borderRadius:5,borderWidth:2,borderColor:'#DFDCE3',padding:10,margin:5,width:'40%'}}>
          <Text style={{alignSelf:'center',fontWeight:'bold',color:COLORS.violet}}>$2341</Text>
          <Text style={{alignSelf:'center',margin:5}}>Dollors</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{borderRadius:5,borderWidth:2,borderColor:'#DFDCE3',padding:10,margin:5,width:'40%'}}>
          <Text style={{alignSelf:'center',fontWeight:'bold',color:COLORS.violet}}>$1120</Text>
          <Text style={{alignSelf:'center',margin:5}}>Dollors</Text>
        </TouchableOpacity>
      </View>
      </View>
      
    </View>
  );
}

export default Home;
