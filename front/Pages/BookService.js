import { View, Text , StyleSheet , ScrollView, TextInput} from 'react-native'
import React from 'react'
import { Picker } from "@react-native-picker/picker";
import { useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';

// primary color : #F14E24 
// Secondary color : #373E5A

export default function BookService() {

    const [listService,setListService]=useState("")

    const [time,setTime]=useState("")
    const [timeShow,setTimeShow]=useState(false)

    const handleTimeChange=(time)=>{
        setTime(time)
    }

   const handleShowHide=()=>{
        setTimeShow(!timeShow)
    }



  return (
    <View style={css.container}>
        <ScrollView>
        <View style={css.box}>
            <Text style={{
                textAlign: "center",
                fontSize: 25,
                marginTop: 25,
                fontWeight: "bold",
              }}> Bookin section 
            </Text>


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

                 
                  <DateTimePicker
                    isVisible={true}
                    onConfirm={()=>handleShowHide()}
                    onCancel={()=>handleShowHide()}
                    mode='time'
                    value={time}
                    onChange={(time)=>handleTimeChange(time)}
                    />


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