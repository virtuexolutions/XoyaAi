
import { StyleSheet, Text, View, ImageBackground, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import { windowHeight, windowWidth } from '../Utillity/utils'
import CustomImage from '../Components/CustomImage'
import TextInputWithTitle from '../Components/TextInputWithTitle'
import { Avatar, Divider, useSafeArea } from 'native-base'
import Color from '../Assets/Utilities/Color'
import { moderateScale } from 'react-native-size-matters'
import CustomText from '../Components/CustomText'
import CustomButton from '../Components/CustomButton'
const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
      <ImageBackground 
      source={require("../Assets/Images/background.png")}
      style={styles.imageBackround}
      imageStyle={styles.image}
      >
     <View style={styles.logo}>
      <CustomImage 
      source={require("../Assets/Images/logo.png")}
      style={styles.image}
      />
      </View>
      <CustomText isBold style={styles.title}>Create Your Account</CustomText>
      <TextInputWithTitle
            secureText={false}
            placeholder={'Email'}
            setText={setEmail}
            value={email}
            viewWidth={0.9}
            inputWidth={0.85}
            marginTop={moderateScale(5, 0.3)}
            color={Color.black}
            border={1}
            borderRadius={moderateScale(20,0.3)}
            borderColor={Color.themeGray}
            placeholderColor={Color.white}
          />
      <TextInputWithTitle
            // maxLength={2000}
            secureText={true}
            placeholder={'Password'}
            setText={setEmail}
            value={email}
            viewWidth={0.9}
            inputWidth={0.85}
            marginTop={moderateScale(5, 0.3)}
            color={Color.black}
            border={1}
            borderRadius={moderateScale(20,0.3)}
            borderColor={Color.themeGray}
            placeholderColor={Color.white}
          />
      <TextInputWithTitle
            // maxLength={2000}
            secureText={true}
            placeholder={'Confirm Password'}
            setText={setEmail}
            value={email}
            viewWidth={0.9}
            inputWidth={0.85}
            marginTop={moderateScale(5, 0.3)}
            color={Color.black}
            border={0.5}
            borderRadius={moderateScale(20,0.3)}
            borderColor={Color.themeGray}
            placeholderColor={Color.white}
          />
        <CustomButton
                text={'Sign In'}
                textColor={Color.white}
           
                width={windowWidth * 0.9}
                height={windowHeight * 0.06}
                gradientColor={['#F6C480', '#BFA14A']}
                borderRadius={moderateScale(30, 0.3)}
                isGradient
                elevation={24}
                shadowColor={"#F6C480A3"}
                shadowOffset={{width:0, height:18,}}
                shadowOpacity={0.45}
                shadowRadius={moderateScale(26,0.2)}
                isBold={false}
                marginBottom={moderateScale(50)}
                onPress={() => {
                  navigation.goBack();
                  // dispatch(setBubbleCreated(true));
                }}
              />
              <View style={styles.optionTextView}>
                <Divider orientation='horizontal' bgColor={"#F6C480"} 
                width={20}
                />
                
                <CustomText style={styles.text}>You can continue with</CustomText>
                <Divider orientation='horizontal' 
                
                bgColor={"#F6C480"} 
                width={20}
                // height={0.97}

                />
              </View>
              <View style={styles.socialActions}>

                <Avatar 
                style={styles.socialBtn}
                bgColor={Color.white}
                children={<CustomImage source={require("../Assets/Images/google.png")} style={styles.socialIcon}/>}
                />
                <Avatar 
                style={styles.socialBtn}
                bgColor={Color.white}
                children={<CustomImage source={require("../Assets/Images/apple.png")} style={styles.socialIcon}/>}
                />
                </View>
                
      </ImageBackground>
  )
}

export default Signup

const styles = StyleSheet.create({
  mainScreen:{
    width:windowWidth,
    height:windowHeight
  },
  logo:{
    width: windowWidth * 0.5,
    height: windowWidth * 0.1,
    overflow:"hidden"
  },
  imageBackround:{
    width:windowWidth,
    height: windowHeight,  
    alignItems:"center",
    justifyContent:"center",
    gap:moderateScale(20,0.2)
  },
  image:{
    width:"100%",height:"100%",
  },
  title:{
    fontSize:moderateScale(22,0.3),
    color:Color.white
  },
  optionTextView:{
    flexDirection:"row",
    alignItems:"center",
    // justifyContent:"center",
    gap:moderateScale(30,0.2)
  },
  text:{
    color:Color.white
  },
  socialBtn:{width:moderateScale(40,0.2), height:moderateScale(40,0.2), alignItems:"center", justifyContent:"center"},
  socialIcon:{width: moderateScale(22,0.2), height:moderateScale(22,0.2)},
  socialActions:{
    flexDirection:"row",
    gap:moderateScale(20,0.2)
  },
  signupTxtView:{
    flexDirection:"row",
    gap:moderateScale(5,0.2),
    alignItems:"center"
  },
  txtAsk:{
    fontSize:moderateScale(12,0.2),
    color:Color.white
  },
  linkText:{
    fontSize:moderateScale(12,0.2),
    color:Color.white,
    textDecorationLine:"underline",
  },
})