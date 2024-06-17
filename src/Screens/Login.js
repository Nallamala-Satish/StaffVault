import {View, Text, TextInput, TouchableOpacity, Image,ImageBackground} from 'react-native';
import React, {useState, memo} from 'react';
import api from '../api';
import IntlProvider from '../Constants/IntlProvider';
import {withGlobalize} from 'react-native-globalize';
import {saveUserProfileInfo} from '../Constants/AsyncStorageHelper';
import Loader from '../Components/Loader';
import * as yup from 'yup';
import {Formik} from 'formik';
import {Card} from 'react-native-paper';
import {COLORS} from '../Constants/Color';
import {useNavigation} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';

export const LoginFormInitialValues = props => ({
  userid: '',
  password: '',
});

export const LoginFormValidator = () => {
  return yup.object().shape({
    userid: yup.string().required('Enter Your UserId '),
    password: yup.string().required('Enter Your Password '),
  });
};

const Login = withGlobalize(
  memo(props => {
    const [loading, setLoading] = useState(false);
    const [email,setEmail] = useState('')
    const [password,setPassword] =  useState('')
    const intl = IntlProvider(props);
    const navigation = useNavigation();

    const Login = async values => {
      setLoading(true);
      const payload = {
        userName: values.userid,
        password: values.password,
      };
      try {
        const res = await api.user.login(intl, payload);
        console.log('response res', res.data);
        if (res && res.status == 'OK') {
          let userInfo = res.data;
          await saveUserProfileInfo(userInfo);
          navigation.navigate('MainRoute');
          setLoading(false);
        } else {
          setLoading(false);
          alert('Invalid username or password');
        }
      } catch (e) {
        console.log('error', e);
        setLoading(false);
      }
    };

    return (
      // <LinearGradient
      //   colors={[COLORS.blue, COLORS.white]}
      //   start={{x: 0.5, y: 0.5}}
      //   end={{x: 2, y: 2}}
      //   style={{flex: 1}}>
      // <ImageBackground
      // source={require('../assets/backgroundImage.png')}
      // style={{flex:1}}>
      //   <Loader loading={loading}></Loader>

      //   <View style={{marginTop: 100, marginLeft: 10}}>
      //     <Image
      //       source={require('../assets/logo.png')}
      //       style={{
      //         width: 200,
      //         height: 50,
      //         margin: 20,
      //         borderRadius: 5,
      //       }}
      //     />
      //   </View>
      //   <Formik
      //     initialValues={LoginFormInitialValues(props)}
      //     // validationSchema={LoginFormValidator}
      //     onSubmit={(values, {resetForm}) => {
      //       console.log(values);
      //       navigation.navigate('MainRoute');
      //       // Login(values, resetForm());
      //     }}>
      //     {({
      //       values,
      //       handleChange,
      //       setFieldValue,
      //       errors,
      //       touched,
      //       setFieldTouched,
      //       isValid,
      //       handleSubmit,
      //     }) => (
      //       <>
      //         <View
      //           style={{
      //             justifyContent: 'center',
      //             // flex: 1,
      //           }}>
      //           <Card
      //             style={{
      //               padding: 10,
      //               backgroundColor: COLORS.white,
      //               alignSelf: 'center',
      //               width: 300,
      //             }}>
      //             <Text style={{color: 'gray', margin: 10}}>
      //               Login to your account
      //             </Text>
      //             <View
      //               style={{
      //                 marginTop: 20,
      //               }}>
      //               <TextInput
      //                 value={values.userid}
      //                 placeholder=" Login ID "
      //                 onChangeText={text => {
      //                   setFieldValue('userid', text);
      //                 }}
      //                 style={{
      //                   borderWidth: 2,
      //                   borderRadius: 5,
      //                   borderColor: 'lightgray',
      //                   margin: 5,
      //                 }}
      //               />
      //             </View>
      //             {errors.userid && (
      //               <Text style={{fontSize: 10, color: 'red', marginLeft: 10}}>
      //                 {' '}
      //                 * {errors.userid}
      //               </Text>
      //             )}
      //             <View style={{}}>
      //               <TextInput
      //                 value={values.password}
      //                 placeholder=" Password"
      //                 onChangeText={text => {
      //                   setFieldValue('password', text);
      //                 }}
      //                 style={{
      //                   borderWidth: 2,
      //                   borderRadius: 5,
      //                   borderColor: 'lightgray',
      //                   margin: 5,
      //                 }}
      //               />
      //             </View>
      //             {errors.password && (
      //               <Text style={{fontSize: 10, color: 'red', marginLeft: 10}}>
      //                 {' '}
      //                 * {errors.password}
      //               </Text>
      //             )}
      //             <TouchableOpacity
      //               style={{
      //                 backgroundColor: COLORS.theme,
      //                 borderRadius: 5,
      //                 padding: 10,
      //                 width: 250,
      //                 alignSelf: 'center',
      //                 marginTop: 20,
      //               }}
      //               onPress={() => {
      //                 handleSubmit();
      //               }}>
      //               <Text
      //                 style={{
      //                   alignSelf: 'center',
      //                   color: COLORS.white,
      //                   fontWeight: 'bold',
      //                 }}>
      //                 Login
      //               </Text>
      //             </TouchableOpacity>
      //             <TouchableOpacity
      //               style={{alignSelf: 'center', margin: 10, marginTop: 10}}
      //               onPress={() => {}}>
      //               <View style={{flexDirection: 'row'}}>
      //                 <MaterialIcons
      //                   name="lock"
      //                   size={20}
      //                   style={{margin: 10}}
      //                 />
      //                 <Text style={{color: COLORS.theme, alignSelf: 'center'}}>
      //                   Forgot Password ?
      //                 </Text>
      //               </View>
      //             </TouchableOpacity>
      //             {/* <View style={{flexDirection: 'row'}}>
      //               <Text
      //                 style={{color: 'white', alignSelf: 'center', margin: 5}}>
      //                 Don't have an account ?{' '}
      //               </Text>
      //               <TouchableOpacity
      //                 onPress={() => {
      //                   navigation.navigate('Register');
      //                 }}>
      //                 <Text
      //                   style={{
      //                     color: 'white',
      //                     alignSelf: 'center',
      //                     margin: 5,
      //                     fontSize: 17,
      //                   }}>
      //                   Sign Up
      //                 </Text>
      //               </TouchableOpacity>
      //             </View> */}
      //           </Card>
      //         </View>
      //       </>
      //     )}
      //   </Formik>
      //   </ImageBackground>
      // </LinearGradient>
      <View style={{flex:1}}>
        <Text style={{fontWeight:'bold',color:'black',fontSize:30,marginLeft:10,marginTop:30}}>Welcome</Text>
        <Text style={{fontWeight:'bold',color:'black',fontSize:30,marginLeft:10}}>back</Text>
        <Text style={{margin:10}}> Sign in to continue</Text>

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
                
                  <TextInput
                      value={password}
                      placeholder=" Password"
                      onChangeText={text => {
                       setPassword(text)
                      }}
                      style={{
                        borderRadius: 5,
                        backgroundColor: 'lightgray',
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
                      navigation.navigate('MainRoute');
                    }}>
                    <Text
                      style={{
                        alignSelf: 'center',
                        color: COLORS.white,
                        fontWeight: 'bold',
                      }}>
                      Sign In
                    </Text>
                  </TouchableOpacity>
                  <View style={{marginTop:10}}>
                  <TouchableOpacity style={{alignSelf:'center',margin:10}}
                  onPress={()=>{
                    navigation.navigate('ForgotPassword')
                  }}>
                    <Text style={{alignSelf:'center'}}>Forgot Password ? </Text>
                  </TouchableOpacity>
               </View>
      </View>
    );
  }),
);

export default Login;
