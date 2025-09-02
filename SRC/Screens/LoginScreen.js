
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { windowHeight, windowWidth } from '../Utillity/utils'

const LoginScreen = () => {
  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center' ,backgroundColor :'red' ,width:windowWidth,windowHeight:windowHeight,}}>
      <Text>LoginScreen</Text>
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({})