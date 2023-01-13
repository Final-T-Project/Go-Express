import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  ToastAndroid,
  StatusBar,
} from "react-native";
import { Box, Center, HStack, Checkbox } from "native-base";
import EditeAdress from "front/Pages/EditeAdress.js";
import { FontAwesome5 } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { COLOURS, Items } from "../database/Database";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import axios from "axios";
import IPADRESS from "../config/IPADRESS";

const MyCart = ({ navigation, route }) => {
  const [product, setProduct] = useState();
  const [total, setTotal] = useState(0);

  const [idUser, setIdUser] = useState("");

  //function to get the id_user
  useEffect(() => {
    AsyncStorage.getItem("userData").then((res) => {
      setIdUser(JSON.parse(res));
    });
  }, []);

  // state to save products in the cart
  const [cartProducts, setCartProducts] = useState([]);
  const [productPrice, setProductPrice] = useState([]);
  //id card recived from product info
  // const id_card = route.params.idCart;

  // function to get product in the cart with specifique Id
  const [idCart, setIdCart] = useState("");
  useEffect(() => {
    axios
      .get(`http://${IPADRESS}:5000/carts/getIdCart/${idUser.userId}`)
      .then((response) => {
        console.log("test", response.data);
        response.data.map((element) => {
          setIdCart(element.id_cart);
          console.log("testoo", element.id_cart);
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  //

  useEffect(() => {
    axios
      .get(`http://${IPADRESS}:5000/carts/getCartProduct/${idCart}`)
      .then((response) => {
        console.log("tu", response.data);
        setCartProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log("testt price", productPrice);

  //delete data from database
  let DeleteProductFromCart = (idproduct) => {
    axios
      .delete(`http://${IPADRESS}/carts/deleteProduct/${idproduct}`)
      .then(() => {
        console.log("deleted");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // state to save user data
  const [userDataProfile, setUserDataProfile] = useState([]);
  // function to get user information
  useEffect(() => {
    axios
      .get(`http://${IPADRESS}:5000/users/getUserPorfile/${idUser.userId}`)
      .then((response) => {
        setUserDataProfile(response.data);
      })
      .catch((error) => {
        alert(error);
      });
  }, []);

  //get total price of all items in the cart
  const getTotal = (productData) => {
    let total = 0;
    for (let index = 0; index < productData.length; index++) {
      let productPrice = productData[index].productPrice;
      total = total + productPrice;
    }
    setTotal(total);
  };

  const checkOut = async () => {
    try {
      await AsyncStorage.removeItem("cartItems");
    } catch (error) {
      return error;
    }

    ToastAndroid.show("Items will be Deliverd SOON!", ToastAndroid.SHORT);

    navigation.navigate("Shop");
  };

  const renderProducts = (data, index) => {
    return (
      <TouchableOpacity
        key={index}
        // onPress={() =>
        //   navigation.navigate("ProductInfo", { productID: data.id })
        // }
        style={{
          width: "100%",
          height: 100,
          marginVertical: 6,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <View
          style={{
            width: "30%",
            height: 100,
            padding: 14,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: COLOURS.backgroundLight,
            borderRadius: 10,
            marginRight: 22,
            borderColor: "#1C2765",
            borderWidth: 2,
          }}
        >
          <StatusBar backgroundColor={"white"} barStyle="dark-content" />
          <Image
            source={data.photo_product}
            style={{
              width: "100%",
              height: "100%",
              resizeMode: "contain",
            }}
          />
        </View>
        <View
          style={{
            flex: 1,
            height: "100%",
            justifyContent: "space-around",
          }}
        >
          <View style={{}}>
            <Text
              style={{
                fontSize: 14,
                maxWidth: "100%",
                color: COLOURS.black,
                fontWeight: "600",
                letterSpacing: 1,
              }}
            >
              {data.product_name}
            </Text>
            <View
              style={{
                marginTop: 4,
                flexDirection: "row",
                alignItems: "center",
                opacity: 0.6,
              }}
            >
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "400",
                  maxWidth: "85%",
                  marginRight: 4,
                }}
              >
                {data.price} dt
              </Text>
            </View>
            <View
              style={{
                marginTop: 4,
                flexDirection: "row",
                alignItems: "center",
                opacity: 0.6,
              }}
            >
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "400",
                  maxWidth: "85%",
                  marginRight: 4,
                }}
              >
                {data.quantity} Units
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 10,
              }}
            ></View>

            <TouchableOpacity
              onPress={() => DeleteProductFromCart(data.id_product)}
            >
              <MaterialCommunityIcons
                name="delete-outline"
                style={{
                  fontSize: 20,
                  color: "#ED5C00",
                  backgroundColor: COLOURS.backgroundLight,
                  padding: 8,
                  borderRadius: 100,
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const renderUser = (data, index) => {
    return (
      <View>
        <Text
          style={{
            fontSize: 14,
            color: COLOURS.black,
            fontWeight: "500",
          }}
        >
          {data.adress} Tunis
        </Text>
        <Text
          style={{
            fontSize: 12,
            color: COLOURS.black,
            fontWeight: "400",
            lineHeight: 20,
            opacity: 0.5,
          }}
        >
          {data.ville} Ariana
        </Text>
      </View>
    );
  };

  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "white",
        position: "relative",
      }}
    >
      <StatusBar backgroundColor={"white"} barStyle="dark-content" />
      <ScrollView>
        <View
          style={{
            width: "100%",
            flexDirection: "row",
            paddingTop: 16,
            paddingHorizontal: 16,
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* <TouchableOpacity onPress={() => navigation.goBack()}>
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
          </TouchableOpacity> */}
          <Text
            style={{
              fontSize: 24,
              color: COLOURS.black,
              fontWeight: "600",
              marginBottom: 10,
              paddingLeft: 90,
            }}
          >
            Order Details
          </Text>
          <View></View>
        </View>
        <Text
          style={{
            fontSize: 18,
            color: COLOURS.black,
            fontWeight: "500",
            letterSpacing: 1,
            paddingTop: 20,
            paddingLeft: 16,
            marginBottom: 10,
          }}
        >
          My Orders
        </Text>
        <View style={{ paddingHorizontal: 16 }}>
          {/* orders that i add   */}
          {cartProducts ? (
            cartProducts.map(renderProducts)
          ) : (
            <Text> No products</Text>
          )}
        </View>
        <View>
          <HStack>
            <View
              style={{
                paddingHorizontal: 16,
                marginVertical: 10,
              }}
            >
              <Box></Box>
              <Text
                style={{
                  fontSize: 16,
                  color: COLOURS.black,
                  fontWeight: "500",
                  letterSpacing: 1,
                  marginBottom: 20,
                }}
              >
                Delivery Location
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    width: "80%",
                    alignItems: "center",
                  }}
                >
                  <View
                    style={{
                      color: COLOURS.blue,
                      backgroundColor: COLOURS.backgroundLight,
                      alignItems: "center",
                      justifyContent: "center",
                      padding: 12,
                      borderRadius: 10,
                      marginRight: 18,
                      borderColor: "#1C2765",
                      borderWidth: 1,
                    }}
                  >
                    <MaterialCommunityIcons
                      name="truck-delivery-outline"
                      style={{
                        fontSize: 20,
                        color: "#373E5A",
                      }}
                    />
                  </View>
                  <View>
                    {userDataProfile ? (
                      userDataProfile.map(renderUser)
                    ) : (
                      <Text> </Text>
                    )}
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
            }}
          >
            <Text
              style={{
                fontSize: 16,
                color: COLOURS.black,
                fontWeight: "500",
                letterSpacing: 1,
                marginBottom: 20,
              }}
            >
              Payment Method
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  width: "80%",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    color: COLOURS.blue,
                    backgroundColor: COLOURS.backgroundLight,
                    alignItems: "center",
                    justifyContent: "center",
                    padding: 12,
                    borderRadius: 10,
                    marginRight: 18,
                    borderColor: "#1C2765",
                    borderWidth: 1,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 9,
                      fontWeight: "900",
                      color: "#373E5A",
                      letterSpacing: 1,
                    }}
                  >
                    VISA
                  </Text>
                </View>
                <View>
                  <Text
                    style={{
                      fontSize: 14,
                      color: COLOURS.black,
                      fontWeight: "500",
                    }}
                  >
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
                <Checkbox
                  value="orange"
                  colorScheme="orange"
                  accessibilityLabel="This is a dummy checkbox"
                />
              </HStack>
            </View>
          </View>
          <View
            style={{
              paddingHorizontal: 16,
              marginVertical: 10,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  width: "80%",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    color: COLOURS.blue,
                    backgroundColor: COLOURS.backgroundLight,
                    alignItems: "center",
                    justifyContent: "center",
                    padding: 12,
                    borderRadius: 10,
                    marginRight: 18,
                    borderColor: "#1C2765",
                    borderWidth: 1,
                  }}
                >
                  <FontAwesome5 name="money-bill" size={19} color="#373E5A" />
                </View>
                <View>
                  <Text
                    style={{
                      fontSize: 14,
                      color: COLOURS.black,
                      fontWeight: "500",
                    }}
                  >
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
                <Checkbox
                  value="orange"
                  colorScheme="orange"
                  accessibilityLabel="This is a dummy checkbox"
                />
              </HStack>
            </View>
          </View>
          {/* total prise */}
          <View
            style={{
              paddingHorizontal: 16,
              marginTop: 40,
              marginBottom: 80,
            }}
          >
            <Text
              style={{
                fontSize: 16,
                color: COLOURS.black,
                fontWeight: "500",
                letterSpacing: 1,
                marginBottom: 20,
              }}
            >
              Order Info
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: 8,
              }}
            >
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: "400",
                  maxWidth: "80%",
                  color: COLOURS.black,
                  opacity: 0.5,
                }}
              >
                Subtotal
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: "400",
                  color: COLOURS.black,
                  opacity: 0.8,
                }}
              >
                {total}.00dt
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: 22,
              }}
            >
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: "400",
                  maxWidth: "80%",
                  color: COLOURS.black,
                  opacity: 0.5,
                }}
              >
                Shipping Tax
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: "400",
                  color: COLOURS.black,
                  opacity: 0.8,
                }}
              >
                {total / 20}
                dt
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: "400",
                  maxWidth: "80%",
                  color: COLOURS.black,
                  opacity: 0.5,
                }}
              >
                Total
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "500",
                  color: COLOURS.black,
                }}
              >
                {total + total / 20}
                dt
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>

      <View
        style={{
          position: "absolute",
          bottom: 10,
          height: "8%",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          onPress={() => (total != 0 ? checkOut() : null)}
          style={{
            width: "86%",
            height: "90%",
            backgroundColor: "#ED5C00",
            borderRadius: 20,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 12,
              fontWeight: "500",
              letterSpacing: 1,
              color: "white",
              textTransform: "uppercase",
            }}
          >
            CHECKOUT ({total + total / 20} )
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MyCart;
