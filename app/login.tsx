import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'
import MyButton from "@/components/MyButton"

export default function Login() {
  const router = useRouter();
  const onLogin=()=>{
    router.navigate("/signup")
  }
  return (
    <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
      
      <MyButton title={"Login"} onPress={onLogin} />
    </View>
  )
}

const styles = StyleSheet.create({})