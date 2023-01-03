<<<<<<< HEAD
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import SideBar from '../components/SideBar'
import Ionic from 'react-native-vector-icons/Ionicons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
=======
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NavigationContainer } from "@react-navigation/native";
>>>>>>> 0ccff3301cdc1f681943a642cfe289ea687eeaf5

import Ionic from "react-native-vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

export default function Home() {
  ///----------------------------------------------------> create the Tag of the Navigation tag <----------------------------------------------------------------------------///
  const Tab = createBottomTabNavigator();
  ///----------------------------------------------------------------------------------------------------------------------------------------------///

  return (
    <>
<<<<<<< HEAD
    
    < SideBar/>

     
    
=======
      <Text>HOMEEEEEE</Text>
>>>>>>> 0ccff3301cdc1f681943a642cfe289ea687eeaf5
    </>
  );
}
