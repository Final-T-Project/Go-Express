import * as React from "react";
import { Button, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import SideBar from "./components/SideBar.js";
import Shop from "./Pages/Shop.js";
import Products from "./Pages/Products.js";
import ProductDetails from "./Pages/ProductDetails.js";
import History from "./Pages/History";
import Profil from "./Pages/Profil";
import TabBar from "./components/TabBar";
import LogInSignIn from "./Pages/LogInSignIn";
import Home from "./Pages/Home";
import SignIn from "./Pages/SignIn";

// import { PhoneAuthCredential } from 'firebase/auth';
import PhoneNumber from "./Pages/PhoneNumber";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SideBar">
        <Stack.Screen name="Log in" component={LogInSignIn} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="History" component={History} />
        <Stack.Screen name="Create an account" component={SignIn} />
        <Stack.Screen name="PhoneNumber Verif" component={PhoneNumber} />
        <Stack.Screen name="Profil" component={Profil} />
        <Stack.Screen name="TabBar" component={TabBar} />
        <Stack.Screen
          name="SideBar"
          options={{ headerShown: false }}
          component={SideBar}
        />
        <Stack.Screen name="Shop" component={Shop} />
        <Stack.Screen name="Products" component={Products} />
        <Stack.Screen name="ProductDetails" component={ProductDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
} 