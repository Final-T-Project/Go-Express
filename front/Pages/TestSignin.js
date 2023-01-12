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
import { useState } from "react";
import { useNavigation } from "@react-navigation/core";

import axios from "axios";
import firebaseConfig from "../config/firebase"; //  ----------->  T IMPORTIIII EL CONFIG TA3 EL FIREBASE
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth"; // importing the auth of Firebase
import { initializeApp } from "firebase/app";
import AsyncStorage from "@react-native-async-storage/async-storage";

import IPADRESS from "../config/IPADRESS";







function TestLogin() {
  const [value, setValue] = useState({
    nameUser: "",
    email: "", //         TO STORE THE EMAIL INPUT
    password: "", //   TO STORE THE PASSWORD INPUT
    passwordConfirm:"",

    error: "", // ST7A9ITHECH LHA9 AMAAA TAJEM TESTHA9HA

    emailConfirmation: false,
    emailInput: "",
  });

  const Navigation = useNavigation();

  const [user, setUser] = useState("");
  const [userId, setUserId] = useState("");

  const app = initializeApp(firebaseConfig); //  ----------->  BECH NAAMLOU INITIALIZATION LEL CONFIG TA3 EL FIREBASE W NRODOUH EL app MTE3NA
  const auth = getAuth(app);

  const [valueError,setValueError]=useState("")

  const handleSignIn = () => {

      createUserWithEmailAndPassword(auth, value.email, value.password) //  -----------> TA3MEL CREATION L USER JDID BEL EMAIL WEL PASSWORD ILI KTEBTHOM
        .then((userCredential) => {
          //  ----------->  BAAD EL CREATION TA3 EL USER FEL FIREBASE , EL FIREBASE YRAJA3 OBJET ESMOU (userCredential) FIH INFO AL USER
          setUser(userCredential.user); //  ---------->  Setting the user object (containing the detail of the athentication information )
          setUserId(user.uid); //  ----------->  Setting the user Id ( that takin from the User Objet )

          axios
            .post(`http://${IPADRESS}:5000/users/addUser`, {
              id_user: userCredential.user.uid,
              name: value.nameUser,
              email: value.email,
            })
            .then(() => {
              console.log("user added to dataBase");
            })
            .catch((err) => {
              alert(err);
            });

            AsyncStorage.setItem(
              "userData",
              JSON.stringify({
                userId: userCredential.user.uid,
              })
            );
            return userCredential.user.uid;

        })


        .then((id) => {
          alert("YEYYY USER ADDED");
          console.log("------>" + userId);


          Navigation.navigate("SideBar", { id });

          //Navigation.navigate("PhoneNumber Verif",{name:value.nameUser,email:value.email})
        })
        .catch((err) => {
          if (err.code === "auth/email-already-in-use") {
            setValueError("This email is already used");
          } else {
            alert(err);
          }
        });
    
  };





  return (
    <View style={css.constainer}>
      <ImageBackground
        style={{ width: "100%", height: "100%" }}
        source={{
          uri: `https://res.cloudinary.com/dn9qfvg2p/image/upload/v1673040221/ekher_wba4yg.png`,
        }}
      >
        <ScrollView>
          <View style={css.box}>
            <Text
              style={{
                textAlign: "center",
                fontSize: 25,
                marginTop: 30,
                fontWeight: "bold",
              }}
            >
              Register
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
            <Text
              style={{
                textAlign: "center",
                fontSize: 19,
                marginTop: 20,
                fontWeight: "400",
              }}
            >
              or be classical
            </Text>
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <TextInput
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
                  marginTop: 20,
                }}
                placeholder="  🙍   Your Name here..."
                onChangeText={(text) => setValue({ ...value, nameUser: text })}
              />
              
              {valueError==="This email is already used" ?
              <TextInput
                keyboardType="email-address"
                style={{
                  backgroundColor: "white",
                  height: 50,
                  fontSize: 17,
                  borderColor: "red",
                  borderWidth: 2,
                  padding: 10,
                  width: 330,
                  borderRadius: 50,
                  alignItems: "center",
                  marginTop: 20,
                }}
                placeholder="  ✉️   Your Email here..."
                onChangeText={(text) => setValue({ ...value, email: text })}
              />:<TextInput
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
                marginTop: 20,
              }}
              placeholder="  ✉️   Your Email here..."
              onChangeText={(text) => setValue({ ...value, email: text })}
            />}



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
                  marginTop: 20,
                }}
                placeholder="  🔐   Your Password here..."
                onChangeText={(text) => setValue({ ...value, password: text })}
              />

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
                  marginTop: 20,
                }}
                placeholder="  🔐   Confirm youor password..."
                onChangeText={(text) => setValue({ ...value, passwordConfirm: text })}
              />
            </View>

            {valueError.length?<View style={{alignItems:'center',marginTop:30,borderRaduis:50}}>
            <View style={{backgroundColor:"#fcad92",height:40,width:300,alignItems:"center",justifyContent: "center",borderRaduis:50}}>
                  <Text style={{alignItems:"center",justifyContent: "center",fontWeight:'500'}}>{valueError}</Text>
            </View>
            </View>:null}

            {/** ------------------------------------ BUTTON CONFIRM ------------------------------------- */}

            {value.nameUser.length && value.email.length && value.password.length && value.passwordConfirm.length ?<View style={{ alignItems: "center", marginTop: 10 }}>
              <View style={css.buttonStyle}>
                <Text
                  style={{
                    color: "white",
                    alignItems: "center",
                    fontWeight: "400",
                    fontSize: 17,
                  }}
                  onPress={() => {
                    if ( value.passwordConfirm === value.password ){
                      handleSignIn()
                    }else {
                      setValueError("The password doesn't match")
                    }
                    
                  }}
                >
                  create account{" "}
                </Text>
              </View>
            </View>:<View style={{ alignItems: "center", marginTop: 60 }}>
              <View style={css.buttonStyleNo}>
                <Text
                  style={{
                    color: "white",
                    alignItems: "center",
                    fontWeight: "400",
                    fontSize: 17,
                  }}
                  
                >
                  create account{" "}
                </Text>
              </View>
            </View>}



          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
}

export default TestLogin;

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
    height: 700,
    borderRadius: 4,
    marginLeft: 23,
    marginTop: 80,
    padding: 50,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 60,
    shadowRadius: 40,
    elevation: 10,
  },
  photos: {
    height: 40,
    width: 70,
  },
  buttonStyle: {
    backgroundColor: "#F96332",
    width: 180,
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
