import { View, Text ,Image, StyleSheet , ScrollView, TextInput , TouchableOpacity , TouchableWithoutFeedback} from 'react-native'
import { DatePickerAndroid } from 'react-native';
import React from 'react'
import { Picker } from "@react-native-picker/picker";
import { useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';

import { useNavigation } from "@react-navigation/native";


// primary color : #F14E24 
// Secondary color : #373E5A

export default function BookService() {

    const Navigation=useNavigation()
    const [date, setDate] = useState(new Date());


// ---------------------------------- Drop list state -------------------------------------------------//
    const [listService,setListService]=useState("")


// ---------------------------------- Date state -------------------------------------------------//
    const [dateChoosen,setDateChoosen] = useState("")
    const [DShow,setDShow]=useState(false)


// ---------------------------------- Time  state -------------------------------------------------//
    const [time,setTime]=useState("")
    const [timeShow,setTimeShow]=useState(false)   // show and hide the time window

// --------------------------------- distination from Drop List ---------------------------------- //

    const [fromList,setFromList]=useState("")

// --------------------------------- distination to Drop List ---------------------------------- //

    const [toList,setToList]=useState("")




// ---------------------------------- Functions -------------------------------------------------//
    const handleTimeChange=(time)=>{
        setTime(time)
        console.log(time)
    }

   const handleShow=()=>{
        setTimeShow(true)
    }
   
   
    const handleHide=()=>{
        setTimeShow(false)
    }


    const handleBookPress = () =>{
        Navigation.navigate("Booking Details")
    }

// ------------------------------- ALL STATE IN TUNISIA ( I WILL MAP OVER IT SO I DON'T WRITE IT MANUALLY :))
    const ville=['Tunis', 'Ariana', 'Beja', 'Ben Arous', 'Bizerte', 'Gabes', 'Gafsa', 'Jendouba', 'Kairouan', 'Kasserine', 'kebili', 'Kef', 'Mahdia', 'Manouba', 'Medenine', 'Monastir', 'Nabeul', 'Sfax', 'Sidi Bouzid', 'Siliana', 'Sousse', 'Tataouine', 'Touzeur', 'Zaghouan']
    

  return (
    <View style={css.container}>
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <ScrollView>
        <View style={css.box}>
            {/** --------------------------------TEXT ( TITLE ) --------------------------------------------- */}
            <Text style={{
                textAlign: "center",
                fontSize: 25,
                marginTop: 25,
                fontWeight: "bold",
              }}> Booking section 
            </Text>

 {/** --------------------------------TEXT ( SERVICES / DROP BOX ) --------------------------------------------- */}
              <Text style={{marginTop:20,fontWeight:'600',fontSize: 20,}}> Services :</Text>
            
            <Picker
                    selectedValue={listService}
                    onValueChange={(value) => setListService(value)}
                    // mode="dropdown"
                    mode="dialog"
                    style={css.picker}
                    
                  >
                    <Picker.Item label="Please Select Counter" enabled={false} opacity={0.5} color='gray' />
                    <Picker.Item label="Moving + tidying up things" value="Moving" />
                    <Picker.Item label="Cleanig" value="Cleanig" />
                    <Picker.Item label="Plumbing" value="Plumbing" />
                    <Picker.Item label="Electricity" value="Electricity" />
                  </Picker>

 {/** --------------------------------LIGNE  --------------------------------------------- */}             
                    <View style={{borderBottomColor: 'black', borderBottomWidth: 1,width:370,marginLeft:-20,opacity:0.2}} />
    
     {/** --------------------------------DATE SELECT  --------------------------------------------- */} 

                    <Text style={{marginTop:20,fontWeight:'600',fontSize: 20,}}> Day :</Text>
                
                <TouchableOpacity style={{backgroundColor:"#373E5A",width:200,height:30,color:'white',borderRadius:20,justifyContent:'center',marginTop:20}} onPress={()=>setDShow(true)}>
                    <Text style={{color:'white',textAlign:'center'}}>Pick Day</Text>
                </TouchableOpacity>

              {DShow?<DateTimePicker
                isVisible={DShow}
                onConfirm={()=>setDShow(false)}
                onCancel={()=>setDShow(false)}
                mode='date'
                value={date}
                onChange={(time)=>setDateChoosen(time)}
                />:null}


 {/** --------------------------------TEXT ( TIME SELECT ) --------------------------------------------- */}

 <View style={{marginTop:20,borderBottomColor: 'black', borderBottomWidth: 1,width:370,marginLeft:-20,opacity:0.2}} />


                  <Text style={{marginTop:20,fontWeight:'600',fontSize: 20,}}> Time :</Text>
                
                    <TouchableOpacity style={{backgroundColor:"#373E5A",width:200,height:30,color:'white',borderRadius:20,justifyContent:'center',marginTop:20}} onPress={()=>setTimeShow(true)}>
                        <Text style={{color:'white',textAlign:'center'}}>Pick Time</Text>
                    </TouchableOpacity>

                  {timeShow?<DateTimePicker
                    isVisible={timeShow}
                    onConfirm={()=>setTimeShow(false)}
                    onCancel={()=>setTimeShow(false)}
                    mode='time'
                    value={date}
                    is24Hour={true}
                    onChange={(time)=>handleTimeChange(time)}
                    />:null}

                    
                    <View style={{marginTop:20, borderBottomColor: 'black', borderBottomWidth: 1,width:370,marginLeft:-20,opacity:0.2}} />

 {/** --------------------------------DROP DOWN LIST FOR PLACES  --------------------------------------------- */}

                    <View
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            marginTop: 20,
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                        >
                        <View>
                            <Text style={{marginTop:0,fontWeight:'600',fontSize: 20,marginLeft:30}}> From :</Text>
                            <Picker
                                selectedValue={fromList}
                                onValueChange={(value) => setFromList(value)}
                                // mode="dropdown"
                                mode="dialog"
                                style={css.pickerFromTo}
                                >
                                    <Picker.Item label="Please Select City" enabled={false} opacity={0.5} color='gray' />
                                    { 
                                            ville.map((element,key)=>{
                                                return (
                                                    <Picker.Item label={element} value={element} />
                                                )
                                            })
                                    }
                            </Picker>
                            <Image source={require("../assets/MovingTruck.gif")} style={{width:80,height:80,marginLeft:50,marginTop:-20}}/>
                            </View>

                        <View>
                             
                            <Text style={{marginTop:20,fontWeight:'600',fontSize: 20,marginLeft:30}}> To :</Text>
                            <Picker
                                selectedValue={toList}
                                onValueChange={(value) => setToList(value)}
                                // mode="dropdown"
                                mode="dialog"
                                style={css.pickerFromTo}
                                >
                                    <Picker.Item label="Please Select City" enabled={false} opacity={0.5} color='gray' />
                                    { 
                                            ville.map((element,key)=>{
                                                return (
                                                    <Picker.Item label={element} value={element} />
                                                )
                                            })
                                    }
                            </Picker>
                         </View>

                        

                    </View>
                    
                    <View style={{alignItems:'center'}}>
                    <TouchableOpacity style={{backgroundColor:"#F14E24",width:200,height:50,color:'white',borderRadius:100,justifyContent:'center',marginTop:20,alignItems:'center'}} onPress={()=>handleBookPress()}>
                        <Text style={{color:'white',textAlign:'center',fontSize:17,fontWeight:'500'}}>Book</Text>
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
      width: 370,
      height: 700,
      borderRadius: 4,
      marginTop: 50,
      paddingLeft:20,
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
    picker: {
        marginTop:3,
        width:300,
        fontSize: 16,
        fontWeight:'bold'
      },
      pickerFromTo: {
        marginTop:3,
        width:150,
        fontSize: 16,
        fontWeight:'bold',
        margin:30,
      },
})