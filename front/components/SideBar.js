import React, { useRef, useState, useContext, useEffect } from "react";
import {
  Animated,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  ImageBackground,
} from "react-native";
import profile from "../assets/profile.png";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Home from "../Pages/yahya";
import cart from "front/assets/shopping-cart-empty-side-view.png";
import notifications from "front/assets/notification.png";
import chat from "../assets/chat.png";
import logout from "../assets/logout.png";
import menu from "../assets/menu.png";
import close from "../assets/close.png";
import { useNavigation } from "@react-navigation/native";
import TabBar from "../components/TabBar";
import { UserContext } from "../UserContext";
import axios from "axios";
import IPADRESS from "../config/IPADRESS";

export default function SideBbar({ navigation, route }) {
  const [Page, SetPage] = useState("Home");
  const [currentTab, setCurrentTab] = useState("Home");
  // To get the curretn Status of menu ...
  const [showMenu, setShowMenu] = useState(false);
  // Animated Properties...
  const offsetValue = useRef(new Animated.Value(0)).current;
  // Scale Intially must be One...
  const scaleValue = useRef(new Animated.Value(1)).current;
  const closeButtonOffset = useRef(new Animated.Value(0)).current;
  // state to save user data
  const [userDataProfile, setUserDataProfile] = useState([]);
  const { userId } = useContext(UserContext);
  // to get profile information
  useEffect(() => {
    axios
      .get(`http://${IPADRESS}:5000/users/getUserPorfile/${userId}`)
      .then((response) => {
        setUserDataProfile(response.data);
        // console.log("user_data", response.data);
      })
      .catch((error) => {
        alert(error);
      });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {/* blaset el contenue mta el side bar */}
      <ImageBackground
        source={{
          uri: "https://res.cloudinary.com/dn9qfvg2p/image/upload/v1674060984/font_oq0zp9.png",
        }}
        // resizeMode="cover"
        style={styles.image}
      >
        <View style={{ justifyContent: "flex-start" }}>
          {userDataProfile.map((element) => {
            if (element.photo) {
              return (
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("Profil");
                  }}
                >
                  <Image
                    source={{
                      uri: element.photo,
                    }}
                    style={{
                      width: 90,
                      height: 90,
                      borderRadius: 7,
                      marginTop: 10,
                      marginLeft: 23,
                    }}
                  ></Image>
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: "bold",
                      color: "white",
                      marginTop: 10,
                      left:10
                    }}
                  >
                    {element.name}{" "}
                  </Text>
                  <Text
                    style={{
                      fontSize: 15,
                      // fontWeight: "bold",
                      color: "white",
                      marginTop: 10,
                      left:10
                    }}
                  >
                    View Profil
                  </Text>
                </TouchableOpacity>
              );
            } else {
              return (
                // hello user and view profil 
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("Profil");
                  }}
                >
                  {/* user image */}
                  <Image
                    source={{
                      uri: `https://invisiblechildren.com/wp-content/uploads/2012/07/facebook-profile-picture-no-pic-avatar.jpg`,
                    }}
                    style={{
                      width: 90,
                      height: 90,
                      borderRadius: 7,
                      marginTop: -30,
                      marginLeft: 23,
                      left:30,
                      
                    }}
                  ></Image>
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: "bold",
                      color: "white",
                      marginTop: 10,
                      left:30
                    }}
                  >
                    Hello {element.name}{" "}
                  </Text>
                  <Text
                    style={{
                      fontSize: 15,
                      // fontWeight: "bold",
                      color: "white",
                      marginTop:10,
                      left:30
                    }}
                  >
                    View Profil
                  </Text>
                </TouchableOpacity>
              );
            }
          })}

          <View style={{ flexGrow: 1, marginTop: 60 }}>
            {TabButton(
              currentTab,
              setCurrentTab,
              "Notification",
              notifications
            )}
            {TabButton(currentTab, setCurrentTab, "MyCart", cart)}
            {TabButton(currentTab, setCurrentTab, "Chat", chat)}
          </View>
          <View>{TabButton(currentTab, setCurrentTab, "LogOut", logout)}</View>
        </View>
      </ImageBackground>
      <Animated.View
        style={{
          flexGrow: 1,
          backgroundColor: "white",
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          paddingHorizontal: 1,
          paddingVertical: 0,
          borderRadius: showMenu ? 15 : 0,
          
          // Transforming View...
          transform: [{ scale: scaleValue }, { translateX: offsetValue }],
        }}
      >
        <Animated.View
          style={{
            transform: [
              {
                translateY: closeButtonOffset,
              },
            ],
          }}
        >
          <TouchableOpacity
            onPress={() => {
              Animated.timing(scaleValue, {
                toValue: showMenu ? 1 : 0.88,
                duration: 300,
                useNativeDriver: true,
              }).start();

              Animated.timing(offsetValue, {
                // YOur Random Value...
                toValue: showMenu ? 0 : 230,
                duration: 300,
                useNativeDriver: true,
              }).start();

              Animated.timing(closeButtonOffset, {
                // YOur Random Value...
                toValue: !showMenu ? -30 : 0,
                duration: 300,
                useNativeDriver: true,
              }).start();

              setShowMenu(!showMenu);
            }}
          >
            {/* x & 3bar of the side bar */}
            <Image
              source={showMenu ? close : menu}
              style={{
                width: 30,
                height: 30,
                tintColor: "#171717",
                marginTop: 40,
              }}
            />
          </TouchableOpacity>
        </Animated.View>
        <Home />
        {/* <Home  /> */}
        <TabBar navigation={navigation} />
      </Animated.View>
    </SafeAreaView>
  );
}
const TabButton = (currentTab, setCurrentTab, title, image) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        if (title == "Feedback") {
          setCurrentTab("Feedback");

          //  navigation.navigate("Home");
        } else if (title == "Notification") {
          setCurrentTab("Notification");
          navigation.navigate("Notification");
        } else if (title == "MyCart") {
          setCurrentTab("MyCart");
          navigation.navigate("Cart");
        } else if (title == "Chat") {
          navigation.navigate("Chat");
          setCurrentTab("Chat");
        } else if (title == "Settings") {
          setCurrentTab("Settings");
        } else {
          navigation.navigate("TestLogin");
        }
      }}
      LogOut
      //onPress={() => navigation.navigate("Profil")}
    >
      {/* button side */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingVertical: 8,
          backgroundColor: currentTab == title ? "" : "transparent",
          paddingLeft: 13,
          paddingRight: 35,
          borderRadius: 10,
          marginTop: 20,
          left:10
        }}
      >
        <Image
          source={image}
          style={{
            width: 27,
            height: 25,
            left:10,
            tintColor: currentTab == title ? "#ea580c" : "white",
          }}
        ></Image>

        <Text
          style={{
            fontSize: 15,
            fontWeight: "bold",
            paddingLeft: 15,
            left:10,
            color: currentTab == title ? "white" : "white",
          }}
        >
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    
  },
  image: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
    height: "100%",
    
  },
});
// nex Drower
// import React from 'react';

// import {
//   Image, StyleSheet, ScrollView, SafeAreaView, Platform,
// } from 'react-native';
// import {

//   DrawerItems,
// } from 'react-navigation';

// import { createDrawerNavigator } from '@react-navigation/drawer';

// // screens
// import MyCart from "../test/MyCart";
// import Shop from 'front/test/Shop.js';
// import History from "../Pages/History";
// import Profil from "../Pages/Profil"; //contain the feedback side
// import TestLogin from "../Pages/TestLogin.js"
// // import Presentation from './src/screens/Presentation';
// // import Dashboard from './src/screens/Dashboard';
// // import Register from './src/screens/Register';
// // import Registerv2 from './src/screens/Registerv2';
// // import Grid from './src/screens/Grid';

//  import theme from '../components/theme';
// import { Block, Icon, Text } from 'galio-framework';

// const SideBar = props =>{
// return (
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
// )};

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
//   contentComponent: props => <SideBar {...props} />,
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
