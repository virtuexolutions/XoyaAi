import {KeyboardAvoidingView, StyleSheet, Text, View} from 'react-native';
import React, { useCallback, useState } from 'react';
import CustomStatusBar from '../Components/CustomStatusBar';
import Header from '../Components/Header';
import Color from '../Assets/Utilities/Color';
import {windowHeight, windowWidth} from '../Utillity/utils';
import CustomText from '../Components/CustomText';
import {moderateScale} from 'react-native-size-matters';
import CustomButton from '../Components/CustomButton';
import TopicComponent from '../Components/TopicComponent';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {
  Bubble,
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
  const [messages, setMessages] = useState([
    {
      _id: 1,
      text: "Hello! How are you?",
      createdAt: new Date(),
      user: {
        _id: 2,
        name: "John Doe",
        avatar: "https://placeimg.com/140/140/any",
      },
    },
    {
      _id: 2,
      text: "I’m good, thanks! What about you?",
      createdAt: new Date(),
      user: {
        _id: 1,
        name: "You",
        avatar: "https://placeimg.com/140/140/tech",
      },
    },
    {
      _id: 3,
      text: "All good here, working on a new React Native project 🚀",
      createdAt: new Date(),
      user: {
        _id: 2,
        name: "John Doe",
        avatar: "https://placeimg.com/140/140/any",
      },
    },
    {
      _id: 4,
      text: "That’s awesome! Gifted Chat is super handy.",
      createdAt: new Date(),
      user: {
        _id: 1,
        name: "You",
        avatar: "https://placeimg.com/140/140/tech",
      },
    },
  ]);
  console.log("🚀 ~ HomeScreen ~ messages:", messages)
  const [isStarted, setIsStartedChat] = useState(true)
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

  
  const onSend = useCallback(
    (messages = []) => {
      const newMessage = {
        _id: Math.random().toString(36).substring(7),
        text: messages[0].text,
        createdAt: new Date(),
        user: {
          _id: Date.now().toString(),
          name: `${"sdsdsd"}`,
          avatar: "https://",
        },
      };
      setIsStartedChat(true)
      setMessages(previousMessages =>
        GiftedChat.append(previousMessages, newMessage),
      );


    },
    [messages],
  );


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
      {!isStarted &&(  
        <>
      <CustomText isBold style={styles.title}>
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
                borderWidth={1}
                borderColor={"#FBC88359"}
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
        </>
        )}
{/* <View style={{height: windowHeight * 0.9, backgroundColor:"red"}}> */}

        <GiftedChat
        
          inverted
          alwaysShowSend={true}
          renderAvatarOnTop
          showAvatarForEveryMessage={false}
          // renderActions={}
          renderSend={props => {
            return (
              <LinearGradient
                style={styles.sendBtn}
                colors={['#FBC883', '#BFA14A']}
                start={{x: 0.15, y: 0.7}}
                end={{x: 0.5, y: 0.5}}>
                <Send
                  {...props}
                  // children={
                  //   <CustomImage
                  //   source
                  //   />
                  // }
                  sendButtonProps={{
                    style: {
                      backgroundColor: 'transparent',
                      alignItems: 'center',
                      justifyContent: 'center',
                    },
                  }}></Send>
              </LinearGradient>
            );
          }}
          renderComposer={props => {
            return (
              <View
                style={{
                  width: '93%',
                  height: '110%',
                }}>
                <Composer
                  {...props}
                  textInputStyle={{
                    width: windowWidth * 0.8,
                    backgroundColor: Color.brown,
                    height: windowHeight * 0.38,
                    borderRadius: moderateScale(40, 0.2),
                    paddingHorizontal: moderateScale(15, 0.6),
                    color: '#f3e8e8',
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
                  width: windowWidth,
                  backgroundColor: Color.black,
                  height: windowHeight * 0.09,
                  alignItems: 'center',
                  marginHorizontal: moderateScale(5, 0.2),
                  paddingTop: moderateScale(6, 0.3),
                  marginVertical: moderateScale(10, 0.2),
                  bottom: moderateScale(50, 0.34),
                  borderWidth: 1,
                  borderColor: Color.black,
                  justifyContent: 'center',
                  paddingHorizontal: moderateScale(10, 0.6),
                  alignSelf: 'center',
                }}></InputToolbar>
            );
          }}
          textInputStyle={{
            color: '#f3e8e8',
          }}
          timeTextStyle={{display:"none"}}
          
          placeholderTextColor={'#fffdfd'}
          messages={messages}
          renderTime={() => null}
          renderBubble={props => {
            return (
              <View style={{flexDirection:"column"}}>
              <Bubble
                {...props}
                containerStyle={{
                  left: {
                    // paddingVertical: moderateScale(10, 0.6),


                      // backgroundColor: 'red',
                      marginBottom: moderateScale(20, 0.2),
                    },
                    right: {
                    // backgroundColor: 'red',
                    marginBottom: moderateScale(20, 0.2),
                    marginRight:moderateScale(10,0.2)
                  },
                }}
                wrapperStyle={{
                  left: {
                    width: windowWidth * 0.5,
                    // left: moderateScale(-30,0.3),
                    backgroundColor: Color.brown,
                    borderRadius: moderateScale(26, 0.2),
                    paddingVertical: moderateScale(8, 0.5),
                  },
                  right: {
                    width: windowWidth * 0.5,
                    // paddingHorizontal:moderateScale(10,0.2),
                    borderTopRightRadius:moderateScale(26,0.3),
                    borderBottomLeftRadius: moderateScale(26, 0.2),
                    borderTopLeftRadius: moderateScale(26, 0.2),
                    borderBottomRightRadius:moderateScale(0),
                    backgroundColor: Color.white,

                    paddingVertical: moderateScale(8, 0.5),
                    
                  },
                }}
                textStyle={{
                  right: {
                    color: 'black',
                  },
                  left: {
                    color: 'white',
                  },
                }}></Bubble>
{props?.currentMessage?.user?._id !==  2 &&                
<View style={styles.clipboardCopy}>
  <Icon 
  name='share-a'
  as={Fontisto}
  color={Color.white}
  size={moderateScale(10,0.2)}
  />
  <CustomText style={styles.text2}>Share</CustomText>
  </View>}
                </View>
            );
          }}
          isTyping={false}
          onSend={text => onSend(text)}
          alignTop={true}
          user={{
            _id: 2,
            name: "profileData?.name",
            // avatar: `${baseUrl}/${profileData?.photo}`,
          }}
          showUserAvatar={false}
        />
{/* </View> */}
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
    width: windowWidth * 0.14,
    height: windowWidth * 0.14,
    right: 10,
    top: -2,
  },
  clipboardCopy:{
    // width:moderateScale(50,0.2),
    // height:moderateScale(50,0.2),
    // position:"absolute",
// width:windowWidth * 0.25,
width: "30%",
    paddingHorizontal:moderateScale(5,0.2),
    paddingVertical:moderateScale(6,0.2),
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"center",
    gap:moderateScale(12,0.3),
    borderRadius:moderateScale(20,0.2),
    backgroundColor:Color.brown
  },
  text2:{

    fontSize:moderateScale(10,0.2),
    color:Color.white
  }
});
