<<<<<<< HEAD
import * as React from 'react';
import { Button, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import SideBar from "./components/SideBar.js"
import History from "./Pages/History"
import LogInSignIn from "./Pages/LogInSignIn"
import Home from './Pages/Home';
import SignIn from "./Pages/SignIn"
import Profil from './Pages/Profil'
import TabBar from "./components/TabBar"
=======
import * as React from "react";
import { Button, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import SideBar from "./components/SideBar.js";
import Shop from "./Pages/Shop.js";
import Products from "./Pages/Products.js";
import ProductDetails from "./Pages/ProductDetails.js";

import LogInSignIn from "./Pages/LogInSignIn";
import Home from "./Pages/Home";
import SignIn from "./Pages/SignIn";

>>>>>>> 0ccff3301cdc1f681943a642cfe289ea687eeaf5
// import { PhoneAuthCredential } from 'firebase/auth';
import PhoneNumber from "./Pages/PhoneNumber";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
<<<<<<< HEAD
    <Stack.Navigator initialRouteName="Log in">
    <Stack.Screen name="Log in" component={LogInSignIn}/>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="History" component={History}/>
        <Stack.Screen name="Create an account" component={SignIn}/>
        <Stack.Screen name="PhoneNumber Verif" component={PhoneNumber}/>
        <Stack.Screen name="Profil" component={Profil}/>
        <Stack.Screen name="TabBar" component={TabBar}/>
    <Stack.Screen name="SideBar"  options = {{headerShown :false}} component={SideBar}/>
    </Stack.Navigator>
  </NavigationContainer>
=======
      <Stack.Navigator initialRouteName="Shop">
        <Stack.Screen name="Log in" component={LogInSignIn} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Create an account" component={SignIn} />
        <Stack.Screen name="PhoneNumber Verif" component={PhoneNumber} />
        <Stack.Screen name="SideBar" component={SideBar} />
        <Stack.Screen name="Shop" component={Shop} />
        <Stack.Screen name="Products" component={Products} />
        <Stack.Screen name="ProductDetails" component={ProductDetails} />
      </Stack.Navigator>
    </NavigationContainer>
>>>>>>> 0ccff3301cdc1f681943a642cfe289ea687eeaf5
  );
}
