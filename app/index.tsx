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
          <Image source={{uri:"https://media.istockphoto.com/id/1399611777/fr/photo/portrait-dun-petit-gar%C3%A7on-souriant-aux-cheveux-bruns-regardant-lappareil-photo-enfant.jpg?s=1024x1024&w=is&k=20&c=7YioTT7hn3Wq3YlU-KDhDX-opZZ6X3zDjAiZIcu4hB8="}} style={styles.mainCardImage} />
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
              <Image source={{uri:"https://media.istockphoto.com/id/1399611777/fr/photo/portrait-dun-petit-gar%C3%A7on-souriant-aux-cheveux-bruns-regardant-lappareil-photo-enfant.jpg?s=1024x1024&w=is&k=20&c=7YioTT7hn3Wq3YlU-KDhDX-opZZ6X3zDjAiZIcu4hB8="}} style={styles.cardImage} resizeMode='cover'></Image>
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
  borderBottomLeftRadius:40,
  gap:20,
  paddingBottom:50,
},
headertitle:{
  textAlign:"center",
  color:"white",
  fontSize:21,
  fontWeight:"bold"
},

mainCard:{
  backgroundColor:"#272c35",
  padding:20,
  alignItems:"center",
  borderRadius:10,
  gap:15
},
mainCardContainer:{
  flexDirection:"row",
  gap:10,
  justifyContent:"center"
},
mainCardImage:{
  width:90,
  height:90,
  borderRadius:20,
},
mainCardTitle:{
  color:"white",
  fontSize:17,
  fontWeight:600,

},
mainCardRankContainer:{
  backgroundColor:"orange",
  width:30,
  height:30,
  justifyContent:"center",
alignItems:"center",
borderRadius:30,
position:"absolute",
bottom:-15,
},
mainCardRankContainerText:{
  color:"white"
},
card:{
  padding:20,
  flexDirection:"row",
  alignItems:"center",
  justifyContent:"space-between"
},
cardDataContainer:{
  flexDirection:"row",
  alignItems:"center",
  gap:10
},
cardIndex:{
  color:"white"
},
cardImage:{
  width:50,
  height:50,
  borderRadius:50,
  marginLeft:10

},
cardTitle:{
  color:"white",
  fontSize:17,

},

cardRankContainer:{},
cardRankTitle:{
  color:"orange"
}



})