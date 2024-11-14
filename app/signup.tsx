import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'
import MyButton from '@/components/MyButton'

export default function Signup() {

  const router = useRouter()
  const onRegister=()=>{
    router.navigate("/login")

  }
  return (
    <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
      
      <MyButton title={"Register"} onPress={onRegister} />
    </View>
  )
}

const styles = StyleSheet.create({})