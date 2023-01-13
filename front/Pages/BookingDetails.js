import { View, Text,StyleSheet,TouchableWithoutFeedback , ScrollView, ImageBackground,TouchableOpacity} from 'react-native'
import React from 'react'
import { useNavigation } from "@react-navigation/native";

export default function BookingDetails() {
    const Navigation=useNavigation();
  return (
    <View style={css.container}>
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <ScrollView>
                <View style={css.box}>
                    <Text style={{textAlign:'center',fontSize:20,fontWeight:'bold',marginTop:50}}> Booking Details :</Text>
                   
                

                            <Text style={{marginLeft:30,fontWeight:'bold',marginTop:40}}>services : </Text>
                            <View style={{marginTop:5,borderBottomColor: 'black', borderBottomWidth: 1,width:370,marginLeft:-20,opacity:0.2}} />
                            <Text style={{marginLeft:30,fontWeight:'bold',marginTop:10}}>Date : </Text>
                            <View style={{marginTop:5,borderBottomColor: 'black', borderBottomWidth: 1,width:370,marginLeft:-20,opacity:0.2}} />
                            <Text style={{marginLeft:30,fontWeight:'bold',marginTop:10}}>Time : </Text>
                            <View style={{marginTop:5,borderBottomColor: 'black', borderBottomWidth: 1,width:370,marginLeft:-20,opacity:0.2}} />
                            <Text style={{marginLeft:30,fontWeight:'bold',marginTop:10}}>Destination : </Text>
                            <View style={{marginTop:5,borderBottomColor: 'black', borderBottomWidth: 1,width:370,marginLeft:-20,opacity:0.2}} />
                            <Text style={{marginLeft:30,fontWeight:'bold',marginTop:10}}>Price : </Text>

                            <View style={{alignItems:'center'}}>
                            <TouchableOpacity style={{backgroundColor:"#F14E24",width:60,height:60,color:'white',borderRadius:100,justifyContent:'center',marginTop:190,alignItems:'center'}} onPress={()=>Navigation.navigate("MyCart")}>
                                <Text style={{color:'white',textAlign:'center',fontSize:19,fontWeight:'500'}}>Ok</Text>
                            </TouchableOpacity>
                            </View>

                 </View>
            </ScrollView>
        </TouchableWithoutFeedback>
    </View>
  )
  }

const css = StyleSheet.create({
    container: {
      backgroundColor: "#373E5A",
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    box: {
      backgroundColor: "white",
      width: 350,
      height: 500,
      borderRadius: 0,
      marginTop: 50,
      paddingLeft:0,
      marginBottom:50,
  
      shadowColor: "black",
      shadowOffset: {
        width: 0,
        height: 0,
      },
      shadowOpacity: 60,
      shadowRadius: 40,
      elevation: 10,
    },
})