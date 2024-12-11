import { StyleSheet, Text, View , ScrollView} from 'react-native'
import React from 'react'

export default function welcom() {
  return (
    <ScrollView horizontal contentContainerStyle={{marginTop:40,padding:20}}>

        {[1,2,3,4,5,6,7,8,9,4,5,6,7,8,9].map((item)=>{
             return (<View style={{
                width:100,
                height:100,
                backgroundColor:"red",
                marginBottom:20,
                marginRight:20,
                borderRadius:10,

             }}>
      
             </View>)
        })}
   
    </ScrollView>
  );
};

const styles = StyleSheet.create({})