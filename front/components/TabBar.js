// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { Animated, Dimensions, Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// import 'react-native-gesture-handler';
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// // Font Awesome Icons...
// import { FontAwesome5 } from '@expo/vector-icons'
// import { useRef } from 'react';

// const Tab = createBottomTabNavigator();

// // Hiding Tab Names...
// export default function App() {
//   // Animated Tab Indicator...
//   const tabOffsetValue = useRef(new Animated.Value(0)).current;
//   return (
   
//       <Tab.Navigator tabBarOptions={{
//         showLabel: false,
//         // Floating Tab Bar...
//         style: {
//           backgroundColor: 'white',
//           position: 'absolute',
//           flex:1,
//           bottom: 40,
//           marginHorizontal: 20,
//           // Max Height...
//           height: 60,
//           borderRadius: 10,
//           //Shadow...
//           shadowColor: '#000',
//           shadowOpacity: 0.06,
//           shadowOffset: {
//             width: 10,
//             height: 10,
        
//         marginVertical:600
//           },
//           paddingHorizontal: 20,
          
//         }
//       }}>

//         {
//           // Tab Screens....

//           // Tab ICons....
//         }
//         {/* home botton */}
//         <Tab.Screen name={"Home"} component={HomeScreen} options={{
//           tabBarIcon: ({ focused }) => (
//             <View style={{
//               // centring Tab Button...
//               position: 'absolute',
//               top: 20
//             }}>
//               <FontAwesome5
//                 name="home"
//                 size={20}
//                 color={focused ? 'red' : 'gray'}
//               ></FontAwesome5>
//             </View>
//           )
//         }} listeners={({ navigation, route }) => ({
//           // Onpress Update....
//           tabPress: e => {
//             Animated.spring(tabOffsetValue, {
//               toValue: 0,
//               useNativeDriver: true
//             }).start();
//           }
//         })}></Tab.Screen>
//         {/* add product button */}
        
// {/* server button */}
//         <Tab.Screen name={"Search"} component={SearchScreen} options={{
//           tabBarIcon: ({ focused }) => (
//             <View style={{
//               // centring Tab Button...
//               position: 'absolute',
//               top: 20
//             }}>
//               <FontAwesome5
//                 name="server"
//                 size={20}
//                 color={focused ? 'red' : 'gray'}
//               ></FontAwesome5>
//             </View>
//           )
//         }} listeners={({ navigation, route }) => ({
//           // Onpress Update....
//           tabPress: e => {
//             Animated.spring(tabOffsetValue, {
//               toValue: getWidth(),
//               useNativeDriver: true
//             }).start();
//           }
//         })}></Tab.Screen>
// {/*add product button  */}

//         {

//           // Extra Tab Screen For Action Button..
//         }

// {/* cart-plus button */}
//         <Tab.Screen name={"Settings"} component={SettingsScreen} options={{
//           tabBarIcon: ({ focused }) => (
//             <View style={{
//               // centring Tab Button...
//               position: 'absolute',
//               top: 20
//             }}>
//               <FontAwesome5
//                 name="cart-plus"
//                 size={20}
//                 color={focused ? 'red' : 'gray'}
//               ></FontAwesome5>
//             </View>
//           )
//         }} listeners={({ navigation, route }) => ({
//           // Onpress Update....
//           tabPress: e => {
//             Animated.spring(tabOffsetValue, {
//               toValue: getWidth() * 4,
//               useNativeDriver: true
//             }).start();
//           }
//         })}></Tab.Screen>

//       </Tab.Navigator>

      
  
//   );
// }

// function getWidth() {
//   let width = Dimensions.get("window").width

//   // Horizontal Padding = 20...
//   width = width - 100

//   // Total five Tabs...
//   return width / 5
// }

// function EmptyScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//     </View>
//   );
// }

// function SettingsScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Settings!</Text>
//     </View>
//   );
// }

// function HomeScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
//       <Text>Home!</Text>
//     </View>
//   );
// }

// function NotificationScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Notifications!</Text>
//     </View>
//   );
// }

// function SearchScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Search!</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fffff',
//     alignItems: 'center',
//     justifyContent: 'center',
    
//   },
// });
import React from 'react';
import {
  Alert,
  Animated,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { CurvedBottomBar } from 'react-native-curved-bottom-bar';
import Ionicons from 'react-native-vector-icons/Ionicons';


 const TabBar = ({navigation}) => {
  const _renderIcon = (routeName, selectedTab) => {
    let icon = '';

    switch (routeName) {
      case 'title1':
        icon = 'ios-home-outline';
        break;
      case 'title2':
        icon = 'settings-outline';
        break;
    }

    return (
      <Ionicons
        name={icon}
        size={25}
        color={routeName === selectedTab ? 'red' : 'gray'}
      />
    );
  };
  const renderTabBar = ({ routeName, selectedTab, navigate }) => {
    return (
      <TouchableOpacity
        onPress={() => navigate(routeName)}
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {_renderIcon(routeName, selectedTab)}
      </TouchableOpacity>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      
        <CurvedBottomBar.Navigator
          style={styles.bottomBar}
          strokeWidth={0.5}
          strokeColor="#DDDDDD"
          height={55}
          circleWidth={55}
          bgColor="#FFAD62"
          initialRouteName="title1"
          borderTopLeftRight
          renderCircle={({ selectedTab, navigate }) => (
            <Animated.View style={styles.btnCircle}>
              <TouchableOpacity
                style={{
                  flex: 1,
                  justifyContent: 'center',
                }}
                onPress={() => {navigation.navigate('Profil')}}>
                <Ionicons name={'apps-sharp'} color="gray" size={25} />
              </TouchableOpacity>
            </Animated.View>
          )}
          tabBar={renderTabBar}>
          <CurvedBottomBar.Screen
            name="title1"
            position="LEFT"
            component={() => (
              <View style={{ backgroundColor: '#BFEFFF', flex: 1 }} />
            )}
          />
          <CurvedBottomBar.Screen
            name="title2"
            component={() => (
              <View style={{ backgroundColor: '#FFEBCD', flex: 1 }} />
            )}
            position="RIGHT"
          />
        </CurvedBottomBar.Navigator>
      
    </View>
  );
};
export default TabBar
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  button: {
    marginVertical: 5,
  },
  bottomBar: {},
  btnCircle: {
    width: 60,
    height: 60,
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0.5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 1,
    bottom: 30,
  },
  imgCircle: {
    width: 30,
    height: 30,
    tintColor: 'gray',
  },
  img: {
    width: 30,
    height: 30,
  },
});