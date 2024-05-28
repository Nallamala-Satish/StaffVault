import React,{useState,useEffect} from 'react';
import { View, Text, TouchableOpacity,StyleSheet,ScrollView,Image } from 'react-native';
import { COLORS } from '../Constants/Color';
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import CircularProgress from 'react-native-circular-progress-indicator';
import moment from 'moment'

const Date = ({ date, onSelectDate, selected }) => {
  /**
   * use moment to compare the date to today
   * if today, show 'Today'
   * if not today, show day of the week e.g 'Mon', 'Tue', 'Wed'
   */
  const day = moment(date).format('YYYY-MM-DD') === moment().format('YYYY-MM-DD') ? 'Today' : moment(date).format('ddd')
  // get the day number e.g 1, 2, 3, 4, 5, 6, 7
  const dayNumber = moment(date).format('D')

  // get the full date e.g 2021-01-01 - we'll use this to compare the date to the selected date
  const fullDate = moment(date).format('YYYY-MM-DD')
  return (
    <TouchableOpacity
      onPress={() => onSelectDate(fullDate)}
      style={[styles.card, selected === fullDate && { backgroundColor:COLORS.blue }]}
    >
      <Text
        style={[styles.big, selected === fullDate && { color: "#fff" }]}
      >
        {day}
      </Text>
      <View style={{ height: 10 }} />
      <Text
        style={[
          styles.medium,
          selected === fullDate && { color: "#fff", fontWeight: 'bold', fontSize: 24 },
        ]}
      >
        {dayNumber}
      </Text>
    </TouchableOpacity>
  )
}


const Home = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const Calendar = ({ onSelectDate, selected }) => {
    const [dates, setDates] = useState([])
    const [scrollPosition, setScrollPosition] = useState(0)
    const [currentMonth, setCurrentMonth] = useState()
  
    // get the dates from today to 10 days from now, format them as strings and store them in state
    const getDates = () => {
      const _dates = []
      for (let i = 0; i < 10; i++) {
        const date = moment().add(i, 'days')
        _dates.push(date)
      }
      setDates(_dates)
    }
  
    useEffect(() => {
      getDates()
    }, [])
  
    return (
      <>
        <View style={styles.dateSection}>
          <View style={styles.scroll}>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
            >
              {dates.map((date, index) => (
                <Date
                  key={index}
                  date={date}
                  onSelectDate={onSelectDate}
                  selected={selected}
                />
              ))}
            </ScrollView>
          </View>
        </View>
      </>
    )
  }

  return (
    <View style={{flex:1,backgroundColor:COLORS.white}}>
      <View style={{flexDirection:'row',justifyContent:'space-between',padding:5,backgroundColor:COLORS.blue,borderBottomRightRadius:10,borderBottomLeftRadius:10}}>
         <View style={{padding:10}}>
           <Text style={{color:COLORS.white}}>Good Morning</Text>
           <Text style={{fontWeight:'bold',color:COLORS.white,fontSize:20,}}>Rajesh Mehta</Text>
         </View>
         <TouchableOpacity style={{alignSelf:'center'}}>
        <EvilIcons
         name='bell'
         size={25}
         color={COLORS.white}
        />
        </TouchableOpacity>
      </View>
      <ScrollView>
      <View style={{flex:1}}>
        <View style={{padding:10,flexDirection:'row',justifyContent:'space-around',margin:10,backgroundColor:COLORS.skyblue,borderRadius:10}}>
          <View style={{width:'70%' }}>
          <Text style={{fontWeight:'bold',color:COLORS.black,margin:5}}>Document Request</Text>
          <Text style={{margin:5}}>upload required document to complete your profile</Text>
          <TouchableOpacity style={{backgroundColor:COLORS.blue,borderRadius:5,padding:5,width:100,margin:5}}>
          <Text style={{color:COLORS.white,alignSelf:'center'}}>Upload</Text>
          </TouchableOpacity>
          
          </View>
          <View style={{alignSelf:'center'}}>
          <CircularProgress
             value={80}
             radius={30}
             duration={2000}
             progressValueColor={COLORS.blue}
             maxValue={100}
             activeStrokeColor={COLORS.blue}
              inActiveStrokeColor={'white'}
             titleStyle={{fontWeight: 'bold'}}
            />
          </View>
        </View>
        <Text style={{fontWeight:'bold',color:COLORS.black,margin:5,marginLeft:20}}>Select Date</Text>
        <View style={{alignSelf:'center'}}>
            <Calendar onSelectDate={setSelectedDate} selected={selectedDate} />
        
        <View style={{flexDirection:'row',justifyContent:'space-between',margin:10}}>
        <View style={{padding:10,backgroundColor:COLORS.skyblue,borderRadius:10,width:'45%'}}>
        <Text style={{color:COLORS.black,fontWeight:'bold',fontSize:20,marginLeft:10}}>05</Text>
        <View style={{flexDirection:'row',justifyContent:'space-between',margin:5}}>
           <Text style={{color:COLORS.blue}}>Shifts Requests</Text>
           <AntDesign
           name='arrowright'
           color={COLORS.blue}
           size={15}
           />
        </View>
            
       </View>
       <View style={{padding:10,backgroundColor:COLORS.skyblue,borderRadius:10,width:'45%'}}>
       <Text style={{color:COLORS.black,fontWeight:'bold',fontSize:20,marginLeft:10}}>80</Text>
       <View style={{flexDirection:'row',justifyContent:'space-between',margin:5}}>
           <Text style={{color:COLORS.blue}}>Worked Requests</Text>
           <AntDesign
           name='arrowright'
           color={COLORS.blue}
           size={15}
           />
        </View>
       </View>
        </View>
        <View style={{flexDirection:'row',justifyContent:'space-between',margin:10}}>
        <View style={{padding:10,backgroundColor:COLORS.skyblue,borderRadius:10,width:'45%'}}>
        <Text style={{color:COLORS.red,fontWeight:'bold',fontSize:20,marginLeft:10}}>10</Text>
        <View style={{flexDirection:'row',justifyContent:'space-between',margin:5}}>
           <Text style={{color:COLORS.blue}}>Cancelled Requests</Text>
           <AntDesign
           name='arrowright'
           color={COLORS.blue}
           size={15}
           />
        </View>
       </View>
       <View style={{padding:10,backgroundColor:COLORS.skyblue,borderRadius:10,width:'45%'}}>
            <Text style={{color:COLORS.black,fontWeight:'bold',fontSize:20,marginLeft:10}}>02</Text>
            <View style={{flexDirection:'row',justifyContent:'space-between',margin:5}}>
           <Text style={{color:COLORS.blue}}>Scheduled Requests</Text>
           <AntDesign
           name='arrowright'
           color={COLORS.blue}
           size={15}
           />
        </View>
       </View>
        </View>
        </View>
       <Text style={{fontWeight:'bold',color:COLORS.black,marginLeft:20,margin:10,fontSize:20}}>Patient Schedule</Text>
        <View style={{flexDirection:'row',margin:10,backgroundColor:COLORS.skyblue,padding:10}}>
          <View>
            <Image
             source={require('../assets/profile.png')}
             style={{width:30,height:30}}
            />
          </View>
          <View style={{marginLeft:10,borderRadius:10,marginBottom:20,flex:1}}>
            <Text style={{fontWeight:'bold',color:COLORS.black,margin:3}}>John Doe</Text>
             <View style={{flexDirection:'row'}}>
              <Ionicons
              name='calendar-clear-outline'
              size={10}
              style={{alignSelf:'center'}}
              />
              <Text style={{marginLeft:10}}>22 Dec, 2024</Text>
             </View>
             <View style={{flexDirection:'row'}}>
              <AntDesign
              name='clockcircleo'
              size={10}
              style={{alignSelf:'center'}}
              />
              <Text style={{marginLeft:10}}>11 am to 12 pm</Text>
             </View>
          </View>
        </View>
        </View>
        </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  card: {
    backgroundColor: '#F0F2F6',
    borderRadius: 10,
    borderColor: '#ddd',
    padding: 10,
    marginVertical: 10,
    alignItems: 'center',
    height: 80,
    width: 80,
    marginHorizontal: 5,
  },
  big: {
    // fontWeight: 'bold',
    // fontSize: 20,
  },
  medium: {
    fontSize: 20,
    fontWeight: 'bold',
    color:'black'
  },
  centered: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  dateSection: {
    width: '100%',
    padding: 10,
  },
  scroll: {
    // height: 150,
  },
})
export default Home;
