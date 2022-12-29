import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,TextInput ,Button} from 'react-native';
import { useState } from 'react';



  ///----------------------------------------------------> Firebase stuff importation  <----------------------------------------------------------------------------///

import firebaseConfig from '../my-app/config/firebase';  //  ----------->  T IMPORTIIII EL CONFIG TA3 EL FIREBASE
import { getAuth, createUserWithEmailAndPassword ,signInWithEmailAndPassword } from "firebase/auth";  // importing the auth of Firebase 
import { initializeApp } from 'firebase/app';
///----------------------------------------------------------------------------------------------------------------------------------------------///
import { useNavigation } from '@react-navigation/native';


export default function App() {

  ///----------------------------------------------------> States <----------------------------------------------------------------------------///
  const [value, setValue] = useState({
    email: "",        //         TO STORE THE EMAIL INPUT
    password: "",    //   TO STORE THE PASSWORD INPUT
    error: "",       // ST7A9ITHECH LHA9 AMAAA TAJEM TESTHA9HA    
  });

  const [user,setUser]=useState("")
  const [userId,setUserId]=useState("")


  const app = initializeApp(firebaseConfig)   //  ----------->  BECH NAAMLOU INITIALIZATION LEL CONFIG TA3 EL FIREBASE W NRODOUH EL app MTE3NA
  const auth=getAuth(app)   //  ----------->  TA3TIIII AUTHORISATION LEL app MTE3EKKK BECH TNAJEM TESTAKHDEMHA KI T CREATE WALA SIGN IN LEL USER
  ///----------------------------------------------------------------------------------------------------------------------------------------------///
  
///----------------------------------------------------> USE NAVIGATE APPLICATION <----------------------------------------------------------------------------///
  const Navigation=useNavigation()
///----------------------------------------------------------------------------------------------------------------------------------------------///

///----------------------------------------------------> function for handling the creating the account <-----------------------------------------///
  const handleSignIn=()=>{
    createUserWithEmailAndPassword(auth,value.email,value.password)    //  -----------> TA3MEL CREATION L USER JDID BEL EMAIL WEL PASSWORD ILI KTEBTHOM
    .then((userCredential)=>{         //  ----------->  BAAD EL CREATION TA3 EL USER FEL FIREBASE , EL FIREBASE YRAJA3 OBJET ESMOU (userCredential) FIH INFO AL USER
      setUser(userCredential.user)   //  ---------->  Setting the user object (containing the detail of the athentication information )
      setUserId(user.uid)            //  ----------->  Setting the user Id ( that takin from the User Objet )
      //console.log(user)
    })
    .then(()=>{                    
      alert("YEYYY USER ADDED")
      console.log(userId)
    })
    .catch((error)=>{
        alert("ACCOUNT ALREADY EXIST")
    })

  }
  ///----------------------------------------------------------------------------------------------------------------------------------------------///


  ///----------------------------------------------------> function for handling the Sign In to te account <-----------------------------------------///
  const handleLogIn=()=>{
    signInWithEmailAndPassword(auth,value.email,value.password)    //  -----------> METHOD FEL FIREBASE TA3MEL BIHA EL SIGN IN (TET2AKED MEL EMAIL WEL PASSWORD)
    .then((userCredential)=>{       //  ----------->  KIMA FEL CREATION , EL FIREBASE YRAJA3LEK OBJECT BAAD MA TEM 3AMALEYET EL SIGN IN CORRECTLY
      alert('YYEYYYY CREDENTIAL ARE CORRECT , NOW YOU WILL BE IN THE HOME PAGE')
      console.log(userCredential)
      Navigation.navigate("Home")
    })
    .catch((error)=>{
      alert(error.message)
    })
  }
  ///----------------------------------------------------------------------------------------------------------------------------------------------///




  ///-------------------------------------------------------------------> The Sign up / Sign In structure page  <--------------------------------------------///

  return (<>
      <Text style={css.textParam}> Login : </Text>
      <Text style={{marginTop:40,textAlign:"left",fontSize:20,fontWeight:'bold'}}>{value.email}</Text>
    <View style={css.container}>
      <Text style={{marginTop:40,textAlign:"left",fontSize:20,fontWeight:'bold'}}>Email</Text>
      {/** ---------------------------------------------------EMAIL INPUT -----------------------------------------------*/}
      <TextInput
        style={{height: 50,fontSize:15,borderColor:'black',borderWidth:1,padding:10,width:350,borderRadius:100,alignItems:'center'}}
        placeholder="Type here!"  onChangeText={(text) => setValue({ ...value, email: text })}
        />
        <Text style={{marginTop:40,textAlign:"left",fontSize:20,fontWeight:'bold'}}>Password</Text>
        {/** ---------------------------------------------------PASSWORD INPUT -----------------------------------------------*/}
       <TextInput  secureTextEntry={true}
        style={{height: 50,fontSize:15,borderColor:'black',borderWidth:1,padding:10,width:350,borderRadius:100,alignItems:'center'}}
        placeholder="Type here!"  onChangeText={(text) => setValue({ ...value, password: text })}
        />
        {/** ---------------------------------------------------BUTTONS  -----------------------------------------------*/}
      <Button title="Create An account" style={{borderRadius:20}} onPress={handleSignIn}> </Button>
      <Button title="Sign In" style={{borderRadius:20}} onPress={handleLogIn}> </Button>
      <StatusBar style="inverted" />
    </View></>
  );
}
///----------------------------------------------------------------------------------------------------------------------------------------------///

const css = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
   
    
  },
  textParam: {
    fontSize:30,
    fontWeight:'bold',
    textAlign:'left',
    marginLeft:20,
    marginTop:200,
    marginBottom:0
  }
});



