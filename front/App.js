import * as React from 'react';
import { Button, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import SideBar from "./components/SideBar.js"

import LogInSignIn from "./Pages/LogInSignIn"
import Home from './Pages/Home';
import SignIn from "./Pages/SignIn"

// import { PhoneAuthCredential } from 'firebase/auth';
 import PhoneNumber from './Pages/PhoneNumber';
const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Log in">
    <Stack.Screen name="Log in" component={LogInSignIn}/>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Create an account" component={SignIn}/>
        <Stack.Screen name="PhoneNumber Verif" component={PhoneNumber}/>
    <Stack.Screen name="SideBar" component={SideBar}/>
    </Stack.Navigator>
  </NavigationContainer>
  );
}
