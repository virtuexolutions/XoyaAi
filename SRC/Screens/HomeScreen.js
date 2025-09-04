import {KeyboardAvoidingView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CustomStatusBar from '../Components/CustomStatusBar';
import Header from '../Components/Header';
import Color from '../Assets/Utilities/Color';
import {windowHeight, windowWidth} from '../Utillity/utils';
import CustomText from '../Components/CustomText';
import {moderateScale} from 'react-native-size-matters';
import CustomButton from '../Components/CustomButton';
import TopicComponent from '../Components/TopicComponent';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  Composer,
  GiftedChat,
  InputToolbar,
  Send,
} from 'react-native-gifted-chat';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';
import {Icon} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';

const HomeScreen = () => {
  const insets = useSafeAreaInsets();
  console.log('🚀 ~ HomeScreen ~ insets:', insets);
  const menuItems = [
    {
      id: 1,
      icon: require('../Assets/Images/generate-image.png'), // Ionicons (or any other set)
      title: 'Generate Image',
      onPress: () => console.log('Generate Image pressed'),
      active: true, // highlighted like in your screenshot
    },
    {
      id: 2,
      icon: require('../Assets/Images/moon.png'),
      title: 'Goodnight Stories',
      onPress: () => console.log('Goodnight Stories pressed'),
      active: false,
    },
    {
      id: 3,
      icon: require('../Assets/Images/illustration.png'),
      title: 'Creative Illustrations',
      onPress: () => console.log('Creative Illustrations pressed'),
      active: false,
    },
    {
      id: 4,
      icon: require('../Assets/Images/inspire-novel.png'),
      title: 'Inspiring Novels',
      onPress: () => console.log('Inspiring Novels pressed'),
      active: false,
    },
    {
      id: 5,
      icon: require('../Assets/Images/music.png'),
      title: 'Play Music',
      onPress: () => console.log('Play Music pressed'),
      active: false,
    },
  ];

  return (
    <SafeAreaView
      style={{
        width: windowWidth,
        height: windowHeight,
        backgroundColor: Color.black,
      }}>
      {/* <CustomStatusBar backgroundColor={Color.black} /> */}
      <Header showBack title={'Chat'} />
      <View
        style={[
          styles.mainScreen,
          {paddingBottom: insets?.bottom ? insets.bottom * 20 : 0},
        ]}>
        <GiftedChat
          bottomOffset={windowHeight * 0.01}
          // renderLoading={() => {
          //   return <ActivityIndicator color={Color.white} />;
          // }}
          // renderAvatar={(props) => {
          //   return <GiftedAvatar
          //   {...props}
          // containerStyle={{
          //   left:{
          //     // backgroundColor:"red",
          //     left:moderateScale(-10,0.2)
          //   }
          // }}
          // currentMessage={{
          //   image:null,
          // }}
          //   />
          // }}
          inverted
          alwaysShowSend={true}
          renderAvatarOnTop
          showAvatarForEveryMessage={false}
          renderSend={props => {
            return (
              <Send
                {...props}
                containerStyle={{
                  backgroundColor: 'red',
                }}
                children={
                  <Icon
                    as={Ionicons}
                    name={'arrow-forward'}
                    size={moderateScale(25, 0.2)}
                    style={{color: '#000000fb'}}
                  />
                }
                sendButtonProps={{
                  style: {
                    width: windowWidth * 0.11,
                    height: windowWidth * 0.11,
                    borderRadius: (windowWidth * 0.1) / 2,
                    backgroundColor: Color.red,
                    bottom: -2,
                    bottom: 2,
                    right: 10,
                    //  marginRight:moderateScale(10,0.3),
                    alignItems: 'center',
                    justifyContent: 'center',
                  },
                }}></Send>
            );
          }}
          renderComposer={props => {
            return (
              <View
                style={{
                  width: '90%',
                }}>
                <Composer
                  {...props}
                  textInputStyle={{
                    width: windowWidth * 0.8,
                    backgroundColor: 'blue',
                    height: windowHeight * 0.2,
                  }}
                />
              </View>
            );
          }}
          renderInputToolbar={props => {
            return (
              <InputToolbar
                {...props}
                containerStyle={{
                  height: windowHeight * 0.09,
                  width: windowWidth,
                  backgroundColor: Color.black,
                  alignItems: 'center',
                  marginHorizontal: moderateScale(5, 0.2),
                  paddingTop: moderateScale(6, 0.3),
                  // marginTop: moderateScale(20, 0.2),
                  marginVertical: moderateScale(10, 0.2),
                  bottom: moderateScale(60, 0.34),
                  borderWidth: 1,
                  borderColor: Color.black,
                  justifyContent: 'center',
                }}></InputToolbar>
            );
            // return
            // profileData?.id == chatData?.sender_id &&
            //   chatStatus?.toLowerCase() == 'pending' ? null : (
            //   <InputToolbar
            //     {...props}
            //     containerStyle={{
            //       // height: windowHeight * 0.1,
            //       backgroundColor: '#1d1c1c',
            //       alignItems: 'center',
            //       marginHorizontal: moderateScale(5, 0.2),
            //       borderRadius: moderateScale(55, 0.6),
            //       paddingTop: moderateScale(6, 0.3),
            //       // marginTop: moderateScale(20, 0.2),
            //       marginVertical: moderateScale(10, 0.2),
            //       // bottom: moderateScale(25, 0.34),
            //     }}></InputToolbar>
            // );
          }}
          // textInputStyle={{
          //   color: '#f3e8e8',
          //   backgroundColor: 'black',
          //   height: windowHeight * 0.08,
          //   width: windowWidth * 0.6,
          // }}
          placeholderTextColor={'#fffdfd'}
          // messages={messages}
          // renderBubble={props => {
          //   return (
          //     <Bubble
          //       {...props}
          //       containerStyle={{
          //         left: {
          //           // paddingVertical: moderateScale(10, 0.6),
          //           marginBottom: moderateScale(20, 0.2),
          //         },
          //         right: {
          //           marginBottom: moderateScale(20, 0.2),
          //         },
          //         // left: {
          //         //   // marginBottom: moderateScale(40, 0.2),
          //         //   paddingVertical: moderateScale(10, 0.2),
          //         //   backgroundColor: 'red',
          //         // },
          //         // right: {
          //         //   paddingVertical: moderateScale(10, 0.2),
          //         //   // backgroundColor:"red"
          //         // },
          //       }}
          //       wrapperStyle={{
          //         left: {
          //           width: windowWidth * 0.45,
          //           // left: moderateScale(-30,0.3),
          //           borderRadius: moderateScale(6, 0.2),
          //           backgroundColor: themeColor[1],
          //           paddingVertical: moderateScale(8, 0.5),
          //         },
          //         right: {
          //           width: windowWidth * 0.45,
          //           backgroundColor: '#a3dbf1',
          //           paddingVertical: moderateScale(8, 0.5),
          //         },
          //       }}
          //       textStyle={{
          //         right: {
          //           color: 'black',
          //         },
          //         left: {
          //           color: 'white',
          //         },
          //       }}></Bubble>
          //   );
          // }}
          isTyping={false}
          // onSend={text => onSend(text)}
          alignTop={true}
          // user={{
          //   _id: profileData?.id,
          //   // name: profileData?.name,
          //   // avatar: `${baseUrl}/${profileData?.photo}`,
          // }}
          showUserAvatar={false}
        />

        {/* <CustomText isBold style={styles.title}>
          Hi, Henry!
        </CustomText>
        <CustomText style={styles.title}>How Can I Help You ?</CustomText>
        <CustomText style={styles.text}>
          your smart assistant is ready
        </CustomText>
        <View style={styles.optionsView}>
          {menuItems?.map((item, index) => {
            return (
              <CustomButton
                text={item?.title}
                textColor={Color.white}
                iconIsImage
                imageSrc={item.icon}
                gradientColor={['#C99D63', '#C99D63']}
                borderRadius={moderateScale(30, 0.3)}
                isGradient={item?.active}
                fontSize={moderateScale(10, 0.2)}
                paddingHorizontal={moderateScale(23, 0.2)}
                paddingVertical={moderateScale(10, 0.2)}
                shadowRadius={moderateScale(26, 0.2)}
                isBold={false}
                marginBottom={moderateScale(10)}
                onPress={() => {}}
              />
            );
          })}
        </View>
        <View style={styles.popularTopicsView}>
          <View style={styles.headerView}>
            <CustomText style={styles.heading} isBold>
              Popular Topics
            </CustomText>
            <CustomText style={styles.moreText} isBold>
              See all
            </CustomText>
          </View>
          <View style={styles.topicsView}>
            <TopicComponent
              imageSrc={require('../Assets/Images/magic.png')}
              description={'Recommendations Yoga Poses'}
            />
            <TopicComponent
              imageSrc={require('../Assets/Images/generate-image.png')}
              description={'A Very Useful Travel Kit For Travelling'}
            />
          </View>
        </View>
         */}
        {/* <GiftedChat
          renderInputToolbar={props => {
            return (
              <InputToolbar
                {...props}
                containerStyle={styles.inputToolBar}
                primaryStyle={{
                  width: windowWidth * 0.9,
                }}
              />
            );
          }}
          textInputStyle={{
            color: '#f3e8e8',
            width: windowWidth * 0.8,
          }}
          alignTop={true}
          alwaysShowSend={true}
          renderSend={props => {
            return (
              <LinearGradient
                style={styles.sendBtn}
                colors={['#FBC883', '#BFA14A']}
                start={{x: 0.15, y: 0.7}}
                end={{x: 0.5, y: 0.5}}>
                <Send
                  {...props}
                  // containerStyle={{
                  //   backgroundColor: 'red',
                  // }}

                  children={
                    <Icon
                      as={Ionicons}
                      name={'arrow-forward'}
                      size={moderateScale(25, 0.2)}
                      style={{color: Color.white}}
                    />
                  }
                  sendButtonProps={{
                    style: {
                      // width: windowWidth * 0.11,
                      // height: windowWidth * 0.11,

                      backgroundColor: 'transparent',
                      //  bottom:-2,

                      //  marginRight:moderateScale(10,0.3),
                      alignItems: 'center',
                      justifyContent: 'center',
                    },
                  }}></Send>
              </LinearGradient>
            );
          }}
        /> */}
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  mainScreen: {
    width: windowWidth,
    height: windowHeight * 0.9,
    alignItems: 'center',
    justifyContent: 'center',
    // paddingHorizontal: moderateScale(12, 0.2),
  },
  title: {
    fontSize: moderateScale(26, 0.2),
    color: Color.white,
  },
  text: {
    fontSize: moderateScale(14, 0.2),
    color: Color.white,
    opacity: 0.6,
  },
  optionsView: {
    flexDirection: 'row',
    width: windowWidth,
    flexWrap: 'wrap',
    gap: moderateScale(12, 0.2),
    alignItems: 'center',
    justifyContent: 'center',
  },
  topicsView: {
    flexDirection: 'row',
    gap: moderateScale(12, 0.2),
    // paddingHorizontal:moderateScale(22,0.2)
  },
  inputToolBar: {
    width: windowWidth * 0.8,
    // height: windowHeight * 0.1,
    backgroundColor: Color.brown,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignSelf: 'flex-end',
    // overflow:"hidden",
    // marginHorizontal: moderateScale(5, 0.2),
    borderRadius: moderateScale(20, 0.6),
    paddingTop: moderateScale(6, 0.3),
    // marginTop: moderateScale(20, 0.2),
    marginVertical: moderateScale(10, 0.2),
    // marginBottom:100
    bottom: moderateScale(55, 0.34),
  },
  sendBtn: {
    borderRadius: (windowWidth * 0.15) / 2,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: moderateScale(10, 0.2),
    right: moderateScale(-50, 0.2),
    zIndex: 2,
    width: windowWidth * 0.15,
    height: windowWidth * 0.15,
  },
});
