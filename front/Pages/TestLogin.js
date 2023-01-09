import React from 'react'
import { StyleSheet, Text, View ,TextInput ,Button , Image,ImageBackground , Keyboard, TouchableWithoutFeedback, ScrollView } from 'react-native';

export default function TestLogin() {
  return (
    <View style={css.constainer}>
        <View style={css.box}>
            <Text style={{textAlign:'center',fontSize:25,marginTop:50,fontWeight:'bold',}}>Log in </Text>

            <View style={{display: 'flex', flexDirection: 'row',marginTop:20, alignItems: 'center', justifyContent: 'center'}}>
                <Image source={require('../assets/facebook.png')} style={{width:35,height:35,marginLeft:40,marginRight:40}}/>
                <Image source={require('../assets/google-plus.png')} style={{width:35,height:35,marginLeft:30,marginRight:40}} />
            </View>

            <View style={{justifyContent: 'center',alignItems:'center',marginTop:50}}>
                <TextInput keyboardType="email-address" 
                        style={{backgroundColor:"white",height: 50,fontSize:17,borderColor:'#9d9d9e',borderWidth:1,padding:10,width:330,borderRadius:50,alignItems:'center',}}
                        placeholder="  ✉️   Your Email here..."  onChangeText={(text) => setValue({ ...value, nameUser: text })}
                        />
                    <TextInput  secureTextEntry={true} 
                        style={{backgroundColor:"white",height: 50,fontSize:17,borderColor:'#9d9d9e',borderWidth:1,padding:10,width:330,borderRadius:50,alignItems:'center',marginTop:40}}
                        placeholder="  🔐   Your Password here..."  onChangeText={(text) => setValue({ ...value, nameUser: text })}
                        />
            </View>

            <View style={{alignItems:'center',marginTop:70}}>
            <View style={css.buttonStyle}>
                <Text style={{color:'white',alignItems: 'center',fontWeight:'400',fontSize:17}}>Confirm</Text>
            </View>
            </View>

            <Text style={{fontSize:15,marginTop:60,fontWeight:'600',textAlign:'center'}}>Forget my password ? tap here</Text>

        </View>
    </View>
  )
}


const css = StyleSheet.create({
    constainer:{
        backgroundColor:'#dadde1',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },  
    box:{
        backgroundColor:'white',
        width:370,
        height:620,
        borderRadius:4,

        
        shadowColor: "black",
        shadowOffset: {
          width: 0,
          height: 0,
        },
        shadowOpacity: 60,
        shadowRadius: 40,
        elevation: 10
    },
    buttonStyle:{
        backgroundColor:'#F96332',
        width:170,
        height:50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:500
    }
})