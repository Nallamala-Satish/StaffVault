import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Platform,
  PermissionsAndroid,
  Linking,
  Image,
  Alert,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Loader from '../Components/Loader';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Octicons from 'react-native-vector-icons/Octicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {COLORS} from '../Constants/Color';
import Geolocation from '@react-native-community/geolocation';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import LocationServicesDialogBox from 'react-native-android-location-services-dialog-box';



const Shifts = () => {
  const navigation = useNavigation();
  const isFocused = useIsFocused()
  const [loading, setLoading] = useState(false);
  const [location, setLocation] = useState('...Loading');
  const [error, setError] = useState(null);

  const data = [
    {
      id: 1,
      name: 'Registered Nurse RN-Long Term Care',
      date: 'Jun 9, 8 AM - 5 Pm',
      amount: '$400',
      time: '50/hr',
      type: ['RN', '3.4mi'],
    },
    {
      id: 2,
      name: 'Registered Nurse RN-Long Term Care',
      date: 'Jun 9, 8 AM - 5 Pm',
      amount: '$400',
      time: '50/hr',
      type: ['CNA', '3.4mi', 'Long Term'],
    },
    {
      id: 3,
      name: 'Registered Nurse RN-Long Term Care',
      date: 'Jun 9, 8 AM - 5 Pm',
      amount: '$400',
      time: '50/hr',
      type: ['RN', '3.4mi'],
    },
    {
      id: 4,
      name: 'Registered Nurse RN-Long Term Care',
      date: 'Jun 9, 8 AM - 5 Pm',
      amount: '$400',
      time: '50/hr',
      type: ['CNA', '3.4mi', 'Long Term'],
    },
  ];

  const Item = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('JobDetails');
        }}>
        <View
          style={{
            borderRadius: 5,
            borderWidth: 2,
            borderColor: '#DFDCE3',
            padding: 10,
            backgroundColor: COLORS.white,
            margin: 5,
          }}>
          <View>
            <TouchableOpacity
              style={{
                backgroundColor: COLORS.black,
                padding: 5,
                borderRadius: 100,
                width: 35,
              }}>
              <FontAwesome
                name="plus-circle"
                size={15}
                color={'red'}
                style={{
                  backgroundColor: COLORS.white,
                  alignSelf: 'center',
                  borderRadius: 100,
                  padding: 5,
                }}
              />
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={{flexDirection: 'row', margin: 5}}>
              {item.type.map((item, index) => (
                <TouchableOpacity
                  style={{
                    padding: 5,
                    backgroundColor: '#DFDCE3',
                    borderRadius: 5,
                    margin: 5,
                  }}>
                  <Text
                    key={index}
                    style={{
                      alignSelf: 'center',
                      fontSize: 10,
                      fontWeight: 'bold',
                    }}>
                    {item}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
            <AntDesign
              name="star"
              size={15}
              color={'orange'}
              style={{alignSelf: 'center', marginRight: 10}}
            />
          </View>
          <Text style={{color: COLORS.black, fontWeight: 'bold', margin: 5}}>
            {item.name}
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Octicons name="location" size={15} style={{alignSelf: 'center'}} />
            <Text style={{alignSelf: 'center', width: '90%', margin: 5}}>
              Rocky Mtn. Care of Heber-the Lodge heber City Utah
            </Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={{flexDirection: 'row', margin: 5}}>
              <AntDesign
                name="calendar"
                size={15}
                style={{alignSelf: 'center'}}
              />
              <Text style={{alignSelf: 'center', marginLeft: 5}}>
                {item.date}
              </Text>
            </View>
            <View style={{flexDirection: 'row', margin: 5}}>
              <Text style={{alignSelf: 'center', fontWeight: 'bold'}}>
                {item.amount},
              </Text>
              <Text style={{alignSelf: 'center'}}> {item.time}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  //useEffect(() => {
    const checkLocationServices = async () => {
      try {
        const success =
          await LocationServicesDialogBox.checkLocationServicesIsEnabled({
            message:
              '<h2> Location </h2>Please enable location permission from settings.<br/>',
            ok: 'Open Settings',
            cancel: 'Cancel',
            enableHighAccuracy: true,
            showDialog: true,
            openLocationServices: true,
            preventOutSideTouch: false,
            preventBackClick: false,
            providerListener: true,
          });
        getLocation();
      } catch (error) {
        console.log(error.message);
      }
    };

    // checkLocationServices();

    // const listener = DeviceEventEmitter.addListener(
    //   'locationProviderStatusChange',
    //   status => {
    //     console.log(status);
    //   },
    // );

    // return () => {
    //   LocationServicesDialogBox.stopListener();
    //   listener.remove();
    // };
//  }, [isFocused]);
 
  useEffect(() => {
    const requestLocationPermission = async () => {
      if (Platform.OS === 'ios') {
        getLocation();
      } else {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
              title: 'Location Access Required',
              message: 'This App needs to Access your location',
            },
          );
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            //To Check, If Permission is granted
            getLocation();
          } else {
            setLocationStatus('Permission Denied');
          }
        } catch (err) {
          console.warn(err);
        }
      }
    };
    requestLocationPermission();
  }, []);

  function getLocation() {
    setLoading(true)
    Geolocation.getCurrentPosition(
      position => {
        const {latitude, longitude} = position.coords;
        getAddress(latitude, longitude);
        console.log(position);
        setError(null)
        setLoading(false)
      },
      error => {
        console.error('..',error);
        setError('Error getting location');
        checkLocationServices();
        setLoading(false)
      },
      // {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
    );
    setLoading(flase)
  }

  const getAddress = async (latitude, longitude) => {
    // const apiKey = 'GOOGLE_MAPS_APIKEY';
    // const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${apiKey}`;
    const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&addressdetails=1`;
    try {
      fetch(url)
        .then(response => response.json())
        .then(result => {
          if (result) {
            //   // Print the full address
            if (result && result.address) {
              let addressData = 'Fetching location..';
              if (error) {
                addressData = error;
              } else if (result.address) {
                const {state, suburb, postcode, country} = result.address;
                addressData = `${country},  ${state}, ${suburb},${postcode}`;
              }
              console.log('address...', addressData);
              setLocation(addressData);
            } else {
              setLocation({error: 'Address not found'});
            }
          }
        });
    } catch (error) {
      console.error('Error fetching address:', error);
      setLocation({error: 'Error fetching address'});
    }
  };

  return (
    <View style={{flex: 1}}>
      <Loader loading={loading}></Loader>
      <View
        style={{
          backgroundColor: COLORS.white,
          padding: 10,
          flexDirection: 'row',
          justifyContent: 'flex-end',
        }}>
        <Text
          style={{
            alignSelf: 'center',
            fontWeight: 'bold',
            fontSize: 20,
            color: COLORS.black,
            marginRight: 100,
          }}>
          Shifts
        </Text>
        <TouchableOpacity
          style={{
            padding: 5,
            borderRadius: 5,
            backgroundColor: '#F6F4F4',
            marginRight: 10,
          }}>
          <Image
            source={require('../assets/filter.png')}
            style={{width: 23, height: 20, alignSelf: 'center'}}
          />
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: 'row', margin: 10}}>
        <Octicons
          name="location"
          size={15}
          color={COLORS.violet}
          style={{alignSelf: 'center'}}
        />
        {error == 'Error getting location' ? (
          <TouchableOpacity
            onPress={() => {
              Linking.sendIntent('android.settings.LOCATION_SOURCE_SETTINGS');
            }}>
            <Text style={{marginLeft: 10}}>Enable Location</Text>
          </TouchableOpacity>
        ) : (
          <Text style={{width: 200, fontSize: 10, marginLeft: 10}}>
            {location}
          </Text>
        )}
      </View>
      <Text style={{padding: 5, marginTop: 5}}>
        223 sgifts found for your location within 23 miles
      </Text>
      <View style={{flex: 1}}>
        <FlatList
          data={data || []}
          renderItem={Item}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
};

export default Shifts;
