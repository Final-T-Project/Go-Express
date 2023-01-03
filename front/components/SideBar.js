<<<<<<< HEAD
import { StatusBar } from 'expo-status-bar';
import React, { useRef, useState } from 'react';
import { Animated, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View ,ScrollView} from 'react-native';
import profile from '../assets/profile.png';
=======
import { StatusBar } from "expo-status-bar";
import React, { useRef, useState } from "react";
import {
  Animated,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import profile from "../assets/profile.png";
>>>>>>> 0ccff3301cdc1f681943a642cfe289ea687eeaf5
// Tab ICons...
import home from "../assets/home.png";
import Shop from "../assets/Shop.png";
import notifications from "../assets/bell.png";
import settings from "../assets/settings.png";
import logout from "../assets/logout.png";
// Menu
<<<<<<< HEAD
import menu from '../assets/menu.png';
import close from '../assets/close.png';
// import Profil from '../Pages/Profil'
// Photo
import photo from '../assets/photo.jpg';
import { useNavigation } from '@react-navigation/native';
import Home from '../Pages/Home'
import TabBar from './TabBar'
=======
import menu from "../assets/menu.png";
import close from "../assets/close.png";

// Photo
import photo from "../assets/photo.jpg";
>>>>>>> 0ccff3301cdc1f681943a642cfe289ea687eeaf5

export default function SideBbar({navigation}) {
  const [Page,SetPage] = useState('Home');
  const [currentTab, setCurrentTab] = useState("Home");
  // To get the curretn Status of menu ...
  const [showMenu, setShowMenu] = useState(false);

  // Animated Properties...

  const offsetValue = useRef(new Animated.Value(0)).current;
  // Scale Intially must be One...
  const scaleValue = useRef(new Animated.Value(1)).current;
  const closeButtonOffset = useRef(new Animated.Value(0)).current;

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ justifyContent: "flex-start", padding: 15 }}>
        <Image
          source={profile}
          style={{
            width: 90,
            height: 90,
            borderRadius: 60,
            marginTop: 15,
          }}
        ></Image>

<<<<<<< HEAD
      <View style={{ justifyContent: 'flex-start', padding:25 }}>
        <TouchableOpacity onPress={()=>navigation.navigate("Profil")}><Image source={profile} style={{
          width: 90,
          height: 90,
          borderRadius: 60,
          marginTop: 30
        }}></Image>

        <Text style={{
          fontSize: 20,
          fontWeight: 'bold',
          color: 'white',
          marginTop: 10,
        }}>Hello Jenna </Text>

        
          {/* <Text style={{
            marginTop: 6,
            color: 'white'
          }}>View Profile</Text> */}
=======
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            color: "white",
            marginTop: 10,
          }}
        >
          Hello Jenna{" "}
        </Text>

        <TouchableOpacity>
          <Text
            style={{
              marginTop: 6,
              color: "white",
            }}
          >
            View Profile
          </Text>
>>>>>>> 0ccff3301cdc1f681943a642cfe289ea687eeaf5
        </TouchableOpacity>
      





       
        <View style={{ flexGrow: 1, marginTop: 50 }}>
          {
            // Tab Bar Buttons....
          }

          {TabButton(currentTab, setCurrentTab, "Home", home)}
          {TabButton(currentTab, setCurrentTab, "Shop", Shop)}
          {TabButton(currentTab, setCurrentTab, "Notifications", notifications)}
          {TabButton(currentTab, setCurrentTab, "Settings", settings)}
        </View>

        <View>{TabButton(currentTab, setCurrentTab, "LogOut", logout)}</View>
      </View>

      {
        // Over lay View...
      }

      <Animated.View
        style={{
          flexGrow: 1,
          backgroundColor: "white",
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          paddingHorizontal: 15,
          paddingVertical: 20,
          borderRadius: showMenu ? 15 : 0,
          // Transforming View...
          transform: [{ scale: scaleValue }, { translateX: offsetValue }],
        }}
      >
        {
          // Menu Button...
        }

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
              // Do Actions Here....
              // Scaling the view...
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

<<<<<<< HEAD
            Animated.timing(closeButtonOffset, {
              // YOur Random Value...
              toValue: !showMenu ? -30 : 0,
              duration: 300,
              useNativeDriver: true
            })
              .start()

            setShowMenu(!showMenu);
          }}>

            <Image source={showMenu ? close : menu} style={{
              width: 20,
              height: 20,
              tintColor: 'black',
              marginTop: 40,

            }}></Image>
        
=======
              Animated.timing(closeButtonOffset, {
                // YOur Random Value...
                toValue: !showMenu ? -30 : 0,
                duration: 300,
                useNativeDriver: true,
              }).start();

              setShowMenu(!showMenu);
            }}
          >
            <Image
              source={showMenu ? close : menu}
              style={{
                width: 20,
                height: 20,
                tintColor: "black",
                marginTop: 40,
              }}
            ></Image>
>>>>>>> 0ccff3301cdc1f681943a642cfe289ea687eeaf5
          </TouchableOpacity>
          {/* {Page === 'Home' ?
      <ScrollView>
              <View>
              
      </View>
      

<<<<<<< HEAD
      <ScrollView >

      
      
            </ScrollView>
        </ScrollView>:Page === 'Home' ? (
        <View>
          <TouchableOpacity onPress={()=> SetPage('Profil')}>
        </TouchableOpacity>
        <Profil />
        </View>)
        :Page ==="Home" ?(
        <View>
          <TouchableOpacity onPress={()=>SetPage('Home')}>
            
            </TouchableOpacity>
            <Articles />
            </View>):Page ==="Complain" ?(
            <View>
              <TouchableOpacity onPress={()=>SetPage('Home')}>
                
                </TouchableOpacity>
                <ComplainScreen />
                </View>):Page ==="Suggestion" ?(
                <View>
                  <TouchableOpacity onPress={()=>SetPage('Home')}>
                   
                    </TouchableOpacity><SuggesstionScreen />
                    </View>)
                    
                    : null
                    } */}
          <Text style={{
            fontSize: 30,
            fontWeight: 'bold',
            color: 'black',
            paddingTop: 20
          }}>{currentTab}</Text>

          {/* <Image source={photo} style={{
            width: '100%',
            height: 300,
            borderRadius: 15,
            marginTop: 25
          }}></Image> */}

   {/* <Text style={{
            fontSize: 20,
            fontWeight: 'bold'
            , paddingTop: 15,
            paddingBottom: 5
          }}>Jenna Ezarik</Text>

          <Text style={{
          }}>Techie, YouTuber, PS Lover, Apple Sheep's Sister</Text>
         */}
         
        </Animated.View>

      <TabBar navigation={navigation}/>
=======
          {/* <Text
            style={{
              fontSize: 30,
              fontWeight: "bold",
              color: "black",
              paddingTop: 20,
            }}
          >
            {currentTab}
          </Text>

          <Image
            source={photo}
            style={{
              width: "100%",
              height: 300,
              borderRadius: 15,
              marginTop: 25,
            }}
          ></Image>

          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              paddingTop: 15,
              paddingBottom: 5,
            }}
          >
            Jenna Ezarik
          </Text>

          <Text style={{}}>
            Techie, YouTuber, PS Lover, Apple Sheep's Sister
          </Text> */}
        </Animated.View>
>>>>>>> 0ccff3301cdc1f681943a642cfe289ea687eeaf5
      </Animated.View>
    </SafeAreaView>
  );
}

// For multiple Buttons...
const TabButton = (currentTab, setCurrentTab, title, image) => {
  return (
    <TouchableOpacity
      onPress={() => {
        if (title == "LogOut") {
          // Do your Stuff...
        } else {
          setCurrentTab(title);
        }
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingVertical: 8,
          backgroundColor: currentTab == title ? "white" : "transparent",
          paddingLeft: 13,
          paddingRight: 35,
          borderRadius: 8,
          marginTop: 15,
        }}
      >
        <Image
          source={image}
          style={{
            width: 27,
            height: 25,
            tintColor: currentTab == title ? "#5359D1" : "white",
          }}
        ></Image>

        <Text
          style={{
            fontSize: 15,
            fontWeight: "bold",
            paddingLeft: 15,
            color: currentTab == title ? "#5359D1" : "white",
          }}
        >
          {title}
        </Text>
      </View>
    </TouchableOpacity>
<<<<<<< HEAD
   
  )
     
}
=======
  );
};
>>>>>>> 0ccff3301cdc1f681943a642cfe289ea687eeaf5

const styles = StyleSheet.create({
  container: {
    flex: 1,
<<<<<<< HEAD
    backgroundColor: '#FFAD62',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
=======
    backgroundColor: "#5359D1",
    alignItems: "flex-start",
    justifyContent: "flex-start",
>>>>>>> 0ccff3301cdc1f681943a642cfe289ea687eeaf5
  },
});
