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
} from 'native-base';
import TabBar from "../components/TabBar";

const { width, height } = Dimensions.get('screen');

const Data = [
  {
    image:
      'https://res.cloudinary.com/dn9qfvg2p/image/upload/c_scale,w_1000/v1673554661/G_eluphz.png',
    date: '27/01/2020',
    price: '250',
  },
  {
    image:
      'https://res.cloudinary.com/dn9qfvg2p/image/upload/v1673554661/O_qvopza.png',
    date: '02/04/2020',
    price: '100',
  },
  {
    image:
      'https://res.cloudinary.com/dn9qfvg2p/image/upload/v1673554661/E_bjthps.png',
      date: '19/04/2021',
    price: '60',
  },
  {
    image:
      'https://res.cloudinary.com/dn9qfvg2p/image/upload/v1673554661/X_msn0li.png',
    date: '06/06/2020',
    price: '1700',
  },
  {
    image:
      'https://res.cloudinary.com/dn9qfvg2p/image/upload/v1673554661/P_oulzqy.png',
    date: '29/06/2022',
    price: '60',
  },
  {
    image:
      'https://res.cloudinary.com/dn9qfvg2p/image/upload/v1673554661/R_xmhhpl.png',
      date: '01/07/2022',
      price: '150',
  },
  {
    image:
      'https://res.cloudinary.com/dn9qfvg2p/image/upload/v1673554661/E_bjthps.png',
      date: '09/11/2022',
      price: '600',
  },
  {
    image:
      'https://res.cloudinary.com/dn9qfvg2p/image/upload/v1673554661/S_xb7ndd.png',
      date: '10/12/2022',
      price: '750',
  },
  {
    image:
      'https://res.cloudinary.com/dn9qfvg2p/image/upload/v1673554661/S_xb7ndd.png',
      date: '12/01/2023',
      price: '1550',
  },
  
];

const BG_IMG =
  "https://images.pexels.com/photos/1231265/pexels-photo-1231265.jpeg?aut1265.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500";

const SPACING = 20;

const AVATAR_SIZE = 70;
const ITEM_SIZE = AVATAR_SIZE +SPACING *3 ;

export default ({navigation}) => {
   const scrollY = React.useRef(new Animated.Value(0)).current ;

  return (
<View  style={StyleSheet.absoluteFillObject}> 

     <View style={{ flex: 1, backgroundColor: "#fff" }} >
        <Image source={{ uri: BG_IMG}}
        // style={StyleSheet.absoluteFillObject}
        blurRadius ={80}
        />
      <Animated.FlatList
        data={Data}
        onScroll={Animated.event(
            [{nativeEvent:{contentOffset:{y : scrollY}}}],
            {useNativeDriver: true}
        )}
        keyExtractor={(item) => item.key}
        contentContainerStyle={{
            padding: SPACING,
            paddingTop: StatusBar.currentHeight ||  42
        }}
        renderItem={({ item, index }) => {
            const inputRange =[
                -1 ,
                0 ,
                ITEM_SIZE * index , 
                ITEM_SIZE *( index + 2 )   
                 
            ]
            const opacityInputRange =[
                -1 ,
                0 ,
                ITEM_SIZE * index , 
                ITEM_SIZE *( index + 1 )   
                 
            ]
            const scale = scrollY.interpolate({
                inputRange,
                outputRange:[1, 1 , 1 , 0]
            })
            const opacity = scrollY.interpolate({
                inputRange : opacityInputRange,
                outputRange:[1, 1 , 1 , 0]
            })
          return (
            <Animated.View style={{flexDirection: "row" , padding: SPACING , marginBottom: SPACING , backgroundColor :'rgba(255,255,255,0.8)' , borderRadius: 12 , borderColor: "red"  
            ,borderWidth: 1.5,
            borderRadius: 25,
            borderColor: "#f14e24",
            opacity,
            shadowColor : "#000" ,
            shadowOffset : {
                width:0 ,
                height: 10
            } ,
            shadowOpacity: .3,
            shadowRadius: 20 ,
            transform: [{scale}]
            }} >
           <Image source={{uri: item.image}}
        //    style={{ width:AVATAR_SIZE , height: AVATAR_SIZE  ,
        // marginRight: SPACING /2  }}
            size={50}
            />
           <View style={{justifyContent:'center'}}>
            <Text style={{fontSize: 18 , fontWeight: '500' , opacity: .7 , marginLeft: SPACING /2 ,color:"#1C2765"}}> {item.date}</Text>
            <Text style={{fontSize: 18 , fontWeight: '600' , opacity: .7 , marginLeft: SPACING /2,color:"#444444" }}> {item.price} DT</Text>
            {/* <Text style={{fontSize: 18 , opacity: .7}}> {item.jobTitle}</Text> */}
            {/* <Text style={{ fontSize:14 , opacity: .8 , color: '#0099cc' }}> {item.email}</Text>  */}
           </View> 
            </Animated.View>
          );
        }}
      />
    </View>
    <TabBar navigation={navigation} />
    </View>
  
  );
};
