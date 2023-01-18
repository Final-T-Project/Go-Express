import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import cart from "front/assets/shopping-cart-empty-side-view.png";
import notifications from "front/assets/notification.png";

const ScreenHeader = ({mainTitle, secondTitle}) => {
  return (
    
    <View style={styles.container}>
          

      {/* <Text style={styles.mainTitle}>{mainTitle}</Text> */}
      <Image style={styles.cart} source={cart} />
      <Image style={styles.notifications} source={notifications} />
      {/* <Text style={styles.secondTitle}>{secondTitle} </Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  mainTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color:" #1C2765"
  },
  secondTitle: {
    fontSize: 32,
    color:"#ED5C00"
  },
  cart:{
    width:30,
    height:30,
    marginTop: -22,
    marginLeft: 350,
    paddingTop:30,


  },
  notifications:{
    width:30,
    height:30,
    // padding: -70,
    // paddingBottom:3,
    marginLeft: 350,
  },
});

export default ScreenHeader;