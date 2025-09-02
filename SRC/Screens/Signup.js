import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { windowHeight, windowWidth } from '../Utillity/utils'

const Signup = () => {
  return (
    <View style={{
      backgroundColor :'red', 
      height : windowHeight,
      width: windowWidth,
      justifyContent:'center', alignItems:'center'
    }}>
      <Text>Signup</Text>
    </View>
  )
}

export default Signup

const styles = StyleSheet.create({})