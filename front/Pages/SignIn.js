import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,TextInput ,Button, TouchableWithoutFeedback , Keyboard } from 'react-native';
import { useState } from 'react';



  ///----------------------------------------------------> Firebase stuff importation  <----------------------------------------------------------------------------///

import firebaseConfig from '../config/firebase';  //  ----------->  T IMPORTIIII EL CONFIG TA3 EL FIREBASE
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";  // importing the auth of Firebase 
import { initializeApp } from 'firebase/app';
///----------------------------------------------------------------------------------------------------------------------------------------------///
import { useNavigation } from '@react-navigation/native';


export default function App() {

  ///----------------------------------------------------> States <----------------------------------------------------------------------------///
  const [value, setValue] = useState({
    nameUser:"",
    email: "",        //         TO STORE THE EMAIL INPUT
    password: "",    //   TO STORE THE PASSWORD INPUT
    confirmPassword:"",

    error: "",       // ST7A9ITHECH LHA9 AMAAA TAJEM TESTHA9HA  
    
    emailConfirmation:false,
    emailInput:"",
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
    if( value.confirmPassword !== value.password){
      alert("Passwords do not match")
    }
    if ( !value.nameUser.length || !value.email.length || !value.password.length || !value.confirmPassword.length){
      alert ('fill all the inputs !!!')
    }
      if (value.emailConfirmation===false){
        alert("you need to confirm your email")
      }
    else{
    createUserWithEmailAndPassword(auth,value.email,value.password)    //  -----------> TA3MEL CREATION L USER JDID BEL EMAIL WEL PASSWORD ILI KTEBTHOM
    .then((userCredential)=>{         //  ----------->  BAAD EL CREATION TA3 EL USER FEL FIREBASE , EL FIREBASE YRAJA3 OBJET ESMOU (userCredential) FIH INFO AL USER
      setUser(userCredential.user)   //  ---------->  Setting the user object (containing the detail of the athentication information )
      setUserId(user.uid)            //  ----------->  Setting the user Id ( that takin from the User Objet )
      //console.log(user)

    })
    .then(()=>{                    
      alert("YEYYY USER ADDED")
      console.log(userId)

      
     
        //Navigation.navigate("PhoneNumber Verif",{name:value.nameUser,email:value.email})
     }
    )
    .catch((error)=>{
        if( value.confirmPassword !== value.password){
          alert("Passwords do not match")
        }
        if ( !value.nameUser.length || !value.email.length || !value.password.length || !value.confirmPassword.length){
            alert ('fill all the inputs !!!')
        }else {
          alert("ACCOUNT ALREADY EXIST")
        }
    })

  }}


  ///----------------------------------------------------------------------------------------------------------------------------------------------///


  ///----------------------------------------------------> function for handling the Sign In to te account <-----------------------------------------///
  ///----------------------------------------------------------------------------------------------------------------------------------------------///




  ///-------------------------------------------------------------------> The Sign up / Sign In structure page  <--------------------------------------------///

  return (<>
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    <View style={css.container}>
    {/** ---------------------------------------------------NAME INPUT -----------------------------------------------*/}
    <View style={css.box}>
    <Text style={{marginTop:20,textAlign:"left",fontSize:20,fontWeight:'bold'}}>Name</Text>
    <TextInput
         style={{backgroundColor:"white",height: 50,fontSize:17,borderColor:'black',borderWidth:1,padding:10,width:290,borderRadius:18,alignItems:'center'}}
        placeholder="Your Name here"  onChangeText={(text) => setValue({ ...value, nameUser: text })}
        />
 
      <Text style={{marginTop:40,textAlign:"left",fontSize:20,fontWeight:'bold'}}>Email</Text>
      {/** ---------------------------------------------------EMAIL INPUT -----------------------------------------------*/}
      <TextInput
         style={{backgroundColor:"white",height: 50,fontSize:17,borderColor:'black',borderWidth:1,padding:10,width:290,borderRadius:18,alignItems:'center'}}
        placeholder="Your Email here"  onChangeText={(text) => setValue({ ...value, email: text })}
        />
        <Text style={{marginTop:40,textAlign:"left",fontSize:20,fontWeight:'bold'}}>Password</Text>
        {/** ---------------------------------------------------PASSWORD INPUT -----------------------------------------------*/}
       <TextInput  secureTextEntry={true}
         style={{backgroundColor:"white",height: 50,fontSize:17,borderColor:'black',borderWidth:1,padding:10,width:290,borderRadius:18,alignItems:'center'}}
        placeholder="Your password here"  onChangeText={(text) => setValue({ ...value, password: text })}
        />
        {/** ---------------------------------------------------CONfirm PAssword INPUT -----------------------------------------------*/}
        <Text style={{marginTop:40,textAlign:"left",fontSize:20,fontWeight:'bold'}}>Confirm password</Text>
    <TextInput secureTextEntry={true}
         style={{backgroundColor:"white",height: 50,fontSize:17,borderColor:'black',borderWidth:1,padding:10,width:290,borderRadius:18,alignItems:'center'}}
        placeholder="Confirm your password"  onChangeText={(text) => setValue({ ...value, confirmPassword: text })}
        />

        {/** ---------------------------------------------------BUTTONS  -----------------------------------------------*/}
     <Text style={{fontSize:17,fontWeight:'500',borderBottomLeftRadius:120,borderRadius:18,backgroundColor:'#F96A27',color:'white',padding:15,marginTop:30,textAlign:'center',width:250}} onPress={()=>{
      showAlert()
      }}> Create an account </Text> 
      
      <StatusBar style="inverted" />
      </View>
      
    </View>
    
    </TouchableWithoutFeedback>
    </>
  );
}
///----------------------------------------------------------------------------------------------------------------------------------------------///

const css = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFB897',
    alignItems: 'center',
   
    
  },
  textParam: {
    fontSize:30,
    fontWeight:'bold',
    textAlign:'left',
    marginLeft:20,
    marginTop:200,
    marginBottom:0
  },
  box: {
    backgroundColor: "#FEE9E5",
    width: 330,
    height: 600,
    borderBottomLeftRadius:120,
    
   

    alignItems:'center',
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
});



