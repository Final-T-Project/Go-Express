import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  ToastAndroid,
} from 'react-native';
import {
    TextArea,
    Box,
    Center,
    NativeBaseProvider,
    extendTheme,
    InputRightAddon,
    VStack,
    HStack,
    Checkbox
  } from "native-base";
  import { FontAwesome5 } from '@expo/vector-icons';
  import EditeAdress from './EditeAdress';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import {COLOURS, Items} from '../database/Database';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
export default function Cart ({navigation}){
    const [product, setProduct] = useState();
    const [total, setTotal] = useState(null);
  
    useEffect(() => {
      const unsubscribe = navigation.addListener('focus', () => {
        getDataFromDB();
      });
  
      return unsubscribe;
    }, [navigation]);
  
    //get data from local DB by ID
    const getDataFromDB = async () => {
      let items = await AsyncStorage.getItem('cartItems');
      items = JSON.parse(items);
      let productData = [];
      if (items) {
        Items.forEach(data => {
          if (items.includes(data.id)) {
            productData.push(data);
            return;
          }
        });
        setProduct(productData);
        getTotal(productData);
      } else {
        setProduct(false);
        getTotal(false);
      }
    };
  
    //get total price of all items in the cart
    const getTotal = productData => {
      let total = 0;
      for (let index = 0; index < productData.length; index++) {
        let productPrice = productData[index].productPrice;
        total = total + productPrice;
      }
      setTotal(total);
    };
  
    //remove data from Cart
  
    const removeItemFromCart = async id => {
      let itemArray = await AsyncStorage.getItem('cartItems');
      itemArray = JSON.parse(itemArray);
      if (itemArray) {
        let array = itemArray;
        for (let index = 0; index < array.length; index++) {
          if (array[index] == id) {
            array.splice(index, 1);
          }
  
          await AsyncStorage.setItem('cartItems', JSON.stringify(array));
          getDataFromDB();
        }
      }
    };
  
    //checkout
  
    const checkOut = async () => {
      try {
        await AsyncStorage.removeItem('cartItems');
      } catch (error) {
        return error;
      }
  
      ToastAndroid.show('Items will be Deliverd SOON!', ToastAndroid.SHORT);
  
      navigation.navigate('Home');
    };
  
    const renderProducts = (data, index) => {
      return (
        <TouchableOpacity
        //   key={data.key}
        //   onPress={() => navigation.navigate('ProductInfo', {productID: data.id})}
          style={{
            width: '100%',
            height: 100,
            marginVertical: 6,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View
            style={{
              width: '30%',
              height: 100,
              padding: 14,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: COLOURS.backgroundLight,
              borderRadius: 10,
              marginRight: 22,
            }}>
            <Image
              source={data.productImage}
              style={{
                width: '100%',
                height: '100%',
                resizeMode: 'contain',
              }}
            />
          </View>
          <View
            style={{
              flex: 1,
              height: '100%',
              justifyContent: 'space-around',
            }}>
            <View style={{}}>
              <Text
                style={{
                  fontSize: 14,
                  maxWidth: '100%',
                  color: COLOURS.black,
                  fontWeight: '600',
                  letterSpacing: 1,
                }}>
                {data.productName}
              </Text>
              <View
                style={{
                  marginTop: 4,
                  flexDirection: 'row',
                  alignItems: 'center',
                  opacity: 0.6,
                }}>
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: '400',
                    maxWidth: '85%',
                    marginRight: 4,
                  }}>
                  &#8377;{data.productPrice}
                </Text>
                <Text>
                  (~&#8377;
                  {data.productPrice + data.productPrice / 20})
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    borderRadius: 100,
                    marginRight: 20,
                    padding: 4,
                    borderWidth: 1,
                    borderColor: COLOURS.backgroundMedium,
                    opacity: 0.5,
                  }}>
                  <MaterialCommunityIcons
                    name="minus"
                    style={{
                      fontSize: 16,
                      color: COLOURS.backgroundDark,
                    }}
                  />
                </View>
                <Text>1</Text>
                <View
                  style={{
                    borderRadius: 100,
                    marginLeft: 20,
                    padding: 4,
                    borderWidth: 1,
                    borderColor: COLOURS.backgroundMedium,
                    opacity: 0.5,
                  }}>
                  <MaterialCommunityIcons
                    name="plus"
                    style={{
                      fontSize: 16,
                      color: COLOURS.backgroundDark,
                    }}
                  />
                </View>
              </View>
              {/* <TouchableOpacity onPress={() => removeItemFromCart(data.id)}> */}
                <MaterialCommunityIcons
                  name="delete-outline"
                  style={{
                    fontSize: 16,
                    color: COLOURS.backgroundDark,
                    backgroundColor: COLOURS.backgroundLight,
                    padding: 8,
                    borderRadius: 100,
                  }}
                />
              {/* </TouchableOpacity> */}
            </View>
          </View>
        </TouchableOpacity>
      );
    };
  
    return (
      <View
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: COLOURS.white,
          position: 'relative',
        }}>
        <ScrollView>
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              paddingTop: 16,
              paddingHorizontal: 16,
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
              {/* the button to go back to the shopping list */}
            {/* <TouchableOpacity onPress={() => navigation.goBack()}> */}
              <MaterialCommunityIcons
                name="chevron-left"
                style={{
                  fontSize: 18,
                  color: COLOURS.backgroundDark,
                  padding: 12,
                  backgroundColor: COLOURS.backgroundLight,
                  borderRadius: 12,
                }}
              />
            {/* </TouchableOpacity> */}
           <Center> <Text
              style={{
                  fontSize: 14,
                  color: COLOURS.black,
                  fontWeight: '400',
                }}>
              Order Details
            </Text>
                  </Center>
            <View></View>
          </View>
          <Text
            style={{
              fontSize: 20,
              color: COLOURS.black,
              fontWeight: '500',
              letterSpacing: 1,
              paddingTop: 20,
              paddingLeft: 16,
              marginBottom: 10,
            }}>
            My Cart
          </Text>
         {/* Delivery Location */}
          <View> 
      <HStack>
          <View
              style={{
                  paddingHorizontal: 16,
                  marginVertical: 10,
                }}>
                    <Box >
              
              </Box>
              <Text
                style={{
                    fontSize: 16,
                    color: COLOURS.black,
                    fontWeight: '500',
                    letterSpacing: 1,
                    marginBottom: 20,
                }}>
                Delivery Location
              </Text>
              <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}>
                <View
                  style={{
                      flexDirection: 'row',
                      width: '80%',
                      alignItems: 'center',
                    }}>
                   
                                <View
                    style={{
                      color: COLOURS.blue,
                      backgroundColor: COLOURS.backgroundLight,
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: 12,
                      borderRadius: 10,
                      marginRight: 18,
                    }}>
                    <MaterialCommunityIcons
                      name="truck-delivery-outline"
                      style={{
                        fontSize: 20,
                        color: "#373E5A",
                      }}
                    />
                  </View>
                  <View>
                    <Text
                      style={{
                        fontSize: 14,
                        color: COLOURS.black,
                        fontWeight: '500',
                      }}>
                      User Adress
                    </Text>
                    <Text
                      style={{
                        fontSize: 12,
                        color: COLOURS.black,
                        fontWeight: '400',
                        lineHeight: 20,
                        opacity: 0.5,
                      }}>
                     User Ville
                    </Text>
                  </View> 
                  <EditeAdress />

     
       
                </View>

      
              </View>
            </View>
            </HStack>
            {/* Payment Method */}
            <View
              style={{
                paddingHorizontal: 16,
                marginVertical: 10,
              }}>
              <Text
                style={{
                  fontSize: 16,
                  color: COLOURS.black,
                  fontWeight: '500',
                  letterSpacing: 1,
                  marginBottom: 20,
                }}>
                Payment Method
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    width: '80%',
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      color: COLOURS.blue,
                      backgroundColor: COLOURS.backgroundLight,
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: 12,
                      borderRadius: 10,
                      marginRight: 18,
                    }}>
                    <Text
                      style={{
                        fontSize: 10,
                        fontWeight: '900',
                        color: "#373E5A",
                        letterSpacing: 1,
                      }}>
                      VISA
                    </Text>
                  </View>
                  <View>
                    <Text
                      style={{
                        fontSize: 14,
                        color: COLOURS.black,
                        fontWeight: '500',
                      }}>
                      Visa Classic
                    </Text>
                    {/* <Text
                      style={{
                        fontSize: 12,
                        color: COLOURS.black,
                        fontWeight: '400',
                        lineHeight: 20,
                        opacity: 0.5,
                      }}>
                      ****-9092
                    </Text> */}
                  </View>
                </View>
                <HStack space={6}>
      <Checkbox value="orange" colorScheme="orange" accessibilityLabel="This is a dummy checkbox" />
      
    </HStack>
              
              </View>
            </View>
            <View
              style={{
                paddingHorizontal: 16,
                marginVertical: 10,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    width: '80%',
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      color: COLOURS.blue,
                      backgroundColor: COLOURS.backgroundLight,
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: 12,
                      borderRadius: 10,
                      marginRight: 18,
                    }}>
                       <FontAwesome5 name="money-bill" size={19} color="#373E5A" /> 
                    
                  </View>
                  <View>
                    <Text
                      style={{
                        fontSize: 14,
                        color: COLOURS.black,
                        fontWeight: '500',
                      }}>
                      Pay Cash
                    </Text>
                    {/* <Text
                      style={{
                        fontSize: 12,
                        color: COLOURS.black,
                        fontWeight: '400',
                        lineHeight: 20,
                        opacity: 0.5,
                      }}>
                      ****-9092
                    </Text> */}
                  </View>
                </View>
                <HStack space={6}>
      <Checkbox value="orange" colorScheme="orange" accessibilityLabel="This is a dummy checkbox"/>
      
    </HStack>
              
              </View>
            </View>
            {/* total prise */}
            <View
              style={{
                paddingHorizontal: 16,
                marginTop: 40,
                marginBottom: 80,
              }}>
              <Text
                style={{
                  fontSize: 16,
                  color: COLOURS.black,
                  fontWeight: '500',
                  letterSpacing: 1,
                  marginBottom: 20,
                }}>
                Order Info
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: 8,
                }}>
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: '400',
                    maxWidth: '80%',
                    color: COLOURS.black,
                    opacity: 0.5,
                  }}>
                  Subtotal
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: '400',
                    color: COLOURS.black,
                    opacity: 0.8,
                  }}>
                  {total}.00dt
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: 22,
                }}>
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: '400',
                    maxWidth: '80%',
                    color: COLOURS.black,
                    opacity: 0.5,
                  }}>
                  Shipping Tax
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: '400',
                    color: COLOURS.black,
                    opacity: 0.8,
                  }}>
                  {total / 20}
                  dt
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: '400',
                    maxWidth: '80%',
                    color: COLOURS.black,
                    opacity: 0.5,
                  }}>
                  Total
                </Text>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: '500',
                    color: COLOURS.black,
                  }}>
                 {total + total / 20}
                 dt
                </Text>
              </View>
            </View>
            
          </View>
        </ScrollView>
  
        <View
          style={{
            position: 'absolute',
            bottom: 10,
            height: '8%',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            onPress={() => (total != 0 ? checkOut() : null)}
            style={{
              width: '86%',
              height: '90%',
              backgroundColor: "#373E5A",
              borderRadius: 20,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 12,
                fontWeight: '500',
                letterSpacing: 1,
                color: COLOURS.white,
                textTransform: 'uppercase',
              }}>
              CHECKOUT ({total + total / 20} )
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
}
const COLOURS = {
  white: '#ffffff',
  black: '#000000',
  green: '#00AC76',
  red: '#C04345',
  blue: '#0043F9',
  backgroundLight: '#F0F0F3',
  backgroundMedium: '#B9B9B9',
  backgroundDark: '#777777',
};
export const Items = [
  {
    id: 1,
    category: 'product',
    productName: 'MI Super Bass Bluetooth Wireless Headphones',
    productPrice: 1799,
    description:
      'Up to 20 hours battery life | Super powerful Bass | 40mm dynamic driver | Pressure less ear muffs | Bluetooth 5.0 | Voice control',
    isOff: true,
    offPercentage: 10,
  //   productImage: require('../database/images/products/Mi1.png'),
    isAvailable: true,
    productImageList: [
      // require('../database/images/products/Mi1.png'),
      // require('../database/images/products/Mi2.png'),
      // require('../database/images/products/Mi3.png'),
    ],
  },
  {
    id: 2,
    category: 'product',
    productName: 'boAt Rockerz 450 Bluetooth Headphone',
    productPrice: 1499,
    description:
      'boAt Rockerz 450 M is an on-ear wireless headset that has been ergonomically designed to meet the needs of music lovers.',
    isOff: false,
  //   productImage: require('../database/images/products/boat1.png'),
    isAvailable: true,
    productImageList: [
      // require('../database/images/products/boat1.png'),
      // require('../database/images/products/boat2.png'),
      // require('../database/images/products/boat3.png'),
    ],
  },
  {
    id: 3,
    category: 'accessory',
    productName: 'boAt Airdopes 441',
    productPrice: 1999,
    description:
      'Bluetooth: It has Bluetooth v5.0 with a range of 10m and is compatible with Android & iOS',
    isOff: true,
    offPercentage: 18,
  //   productImage: require('../database/images/accessories/boatairpods1.png'),
    isAvailable: true,
    productImageList: [
      // require('../database/images/accessories/boatairpods1.png'),
      // require('../database/images/accessories/boatairpods2.png'),
      // require('../database/images/accessories/boatairpods3.png'),
    ],
  },
  {
    id: 4,
    category: 'accessory',
    productName: 'boAt Bassheads 242',
    productPrice: 399,
    description:
      'Fly into your workouts with precise tones that inspire and energize your system with its HD sound, all the time.',
    isOff: false,
  //   productImage: require('../database/images/accessories/boatbassheads1.png'),
    isAvailable: true,
    productImageList: [
      // require('../database/images/accessories/boatbassheads1.png'),
      // require('../database/images/accessories/boatbassheads2.png'),
      // require('../database/images/accessories/boatbassheads3.png'),
    ],
  },
  {
    id: 5,
    category: 'accessory',
    productName: 'boAt Rockerz 255 Pro+',
    productPrice: 1499,
    description:
      'The unbeatable boAt signature sound shines through no matter what are you playing courtesy its 10mm drivers.',
    isOff: false,
  //   productImage: require('../database/images/accessories/boatrockerz1.png'),
    isAvailable: false,
    productImageList: [
      // require('../database/images/accessories/boatrockerz1.png'),
      // require('../database/images/accessories/boatrockerz2.png'),
      // require('../database/images/accessories/boatrockerz3.png'),
    ],
  },
  {
    id: 6,
    category: 'accessory',
    productName: 'Boult Audio AirBass Propods TWS',
    productPrice: 1299,
    description:
      'One Touch Control & Voice Assistant: With one multifunction button, you can play/pause, previous/next track and answer/hang-up calls.Voice assistant function lets you access siri/Google Assistant',
    isOff: false,
  //   productImage: require('../database/images/accessories/boultairbass1.png'),
    isAvailable: true,
    productImageList: [
      // require('../database/images/accessories/boultairbass1.png'),
      // require('../database/images/accessories/boultairbass2.png'),
      // require('../database/images/accessories/boultairbass3.png'),
    ],
  },
];