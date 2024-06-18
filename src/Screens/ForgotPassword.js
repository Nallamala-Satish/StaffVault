import { View, Text,TextInput,TouchableOpacity,ImageBackground,Image } from 'react-native'
import React,{useState} from 'react'
import { COLORS } from '../Constants/Color'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native'
import Loader from '../Components/Loader'
import { Card } from 'react-native-paper'

const ForgotPassword = () => {
    const navigation = useNavigation()
    const [loading,setLoading] = useState(false)
  const [email,setEmail] = useState('')

  return (
    <View style={{flex:1}}>
       <ImageBackground
      source={require('../assets/backgroundImage.png')}
      style={{flex:1}}>
        <View style={{flexDirection:'row',margin:5}}>
            <TouchableOpacity onPress={()=>{
                navigation.goBack()
            }}>
            <AntDesign
            name='left'
            size={25}
            color={COLORS.white}
            style={{alignSelf:'center'}}
            />
            </TouchableOpacity>
           <Text style={{alignSelf:'center',marginLeft:100,fontSize:20,color:COLORS.white,fontWeight:'bold'}}>Forgot Password</Text>
        </View>
       
        <Loader loading={loading}></Loader>

        <View style={{marginTop: 100, marginLeft: 10}}>
          <Image
            source={require('../assets/logo.png')}
            style={{
              width: 200,
              height: 50,
              margin: 20,
              borderRadius: 5,
            }}
          />
        </View>
      
              <View
                style={{
                  justifyContent: 'center',
                  // flex: 1,
                }}>
                <Card
                  style={{
                    padding: 10,
                    backgroundColor: COLORS.white,
                    alignSelf: 'center',
                    width: 300,
                  }}>
                 
                  <View
                    style={{
                      marginTop: 20,
                    }}>
                    <TextInput
                      value={email}
                      placeholder=" Enter email "
                      onChangeText={text => {
                        setEmail(text)
                      }}
                      style={{
                        borderWidth: 2,
                        borderRadius: 5,
                        borderColor: 'lightgray',
                        margin: 5,
                      }}
                    />
                  </View>
                 
                   
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
                      navigation.navigate('Login')
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
                 
                  {/* <View style={{flexDirection: 'row'}}>
                    <Text
                      style={{color: 'white', alignSelf: 'center', margin: 5}}>
                      Don't have an account ?{' '}
                    </Text>
                    <TouchableOpacity
                      onPress={() => {
                        navigation.navigate('Register');
                      }}>
                      <Text
                        style={{
                          color: 'white',
                          alignSelf: 'center',
                          margin: 5,
                          fontSize: 17,
                        }}>
                        Sign Up
                      </Text>
                    </TouchableOpacity>
                  </View> */}
                </Card>
              </View>
         
        </ImageBackground>
   
    </View>
  )
}

export default ForgotPassword