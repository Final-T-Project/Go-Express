

// import React from 'react';
// import {
//   Alert,
//   Animated,
//   StyleSheet,
//   TouchableOpacity,
//   View,
//   Dimensions
// } from 'react-native';
// import { CurvedBottomBar } from 'react-native-curved-bottom-bar';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import { NavigationContainer } from '@react-navigation/native';
// import { useNavigation } from "@react-navigation/native";
// import Profil from '../Pages/Profil';
// import Shop from '../Pages/Shop';
//  const TabBar = () => {
//   const navigation = useNavigation();
//   const { width, height } = Dimensions.get('window');
//   const _renderIcon = (routeName, selectedTab) => {
//     let icon = '';

//     switch (routeName) {
//       case 'title1':
//         icon = 'ios-home-outline';
//         break;
//       case 'title2':
//         icon = 'settings-outline';
//         break;
//     }

//     return (
//       <Ionicons
//         name={icon}
//         size={25}
//         color={routeName === selectedTab ? 'red' : 'gray'}
//       />
//     );
//   };
//   // const renderTabBar = ({ routeName, selectedTab, navigate }) => {
//     return (
//       <TouchableOpacity
//         // onPress={() => alert("routeName")}
//         style={{
//           flex: 1,
//           alignItems: 'center',
//           justifyContent: 'center',
//         }}>
//         {_renderIcon(routeName, selectedTab)}
//       </TouchableOpacity>
//     );
//   };

//   return (
//     <View style={{ flex: 1 }}>
      
//         <CurvedBottomBar.Navigator
//           style={styles.bottomBar}
//           strokeWidth={0.5}
//           strokeColor="#DDDDDD"
//           height={55}
          
//           circleWidth={55}
//           bgColor="#FFAD62"
//           initialRouteName=""
//           borderTopLeftRight={0}
//           renderCircle={() => (
//             <Animated.View style={styles.btnCircle}>
//               <TouchableOpacity
//                 style={{
//                   flex: 1,
//                   justifyContent: 'center',
//                 }}
//                 onPress={() => {navigation.navigate('Profil')}}>
//                 <Ionicons name={'apps-sharp'} color="gray" size={25} />
//               </TouchableOpacity>
//             </Animated.View>
//           )}
//           >
//           <CurvedBottomBar.Screen
//             name="title1"
//             position="LEFT"
//             component={() => (
//               <Shop />
//             )}
//           />
//           <CurvedBottomBar.Screen
//             name="title2"
            
//             component={() => (
//               <Shop />
//             )}
//             position="RIGHT"
//           />
//         </CurvedBottomBar.Navigator>
      
//     </View>
//   );

// export default TabBar
// export const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     marginTop:200,
//   },
//   button: {
//     marginVertical: 5,
//   },
//   bottomBar: {
//     // height: 30,
    
//   },
//   btnCircle: {
//     width: 60,
//     height: 60,
//     borderRadius: 35,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: 'white',
//     padding: 10,
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 0.5,
//     },
//     shadowOpacity: 0.2,
//     shadowRadius: 1.41,
//     elevation: 1,
//     bottom: 30,
//   },
//   imgCircle: {
//     width: 30,
//     height: 30,
//     tintColor: 'gray',
//   },
//   img: {
//     width: 30,
//     height: 30,
//   },
// });
import { View, Image, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, Animated, Text, Alert,Dimensions,SafeAreaView} from 'react-native';
import SideBbar from './SideBar';
import React from 'react'
const { width, height } = Dimensions.get('window');


const TabBar = ({navigation}) => {
    


   
        return (
            <SafeAreaView style={{
                flex: 1,
                top:height -70,
                flexDirection: 'column',
                width: width,
                 position: 'absolute',
            }}>

                 <View style={{

                   
                    alignSelf: 'center',
                    backgroundColor: '#ea580c',
                    width: 70,
                    height: 70,
                    borderRadius: 35,
                    bottom: 35,
                    zIndex: 10,
                    right:-4,

                }}>

                    <TouchableOpacity >
                        <View style={[styles.button, styles.actionBtn]}>
                           
                            <Image style={{ width: 50, height: 50 }}
                                resizeMode="contain"
                                source={{ uri: 'https://res.cloudinary.com/dn9qfvg2p/image/upload/v1672869590/Sans_titre-removebg-preview_pqpw3d.png' }} 
                                onPress={()=>{Alert.alert("ok")}}/>
                        </View>
                    </TouchableOpacity>
                </View> 
                <View style={{

                    position: 'absolute',
                    backgroundColor: '#ffedd5',
                    border: 2,
                    radius: 3,
                    shadowOpacity: 0.3,
                    shadowRadius: 3,
                    shadowOffset: {

                        height: 3, width: 3
                    },
                    x: 0,
                    y: 0,
                    style: { marginVertical: 5 },
                    bottom: 0,
                    width: '100%',
                    height: 70,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingVertical: 10,
                    paddingHorizontal: 25,
                    borderTopLeftRadius:40,
                     borderTopRightRadius: 40


                }}>

                    <View style={{


                        flexDirection: 'column', alignItems: 'center', justifyContent: 'center'
                    }}>
                        <TouchableOpacity  onPress={() => {navigation.navigate('SideBar')}} >
                            <Image

                                style={{ width: 30, height: 30 }}

                                source={{ uri: 'https://res.cloudinary.com/dn9qfvg2p/image/upload/c_scale,w_512/v1672864683/home_nobecd.png' }}

                               
                            >

                            </Image>

                        </TouchableOpacity>
                        <Text style={{justifyContent:'center',alignItems:'center'}}>Home</Text>
                    </View>
                    
                    <View style={{
                        flexDirection: 'column', alignItems: 'center',justifyContent:'center',marginStart:30
                    }}>

                        <TouchableOpacity
                            
                        >
                            <Image
                                style={{  width: 30, height: 30 }}
                                source={{ uri: 'https://res.cloudinary.com/dn9qfvg2p/image/upload/v1672864774/history_xdugiz.png' }}
                                
                            />
                       
                        </TouchableOpacity>
                        <Text style={{justifyContent:'center',alignItems:'center' }}>history</Text>
                    </View>

                        <View style={{
                             flexDirection: 'column', alignItems: 'center',justifyContent:'space-between',marginStart:85,
                        }}>

                            <TouchableOpacity
                             onPress={() => { navigation.navigate('Shop') }}

                            >
                                <Image
                                    source={{ uri: 'https://res.cloudinary.com/dn9qfvg2p/image/upload/v1672864774/cart_oaakcj.png' }}
                                   
                                    style={{ marginHorizontal: 16, width: 30, height: 30 }}
                                    containerStyle={{ marginHorizontal: 16 }}
                                />
                       
                            </TouchableOpacity>
                            <Text style={{justifyContent:'center',alignItems:'center' }}>Shop</Text>
                        </View>
                        <View style={{
                            flexDirection: 'column', alignItems: 'center',justifyContent:'flex-end',
                          
                        }}>
                            <TouchableOpacity
                                onPress={() => {navigation.navigate("Profil")}}
                            >
                                <Image
                                    source={{ uri: 'https://res.cloudinary.com/dn9qfvg2p/image/upload/v1672864997/user_1_uxrcvl.png' }}

                                    
                                    style={{ marginHorizontal: 16, width: 30, height: 30 }}
                                    containerStyle={{ marginHorizontal: 16 }}
                                />
                     
                            </TouchableOpacity>
                            <Text style={{justifyContent:'center',alignItems:'center' }}> Profile </Text>
                           
                        </View>

                    {/* </View> */}
                </View>
            </SafeAreaView>
        );
    

    
}


const styles = StyleSheet.create({

    MainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: ''
    },
    button: {
        width: 60,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: 'grey',
        shadowOpacity: 0.1,
        shadowOffset: { x: 2, y: 0 },
        shadowRadius: 2,
        borderRadius: 30,
        position: 'absolute',
        bottom: 20,
        right: 0,
        top: 5,
        left: 5,
        shadowOpacity: 6.0,

    },
    actionBtn: {

        backgroundColor: 'white',
        textShadowOffset: { width: 5, height: 5 },
        textShadowRadius: 10,
        borderWidth: 2,
        borderColor: '#ffedd5'
        

    }


});

export default TabBar

