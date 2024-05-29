import React, {memo, useEffect} from 'react';
import {View, Text, Image, Dimensions, ImageBackground} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {RFValue} from 'react-native-responsive-fontsize';
import {isObject} from 'util';
import {isNullOrUndefined} from 'util';

import {withGlobalize} from 'react-native-globalize';
import {getUserProfileInfo} from '../Constants/AsyncStorageHelper';
import {backgroundLightColor} from '../Constants/AppConst';
import {COLORS} from '../Constants/Color';
import LinearGradient from 'react-native-linear-gradient';

const {width, height} = Dimensions.get('window');

const Splash = withGlobalize(
  memo(props => {
    const navigation = useNavigation();

    const navigationStep = async () => {
      const userObject = await getUserProfileInfo();
      console.log(userObject);
      setTimeout(() => {
        if (isObject(userObject) && !isNullOrUndefined(userObject.USERID)) {
          navigation.navigate('MainRoute');
        } else {
          navigation.navigate('Login');
        }
      }, 3000);
    };

    useEffect(() => {
      navigationStep();
    }, []);

    return (
      <LinearGradient
        colors={[COLORS.blue, 'white']}
        end={{x: 0, y: 1.5}}
        style={{flex: 1}}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            // backgroundColor:COLORS.blue
          }}>
          <Image
            source={require('../assets/logo.png')}
            style={{
              width: 300,
              height: 75,
              alignSelf: 'center',
            }}></Image>
          {/* <Text style={{fontSize:20,alignSelf:'center',fontWeight:'bold'}}>Car Wash</Text> */}
        </View>
      </LinearGradient>
    );
  }),
);

export default Splash;
