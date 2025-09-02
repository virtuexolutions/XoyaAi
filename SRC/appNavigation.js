import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { useSelector } from 'react-redux';
import navigationService from './navigationService';
import ChangePassword from './Screens/ChangePassword';
// import Homescreen from './Screens/Homescreen';
import HomeScreen from './Screens/HomeScreen';
import LoginScreen from './Screens/LoginScreen';
import Signup from './Screens/Signup';
import Walkthrough from './Screens/Walkthrough';

const AppNavigator = () => {
  const userData = useSelector(state => state.commonReducer.userData);
  const token = useSelector(state => state.authReducer.token);
  const walkThrough = useSelector(state => state.authReducer.userWalkThrough);
  console.log('🚀 ~ AppNavigator ~ walkThrough:', walkThrough);

  const RootNav = createNativeStackNavigator();

  const AppNavigatorContainer = () => {
    const customerFirstScreen =
      walkThrough == false
        ? 'WalkThroughScreen'
        : token == null
        ? 'LoginScreen'
        : 'HomeScreen';

    const secondScreen =
      walkThrough == false
        ? 'WalkThroughScreen'
        : token == null
        ? 'LoginScreen'
        : userData?.services?.length == 0
        ? 'AddService'
        : userData?.complete_questions?.toLowerCase() == 'no'
        ? 'QuestionAnswerScreen'
        : 'TabNavigation';

    return (
      <NavigationContainer ref={navigationService.navigationRef}>
        <RootNav.Navigator
          initialRouteName={"Signup"}
          screenOptions={{headerShown: false}}>
          <RootNav.Screen name="WalkThroughScreen" component={Walkthrough} />

          <RootNav.Screen name="LoginScreen" component={LoginScreen} />
          <RootNav.Screen name="Signup" component={Signup} />

          {/* <RootNav.Screen name="TabNavigation" component={TabNavigation} /> */}
          <RootNav.Screen name="ChangePassword" component={ChangePassword} />
          <RootNav.Screen name="HomeScreen" component={HomeScreen} />

        </RootNav.Navigator>
      </NavigationContainer>
    );
  };

  return <AppNavigatorContainer />;
};

// export const TabNavigation = props => {
//   const Tabs = createBottomTabNavigator();
//   const userData = useSelector(state => state.commonReducer.userData);

//   return (
//     <Tabs.Navigator
//       screenOptions={({route}) => ({
//         headerShown: false,
//         tabBarStyle: {
//           backgroundColor: 'rgba(34,36,40,1)',
//         },
//         tabBarIcon: ({focused}) => {
//           let iconName;
//           let color = Color.themeColor;
//           let size = moderateScale(20, 0.3);
//           let type = Ionicons;
//           if (route.name === 'HomeScreen') {
//             iconName = focused ? 'home' : 'home';
//             type = focused ? Entypo : AntDesign;
//             color = focused ? Color.themeColor : Color.themeLightGray;
//             size = focused ? moderateScale(30, 0.3) : moderateScale(20, 0.3);
//           } else if (route.name === 'Wishlist') {
//             iconName = focused ? 'heart' : 'heart-o';
//             color = focused ? Color.themeColor : Color.themeLightGray;
//             size = focused ? moderateScale(30, 0.3) : moderateScale(20, 0.3);
//             type = FontAwesome;
//           } else if (route.name === 'WalletScreen') {
//             iconName = focused ? 'wallet' : 'wallet-outline';
//             color = focused ? Color.themeColor : Color.themeLightGray;
//             size = focused ? moderateScale(30, 0.3) : moderateScale(20, 0.3);
//             type = MaterialCommunityIcons;
//           } else if (route.name === 'Store') {
//             iconName = focused
//               ? 'briefcase-variant'
//               : 'briefcase-variant-outline';
//             color = focused ? Color.themeColor : Color.themeLightGray;
//             size = focused ? moderateScale(30, 0.3) : moderateScale(20, 0.3);
//             type = MaterialCommunityIcons;
//           } else if (route.name === 'Settings') {
//             iconName = focused ? 'settings' : 'settings';
//             color = focused ? Color.themeColor : Color.themeLightGray;
//             size = focused ? moderateScale(30, 0.3) : moderateScale(20, 0.3);
//             type = focused ? MaterialIcons : Feather;
//           }

//           return (
//             <MaskedView
//               style={{flexDirection: 'row', height: size}}
//               maskElement={
//                 <View
//                   style={{
//                     backgroundColor: 'transparent',
//                     justifyContent: 'center',
//                     alignItems: 'center',
//                   }}>
//                   <Icon name={iconName} as={type} color={color} size={size} />
//                 </View>
//               }>
//               <LinearGradient
//                 colors={['#C49948', '#EBDBBD', '#E3C488']}
//                 style={{flex: 1}}
//               />
//             </MaskedView>
//           );
//         },
//         tabBarShowLabel: false,
//       })}>
//       <Tabs.Screen name={'HomeScreen'} component={Homescreen} />
//       {userData?.role == 'customer' ? (
//         <Tabs.Screen name={'Wishlist'} component={Wishlist} />
//       ) : (
//         <Tabs.Screen name="WalletScreen" component={WalletScreen} />
//       )}

//       <Tabs.Screen name={'Store'} component={Store} />
//       <Tabs.Screen name={'Settings'} component={Settings} />
//     </Tabs.Navigator>
//   );
// };

export default AppNavigator;
