import { StyleSheet, Text, View } from 'react-native'
import {useRouter } from 'expo-router';
import React from 'react'
import MyButton from '@/components/MyButton'

export default function index() {
  const router = useRouter();
  const onContinue = () =>{
router.navigate("/login")
  }
  return (
    <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
      
      <MyButton title={"Continue"} onPress={onContinue} />
    </View>
  )
}

const styles = StyleSheet.create({})