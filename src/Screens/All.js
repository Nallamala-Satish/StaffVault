import { View, Text,TouchableOpacity,FlatList } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Octicons from 'react-native-vector-icons/Octicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import React,{useState,useEffect} from 'react'
import { COLORS } from '../Constants/Color'
import { useNavigation } from '@react-navigation/native'


const All = () => {
    const navigation = useNavigation()
    const [like, setLike] = useState(false);
    const [itemId, setItemId] = useState('');
    const data=[
        {id:1,name:'Registered Nurse RN-Long Term Care',date:'Jun 9, 8 AM - 5 Pm',amount:'$400',time:'50/hr',type:['RN','3.4mi']},
        {id:2,name:'Registered Nurse RN-Long Term Care',date:'Jun 9, 8 AM - 5 Pm',amount:'$400',time:'50/hr',type:['CNA','3.4mi','Long Term']},
        {id:3,name:'Registered Nurse RN-Long Term Care',date:'Jun 9, 8 AM - 5 Pm',amount:'$400',time:'50/hr',type:['RN','3.4mi']},
        {id:4,name:'Registered Nurse RN-Long Term Care',date:'Jun 9, 8 AM - 5 Pm',amount:'$400',time:'50/hr',type:['CNA','3.4mi','Long Term']},
    ]

    const Item = ({item})=>{
        return(
          <TouchableOpacity onPress={()=>{
             navigation.navigate('Calender')
          }}>
            <View style={{borderRadius:5,borderWidth:2,borderColor:'#DFDCE3',padding:10,backgroundColor:COLORS.white,margin:5}}>
              <View style={{flexDirection:'row',justifyContent:'space-between'}}>
             <TouchableOpacity style={{backgroundColor:COLORS.black,padding:5,borderRadius:100,width:35}}>
              <FontAwesome
              name='plus-circle'
              size={15}
              color={'red'}
              style={{backgroundColor:COLORS.white,alignSelf:'center',borderRadius:100,padding:5}}
              />
              </TouchableOpacity>
              <TouchableOpacity style={{padding:5,borderRadius:5,backgroundColor:item.id == itemId && like == true ?'#F39C12' :'green',height:30,width:80}}>
                  <Text style={{alignSelf:'center',color:COLORS.white}}>Scheduled</Text>
                </TouchableOpacity>
             </View>
              <View style={{ flexDirection: 'row',justifyContent:'space-between' }}>
              <View style={{ flexDirection: 'row',margin:5 }}>
                       {item.type.map((item, index) => (
                        <TouchableOpacity style={{padding:5,backgroundColor:'#DFDCE3',borderRadius:5,margin:5}}>
                          <Text key={index} style={{alignSelf:'center',fontSize:10,fontWeight:'bold'}}>{item}</Text>
                          </TouchableOpacity>
                      ))}
                 </View>
                 <TouchableOpacity onPress={()=>{
                        setItemId(item.id), setLike(!like);
                 }}>
                 <AntDesign
                 name='star'
                 size={15}
                 color={item.id == itemId && like == true ? 'orange' :'lightgray'}
                 style={{alignSelf:'center',marginRight:10,margin:10}}
                 />
                 </TouchableOpacity>
             </View>
              <Text style={{color:COLORS.black,fontWeight:'bold',margin:5}}>{item.name}</Text>
              <View style={{flexDirection:'row'}}>
                <Octicons
                name='location'
                size={15}
                style={{alignSelf:'center'}}
                />
                <Text style={{alignSelf:'center',width:'90%',margin:5}}>Rocky Mtn. Care of Heber-the Lodge heber City Utah</Text>
              </View>
              <View style={{flexDirection:'row',justifyContent:'space-between'}}>
              <View style={{flexDirection:'row',margin:5}}>
                 <AntDesign
                 name="calendar"
                 size={15}
                 style={{alignSelf:'center'}}
                 />
                 <Text style={{alignSelf:'center',marginLeft:5}}>{item.date}</Text>
                </View>
                <View style={{flexDirection:'row',margin:5}}>
                <Text style={{alignSelf:'center',fontWeight:'bold'}}>{item.amount},</Text>
                 <Text style={{alignSelf:'center'}}> {item.time}</Text>
                </View>
              </View>
            </View>
            </TouchableOpacity>
        )
    }


  return (
    <View style={{flex:1}}>
       <View style={{flex:1}}>
        <FlatList
        data={data || []}
        renderItem={Item}
        keyExtractor={item=> item.id}
        />
      </View>
    </View>
  )
}

export default All