import * as React from "react";
import { StatusBar } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import SideBar from "./components/SideBar.js";
import Shop from "front/test/Shop.js";
import Products from "./Pages/Products.js";
import History from "./Pages/History";
import Profil from "./Pages/Profil";
import LogInSignIn from "./Pages/LogInSignIn";
import SignIn from "./Pages/SignIn";
import AddProduct from "./Pages/AddProduct";
import TestSignin from "./Pages/TestSignin.js";
import TestLogin from "./Pages/TestLogin.js";
import EditeProfil from "./Pages/EditeProfil.js";
import EditeAdress from "./Pages/EditeAdress.js";
import PhoneNumber from "./Pages/PhoneNumber";
import { NativeBaseProvider } from "native-base";
import { UserContext } from "./UserContext.js";
import { useContext, useState } from "react";
import Shopping from "./Pages/Shopping.js";
import MyCart from "./test/MyCart.js";
import ProductInfo from "./Pages/ProductInfo.js";
import ImageDetails from "./Pages/ImageDetails";
import Home from "./Pages/Home.js";
import Serves from "./Pages/Serves.js";
import BookService from "./Pages/BookService.js";
import BookingDetails from "./Pages/BookingDetails.js";

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
      <StatusBar backgroundColor={"white"} barStyle="dark-content" />
      <NativeBaseProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="BookService"
            screenOptions={{
              headerTintColor: "white",
              headerStyle: {
                backgroundColor: "#ED5C00",
              },
            }}
          >
            <Stack.Screen
              name="LogInSignIn"
              options={{ headerShown: false }}
              component={LogInSignIn}
            />
            {/* <Stack.Screen name="Home" component={Home} /> */}
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
            <Stack.Screen name="Shop" component={Shop} />
            <Stack.Screen name="Products" component={Products} />
            {/* <Stack.Screen name="Email Confiramtion" component={EmailConfirmation} /> */}
            <Stack.Screen
              name="AddProduct"
              options={{ headerShown: false }}
              component={AddProduct}
            />
            <Stack.Screen name="EditeProfil" component={EditeProfil} />
            <Stack.Screen name="EditeAdress" component={EditeAdress} />
            <Stack.Screen name="Shopping" component={Shopping} />
            <Stack.Screen name="MyCart" component={MyCart} />
            <Stack.Screen name="ProductInfo" component={ProductInfo} />
            <Stack.Screen name="ImageDetails" component={ImageDetails} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Serves" component={Serves} />
            <Stack.Screen name="BookService" component={BookService} />
            <Stack.Screen name="Booking Details" component={BookingDetails} />
          </Stack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    </UserContext.Provider>
  );
}
