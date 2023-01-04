import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NavigationContainer } from "@react-navigation/native";

import SideBar from "../components/SideBar";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Ionic from "react-native-vector-icons/Ionicons";

export default function Home() {
  ///----------------------------------------------------> create the Tag of the Navigation tag <----------------------------------------------------------------------------///
  const Tab = createBottomTabNavigator();
  ///----------------------------------------------------------------------------------------------------------------------------------------------///

  return (
    <>
      <Text>HOMEEEEEE</Text>
      <SideBar />
    </>
  );
}