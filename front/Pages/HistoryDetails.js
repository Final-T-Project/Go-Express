import * as React from 'react';
import {
  StatusBar,
  Animated,
  Text,
  View,
  Dimensions,
  StyleSheet,
 
} from 'react-native';
import {

  Image,
  Box,
  VStack,
} from 'native-base';
import TabBar from "../components/TabBar";
const { width, height } = Dimensions.get('screen');
const SPACING = 20;
export default ({navigation})=>{
    return(
        <View  style={StyleSheet.absoluteFillObject}>
            <View
            style={{flexDirection: "row" , padding: SPACING , marginBottom: SPACING , backgroundColor :'rgba(255,255,255,0.8)' , borderRadius: 12 , borderColor: "red"  
            ,borderWidth: 1.5,
            borderRadius: 25,
            borderColor: "#f14e24",
            shadowColor : "#000" ,
            shadowOffset : {
                width:0 ,
                height: 10
            } ,
            shadowOpacity: .3,
            shadowRadius: 20 ,
            marginTop:20,
            }}
            >
<VStack>
    <Text style={{fontSize:20 , fontWeight: '700',margintop:10 ,color:'#373E5A'}}
 >Booked </Text>
  <Text style={{fontSize:15 , fontWeight: '400', }}
 >Booked in 00/00/0000  at 00:00</Text>
 {/* <view style={{marginBottom:50}}></view> */}
 <Text style={{fontSize:20 , fontWeight: '700',margintop:10 ,color:'#373E5A' }}> your commande</Text>
 <Text  style={{fontSize:15 , fontWeight: '400' }}>name of the serves or product</Text>
 <Text style={{fontSize:20 , fontWeight: '700',margintop:10,color:'#373E5A' }}> Delevery information</Text>
 <Text style={{fontSize:15 , fontWeight: '400',margintop:10 }}> Total price</Text>
 </VStack>
            </View>
           
            <TabBar navigation={navigation} />
        </View>
    )
}