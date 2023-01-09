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
// import TabBar from "./components/TabBar";
import LogInSignIn from "./Pages/LogInSignIn";
import Home from "./Pages/Home";
import SignIn from "./Pages/SignIn";
import AddProduct from "./Pages/AddProduct";
import TestSignin from "./Pages/TestSignin.js";
import TestLogin from "./Pages/TestLogin.js";
import Cart from "./Pages/Cart.js";
import EditeProfil from "./Pages/EditeProfil.js";

// import { PhoneAuthCredential } from 'firebase/auth';
import PhoneNumber from "./Pages/PhoneNumber";
import { NativeBaseProvider } from "native-base";
// import EmailConfirmation from "./components/EmailConfirmation.js";
import { UserContext } from "./UserContext.js";
import { useContext, useState } from "react";
const Stack = createNativeStackNavigator();

export default function App() {
  const [showContent, setShowContent] = useState("");
  return (
    <UserContext.Provider
      value={{
        showContent,
        setShowContent,
      }}
    >
      <NativeBaseProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="TestLogin">
            <Stack.Screen
              name="Log in"
              options={{ headerShown: false }}
              component={LogInSignIn}
            />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="History" component={History} />
            <Stack.Screen name="Create an account" component={SignIn} />
            <Stack.Screen name="PhoneNumber Verif" component={PhoneNumber} />
            <Stack.Screen
              name="TestSignin"
              component={TestSignin}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="TestLogin"
              component={TestLogin}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Profil"
              options={{ headerShown: false }}
              component={Profil}
            />
            {/* <Stack.Screen name="TabBar" component={TabBar} /> */}
            <Stack.Screen
              name="SideBar"
              options={{ headerShown: false }}
              component={SideBar}
            />
            <Stack.Screen
              name="Shop"
              options={{ headerShown: false }}
              component={Shop}
            />
            <Stack.Screen name="Products" component={Products} />
            <Stack.Screen name="ProductDetails" component={ProductDetails} />
            {/* <Stack.Screen name="Email Confiramtion" component={EmailConfirmation} /> */}
            <Stack.Screen
              name="AddProduct"
              options={{ headerShown: false }}
              component={AddProduct}
            />
            <Stack.Screen name="EditeProfil" component={EditeProfil} />
            <Stack.Screen name="Cart" component={Cart} />
          </Stack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    </UserContext.Provider>
  );
}
