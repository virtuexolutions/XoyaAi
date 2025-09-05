import { ImageBackground,  StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { windowHeight, windowWidth } from '../Utillity/utils'
import Header from '../Components/Header'
import CustomText from '../Components/CustomText'
import { moderateScale } from 'react-native-size-matters'
import CustomStatusBar from '../Components/CustomStatusBar'
import { Icon, IconButton } from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import Color from '../Assets/Utilities/Color'
import CustomButton from '../Components/CustomButton'
import LinearGradient from 'react-native-linear-gradient'
import CustomImage from '../Components/CustomImage'

const VoiceLIstening = () => {
  return (
    <>
    {/* <CustomStatusBar 
    backgroundColor={Color.black}
    /> */}
    <ImageBackground
    source={require("../Assets/Images/backgroundForVoice.jpg")}
    style={styles.mainScreen}
    imageStyle={styles.image}
    >
    <Header 
    showBack
    headerColor="transparent"
    title="Chat"
    />
<View style={{width: windowWidth, height: windowHeight * 0.9,
paddingVertical:moderateScale(150, 0.5),
justifyContent:"flex-end"
}}>

        <CustomText style={styles.text1}>Xoya Is Listening...</CustomText>
        <CustomText style={styles.text2}>Hi, Play My Favorite Playlist To Accompany Me  
<CustomText style={styles.text3}> While Studing My Assignments.</CustomText>
        </CustomText>

        <View style={styles.actionContainer}>
            <IconButton
            style={styles.actionBtn}
            icon={<Icon
            as={Ionicons}
            name='chatbubble-ellipses-outline'
            color={Color.white}
            />}
            />
            <View style={styles.ring1}>
                <View style={styles.ring2}>
                    <View style={styles.ring3}>

        <LinearGradient style={styles.gradientBtn}
        start={{x:0.5, y:0.4}} 
        end={{x:0.8, y:0.9}} 
        colors={['#F6C480', '#BFA14A']}>
            <View style={styles.imageContainer}>
                <CustomImage
                style={styles.image} 
                source={require("../Assets/Images/mic.png")}
                />
            </View>
        </LinearGradient>

                </View>
                </View>               
        </View>
                        
            <IconButton
            style={styles.actionBtn}
            icon={<Icon
            as={Entypo}
            name='cross'
            backgroundColor={Color.white}
            style={{borderRadius:moderateScale(50,0.2)}}
            color={Color.black}
            />}
            />
        </View>
</View>

    </ImageBackground>
        </>
  )
}

export default VoiceLIstening

const styles = StyleSheet.create({
    mainScreen:{
        width:windowWidth,
        height:windowHeight,
        // justifyContent:"flex-end",
    },
    image:{
        width:"100%",
        height:"100%"
    },
    text1:{
        color:Color.white,
        fontSize:moderateScale(18,0.2),
        textAlign:"center"
    },
    text2:{
        color:Color.white,
        fontSize:moderateScale(22,0.2),
        textAlign:"center"
    },
    text3:{
        color:"#FBC883",
        fontSize:moderateScale(22,0.2)
    },
    actionBtn:{
        borderColor:"#FBC883",
        borderWidth:1,
        width: moderateScale(30,0.2),
        height:moderateScale(30,0.2),
        borderRadius:moderateScale(15,0.2)
    },
    gradientBtn:{
        width: windowWidth * 0.15,
        height: windowWidth * 0.15,
        borderRadius:(windowWidth * 0.15)/2,
        justifyContent:"center",
        alignItems:"center"
    },
    imageContainer:{
        width: windowWidth * 0.08,
        height: windowWidth * 0.08,
        overflow:"hidden"
    },
    image:{
        width:"100%",
        height:"100%"
    },
    actionContainer:{
        marginTop:moderateScale(40,0.2),
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-around",

    },
    ring1:{
        width: windowWidth * 0.27,
        height: windowWidth * 0.27,
        borderRadius:(windowWidth * 0.27)/2,
        borderWidth:1,
        // padding:12,
        borderColor:"#FBC883",
        alignItems:"center",
        justifyContent:"center"
    },
    ring2:{
        width: windowWidth * 0.24,
        height: windowWidth * 0.24,
        borderRadius:(windowWidth * 0.24)/2,
        borderWidth:1,
        borderColor:"#FBC883",
        alignItems:"center",
        justifyContent:"center"
    },
    ring3:{
        width: windowWidth * 0.21,
        height: windowWidth * 0.21,
        borderRadius:(windowWidth * 0.21)/2,
        borderWidth:1,
        borderColor:"#FBC883",
        alignItems:"center",
        justifyContent:"center"
    },
})

