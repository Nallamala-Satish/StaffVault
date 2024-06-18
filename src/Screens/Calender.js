// import { View, Text,TouchableOpacity,FlatList } from 'react-native'
// import FontAwesome from 'react-native-vector-icons/FontAwesome'
// import Octicons from 'react-native-vector-icons/Octicons'
// import AntDesign from 'react-native-vector-icons/AntDesign'
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
// import React,{useState,useEffect} from 'react'
// import { COLORS } from '../Constants/Color'
// import { useNavigation } from '@react-navigation/native'
// import {Calendar, LocaleConfig} from 'react-native-calendars';
// import { DateHelper } from '../Constants/DateHelper'

// const Calender = () => {
//     const navigation = useNavigation()
//     const [like, setLike] = useState(false);
//     const [itemId, setItemId] = useState('');
//     const [selectedDate,setSelecteddate] = useState(DateHelper.formatToDateYMD(new Date))
//     console.log(selectedDate)
//     const data=[
//         {id:1,name:'Registered Nurse RN-Long Term Care',date:'Jun 9, 8 AM - 5 Pm',amount:'$400',time:'50/hr',type:['RN','3.4mi']},
//         {id:2,name:'Registered Nurse RN-Long Term Care',date:'Jun 9, 8 AM - 5 Pm',amount:'$400',time:'50/hr',type:['CNA','3.4mi','Long Term']},
        
//     ]

//     const Item = ({item})=>{
//         return(
//           <TouchableOpacity onPress={()=>{
//              navigation.navigate('Calender')
//           }}>
//             <View style={{borderRadius:5,borderWidth:2,borderColor:'#DFDCE3',padding:10,backgroundColor:COLORS.white,margin:5}}>
//               <View style={{flexDirection:'row',justifyContent:'space-between'}}>
//              <TouchableOpacity style={{backgroundColor:COLORS.black,padding:5,borderRadius:100,width:35}}>
//               <FontAwesome
//               name='plus-circle'
//               size={15}
//               color={'red'}
//               style={{backgroundColor:COLORS.white,alignSelf:'center',borderRadius:100,padding:5}}
//               />
//               </TouchableOpacity>
//               <TouchableOpacity style={{padding:5,borderRadius:5,backgroundColor:item.id == itemId && like == true ?'#F39C12' :'green',height:30,width:80}}>
//                   <Text style={{alignSelf:'center',color:COLORS.white}}>Scheduled</Text>
//                 </TouchableOpacity>
//              </View>
//               <View style={{ flexDirection: 'row',justifyContent:'space-between' }}>
//               <View style={{ flexDirection: 'row',margin:5 }}>
//                        {item.type.map((item, index) => (
//                         <TouchableOpacity style={{padding:5,backgroundColor:'#DFDCE3',borderRadius:5,margin:5}}>
//                           <Text key={index} style={{alignSelf:'center',fontSize:10,fontWeight:'bold'}}>{item}</Text>
//                           </TouchableOpacity>
//                       ))}
//                  </View>
//                  <TouchableOpacity onPress={()=>{
//                         setItemId(item.id), setLike(!like);
//                  }}>
//                  <AntDesign
//                  name='star'
//                  size={15}
//                  color={item.id == itemId && like == true ? 'orange' :'lightgray'}
//                  style={{alignSelf:'center',marginRight:10,margin:10}}
//                  />
//                  </TouchableOpacity>
//              </View>
//               <Text style={{color:COLORS.black,fontWeight:'bold',margin:5}}>{item.name}</Text>
//               <View style={{flexDirection:'row'}}>
//                 <Octicons
//                 name='location'
//                 size={15}
//                 style={{alignSelf:'center'}}
//                 />
//                 <Text style={{alignSelf:'center',width:'90%',margin:5}}>Rocky Mtn. Care of Heber-the Lodge heber City Utah</Text>
//               </View>
//               <View style={{flexDirection:'row',justifyContent:'space-between'}}>
//               <View style={{flexDirection:'row',margin:5}}>
//                  <AntDesign
//                  name="calendar"
//                  size={15}
//                  style={{alignSelf:'center'}}
//                  />
//                  <Text style={{alignSelf:'center',marginLeft:5}}>{item.date}</Text>
//                 </View>
//                 <View style={{flexDirection:'row',margin:5}}>
//                 <Text style={{alignSelf:'center',fontWeight:'bold'}}>{item.amount},</Text>
//                  <Text style={{alignSelf:'center'}}> {item.time}</Text>
//                 </View>
//               </View>
//             </View>
//             </TouchableOpacity>
//         )
//     }


//   return (
//     <View style={{flex:1}}>
//       <View style={{flexDirection:'row',padding:10,backgroundColor:COLORS.white,}}>
//         <TouchableOpacity onPress={()=>{
//           navigation.goBack()
//         }}>
//           <MaterialCommunityIcons
//           name='keyboard-backspace'
//           size={30}
//           color={'gray'}
//           style={{alignSelf:'flex-start'}}
//           /> 
//       </TouchableOpacity>
//         <Text style={{alignSelf:'center',fontWeight:'bold',fontSize:20,color:COLORS.black,marginLeft:70}}>Calender</Text>
//       </View>
//         <View style={{}}>
//         <Calendar
//   // Customize the appearance of the calendar
//   style={{
//     borderWidth: 1,
//     borderColor: 'lightgray',
//     width: '90%',
//     alignSelf:'center',
//     margin:10,
//     borderRadius:10
//   }}
//   // Specify the current date
//   current={`${selectedDate}`}
//   // Callback that gets called when the user selects a day
//   onDayPress={day => {
//     console.log('selected day', day);
//     setSelecteddate(day.dateString)
//   }}
//   // Mark specific dates as marked
//   markedDates={{
//     [selectedDate]: {selected: true, disableTouchEvent: true, selectedDotColor: 'white',marked:'custom'}
//       }}
     
//       theme={{backgroundColor:'white ',calendarBackground:'white',selectedDayBackgroundColor:'#2405DF', textSectionTitleColor: 'black',
//       selectedDayTextColor: '#ffffff', todayTextColor: 'black',}}
     
//  />
//         </View>

//        <View style={{flex:1}}>
//         <FlatList
//         data={data || []}
//         renderItem={Item}
//         keyExtractor={item=> item.id}
//         />
//       </View>
//     </View>
//   )
// }

// export default Calender

import { View, Text,ScrollView,TouchableOpacity,Image, FlatList } from 'react-native'
import React,{useState,useEffect,useRef} from 'react'
import { useNavigation } from '@react-navigation/native';
import moment from 'moment';
import { COLORS } from '../Constants/Color';
import Ionicons from 'react-native-vector-icons/Ionicons'


const Calender = () => {
  const scrollViewRef = useRef();
  const navigation = useNavigation()
  const TotalData = 1000;
  const ChunkSize = 10;
  const [selectedDate, setSelectedDate] = useState('Today');
  const [dates, setDates] = useState([]);
  const [loadedData, setLoadedData] = useState(ChunkSize);

  const Date = ({date, onSelectDate, selected}) => {
    /**
     * use moment to compare the date to today
     * if today, show 'Today'
     * if not today, show day of the week e.g 'Mon', 'Tue', 'Wed'
     */
    const day =
      moment(date).format('YYYY-MM-DD') === moment().format('YYYY-MM-DD')
        ? 'Today'
        : moment(date).format('ddd');
    // get the day number e.g 1, 2, 3, 4, 5, 6, 7
    const dayNumber = moment(date).format('D');

    // get the full date e.g 2021-01-01 - we'll use this to compare the date to the selected date
    const fullDate = moment(date).format('YYYY-MM-DD');

    return (
      <TouchableOpacity
        onPress={() => onSelectDate(fullDate)}
        style={{
          backgroundColor:
            selected === fullDate || day == selectedDate
              ? COLORS.blue
              : '#F0F2F6',
          borderRadius: 10,
          borderColor: '#ddd',
          padding: 10,
          marginVertical: 10,
          alignItems: 'center',
          height: 70,
          width: 60,
          marginHorizontal: 5,
        }}>
        <Text
          style={{
            color:
              selected === fullDate || day == selectedDate ? '#fff' : 'gray',
          }}>
          {day}
        </Text>
        <View style={{height: 10}} />
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color:
              selected === fullDate || day == selectedDate ? '#fff' : 'black',
          }}>
          {dayNumber}
        </Text>
      </TouchableOpacity>
    );
  };

  useEffect(() => {
    const initialDates = getDates(ChunkSize);
    setDates(initialDates);
  }, []);

  const loadMoreData = () => {
    setLoadedData(prevLoadedData => prevLoadedData + ChunkSize);
    const moreDates = getDates(loadedData + ChunkSize);
    setDates(moreDates);
  };

  const getDates = count => {
    const _dates = [];
    for (let i = 0; i <= count && i <= TotalData; i++) {
      const date = moment().add(i, 'days');

      _dates.push(
        <Date
          key={i}
          date={date}
          onSelectDate={setSelectedDate}
          selected={selectedDate}
        />,
      );
    }
    return _dates;
  };

  const handleScroll = event => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const dayWidth = 90; // Adjust this width according to your date component width and margin
    const firstVisibleIndex = Math.floor(offsetX / dayWidth);
    const firstVisibleDate = moment().add(firstVisibleIndex, 'days');
    // setCurrentMonth(firstVisibleDate.format('MMMM'));
  };

  const data=[
    {id:1,image:require('../assets/profile.png'),name:'Emery saris',date:'Monday, October 24',time:'8:00 AM',status:'Confirmed',time1:'30 min before'},
    {id:2,image:require('../assets/profile.png'),name:'John singh',date:'Wednesday, November 24',time:'10:00 AM',status:'Confirmed',time1:'50 min before'},
    {id:3,image:require('../assets/profile.png'),name:'Verma Nath',date:'Satuarday, January 24',time:'2:00 PM',status:'Canceled',time1:'None'},
     {id:4,image:require('../assets/profile.png'),name:'Vikas gupta',date:'Sunday, June 24',time:'12:00 PM',status:'Confirmed',time1:'5 min before'},
    {id:5,image:require('../assets/profile.png'),name:'Arun singh',date:'Thursday, March 24',time:'5:00 AM',status:'Canceled',time1:'None'},
    {id:6,image:require('../assets/profile.png'),name:'Rakesh varma',date:'Monday, August 24',time:'8:00 PM',status:'Confirmed',time1:'10 min before'},
    
  ]


 const Item = ({item})=>{

  return(
    <View style={{margin:10}}>
    <TouchableOpacity style={{flexDirection:'row',justifyContent:'space-between'}}
    onPress={()=>{navigation.navigate('ScheduleInfo',{item:item})}}>
      <View style={{flexDirection:'row'}}>
        <TouchableOpacity>
        <Image
           source={item.image}
           style={{borderRadius:100,width:50,height:50,}}
        />
         </TouchableOpacity>
        <View style={{marginLeft:10}}>
          <Text style={{color:COLORS.black,fontSize:18}}>{item.name}</Text>
          <Text style={{color:COLORS.black,fontSize:15}}>{item.date}</Text>
          <Text>{item.time}</Text>
        </View>
    </View>
        <View>
          <Text style={{alignSelf:'center',}}>{item.time1}</Text>
          <TouchableOpacity style={{backgroundColor:item.status == 'Confirmed' ?'lightgreen':'gray',borderRadius:30,padding:5,margin:5}}>
            <Text style={{alignSelf:'center',color:COLORS.white}}>{item.status}</Text>
          </TouchableOpacity>
        </View>
       
    </TouchableOpacity>
    <View style={{backgroundColor:'lightgray',height:1,margin:5}}/>
</View>
  )
 }

  return (
    <View style={{flex:1,backgroundColor:COLORS.white}}>
      <View style={{flexDirection:'row',margin:5}}>
        <TouchableOpacity style={{}}
        onPress={()=>{navigation.goBack()}}>
          <Ionicons
          name='arrow-back'
          size={25}
          color={COLORS.black}
          />
        </TouchableOpacity>
        <Text style={{alignSelf:'center',fontSize:20,color:COLORS.black,fontWeight:'bold',marginLeft:10}}>Patient Schedules</Text>
      </View>
      <View style={{alignSelf: 'center'}}>
            {/* <View style={styles.centered}>
              <Text style={styles.title}>{currentMonth}</Text>
            </View> */}
            <View style={{ width: '100%', padding: 10,}}>
              <View style={{}}>
                <ScrollView
                  ref={scrollViewRef}
                  scrollEventThrottle={16}
                  onScroll={handleScroll}
                  onMomentumScrollEnd={loadMoreData}
                  horizontal
                  showsHorizontalScrollIndicator={false}>
                  {dates}
                </ScrollView>
              </View>
            </View>
            
          </View>
         <View style={{flex:1}}>
            <FlatList
            data={data}
            renderItem={Item}
            keyExtractor={item =>item.id}
            />
          </View>
    </View>
  )
}

export default Calender