import { StyleSheet, Text, View,Image, FlatList } from 'react-native'
import React from 'react'


export default function index() {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.headertitle}>Leader Board</Text>
        <View style={styles.mainCardContainer}>
        {[3,1,2].map((item,index)=>{
          return (
          <View key={index} style={styles.mainCard}> 
          <Image source={{}} style={styles.mainCardImage} />
          <Text style={styles.mainCardTitle}>Hello</Text>
          <View style={styles.mainCardRankContainer}>
            <Text style={styles.mainCardRankContainerText}>1</Text>
             </View>
             </View>
         

         
        );
          })}
        </View>
      </View>
      <FlatList  data={[1,2,3,4]} 
          renderItem={({item,index})=>{
          return <View style={styles.card}>
            <View style={styles.cardDataContainer}>
              <Text style={styles.cardIndex}>{index + 1}</Text>
              <Image source={{uri:""}} style={styles.cardImage} resizeMode='cover'></Image>
              <Text style={styles.cardTitle}>M.idr</Text>
            </View>
            <View style={styles.cardRankContainer}>
              <Text style={styles.cardRankTitle}>3678,4569</Text>
            </View>

             </View>
          } } />
          
    </View>
  );
}

const styles = StyleSheet.create({
container:{
  flex:1,
  backgroundColor:"#272c35"
},
topContainer:{
  backgroundColor:"#1A1f25",
  paddingTop:30,
  padding:20,
  borderBottomRightRadius:40,
  borderBottomLeftRadius:40
},
headertitle:{
  textAlign:"center",
  color:"white",
  fontSize:21,
  fontWeight:"bold"
},

mainCard:{},
mainCardContainer:{},
mainCardImage:{},
mainCardTitle:{},
mainCardRankContainer:{},
mainCardRankContainerText:{},
card:{},
cardIndex:{},
cardImage:{},
cardTitle:{},
cardDataContainer:{},
cardRankContainer:{},
cardRankTitle:{}



})