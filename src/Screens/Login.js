import {View, Text, TextInput, TouchableOpacity,Image} from 'react-native';
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
      <LinearGradient colors={[COLORS.blue,  'white']} end={{ x: 0, y: 1.5 }} style={{flex:1}}>
        <Loader loading={loading}></Loader>

        <View style={{marginTop:100}}>
           <Image
                source={require('../assets/logo.png')}
                style={{
                    width: 200 ,
                    height: 50,
                    alignSelf: 'center'
                }}
            />
            </View>
        <Formik
          initialValues={LoginFormInitialValues(props)}
          validationSchema={LoginFormValidator}
          onSubmit={(values, {resetForm}) => {
            console.log(values);
            // navigation.navigate('MainRoute');
            // Login(values, resetForm());
          }}>
          {({
            values,
            handleChange,
            setFieldValue,
            errors,
            touched,
            setFieldTouched,
            isValid,
            handleSubmit,
          }) => (
            <>
              <View
                style={{
                  justifyContent: 'center',
                  flex: 1,
                }}>
                <Card
                  style={{
                    padding: 30,
                    backgroundColor: COLORS.blue,
                    alignSelf: 'center',
                  }}>
                    <Text style={{color:'white',marginLeft:10}}>User Id</Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      width: 250,
                      backgroundColor: 'white',
                      margin: 10,
                      borderRadius: 5,
                    }}>
                    <TextInput
                      value={values.userid}
                      placeholder="Enter User Id"
                      onChangeText={text => {
                        setFieldValue('userid', text);
                      }}
                    />
                  </View>
                  {errors.userid &&
                  <Text style={{ fontSize: 10, color: 'red',marginLeft: 30 }}> * {errors.userid}</Text>
               }
               <Text style={{color:'white',marginLeft:10}}>Password</Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      width: 250,
                      backgroundColor: 'white',
                      margin: 10,
                      borderRadius: 5,
                    }}>
                    <TextInput
                      value={values.password}
                      placeholder="Enter password"
                      onChangeText={text => {
                        setFieldValue('password', text);
                      }}
                    />
                    <MaterialIcons name="lock-outline" size={20} style={{margin: 10}} />
                  </View>
                  {errors.password &&
                  <Text style={{ fontSize: 10, color: 'red',marginLeft: 30 }}> * {errors.password}</Text>
               }
                  <TouchableOpacity
                    style={{
                      backgroundColor: COLORS.white,
                      borderRadius: 5,
                      padding: 10,
                      width: 100,
                      alignSelf: 'center',
                      marginTop: 20,
                    }}
                    onPress={() => {
                      handleSubmit();
                    }}>
                    <Text style={{alignSelf: 'center', color: COLORS.blue,fontWeight:'bold'}}>
                      Sign In
                    </Text>
                  </TouchableOpacity>
                 <TouchableOpacity style={{alignSelf: 'flex-end', margin: 10,marginTop:30}}
                 onPress={()=>{

                 }}>
                  <Text
                    style={{color: 'white',alignSelf: 'center', }}>
                    Forgot Password ?
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
            </>
          )}
        </Formik>
      
      </LinearGradient>
    );
  }),
);

export default Login;
