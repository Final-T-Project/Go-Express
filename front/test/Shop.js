import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Image,
  ImageBackground,
} from "react-native";
import { COLOURS, Items } from "../database/Database";
import Entypo from "react-native-vector-icons/Entypo";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import axios from "axios";

const Home = ({ navigation }) => {
  const [products, setProducts] = useState([]);
  const [accessory, setAccessory] = useState([]);

  //get called on screen loads
  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      getDataFromDB();
    });

    return unsubscribe;
  }, [navigation]);

  //get data from DB

  const getDataFromDB = () => {
    let productList = [];
    let accessoryList = [];
    for (let index = 0; index < Items.length; index++) {
      if (Items[index].category == "product") {
        productList.push(Items[index]);
      } else if (Items[index].category == "accessory") {
        accessoryList.push(Items[index]);
      }
    }

    setProducts(productList);
    setAccessory(accessoryList);
  };

  // start from here
  //state to store all the product by category
  let [product, setProduct] = useState([]);
  let [dataLength, setDataLength] = useState([]);
  // function to get all product by categories
  useEffect(() => {
    axios.get(`http://192.168.103.8:5000/products/Kitchen`).then((result) => {
      setProduct(result.data.slice(0, 2));
      setDataLength(result.data);
    });
  }, []);

  console.log("testo", product);
  //create an product reusable card

  const ProductCard = ({ data }) => {
    // return (
    //   <TouchableOpacity
    //     onPress={() => navigation.navigate('ProductInfo', {productID: data.id})}
    //     style={{
    //       width: '48%',
    //       marginVertical: 14,
    //     }}>
    //     <View
    //       style={{
    //         width: '100%',
    //         height: 100,
    //         borderRadius: 10,
    //         backgroundColor: COLOURS.backgroundLight,
    //         position: 'relative',
    //         justifyContent: 'center',
    //         alignItems: 'center',
    //         marginBottom: 8,
    //       }}>
    //       <Image
    //         source={data.productImage}
    //         style={{
    //           width: '80%',
    //           height: '80%',
    //           resizeMode: 'contain',
    //         }}
    //       />
    //     </View>
    //     <Text
    //       style={{
    //         fontSize: 12,
    //         color: COLOURS.black,
    //         fontWeight: '600',
    //         marginBottom: 2,
    //       }}>
    //       {data.productName}
    //     </Text>
    //         <View
    //           style={{
    //             flexDirection: 'row',
    //             alignItems: 'center',
    //           }}>
    //           <FontAwesome
    //             name="circle"
    //             style={{
    //               fontSize: 12,
    //               marginRight: 6,
    //               color: COLOURS.green,
    //             }}
    //           />
    //           <Text
    //             style={{
    //               fontSize: 12,
    //               color: COLOURS.green,
    //             }}>
    //             Available
    //           </Text>
    //         </View>
    //       ) : (
    //         <View
    //           style={{
    //             flexDirection: 'row',
    //             alignItems: 'center',
    //           }}>
    //           <FontAwesome
    //             name="circle"
    //             style={{
    //               fontSize: 12,
    //               marginRight: 6,
    //               color: COLOURS.red,
    //             }}
    //           />
    //           <Text
    //             style={{
    //               fontSize: 12,
    //               color: COLOURS.red,
    //             }}>
    //             Unavailable
    //           </Text>
    //         </View>
    //       )
    //     ) : null}
    //     <Text>&#8377; {data.productPrice}</Text>
    //   </TouchableOpacity>
    // );
  };

  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "white",
      }}
    >
      <StatusBar backgroundColor={"white"} barStyle="dark-content" />
      {/* <ImageBackground
        source={{
          uri: "https://res.cloudinary.com/dn9qfvg2p/image/upload/v1673369313/output-onlinepngtools_vy4dmt.png",
        }}
        resizeMode="cover"
        blurRadius ={80}
      > */}
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* cart icon */}
        {/* <View
          style={{
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 16,
          }}
        >
          <TouchableOpacity>
            <Entypo
              name="shopping-bag"
              style={{
                fontSize: 18,
                color: "#ED5C00",
                padding: 12,
                borderRadius: 10,
                backgroundColor: COLOURS.backgroundLight,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("MyCart")}>
            <MaterialCommunityIcons
              name="cart"
              style={{
                fontSize: 18,
                color: "#ED5C00",
                padding: 12,
                borderRadius: 10,
                borderWidth: 1,
                borderColor: COLOURS.backgroundLight,
              }}
            />
          </TouchableOpacity>
        </View> */}
        {/* intro */}
        {/* <View
          style={{
            marginBottom: 10,
            padding: 16,
          }}
        >
          <Text
            style={{
              fontSize: 24,
              color: COLOURS.black,
              fontWeight: "500",
              letterSpacing: 1,
              marginBottom: 10,
              marginLeft: 90,
            }}
          >
            Go Express
          </Text>
          <Text
            style={{
              fontSize: 24,
              color: COLOURS.black,
              fontWeight: "500",
              letterSpacing: 1,
              marginBottom: 30,
              marginLeft: 70,
            }}
          >
            Shop &amp; Service
          </Text>
          <Text
            style={{
              fontSize: 14,
              color: COLOURS.black,
              fontWeight: "400",
              letterSpacing: 1,
              lineHeight: 24,
            }}>
            Real Estate Shop.
            {'\n'}This shop offers both products and services
          </Text>
        </View> */}
        {/* kitchen categorie */}
        <View
          style={{
            padding: 16,
          }}
        >
          {/* <TouchableOpacity
        // onPress={() => navigation.navigate('ProductInfo')}
       
      > */}
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
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  color: COLOURS.black,
                  fontWeight: "500",
                  letterSpacing: 1,
                }}
              >
                kitchen
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  color: COLOURS.black,
                  fontWeight: "400",
                  opacity: 0.5,
                  marginLeft: 10,
                }}
              >
                {dataLength.length} Product
              </Text>
            </View>
            <TouchableOpacity>
              <Text
                style={{
                  fontSize: 14,
                  color: COLOURS.blue,
                  fontWeight: "400",
                }}
              >
                SeeAll
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          ></View>
          <View style={{ height: 10 }}></View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <Image
              source={{
                uri: "https://res.cloudinary.com/dn9qfvg2p/image/upload/v1673384114/quattro_4-1170x657_tjv7ca.jpg",
              }}
              style={{
                width: 330,
                height: 250,
                top: 1,
                borderColor: "#1C2765",
                borderWidth: 2,
                borderRadius: 20,
              }}
            />
            <View style={{ width: 10 }}></View>
            <Image
              source={{
                uri: "https://res.cloudinary.com/dn9qfvg2p/image/upload/v1673391337/frikha-1170x657_qrga5u.jpg",
              }}
              style={{
                width: 330,
                height: 250,
                top: 1,
                borderColor: "#1C2765",
                borderWidth: 2,
                borderRadius: 20,
              }}
            />
          </ScrollView>
          {/* </TouchableOpacity> */}
        </View>
        {/* Furniture categorie */}
        <View
          style={{
            padding: 16,
          }}
        >
          {/* <TouchableOpacity
        // onPress={() => navigation.navigate('ProductInfo')}
       
      > */}
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
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  color: COLOURS.black,
                  fontWeight: "500",
                  letterSpacing: 1,
                }}
              >
                Furniture
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  color: COLOURS.black,
                  fontWeight: "400",
                  opacity: 0.5,
                  marginLeft: 10,
                }}
              >
                number of Furniture categorie
              </Text>
            </View>
            <TouchableOpacity>
              <Text
                style={{
                  fontSize: 14,
                  color: COLOURS.blue,
                  fontWeight: "400",
                }}
              >
                SeeAll
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          ></View>
          <View style={{ height: 10 }}></View>

          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <Image
              source={{
                uri: "https://res.cloudinary.com/dn9qfvg2p/image/upload/v1673389221/090122_m_super_furniture_bedroom_1_izwngi.jpg",
              }}
              style={{
                width: 330,
                height: 250,
                top: 1,
                borderColor: "#1C2765",
                borderWidth: 2,
                borderRadius: 20,
              }}
            />
            <View style={{ width: 10 }}></View>
            <Image
              source={{
                uri: "https://res.cloudinary.com/dn9qfvg2p/image/upload/v1673391185/csm_Website_Vorschaubild_COR_Haus_product_news_2021__13__44d4652b2b_vteght.jpg",
              }}
              style={{
                width: 330,
                height: 250,
                top: 1,
                borderColor: "#1C2765",
                borderWidth: 2,
                borderRadius: 20,
              }}
            />
          </ScrollView>
          {/* </TouchableOpacity> */}
        </View>
        {/*Accessories categorie   */}
        <View
          style={{
            padding: 16,
          }}
        >
          {/* <TouchableOpacity
        // onPress={() => navigation.navigate('ProductInfo')}
       
      > */}
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
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  color: COLOURS.black,
                  fontWeight: "500",
                  letterSpacing: 1,
                }}
              >
                Accessories
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  color: COLOURS.black,
                  fontWeight: "400",
                  opacity: 0.5,
                  marginLeft: 10,
                }}
              >
                nb Accessories
              </Text>
            </View>
            <TouchableOpacity>
              <Text
                style={{
                  fontSize: 14,
                  color: COLOURS.blue,
                  fontWeight: "400",
                }}
              >
                SeeAll
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          ></View>
          <View style={{ height: 10 }}></View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <Image
              source={{
                uri: "https://res.cloudinary.com/dn9qfvg2p/image/upload/v1673389632/IMG_0176_rolt48.jpg",
              }}
              style={{
                width: 330,
                height: 250,
                top: 1,
                borderColor: "#1C2765",
                borderWidth: 2,
                borderRadius: 20,
              }}
            />
            <View style={{ width: 10 }}></View>
            <Image
              source={{
                uri: "https://res.cloudinary.com/dn9qfvg2p/image/upload/v1673390679/sugo-guilin-lampscape-purificateur-air-design-led-01_p8lrml.jpg",
              }}
              style={{
                width: 330,
                height: 250,
                top: 1,
                borderColor: "#1C2765",
                borderWidth: 2,
                borderRadius: 20,
              }}
            />
          </ScrollView>

          {/* </TouchableOpacity> */}
        </View>
        {/* Garden categorie*/}
        <View
          style={{
            padding: 16,
          }}
        >
          {/* <TouchableOpacity
        // onPress={() => navigation.navigate('ProductInfo')}
       
      > */}
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
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  color: COLOURS.black,
                  fontWeight: "500",
                  letterSpacing: 1,
                }}
              >
                Garden
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  color: COLOURS.black,
                  fontWeight: "400",
                  opacity: 0.5,
                  marginLeft: 10,
                }}
              >
                nb Garden
              </Text>
            </View>
            <TouchableOpacity>
              <Text
                style={{
                  fontSize: 14,
                  color: COLOURS.blue,
                  fontWeight: "400",
                }}
              >
                SeeAll
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          ></View>
          <View style={{ height: 10 }}></View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <Image
              source={{
                uri: "https://res.cloudinary.com/dn9qfvg2p/image/upload/v1673390071/empty-modern-colorful-rattan-furniture-outdoor-garden-weave-table-set-with-round-table-four-chairs-with-pillows-green-concrete-floor_36367-2813_fhaci8.jpg",
              }}
              style={{
                width: 330,
                height: 250,
                top: 1,
                borderColor: "#1C2765",
                borderWidth: 2,
                borderRadius: 20,
              }}
            />
            <View style={{ width: 10 }}></View>
            <Image
              source={{
                uri: "https://res.cloudinary.com/dn9qfvg2p/image/upload/v1673390338/umbrosa_lnvmfd.jpg",
              }}
              style={{
                width: 330,
                height: 250,
                top: 1,
                borderColor: "#1C2765",
                borderWidth: 2,
                borderRadius: 20,
              }}
            />
          </ScrollView>
          {/* </TouchableOpacity> */}
        </View>
      </ScrollView>
      {/* </ImageBackground> */}
    </View>
  );
};

export default Home;
