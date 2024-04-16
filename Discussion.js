import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
const avatar = require('./avatar1.png');
const image=require('./5.png')
const Discussion = () => {
  return (
    <>
    <View style={styles.styleView3}>
        <Text
          style={{
            fontWeight: '700',
            color: 'black',
            fontSize: 15,
            marginHorizontal: 10,
          }}>
          ALL COMMENTS & DISCUSSIONS
        </Text>
      </View>
    <ScrollView style={{backgroundColor:'#FFFFFF',margin:10,marginBottom:20,elevation:4,borderRadius:20}}>
      <View style={styles.styleView}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Image source={avatar} style={styles.image} />
          <View style={{rowGap:5}}>
            <Text
              style={{
                color: 'black',
                fontWeight: 'bold',
                fontSize: 18,
                right: 10,
              }}>
              Tamizh{' '}
              <View style={{backgroundColor: '#A5AD78',borderRadius:6}}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 15,
                  fontWeight:'500',
                }}>
                {' '}
                Learner
                {''}
              </Text>
              </View>
            </Text>
            <Text style={{right:10}}>Business,Chidambaram</Text>
          </View>
          <View>
            <TouchableOpacity>
              <Text style={{backgroundColor:'#E7E7E7',borderRadius:20,fontWeight:'800',left:8,width:80,padding:10,textAlign:'center',color:'black'}}>REPLY</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{borderBottomWidth:1, padding: 6, borderColor: 'lightgrey'}}></View>
        <Text style={{marginTop:10,color:'black',fontSize:15,fontWeight:'500',}}>
          I am learning hindi through your videos. It's very helpful and easiest
          way to learn. But now you're deleted all video without intimation sir.
          we are upset now. Please release the video , All are expecting your
          videos those who are all learning hindi.
        </Text>
      </View>
      <View style={styles.styleView2}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Image source={image} style={styles.imageStyle} />
          <View style={{rowGap: 5}}>
            <Text
              style={{
                color: 'black',
                fontWeight: 'bold',
                fontSize: 18,
                right: 30,
              }}>
              Veeras{' '}
              <View style={{backgroundColor: '#AD8078',borderRadius:5}}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 15,
                  fontWeight:'500',
                }}>
                {' '}
                Admin {''}
              </Text>
              </View>
             
            </Text>
            <Text style={{right:30}}>Founder</Text>
          </View>
          <View>
            <TouchableOpacity>
            <Text style={{backgroundColor:'#E7E7E7',borderRadius:20,fontWeight:'800',left:8,width:80,padding:10,textAlign:'center',color:'black'}}>REPLY</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{borderBottomWidth:1, padding: 8, borderColor: 'grey'}}></View>
        <Text style={{padding:10,marginTop:10,color:'black',fontSize:15,fontWeight:'600'}}>
         Thank you for comments.
        </Text>
      </View>
    </ScrollView>
    </>
  );
};
const styles = StyleSheet.create({
  styleView3: {
    backgroundColor:'#EEEAE3',
    borderColor: '#b19c68',
    borderRadius: 8,
    borderWidth: 2,
    padding: 15,
    marginTop:20,
    marginHorizontal: 10,
  },
  image: {
    borderColor: 'white',
    borderRadius: 100,
    height: 60,
    width: 60,
    right:15
  },
  styleView: {
    borderColor: '#f5f5f5',
    margin: 10,
    padding: 20,

  },
  styleView2: {
    borderColor: '#f5f5f5',
    margin: 10,
    padding: 20,
    backgroundColor:'#F8F8F8',
    borderRadius:8,
    marginTop:'auto',
    
  },
  imageStyle: {
    borderColor: 'white',
    borderRadius: 100,
    height: 50,
    width: 50,
    right:10,
  }
});
export default Discussion;
