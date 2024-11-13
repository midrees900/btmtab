import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function MyButton({title,onPress}) {
  return (
    <View>
      {/* <Text>Continue</Text> */}
      {/* <Button title='Button'/> */}
      <TouchableOpacity activeOpacity={0.8} style={styles.text} onPress={onPress}>
      <Text style={styles.button}>{title}</Text> 
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    button:{
        backgroundColor:"orange",
        paddingHorizontal:40,
        paddingVertical:15,
        borderRadius:10,
    },
    text:{
        backgroundColor:"orange", 
        paddingHorizontal:40, 
        paddingVertical:15,
        borderRadius:10

    }
})