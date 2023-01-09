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
  ScrollView,
  ImageBackground,
} from "react-native";
import profile from "../assets/profile.png";
// Tab ICons...
import home from "../assets/feedback.png";
import cart from "front/assets/shopping-cart-empty-side-view.png";
import notifications from "front/assets/notification.png";
import chat from "../assets/chat.png";
import logout from "../assets/logout.png";
import menu from "../assets/menu.png";
import close from "../assets/close.png";
import { useNavigation } from "@react-navigation/native";
import TabBar from "../components/TabBar";

export default function SideBbar({ navigation }) {
  const [Page, SetPage] = useState("Home");
  const [currentTab, setCurrentTab] = useState("Home");
  // To get the curretn Status of menu ...
  const [showMenu, setShowMenu] = useState(false);

  // Animated Properties...

  const offsetValue = useRef(new Animated.Value(0)).current;
  // Scale Intially must be One...
  const scaleValue = useRef(new Animated.Value(1)).current;
  const closeButtonOffset = useRef(new Animated.Value(0)).current;

  return (
    <SafeAreaView  style={styles.container}>
      {/* blaset el contenue mta el side bar */}
     <ImageBackground  source={{uri:"https://res.cloudinary.com/dn9qfvg2p/image/upload/v1673040221/ekher_wba4yg.png"}} resizeMode="cover" style={styles.image}>
      <View  style={{ justifyContent: "flex-start", padding: 30 }}>
      
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Profil");
          }}
        >
          <Image
            source={profile}
            style={{
              width: 90,
              height: 90,
              borderRadius: 60,
              marginTop: 10,
            }}
          ></Image>
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
          <Text
            style={{
              fontSize: 15,
              // fontWeight: "bold",
              color: "white",
              marginTop: 10,
            }}
          >
            View Profil
          </Text>
        </TouchableOpacity>

        <View style={{ flexGrow: 1, marginTop: 60 }}>
          {
            // Tab Bar Buttons....
          }

          {TabButton(currentTab, setCurrentTab, "Feedback", home)}
          {TabButton(currentTab, setCurrentTab, "Notification", notifications)}
          {TabButton(currentTab, setCurrentTab, "Cart", cart)}
          {TabButton(currentTab, setCurrentTab, "Chat", chat)}
        </View>
        <View>{TabButton(currentTab, setCurrentTab, "LogOut", logout)}</View>
      
      </View>
  </ImageBackground>
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
          paddingVertical: 0,
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
                width: 30,
                height: 30,
                tintColor: "#ea580c",
                marginTop: 40,
              }}
            ></Image>
          </TouchableOpacity>
          {/* <Text
            style={{
              fontSize: 30,
              fontWeight: "bold",
              color: "red",
              paddingTop: 20,
            }}
          >
            {currentTab}
          </Text> */}
        </Animated.View>
        <TabBar navigation={navigation} />
        {/* navigation={navigation} */}
      </Animated.View>
    </SafeAreaView>
  );
}

// For multiple Buttons...
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
          // navigation.navigate("Shop");
        } else if (title == "Cart") {
          setCurrentTab("Cart");
        } else if (title == "Chat") {
          setCurrentTab("Chat");
        } else if (title == "Settings") {
          setCurrentTab("Settings");
        } else {
          navigation.navigate("Log in");
        }
      }}
      LogOut
      //onPress={() => navigation.navigate("Profil")}
    >
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
        }}
      >
        <Image
          source={image}
          style={{
            width: 27,
            height: 25,
            tintColor: currentTab == title ? "#ea580c" : "white",
          }}
        ></Image>

        <Text
          style={{
            fontSize: 15,
            fontWeight: "bold",
            paddingLeft: 15,
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
    backgroundColor: "#FFAD62",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  image: {
    flex: 1,
    justifyContent: "center",
    width:"100%",
    height:"100%"
  }
});
//side bar
