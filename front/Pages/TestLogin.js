import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Image,
  ImageBackground,
  Keyboard,
  TouchableWithoutFeedback,
  ScrollView,
} from "react-native";
import firebaseConfig from "../config/firebase"; //  ----------->  T IMPORTIIII EL CONFIG TA3 EL FIREBASE
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  // GoogleAuthProvider,
  // signInWithPopup,
} from "firebase/auth"; // importing the auth of Firebase
import { initializeApp } from "firebase/app";
import { useState, useRef } from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/core";

export default function TestLogin() {
  const [value, setValue] = useState({
    email: "", //         TO STORE THE EMAIL INPUT
    password: "", //   TO STORE THE PASSWORD INPUT
    passwordHide: true,
    emailError: false,
    passwordError: false,
    error: "", // ST7A9ITHECH LHA9 AMAAA TAJEM TESTHA9HA
  });

  const app = initializeApp(firebaseConfig); //  ----------->  BECH NAAMLOU INITIALIZATION LEL CONFIG TA3 EL FIREBASE W NRODOUH EL app MTE3NA
  const auth = getAuth(app); //  ----------->  TA3TIIII AUTHORISATION LEL app MTE3EKKK BECH TNAJEM TESTAKHDEMHA KI T CREATE WALA SIGN IN LEL USER

  const Navigation = useNavigation();

  //------------------------------------------| Handle Login Function |---------------------------------------->

  const handleLogIn = () => {

      signInWithEmailAndPassword(auth, value.email, value.password) //  -----------> METHOD FEL FIREBASE TA3MEL BIHA EL SIGN IN (TET2AKED MEL EMAIL WEL PASSWORD)
        .then((userCredential) => {
          //  ----------->  KIMA FEL CREATION , EL FIREBASE YRAJA3LEK OBJECT BAAD MA TEM 3AMALEYET EL SIGN IN CORRECTLY
          console.log("------------> YYEYYYY CREDENTIAL ARE CORRECT");
          console.log("********** user Id current ***********" + userCredential.user.uid);
          setValue({ ...value, error: "" });
          setValue({ ...value, emailError: false });

          AsyncStorage.setItem(
            "userData",
            JSON.stringify({
              userId: userCredential.user.uid,
            })
          );
          return userCredential.user.uid;
        })

        .then((id) => {
          Navigation.navigate("SideBar", { id });
        })

        .catch((error) => {
          setValue({ ...value, error: error.code });
          if (
            error.code === "auth/invalid-email" ||
            error.code === "auth/user-not-found"
          ) {
            //alert("Ekteb EMAIL shihhh ya hajjj")
            setValue({ ...value, emailError: true });
            return;
          }
          if (error.code === "auth/wrong-password") {
            setValue({ ...value, error: "auth/wrong-password" });
            setValue({ ...value, passwordError: true });
            setValue({ ...value, emailError: false });
            console.log("----------ERROR----PASSWORD------>" + value.error);
          } else {
            if (error.code === "auth/too-many-requests") {
              alert(
                "Your account has been frozed for a moment, you should click on 'Forget my password'"
              );
            } else {
              console.log(error.message);
            }
          }
        });
    
  };

  const forgetPassword = () => {
    if (value.email.length < 5) {
      alert("Write your Email");
    } else {
      sendPasswordResetEmail(auth, value.email)
        .then(() => {
          alert("Email send with a link to confirm it's you");
        })
        .catch((error) => {
          if (error.code === "auth/user-not-found") {
            alert(" You don't have an account :)), create an account first");
          }
          console.log(error);
        });
    }
    
  }

  //-----------------------------------------------------------------------------------------------------------
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={css.constainer}>
        <ImageBackground
          style={{ width: "100%", height: "100%" }}
          source={{
            uri: `https://res.cloudinary.com/dn9qfvg2p/image/upload/v1673040221/ekher_wba4yg.png`,
          }}
        >
          <View style={css.box}>
            <Text
              style={{
                textAlign: "center",
                fontSize: 25,
                marginTop: 50,
                fontWeight: "bold",
              }}
            >
              Log in{" "}
            </Text>

            <View
              style={{
                display: "flex",
                flexDirection: "row",
                marginTop: 20,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                source={require("../assets/facebook.png")}
                style={{
                  width: 35,
                  height: 35,
                  marginLeft: -15,
                  marginRight: 40,
                }}
              />
              <Image
                source={require("../assets/google-plus.png")}
                style={{
                  width: 35,
                  height: 35,
                  marginLeft: -15,
                  marginRight: 40,
                }}
              />
              <Image
                source={require("../assets/linkedin.png")}
                style={{
                  width: 35,
                  height: 35,
                  marginLeft: -15,
                  marginRight: 0,
                }}
              />
            </View>

            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                marginTop: 50,
              }}
            >
              {!value.emailError ? (
                <TextInput
                  keyboardType="email-address"
                  style={{
                    backgroundColor: "white",
                    height: 50,
                    fontSize: 17,
                    borderColor: "#9d9d9e",
                    borderWidth: 1,
                    padding: 10,
                    width: 330,
                    borderRadius: 50,
                    alignItems: "center",
                  }}
                  placeholder="  ✉️   Your Email here..."
                  onChangeText={(text) => setValue({ ...value, email: text })}
                />
              ) : (
                <TextInput
                  keyboardType="email-address"
                  style={{
                    backgroundColor: "white",
                    height: 50,
                    fontSize: 17,
                    borderColor: "red",
                    borderWidth: 3,
                    padding: 10,
                    width: 330,
                    borderRadius: 50,
                    alignItems: "center",
                  }}
                  placeholder="  ✉️   Your Email here..."
                  onChangeText={(text) => {
                    setValue({ ...value, email: text });
                  }}
                />
              )}

              {!value.passwordError ? (
                <TextInput
                  secureTextEntry={true}
                  style={{
                    backgroundColor: "white",
                    height: 50,
                    fontSize: 17,
                    borderColor: "#9d9d9e",
                    borderWidth: 1,
                    padding: 10,
                    width: 330,
                    borderRadius: 50,
                    alignItems: "center",
                    marginTop: 40,
                  }}
                  placeholder="  🔐   Your Password here..."
                  onChangeText={(text) =>
                    setValue({ ...value, password: text })
                  }
                />
              ) : (
                <TextInput
                  secureTextEntry={true}
                  style={{
                    backgroundColor: "white",
                    height: 50,
                    fontSize: 17,
                    borderColor: "red",
                    borderWidth: 3,
                    padding: 10,
                    width: 330,
                    borderRadius: 50,
                    alignItems: "center",
                    marginTop: 40,
                  }}
                  placeholder="  🔐   Your Password here..."
                  onChangeText={(text) =>
                    setValue({ ...value, password: text })
                  }
                />
              )}
            </View>

{/** ------------------------------------ BUTTON CONFIRM ------------------------------------- */}

            {value.email.length && value.password.length ?<View
              style={{ alignItems: "center", marginTop: 70 }}
              onPress={() => handleLogIn()}
            >
              <View style={css.buttonStyle} onPress={() => handleLogIn()}>
                <Text
                  style={{
                    color: "white",
                    alignItems: "center",
                    fontWeight: "400",
                    fontSize: 17,
                  }}
                  onPress={() => handleLogIn()}
                >
                  Confirm
                </Text>
              </View>
            </View>:
            <View
              style={{ alignItems: "center", marginTop: 70 }}
              onPress={() => handleLogIn()}
            >
              <View style={css.buttonStyleNo} onPress={() => handleLogIn()}>
                <Text
                  style={{
                    color: "white",
                    alignItems: "center",
                    fontWeight: "400",
                    fontSize: 17,
                  }}
                >
                  Confirm
                </Text>
              </View>
            </View>}

{/** ----------------------------------------------------------------------------------------- */}

            <Text
              style={{
                fontSize: 15,
                marginTop: 20,
                fontWeight: "600",
                textAlign: "center",
              }}
            >
              You don't have account
              <Text
                onPress={() => Navigation.navigate("TestSignin")}
                style={{ color: "#F96332" }}
              >
                {" "}
                tap here
              </Text>
            </Text>

            <Text
              style={{
                fontSize: 15,
                marginTop: 60,
                fontWeight: "600",
                textAlign: "center",
              }}
              
            >
              Forget my password ?
              <Text style={{ color: "#F96332" }} onPress={() => forgetPassword()}> tap here</Text>
            </Text>
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}

const css = StyleSheet.create({
  constainer: {
    backgroundColor: "#dadde1",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    backgroundColor: "white",
    width: 370,
    height: 600,
    borderRadius: 4,
    marginLeft: 20,
    marginTop: 50,

    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 60,
    shadowRadius: 40,
    elevation: 10,
  },
  buttonStyle: {
    backgroundColor: "#F96332",
    width: 170,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 500,
  },
  buttonStyleNo: {
    backgroundColor: "#fcad92",
    width: 170,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 500,
  }
});
