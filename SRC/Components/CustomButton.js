import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
  I18nManager,
  ActivityIndicator,
} from "react-native";
import { Icon, Spinner } from "native-base";
import LinearGradient from "react-native-linear-gradient";
import { moderateScale, scale } from "react-native-size-matters";
import CustomText from "./CustomText";
import Color from "../Assets/Utilities/Color";
import CustomImage from "./CustomImage";
import { windowWidth } from "../Utillity/utils";

const CustomButton = (props) => {
  const {
    activeOpacity,
    onPress,
    width,
    height,
    bgColor,
    borderWidth,
    borderColor,
    marginTop,
    marginBottom,
    margin,
    justifyContent,
    borderRadius,
    isGradient,
    fontSize,
    loader,
    loaderColor,
    iconName,
    iconType,
    iconStyle,
    textColor,
    textTransform,
    text,
    isBold,
    imageSrc,
    disabled = false,
    alignSelf,
    image,
    elevation, shadowColor, shadowOpacity,
    shadowOffset,
    shadowRadius,
    iconIsImage,
    paddingVertical,
    paddingHorizontal, 
    gradientColor

    // value
  } = props;
  return (
    <TouchableOpacity
      activeOpacity={activeOpacity ? activeOpacity : 0.9}
      onPress={onPress}
      style={[
        styles.mainBtn,
        {
          margin:margin,
          width: width,
          height: height,
          backgroundColor: bgColor,
          borderColor: borderColor,
          marginTop: marginTop || 0,
          marginBottom: marginBottom || 0,
          gap:moderateScale(12,0.2)
         
        },
        alignSelf && {
          alignSelf: alignSelf,
        },
        justifyContent && {
          justifyContent: justifyContent,
        },
        borderRadius && {
          borderRadius: borderRadius,
          overflow: 'hidden'
        },
        borderWidth && {
          borderWidth: borderWidth,
        },
        elevation && {
          elevation:elevation,
        },
        shadowColor &&{
          shadowColor:shadowColor
        },
        shadowOffset && {
          shadowOffset:shadowOffset
        },
        shadowOpacity && {
          shadowOpacity:shadowOpacity
        },
        shadowRadius && {
          shadowRadius:shadowRadius
        },
        disabled && {
          backgroundColor: Color.themeLightGray,
          borderColor: Color.themeLightGray,
          color: Color.white,
        },
      paddingVertical && {
          paddingVertical: isGradient ? 0 : paddingVertical
        },
        paddingHorizontal && {
          paddingHorizontal: isGradient ? 0 : paddingHorizontal,
        }
      ]}
      disabled={disabled}
    >
      {disabled == false && isGradient ? (
        <LinearGradient
          style={{
            flexDirection: "row",
            width: width,
            height: height,
            alignItems: "center",
            justifyContent: "center",
            gap:moderateScale(12,0.2),
            borderRadius: borderRadius,
            paddingHorizontal:paddingHorizontal,
            paddingVertical: paddingVertical
            
          }}
          start={{ x: 0.7, y: 0.2}}
          end={{ x: 1, y: 1 }}
          colors={props?.gradientColor ? props?.gradientColor :  Color.btnColor}
        >
          {loader && (
            <ActivityIndicator
              style={styles.indicatorStyle}
              size="small"
              color={loaderColor ? loaderColor : Color.white}
            />
          )}
                    {iconIsImage && (
            <CustomImage source={imageSrc} style={{width:moderateScale(18,0.2), height:moderateScale(18,0.2)}}/>
          )}
          {iconName && (
            <Icon
              name={iconName}
              as={iconType}
              style={[styles.iconCustom, iconStyle && iconStyle]}
            />
          )}
          {
            image &&
            <View 
            style={{
              width: windowWidth * 0.05,
             height:windowWidth * 0.05,
             overflow:"hidden",
             backgroundColor:"red",
            //  borderWidth:2,
            //  borderColor:"red"
             //  paddingVertical:moderateScale(17, 0.8)
            }}
            >

            <CustomImage source={image} 
            resizeMode={'cover'}
            style={{width:"100%",
            height:"100%",

          
          }}
            />
            </View>
          }
          <CustomText
            style={[
              styles.text,
              {
                color: textColor,
                fontSize: fontSize ? fontSize : moderateScale(15, 0.3),
              },
              textTransform && {
                textTransform: textTransform,
              },
            ]}
            isRegular={isBold ? false : true}
            isBold={isBold ? true : false}
          >
            {text}
          </CustomText>
        </LinearGradient>
      ) : (
        <>
          {loader && (
            <ActivityIndicator
              style={styles.indicatorStyle}
              size="small"
              color={loaderColor ? loaderColor : Color.white}
            />
          )}
          {iconIsImage && (
            <CustomImage source={imageSrc} style={{width:moderateScale(18,0.2), height:moderateScale(18,0.2)}}/>
          )}
          {iconName && (
            <Icon
              name={iconName}
              as={iconType}
              style={[styles.iconCustom, iconStyle && iconStyle]}
            />
          )}
          <CustomText
            style={[
              styles.text,
              {
                color: textColor,
                fontSize: fontSize ? fontSize : moderateScale(15, 0.3),
              },
              textTransform && {
                textTransform: textTransform,
              },
              disabled && {
                color: Color.white,
                opacity: 0.6,
              },
            ]}
            isRegular={isBold ? false : true}
            isBold={isBold ? true : false}
          >
            {text}
          </CustomText>
        </>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  mainBtn: {
    // marginBottom: 10,
    flexDirection: "row",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    zIndex : 1,
    // overflow: 'hidden',
    // borderWidth: 1,
  },
  text: {
    color: "white",
    // fontWeight: 'bold',
    textTransform: "capitalize",
    textAlign: "center",
  },
  indicatorStyle: {
    paddingRight: 5,
    paddingLeft: I18nManager.isRTL ? 5 : 0,
  },
  iconCustom: {
    // color: "#C0C0C0",
    color:Color.black,
    fontSize: 20,
    paddingRight: 20,
    paddingLeft: I18nManager.isRTL ? 20 : 0,
  },
});

export default CustomButton;
