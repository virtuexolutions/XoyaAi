import React from "react";
import { ImageBackground, SafeAreaView, StatusBar, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { moderateScale, ScaledSheet } from "react-native-size-matters";
import Color from "../Assets/Utilities/Color";
import { windowHeight, windowWidth } from "../Utillity/utils";
import CustomImage from "../Components/CustomImage";
// import FastImage from "react-native-fast-image";


const SplashScreen = () => {
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
      </ImageBackground>
    // </SafeAreaView>
    

  );
};

const styles = ScaledSheet.create({
  container: {
    justifyContent: "center",
    height: windowHeight,
    width: windowWidth,
    // backgroundColor : Color.green
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
  bottomImage: {
    width : windowWidth * 0.65,
    alignSelf :'center',
    // backgroundColor : 'red'
  },
  textContainer: {
    flexDirection: "row",
   
    width : windowWidth * 0.7,
    height :windowWidth * 0.7,
    borderRadius : moderateScale(windowWidth* 0.7 / 2 , 0.3),
    justifyContent : 'center',
    alignItems : 'center',
    backgroundColor : Color.white,
    

  },
  LogoText: {
    fontSize: moderateScale(35, 0.3),
    fontWeight: "bold",
  },
 
});

export default SplashScreen;
