import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from "./Navigation/Tabs"

export default function Home() {

    ///----------------------------------------------------> create the Tag of the Navigation tag <----------------------------------------------------------------------------///
        const Navigation=useNavigation()
    ///----------------------------------------------------------------------------------------------------------------------------------------------///

  
  return (
    <>
    <Text>HOMEEEEEE</Text>

     
    
    </>
  )
}
