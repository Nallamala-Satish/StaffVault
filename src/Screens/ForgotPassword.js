import { View, Text,TextInput,TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import { COLORS } from '../Constants/Color'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native'

const ForgotPassword = () => {
    const navigation = useNavigation()
  const [email,setEmail] = useState('')

  return (
    <View style={{flex:1}}>
        <View style={{flexDirection:'row',margin:5}}>
            <TouchableOpacity onPress={()=>{
                navigation.goBack()
            }}>
            <AntDesign
            name='left'
            size={25}
            color={COLORS.black}
            style={{alignSelf:'center'}}
            />
            </TouchableOpacity>
           <Text style={{alignSelf:'center',marginLeft:100,fontSize:20,color:COLORS.black,fontWeight:'bold'}}>Forgot Password</Text>
        </View>
            <Text style={{alignSelf:'center',color:'black',width:200,margin:10,marginTop:30}}>Enter your email and will send you instruction on how to reset it</Text>
            <View style={{margin:5,marginTop:20}}>
                  <TextInput
                      value={email}
                      placeholder="Enter Email"
                      onChangeText={text => {
                           setEmail(text)
                      }}
                      style={{
                        borderRadius: 5,
                        backgroundColor: 'lightgray',
                        margin: 5,
                      }}
                    />
                     <TouchableOpacity
                    style={{
                      backgroundColor: COLORS.blue,
                      borderRadius: 5,
                      padding: 10,
                      width: 250,
                      alignSelf: 'center',
                      marginTop: 20,
                    }}
                    onPress={() => {
                      navigation.navigate('Login');
                    }}>
                    <Text
                      style={{
                        alignSelf: 'center',
                        color: COLORS.white,
                        fontWeight: 'bold',
                      }}>
                     Reset Password
                    </Text>
                  </TouchableOpacity>
            </View>
   
    </View>
  )
}

export default ForgotPassword