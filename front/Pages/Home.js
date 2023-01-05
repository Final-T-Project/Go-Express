import React, { useState } from "react";
import { StyleSheet, Text, View, Image, Button, Animated } from "react-native";
import { useNavigation } from "@react-navigation/native";

import SideBar from "../components/SideBar";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Ionic from "react-native-vector-icons/Ionicons";

export default function Home() {
  ///----------------------------------------------------> create the Tag of the Navigation tag <----------------------------------------------------------------------------///
  const Tab = createBottomTabNavigator();
  ///----------------------------------------------------------------------------------------------------------------------------------------------///
  const [logoScale, setLogoScale] = useState(new Animated.Value(1));
  const [fadeAnim] = useState(new Animated.Value(0));

  const animateLogo = () => {
    Animated.timing(logoScale, {
      toValue: 1.5,
      duration: 500,
      useNativeDriver: true,
    }).start(() => {
      Animated.timing(logoScale, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start();
    });
  };

  const animateText = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container}>
      <Animated.Image
        source={require("../assets/Shop.png")}
        style={[styles.logo, { transform: [{ scale: logoScale }] }]}
      />
      <Animated.View style={[styles.textContainer, { opacity: fadeAnim }]}>
        <Text style={styles.title}>Welcome to My App!</Text>
        <Text style={styles.description}>
          This is the home page of my app. Here you can find information about
          my app and its features.
        </Text>
      </Animated.View>
      <Button
        title="Go to Settings"
        onPress={() => navigation.navigate("Settings")}
        color="#841584"
      />
      <Button title="Animate Logo" onPress={animateLogo} color="#333" />
      <Button title="Animate Text" onPress={animateText} color="#333" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    padding: 20,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  textContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "#333",
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    marginHorizontal: 20,
    color: "#666",
  },
});
