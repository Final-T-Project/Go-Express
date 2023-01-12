import { View, Text , StyleSheet , ScrollView, TextInput , TouchableOpacity} from 'react-native'
import React from 'react'
import { Picker } from "@react-native-picker/picker";
import { useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';


// primary color : #F14E24 
// Secondary color : #373E5A

export default function BookService() {
    const [date, setDate] = useState(new Date(1598051730000));



    const [listService,setListService]=useState("")

    const [time,setTime]=useState("")
    const [timeShow,setTimeShow]=useState(false)   // show and hide the time window

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

    

  return (
    <View style={css.container}>
        <ScrollView>
        <View style={css.box}>
            {/** --------------------------------TEXT ( TITLE ) --------------------------------------------- */}
            <Text style={{
                textAlign: "center",
                fontSize: 25,
                marginTop: 25,
                fontWeight: "bold",
              }}> Bookin section 
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
                    <Picker.Item label="Please Select Category" enabled={false} opacity={0.5} color='gray' />
                    <Picker.Item style={{fontWeight:'bold'}} label="Moving + tidying up things" value="" />
                    <Picker.Item label="Cleanig" value="" />
                    <Picker.Item label="Plumbing" value="" />
                    <Picker.Item label="Electricity" value="" />
                  </Picker>

 {/** --------------------------------LIGNE  --------------------------------------------- */}             
                        <View style={{borderBottomColor: 'black', borderBottomWidth: 1,width:370,marginLeft:-20,opacity:0.2}} />
    

 {/** --------------------------------TEXT ( TIME SELECT ) --------------------------------------------- */}
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

      </View>
      </ScrollView>
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
      height: 600,
      borderRadius: 4,
      marginTop: 50,
      paddingLeft:20,
  
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
})