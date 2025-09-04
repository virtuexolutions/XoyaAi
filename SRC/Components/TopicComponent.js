import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Avatar} from 'native-base';
import {moderateScale} from 'react-native-size-matters';
import CustomImage from './CustomImage';
import CustomText from './CustomText';
import Color from '../Assets/Utilities/Color';
import {windowWidth} from '../Utillity/utils';

const TopicComponent = ({imageSrc, description}) => {
  return (
    <View style={styles.container}>
      <Avatar
        bgColor={'#FBC883'}
        style={{borderRadius: 50}}
        children={
          <CustomImage
            source={imageSrc}
            style={{
              width: moderateScale(22, 0.2),
              height: moderateScale(22, 0.2),
            }}
          />
        }
      />
      <CustomText numberOfLines={2} style={styles.description}>
        {description}
      </CustomText>
    </View>
  );
};

export default TopicComponent;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(50, 40, 26,0.5)',
    // opacity:
    // backgroundColor:"#ac8247c9",
    borderRadius: moderateScale(10, 0.2),
    paddingVertical: moderateScale(12, 0.2),
    paddingLeft: moderateScale(10, 0.2),
    width: windowWidth * 0.45,
    // paddingHorizontal:moderateScale(5,0.2)
  },
  description: {
    fontSize: moderateScale(12, 0.2),
    color: Color.white,
    width: '80%',
    opacity: 0.5,
    lineHeight: 17,
    marginTop: moderateScale(12, 0.2),
  },
});
