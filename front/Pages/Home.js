import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';

import Ionic from 'react-native-vector-icons/Ionicons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


export default function Home() {

    ///----------------------------------------------------> create the Tag of the Navigation tag <----------------------------------------------------------------------------///
        const Tab=createBottomTabNavigator()
    ///----------------------------------------------------------------------------------------------------------------------------------------------///

  
  return (
    <>
    <Text>HOMEEEEEE</Text>
    

     
    
    </>
  )
}
