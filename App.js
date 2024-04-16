import { View, Text, StyleSheet,Image, TouchableOpacity,Dimensions,ScrollView } from 'react-native'
import React from 'react'
const image=require('./4.png')
const image1=require('./newLogo.png')
import Icon from 'react-native-vector-icons/Entypo';
import IconImage from 'react-native-vector-icons/SimpleLineIcons'
import Discussion from './Discussion';

const {width,height}=Dimensions.get('window')
const customwidth=width>600;
const App = () => {
  return (
    <View style={{flex:1}}>
    <View style={styles.container}>
    <Icon name="menu" size={customwidth ? 45 :35} style={styles.icon}/>
      <Image source={image1} style={styles.image}/>
      <Text style={styles.styleText1}>Practical</Text>
    </View>
    <View style={styles.viewContainer}>
      <Text style={styles.text}>SEGMENT - 1</Text>
      <Image source={image} style={styles.image1}/>
     </View>
     <ScrollView style={styles.scrollview}>
   <View style={styles.styleView}>
    <Text style={styles.styleText2}> Post your doubts here through text or voice chat</Text>
    <View style={{borderBottomWidth:2,padding:10,borderColor:'tan'}}></View>
    <View style={styles.styleView1}>
      <Text style={styles.styleText3}>Type your doubts</Text>
      <IconImage name='microphone' style={styles.styleIcon} size={customwidth?40:25}/>
    </View>
    <View style={styles.styleView2}>
      <TouchableOpacity>
        <Text style={styles.styleText4}>Post</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.styleText5}>Cancel</Text>
      </TouchableOpacity>
    </View>
   </View>
   <Discussion/>
   </ScrollView>
    </View>
  )
}
const styles=StyleSheet.create({
    container:{
        flexDirection:'row',
        backgroundColor:'white',
        justifyContent:'space-between',
        alignItems:'center',
        marginTop:10,
        marginBottom:10,
        padding:5
    
    },
    viewContainer:{
      flex:1,
      backgroundColor:'#f5f5f5',
      
    },
    image:{
    height:customwidth?100:50,
    width:customwidth?400:200,
    alignSelf:'center'
    },
    styleText:{
      color:'black',
      fontSize:30,
      fontWeight:'bold'
    },
    styleText1:{
      fontSize:15,
      color:'black',
      borderColor:'#f5f5f5',
      borderWidth:3,
      borderRadius:40,
      padding:8,
      fontWeight:'bold',
       
    },
    text:{
      fontSize:22,
      padding:35,
      color:'black',
      fontWeight:'600',
      textAlign:'center',
      letterSpacing:1,
    },
    image1:{
      alignSelf:'center',
     borderRadius:16,
     width:customwidth?'100%':'98%',
     height:customwidth?'80%':'60%'
    },
    icon:{
      borderRadius:100,
      color:'black',
      backgroundColor:'#f5f0ec',
      padding:8
    },
  styleView:{
    backgroundColor:'white',
    borderColor:'#b19c68',
    borderRadius:10,
    borderWidth:1,
    flex:0.5,
    margin:15,
    marginBottom:10,
    paddingBottom:20
  },
  styleText2:{
    fontSize:15,
    fontWeight:'500',
    color:'black',
    marginTop:10,
    marginStart:12
  },
  styleView1:{
    flexDirection:'row',
    justifyContent:'space-between',
    margin:20
  },
  styleText3:{
    color:'black',
    fontWeight:'500',
    fontSize:15
  },
  styleIcon:{
    borderRadius:100,
    color:'white',
    backgroundColor:'#b19c68',
    padding:20,
  },
  styleView2:{
 flexDirection:'row',
 justifyContent:'space-evenly',
 left:'15%',
  },
  styleText4:{
    backgroundColor:'#b19c68',
    color:'white',
    borderRadius:8,
    minWidth:100,
    minHeight:30,
    textAlign:'center',
    padding:5,
    fontSize:20,
  },
  styleText5:{
    backgroundColor:'white',
    color:'#b19c68',
    borderRadius:8,
    minWidth:100,
    minHeight:30,
    textAlign:'center',
    padding:4,
    fontSize:20,
    borderColor:'#b19c68',
    borderWidth:2,
    
  },
  scrollview:{
    flex:1,
    backgroundColor:'#white',
  }
})
export default App