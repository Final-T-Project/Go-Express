import * as React from "react";
import { StatusBar } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import SideBar from "./components/SideBar.js";
import Shop from "front/test/Shop.js";
import Products from "./Pages/Products.js";
import History from "./Pages/History";
import Profil from "./Pages/Profil";
import LogInSignIn from "./Pages/LogInSignIn";
import AddProduct from "./Pages/AddProduct";
import TestSignin from "./Pages/TestSignin.js";
import TestLogin from "./Pages/TestLogin.js";
import EditeProfil from "./Pages/EditeProfil.js";
import EditeAdress from "./Pages/EditeAdress.js";
import PhoneNumber from "./Pages/PhoneNumber";
import { NativeBaseProvider, View } from "native-base";
import { UserContext } from "./UserContext.js";
import { useContext, useState } from "react";
import Shopping from "./Pages/Shopping.js";
import Cart from "./Pages/Cart.js";
import ProductInfo from "./Pages/ProductInfo.js";
import ImageDetails from "./Pages/ImageDetails";
import yahya from "./Pages/yahya.js";
import Serves from "./Pages/Serves.js";
import BookService from "./Pages/BookService.js";
import BookingDetails from "./Pages/BookingDetails.js";
import Notification from "./Pages/Notifcation";
import Awelscreen from "./Pages/Awelscreen.js";

import { LogBox } from "react-native";
import HistoryDetails from "./Pages/HistoryDetails.js";
import Join_Us from "./components/Join_Us.js";
import IntoductionPages from "./Pages/IntoductionPages.js";
import ChatScreen from "./Pages/ChatScreen.js";

const Stack = createNativeStackNavigator();
export default function App() {
  const [showContent, setShowContent] = useState("");
  const [userId, setUserId] = useState("");
  const [userCartId, setUserCartId] = useState("");
  LogBox.ignoreAllLogs();
  return (
    <UserContext.Provider
      value={{
        showContent,
        setShowContent,
        userId,
        setUserId,
        userCartId,
        setUserCartId,
      }}
    >
      <StatusBar backgroundColor={"white"} barStyle="dark-content" />
      <NativeBaseProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="IntoductionPages"
            screenOptions={{
              headerTintColor: "white",
              headerShown: false,
              headerStyle: {
                backgroundColor: "#ED5C00",
              },
            }}
          >
            <Stack.Screen
              name="Notification"
              options={{ headerShown: false }}
              component={Notification}
            />

            <Stack.Screen
              name="ChatScreen"
              options={{ headerShown: false }}
              component={ChatScreen}
            />

            <Stack.Screen
              name="LogInSignIn"
              options={{ headerShown: false }}
              component={LogInSignIn}
            />
            <Stack.Screen
              name="IntoductionPages"
              component={IntoductionPages}
            />

            <Stack.Screen
              name="History"
              component={History}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="PhoneNumber Verif" component={PhoneNumber} />
            <Stack.Screen
              name="TestSignin"
              component={TestSignin}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="TestLogin"
              component={TestLogin}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Profil"
              // options={{ headerShown: false }}
              component={Profil}
            />
            {/* <Stack.Screen name="TabBar" component={TabBar} /> */}
            <Stack.Screen
              name="SideBar"
              options={{ headerShown: false }}
              component={SideBar}
            />
            <Stack.Screen
              name="Shop"
              component={Shop}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Products"
              component={Products}
              options={{ headerShown: false }}
            />
            {/* <Stack.Screen name="Email Confiramtion" component={EmailConfirmation} /> */}
            <Stack.Screen
              name="AddProduct"
              //  options={{ headerShown: false }}
              component={AddProduct}
            />
            <Stack.Screen name="EditeProfil" component={EditeProfil} />
            <Stack.Screen name="EditeAdress" component={EditeAdress} />
            <Stack.Screen name="Shopping" component={Shopping} />
            <Stack.Screen name="Cart" component={Cart} />
            <Stack.Screen name="ProductInfo" component={ProductInfo} />
            <Stack.Screen name="ImageDetails" component={ImageDetails} />
            <Stack.Screen
              name="Home"
              component={yahya}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Serves"
              component={Serves}
              // options={{ headerShown: false }}
            />
            <Stack.Screen name="BookService" component={BookService} />
            <Stack.Screen name="Booking Details" component={BookingDetails} />
            <Stack.Screen name="HistoryDetails" component={HistoryDetails} />
            <Stack.Screen name="Join_Us" component={Join_Us} />
          </Stack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    </UserContext.Provider>
    //   <NativeBaseProvider>
    //   <View style={{ flex: 1 }}>
    //   <StatusBar hidden={false} />
    //   <SideBar />
    // </View>
  );
}

// import React from 'react';

// import {
//   Image, StyleSheet, ScrollView, SafeAreaView, Platform,
// } from 'react-native';
// import {

//   DrawerItems,
// } from 'react-navigation';

// import { createDrawerNavigator } from '@react-navigation/drawer';

// screens
// import MyCart from "./test/MyCart.js";;
// import Shop from 'front/test/Shop.js';
// import History from "./Pages/History";
// import Profil from "./Pages/Profil"; //contain the feedback side
// import TestLogin from "./Pages/TestLogin.js"
// import Presentation from './src/screens/Presentation';
// import Dashboard from './src/screens/Dashboard';
// import Register from './src/screens/Register';
// import Registerv2 from './src/screens/Registerv2';
// import Grid from './src/screens/Grid';

// import theme from './src/theme';
// import { Block, Icon, Text } from 'galio-framework';

// const GalioDrawer = props => (
//   <SafeAreaView style={styles.drawer} forceInset={{ top: 'always', horizontal: 'never' }}>
//     <Block space="between" row style={styles.header}>
//       <Block flex={0.3}><Image source={{ uri: 'http://i.pravatar.cc/100' }} style={styles.avatar} /></Block>
//       <Block flex style={styles.middle}>
//         <Text size={theme.SIZES.FONT * 0.875}>Galio Framework</Text>
//         <Text muted size={theme.SIZES.FONT * 0.875}>React Native</Text>
//       </Block>
//     </Block>
//     <ScrollView>
//       <DrawerItems {...props} />
//     </ScrollView>
//   </SafeAreaView>
// );

// const styles = StyleSheet.create({
//   drawer: {
//     flex: 1,
//   },
//   header: {
//     paddingHorizontal: theme.SIZES.BASE,
//     paddingTop: theme.SIZES.BASE * 0.6875,
//     paddingBottom: theme.SIZES.BASE * 1.6875,
//     borderBottomColor: '#D8D8D8',
//     borderBottomWidth: 0.5,
//     marginTop: Platform.OS === 'android' ? theme.SIZES.BASE * 2 : null,
//   },
//   avatar: {
//     width: theme.SIZES.BASE * 2.5,
//     height: theme.SIZES.BASE * 2.5,
//     borderRadius: theme.SIZES.BASE * 1.25,
//   },
//   middle: {
//     justifyContent: 'center',
//   },
// });

// const MenuIcon = ({ name, family, focused }) => (
//   <Icon
//     name={name}
//     family={family}
//     size={theme.SIZES.FONT}
//     color={focused ? theme.COLORS.WHITE : '#5D5D5D'}
//   />
// );

// MenuIcon.defaultProps = {
//   name: null,
//   family: null,
//   focused: false,
// };

// const screens = {
//   Home: {
//     screen:  Profil,
//     navigationOptions: {
//       drawerLabel: ' Profil',
//       drawerIcon: props => <MenuIcon name="flag" family="font-awesome" focused={props.focused} />,
//     },
//   },
//   History: {
//     screen: History,
//     navigationOptions: {
//       drawerLabel: 'History',
//       drawerIcon: props => <MenuIcon name="flag" family="font-awesome" focused={props.focused} />,
//     },
//   },
//   MyCart: {
//     screen: MyCart,
//     navigationOptions: {
//       drawerLabel: 'MyCart Screen',
//       drawerIcon: props => <MenuIcon name="flag" family="font-awesome" focused={props.focused} />,
//     },
//   },
//   Shop: {
//     screen: Shop,
//     navigationOptions: {
//       drawerLabel: 'Article Cover',
//       drawerIcon: props => <MenuIcon name="flag" family="font-awesome" focused={props.focused} />,
//     },
//   },
// //  SignIn: {
// //     screen:SignIn,
// //     navigationOptions: {
// //       drawerLabel: 'News Screen',
// //       drawerIcon: props => <MenuIcon name="flag" family="font-awesome" focused={props.focused} />,
// //     },
// //   },
//   TestLogin: {
//     screen: TestLogin,
//     navigationOptions: {
//       drawerLabel: 'Order Confirmed',
//       drawerIcon: props => <MenuIcon name="flag" family="font-awesome" focused={props.focused} />,
//     },
//   },
// };

// const options = {
//   contentComponent: props => <GalioDrawer {...props} />,
//   contentOptions: {
//     labelStyle: {
//       fontWeight: '500',
//       color: theme.COLORS.GREY,
//       fontSize: theme.SIZES.FONT * 0.875,
//       marginLeft: theme.SIZES.BASE * 0.75,
//     },
//     activeLabelStyle: {
//       color: theme.COLORS.WHITE,
//     },
//     activeBackgroundColor: theme.COLORS.THEME,
//     itemsContainerStyle: {
//       paddingVertical: 0,
//     },
//     iconContainerStyle: {
//       marginHorizontal: 0,
//       marginLeft: theme.SIZES.BASE * 1.65,
//       // marginRight: theme.SIZES.BASE * 0.76,
//     },
//   },
// };

// const GalioApp = createDrawerNavigator(screens, options);

// export default GalioApp;
