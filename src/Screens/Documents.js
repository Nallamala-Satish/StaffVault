import { View, Text,TouchableOpacity,StyleSheet } from 'react-native'
import React,{useState} from 'react'
import Entypo from 'react-native-vector-icons/Entypo'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { COLORS } from '../Constants/Color';
import { useNavigation } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Octicons from 'react-native-vector-icons/Octicons'

const Documents = () => {
    const navigation = useNavigation()
    const [progress, setProgress] = useState(90);

   

  return (
    <View style={{flex:1}}>
        <View style={{flexDirection:'row',justifyContent:'space-between',margin:5}}>
    
    <TouchableOpacity style={{alignSelf:'center'}}
    onPress={()=>{navigation.goBack()}}>
      <Ionicons
      name='arrow-back'
      size={25}
      color={COLORS.black}
      />
    </TouchableOpacity>
    <Text style={{alignSelf:'center',fontSize:20,color:COLORS.black,fontWeight:'bold',marginLeft:10}}>Documents</Text>
    <TouchableOpacity style={{marginLeft:10}}>
        <Entypo
        name='dots-three-vertical'
        size={20}
        color={COLORS.black}
        />
    </TouchableOpacity>

    </View>

      <Text style={{margin:10}}>Upload all the documents to hustle free  service</Text>

      <View>
        <View style={{flexDirection:'row',justifyContent:'space-between',marginLeft:10,marginRight:10}}>
        <Text style={styles.percentageText}>{progress}% completed, Almost done</Text>
        <Text style={styles.percentageText}>9/10</Text>
        </View>
     
      <View style={styles.progressBar}>
        <View style={[styles.progressFill, { width: `${progress}%` }]} />
      </View>
      </View>

      <Text style={{margin:5,marginTop:30,color:COLORS.black}}>Pending Uploads</Text>
       
       <View>
        <TouchableOpacity style={{padding:15,backgroundColor:'#FFF0F0',flexDirection:'row',justifyContent:'space-between',margin:5}}>
               <View>
                 <Text style={{color:COLORS.black,fontSize:20}}>Medical Certification</Text>
                 <Text>pending Upload</Text>
               </View>
              <View style={{alignSelf:'center'}}>
                <AntDesign
                name="pluscircle"
                color={COLORS.black}
                size={20}
                />
              </View>
        </TouchableOpacity>
        <Text style={{color:COLORS.black,marginLeft:10}}>Uploaded</Text>
        <TouchableOpacity style={{padding:15,backgroundColor:'#F0FFF2',flexDirection:'row',justifyContent:'space-between',margin:5}}>
               <View>
                 <Text style={{color:COLORS.black,fontSize:20}}>Adhar Card</Text>
                 <Text>12 may 2024</Text>
               </View>
              <View style={{alignSelf:'center'}}>
                <Octicons
                name="issue-closed"
                color={COLORS.green}
                size={20}
                />
              </View>
        </TouchableOpacity>
        <TouchableOpacity style={{padding:15,backgroundColor:'#F0FFF2',flexDirection:'row',justifyContent:'space-between',margin:5}}>
               <View>
                 <Text style={{color:COLORS.black,fontSize:20}}>Adhar Card</Text>
                 <Text>12 may 2024</Text>
               </View>
              <View style={{alignSelf:'center'}}>
                <Octicons
                name="issue-closed"
                color={COLORS.green}
                size={20}
                />
              </View>
        </TouchableOpacity>
        <TouchableOpacity style={{padding:15,backgroundColor:'#F0FFF2',flexDirection:'row',justifyContent:'space-between',margin:5}}>
               <View>
                 <Text style={{color:COLORS.black,fontSize:20}}>Adhar Card</Text>
                 <Text>12 may 2024</Text>
               </View>
              <View style={{alignSelf:'center'}}>
                <Octicons
                name="issue-closed"
                color={COLORS.green}
                size={20}
                />
              </View>
        </TouchableOpacity>
        <TouchableOpacity style={{padding:15,backgroundColor:'#F0FFF2',flexDirection:'row',justifyContent:'space-between',margin:5}}>
               <View>
                 <Text style={{color:COLORS.black,fontSize:20}}>Adhar Card</Text>
                 <Text>12 may 2024</Text>
               </View>
              <View style={{alignSelf:'center'}}>
                <Octicons
                name="issue-closed"
                color={COLORS.green}
                size={20}
                />
              </View>
        </TouchableOpacity>
       </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#F5FCFF',
  },
  progressBar: {
    width: '95%',
    height: 10,
    backgroundColor: '#e0e0df',
    borderRadius: 5,
    overflow: 'hidden',
    marginVertical: 20,
   alignSelf:'center'
  },
  progressFill: {
    height: '100%',
    backgroundColor: 'green',
  },
  percentageText: {
    fontSize: 18,
    fontWeight: 'bold',
    color:COLORS.black
  },
});
export default Documents