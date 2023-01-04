import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Button, Image } from "react-native";
import { useState } from "react";

import SideBar from "../components/SideBar";

import eye from "../assets/eye.png";
///----------------------------------------------------> Firebase stuff importation  <----------------------------------------------------------------------------///

import firebaseConfig from "../config/firebase"; //  ----------->  T IMPORTIIII EL CONFIG TA3 EL FIREBASE
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth"; // importing the auth of Firebase
import { initializeApp } from "firebase/app";

///----------------------------------------------------------------------------------------------------------------------------------------------///
import { useNavigation } from "@react-navigation/native";

export default function App() {
  ///----------------------------------------------------> States <----------------------------------------------------------------------------///
  const [value, setValue] = useState({
    email: "", //         TO STORE THE EMAIL INPUT
    password: "", //   TO STORE THE PASSWORD INPUT
    error: "", // ST7A9ITHECH LHA9 AMAAA TAJEM TESTHA9HA
  });

  const [user, setUser] = useState("");
  const [userId, setUserId] = useState("");

  const app = initializeApp(firebaseConfig); //  ----------->  BECH NAAMLOU INITIALIZATION LEL CONFIG TA3 EL FIREBASE W NRODOUH EL app MTE3NA
  const auth = getAuth(app); //  ----------->  TA3TIIII AUTHORISATION LEL app MTE3EKKK BECH TNAJEM TESTAKHDEMHA KI T CREATE WALA SIGN IN LEL USER
  ///----------------------------------------------------------------------------------------------------------------------------------------------///

  ///----------------------------------------------------> USE NAVIGATE APPLICATION <----------------------------------------------------------------------------///
  const Navigation = useNavigation();
  ///----------------------------------------------------------------------------------------------------------------------------------------------///

  ///----------------------------------------------------> function for handling the creating the account (FEL SignIn.tsx) <-----------------------------------------///

  ///----------------------------------------------------------------------------------------------------------------------------------------------///

  ///----------------------------------------------------> function for handling the Sign In to te account <-----------------------------------------///
  const handleLogIn = () => {
    signInWithEmailAndPassword(auth, value.email, value.password) //  -----------> METHOD FEL FIREBASE TA3MEL BIHA EL SIGN IN (TET2AKED MEL EMAIL WEL PASSWORD)
      .then((userCredential) => {
        //  ----------->  KIMA FEL CREATION , EL FIREBASE YRAJA3LEK OBJECT BAAD MA TEM 3AMALEYET EL SIGN IN CORRECTLY
        alert(
          "YYEYYYY CREDENTIAL ARE CORRECT , NOW YOU WILL BE IN THE HOME PAGE"
        );
        console.log(userCredential);
        setValue({ ...value, error: "" });
        Navigation.navigate("SideBar");
      })
      .catch((error) => {
        setValue({ ...value, error: error.code });
        if (
          error.code === "auth/invalid-email" ||
          error.code === "auth/user-not-found"
        ) {
          alert("Ekteb EMAIL shihhh ya hajjj");
          return;
        }
        if (error.code === "auth/wrong-password") {
          alert("El password ghalett");
        }
        if (!value.email.length || !value.password.length) {
          alert("Please fill all information");
        } else {
          console.log(error.message);
        }
      });
  };
  ///----------------------------------------------------------------------------------------------------------------------------------------------///

  ///-------------------------------------------------------------------> The Sign up / Sign In structure page  <--------------------------------------------///

  return (
    <>
      <View style={css.container}>
        <View style={css.box}>
          <Text style={css.textParam}> Log In : </Text>
          <Text
            style={{
              marginTop: 20,
              textAlign: "left",
              fontSize: 20,
              fontWeight: "bold",
              marginLeft: 35,
              marginBottom: 8,
            }}
          >
            Email
          </Text>
          {/** ---------------------------------------------------EMAIL INPUT -----------------------------------------------*/}

          <View style={{ alignItems: "center" }}>
            <TextInput
              style={{
                height: 50,
                fontSize: 17,
                borderColor: "black",
                borderWidth: 1,
                padding: 10,
                width: 290,
                borderRadius: 100,
                alignItems: "center",
              }}
              placeholder="Your Email here"
              onChangeText={(text) => setValue({ ...value, email: text })}
            />
          </View>
          <Text
            style={{
              marginTop: 40,
              textAlign: "left",
              fontSize: 20,
              fontWeight: "bold",
              marginLeft: 35,
              marginBottom: 8,
            }}
          >
            Password
          </Text>
          {/** ---------------------------------------------------PASSWORD INPUT -----------------------------------------------*/}

          <View style={{ alignItems: "center" }}>
            <TextInput
              secureTextEntry={true}
              style={{
                height: 50,
                fontSize: 17,
                borderColor: "black",
                borderWidth: 1,
                padding: 10,
                width: 290,
                borderRadius: 100,
                alignItems: "center",
              }}
              placeholder="Your password here"
              onChangeText={(text) => setValue({ ...value, password: text })}
            />
          </View>

          <Image
            source={eye}
            style={{
              width: 30,
              height: 30,
              position: "absolute",
              marginLeft: 299,
              marginTop: 40,
            }}
          />

          {value.error === "auth/wrong-password" ? (
            <Text
              style={{
                marginTop: 0,
                textAlign: "center",
                fontSize: 17,
                fontWeight: "400",
                color: "red",
              }}
              onPress={() => Navigation.navigate("Create an account")}
            >
              Wrong password
            </Text>
          ) : null}
          <Text
            style={{
              marginTop: 40,
              textAlign: "center",
              fontSize: 17,
              fontWeight: "400",
            }}
            onPress={() => Navigation.navigate("Create an account")}
          >
            Don't have an account, sign in{" "}
          </Text>

          {/** ---------------------------------------------------BUTTONS Sign in  -----------------------------------------------*/}
          <View style={{ alignItems: "center" }}>
            <Text
              style={{
                fontSize: 17,
                fontWeight: "500",
                borderRadius: 44,
                backgroundColor: "#40946C",
                color: "white",
                padding: 15,
                marginTop: 30,
                textAlign: "center",
                width: 150,
              }}
              onPress={() => handleLogIn()}
            >
              {" "}
              Sign in{" "}
            </Text>
          </View>

          <StatusBar style="inverted" />
        </View>
      </View>
    </>
  );
}
///----------------------------------------------------------------------------------------------------------------------------------------------///

const css = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFE2AA",
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    backgroundColor: "white",
    width: 350,
    height: 500,
    borderRadius: 44,

    justifyContent: "center",

    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 60,
    shadowRadius: 40,
    elevation: 20,
  },
  textParam: {
    backgroundColor: "white",
    fontSize: 25,
    fontWeight: "bold",
    marginLeft: 20,
    marginTop: 10,
    marginBottom: 10,
    padding: 10,
    textAlign: "center",
  },
});

function onSolvedRecaptcha() {
  alert("yesyyyyyy");
}
