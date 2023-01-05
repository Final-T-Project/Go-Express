import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,TextInput ,Button , Image,ImageBackground} from 'react-native';
import { useState,useRef } from 'react';


///----------------------------------------------------> Firebase stuff importation  <----------------------------------------------------------------------------///

import firebaseConfig from '../config/firebase';  //  ----------->  T IMPORTIIII EL CONFIG TA3 EL FIREBASE
import { getAuth, createUserWithEmailAndPassword ,signInWithEmailAndPassword , sendPasswordResetEmail, se} from "firebase/auth";  // importing the auth of Firebase 
import { initializeApp } from 'firebase/app';

///----------------------------------------------------------------------------------------------------------------------------------------------///
import { useNavigation } from '@react-navigation/native';



export default function App() {

  const emailRef = useRef(null);
  const passwordRef = useRef(null)
  var passwordTitle = useRef(null)

  ///----------------------------------------------------> States <----------------------------------------------------------------------------///
  const [value, setValue] = useState({
    email: "",        //         TO STORE THE EMAIL INPUT
    password: "",    //   TO STORE THE PASSWORD INPUT
    passwordHide:true,
    emailError:false,
    passwordError:false,
    error: ""      // ST7A9ITHECH LHA9 AMAAA TAJEM TESTHA9HA    
  });

  const [user, setUser] = useState("");
  const [userId, setUserId] = useState("");




  const app = initializeApp(firebaseConfig)   //  ----------->  BECH NAAMLOU INITIALIZATION LEL CONFIG TA3 EL FIREBASE W NRODOUH EL app MTE3NA
  const auth=getAuth(app)   //  ----------->  TA3TIIII AUTHORISATION LEL app MTE3EKKK BECH TNAJEM TESTAKHDEMHA KI T CREATE WALA SIGN IN LEL USER
  ///----------------------------------------------------------------------------------------------------------------------------------------------///

  ///----------------------------------------------------> USE NAVIGATE APPLICATION <----------------------------------------------------------------------------///
  const Navigation = useNavigation();
  ///----------------------------------------------------------------------------------------------------------------------------------------------///

  ///----------------------------------------------------> function for handling the creating the account (FEL SignIn.tsx) <-----------------------------------------///

  ///----------------------------------------------------------------------------------------------------------------------------------------------///

  ///----------------------------------------------------> function for handling the Sign In to te account <-----------------------------------------///
  const handleLogIn=()=>{
    
    signInWithEmailAndPassword(auth,value.email,value.password)    //  -----------> METHOD FEL FIREBASE TA3MEL BIHA EL SIGN IN (TET2AKED MEL EMAIL WEL PASSWORD)
    .then((userCredential)=>{       //  ----------->  KIMA FEL CREATION , EL FIREBASE YRAJA3LEK OBJECT BAAD MA TEM 3AMALEYET EL SIGN IN CORRECTLY
      alert('YYEYYYY CREDENTIAL ARE CORRECT , NOW YOU WILL BE IN THE HOME PAGE')
      console.log(userCredential)
      setValue({...value,error:""})
      setValue({...value,emailError:false})
      Navigation.navigate("SideBar")
    })
    .catch((error)=>{
      if (!value.email.length || !value.password.length){
        alert('Please fill all information')
      }
      setValue({ ...value, error: error.code })
      if (error.code==="auth/invalid-email" ||error.code==="auth/user-not-found"){
        //alert("Ekteb EMAIL shihhh ya hajjj")
        setValue({...value,emailError:true})
        emailRef.current.focus();
        return;
      }
      if (error.code==="auth/wrong-password"){
        setValue({...value,error: "auth/wrong-password" })
        setValue({...value,passwordError:true})
        setValue({...value,emailError:false}) 
        console.log('------------------>'+value.error)
        passwordRef.current.focus();
    
      }
      else {
        console.log(error.message)
      }
    })
  }

  const forgetPassword=()=>{
    if (value.email.length<5){
      alert("Write your Email")
    }
    else {
      sendPasswordResetEmail(auth,value.email)
    .then(()=>{
      alert("Email send")
    })
    .catch((error)=>{
      console.log(error)
    })
    }
    
  }
  
  ///----------------------------------------------------------------------------------------------------------------------------------------------///

  ///-------------------------------------------------------------------> The Sign up / Sign In structure page  <--------------------------------------------///

  return (<>
        
      <View style={css.container}>
      <ImageBackground style={{flex: 1,width:500,width:1000}}
      >

      <View style={css.box}>
        <Image source={require("../assets/Group 1 copy.png")} style={{marginTop:50,width:10,height:10}}/>
          <Text style={css.textParam}  > Log In : </Text>
          <Text style={{marginTop:20,textAlign:"left",fontSize:20,fontWeight:'bold',marginRight:210,marginBottom:8}}>Email</Text>
          {/** ---------------------------------------------------EMAIL INPUT -----------------------------------------------*/}

          <View style={{ alignItems: 'center',}}>
          {value.emailError===false?<TextInput 
            style={{backgroundColor:"white",height: 50,fontSize:17,borderColor:'black',borderWidth:1,padding:10,width:290,borderRadius:18,alignItems:'center'}}
            placeholder="Your Email here"  keyboardType="email-address"  onChangeText={(text) => setValue({ ...value, email: text })} ref={emailRef}
            />:<TextInput
            style={{height: 50,fontSize:17,borderColor:'red',borderWidth:2,padding:10,width:290,borderRadius:18,alignItems:'center',color:'red'}}
            placeholder="Your Email here"  keyboardType="email-address"  onChangeText={(text) => setValue({ ...value, email: text })} ref={emailRef} defaultValue="Your Email is wrong" onFocus={()=>setValue({...value,emailError:false})}
            />}

            </View>
            <Text style={{marginTop:40,textAlign:"left",fontSize:20,fontWeight:'bold',marginRight:170,marginBottom:8}} ref={passwordTitle} >Password</Text>
            {/** ---------------------------------------------------PASSWORD INPUT -----------------------------------------------*/}
            
            <View style={{ alignItems: 'center',}}>
          {value.passwordError?<TextInput  secureTextEntry={value.passwordHide}
            style={{backgroundColor:"white",height: 50,fontSize:17,borderColor:'red',borderWidth:2,padding:10,width:290,borderRadius:18,alignItems:'center',color:'red'}}
            placeholder="Your password here"  onChangeText={(text) => setValue({ ...value, password: text })} ref={passwordRef}
            />:<TextInput  secureTextEntry={value.passwordHide}
            style={{backgroundColor:"white",height: 50,fontSize:17,borderColor:'black',borderWidth:1,padding:10,width:290,borderRadius:18,alignItems:'center'}}
            placeholder="Your password here"  onChangeText={(text) => setValue({ ...value, password: text })} ref={passwordRef}
            />}
            
            </View>

          {!value.password.length? null:value.passwordHide===true? <Text style={{textAlign:'center'}}  onPress={()=>setValue({...value,passwordHide:!value.passwordHide})}>Show password</Text>:<Text style={{textAlign:'center'}}  onPress={()=>setValue({...value,passwordHide:!value.passwordHide})}>hide password</Text>}

      {/*<View style={{marginLeft:150,backgroundColor:'red'}} onPress={()=>console.log('-------------->zdfzfvzrff')}>
          <Image source={eye} style={{width:25,height:25}}  onPress={()=>console.log('-------------->zdfzfvzrff')}/>
  </View>*/}

          {value.error==="auth/wrong-password"?<Text style={{marginTop:0,textAlign:"center",fontSize:17,fontWeight:'400',color:"red"}} onPress={()=>Navigation.navigate("Create an account")}>Wrong password</Text>:null}
          <Text style={{marginTop:40,textAlign:"center",fontSize:17,fontWeight:'400'}} onPress={()=>Navigation.navigate("Create an account")}>
            Don't have an account, <Text style={{color:'#40946C',fontWeight:'bold'}}>sign in :</Text>
            </Text>

            
            {/** ---------------------------------------------------BUTTONS Sign in  -----------------------------------------------*/}
          <View style={{ alignItems: 'center'}}>
             <Text style={{fontSize:17,fontWeight:'500',borderBottomLeftRadius:120,borderRadius:18,backgroundColor:'#F96A27',color:'white',padding:15,marginTop:30,textAlign:'center',width:150}} onPress={()=>{handleLogIn()}}> Log in </Text> 
          </View>

          <Text style={{marginTop:10,textAlign:"center",fontSize:17,fontWeight:'600'}} onPress={()=>forgetPassword()}>Forget password ?</Text>

          <StatusBar style="inverted" />
        </View>
      </ImageBackground>
      </View>
    </>
  );
}
///----------------------------------------------------------------------------------------------------------------------------------------------///

const css = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFB897",
    alignItems: "center",
    justifyContent: "center",
    position:'absolute',
    height:800,
  },
  box: {
    backgroundColor: "#FEE9E5",
    width: 330,
    height: 600,
    borderBottomLeftRadius:120,
    marginLeft:41,
   

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
  textParam: {
    backgroundColor:'#FEE9E5',
    fontSize:25,
    fontWeight:'bold',
    marginLeft:20,
    marginTop:10,
    marginBottom:10,
    padding:10,
    textAlign:'center',
    width:250,
  }
});

function onSolvedRecaptcha() {
  alert("yesyyyyyy");
}
