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
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("ProductInfo", { productID: data.id })
        }
        style={{
          width: "40%",
          marginVertical: 14,
        }}
      >
        <View
          style={{
            width: "100%",
            height: 100,
            borderRadius: 10,
            backgroundColor: COLOURS.backgroundLight,
            position: "relative",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 8,
          }}
        >
          {/* {product.map ((element)=>( */}
          <View
            style={{
              position: "absolute",
              width: "20%",
              height: "24%",
              backgroundColor: COLOURS.green,
              top: 0,
              left: 0,
              borderTopLeftRadius: 10,
              borderBottomRightRadius: 10,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontSize: 12,
                color: COLOURS.white,
                fontWeight: "bold",
                letterSpacing: 1,
              }}
            >
              10%
            </Text>
          </View>

          <Image
            source={{
              uri: data.photo_product,
            }}
            // source={{
            //   uri: "https://res.cloudinary.com/ddvyi3jpk/image/upload/v1673390179/Mi1_vhyu9h.png",
            // }}
            style={{
              width: "80%",
              height: "80%",
              resizeMode: "contain",
            }}
          />
        </View>

        <Text
          style={{
            fontSize: 12,
            color: COLOURS.black,
            fontWeight: "600",
            marginBottom: 2,
          }}
        >
          {data.product_name}
          MI Super Bass Bluetooth Wireless Headphones
        </Text>
        {data.category == "accessory" ? (
          data.isAvailable ? (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <FontAwesome
                style={{
                  fontSize: 12,
                  marginRight: 6,
                  color: COLOURS.green,
                }}
              />
              <Text
                style={{
                  fontSize: 12,
                  color: COLOURS.green,
                }}
              >
                Available
              </Text>
            </View>
          ) : (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <FontAwesome
                name="circle"
                style={{
                  fontSize: 12,
                  marginRight: 6,
                  color: COLOURS.red,
                }}
              />
              <Text
                style={{
                  fontSize: 12,
                  color: COLOURS.red,
                }}
              >
                Unavailable
              </Text>
            </View>
          )
        ) : null}
        <Text> {data.price} dt </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: COLOURS.white,
      }}
    >
      <StatusBar backgroundColor={"COLOURS.white"} barStyle="dark-content" />
      {/* <ImageBackground
        source={{
          uri: "https://res.cloudinary.com/dn9qfvg2p/image/upload/v1673369313/output-onlinepngtools_vy4dmt.png",
        }}
        resizeMode="cover"
       
      > */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
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
        </View>
        {/* intro */}
        <View
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
            }}
          >
            Audio Shop.
            {"\n"}This shop offers both products and services
          </Text>
        </View>
        {/* kitchen categorie */}
        <View
          style={{
            padding: 16,
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
            <Text
              style={{
                fontSize: 14,
                color: COLOURS.blue,
                fontWeight: "400",
              }}
            >
              SeeAll
            </Text>
          </View>
          <ScrollView horizontal={true}>
            <View
              style={{
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "space-between",
              }}
            >
              {product.map((element) => {
                return <ProductCard data={element} key={element.id} />;
              })}
            </View>
          </ScrollView>
        </View>
        {/* Furniture categorie */}
        <View
          style={{
            padding: 16,
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
            <Text
              style={{
                fontSize: 14,
                color: COLOURS.blue,
                fontWeight: "400",
              }}
            >
              SeeAll
            </Text>
          </View>
          <ScrollView horizontal={true}>
            <View
              style={{
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "space-between",
              }}
            >
              {products.map((data) => {
                return <ProductCard data={data} key={data.id} />;
              })}
            </View>
          </ScrollView>
        </View>
        {/*Garden categorie  */}
        <View
          style={{
            padding: 16,
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
                number of Garden categorie
              </Text>
            </View>
            <Text
              style={{
                fontSize: 14,
                color: COLOURS.blue,
                fontWeight: "400",
              }}
            >
              SeeAll
            </Text>
          </View>
          <ScrollView horizontal={true}>
            <View
              style={{
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "space-between",
              }}
            >
              {products.map((data) => {
                return <ProductCard data={data} key={data.id} />;
              })}
            </View>
          </ScrollView>
        </View>
        {/* Accessories categorie */}
        <View
          style={{
            padding: 16,
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
                number of Accessories categorie
              </Text>
            </View>
            <Text
              style={{
                fontSize: 14,
                color: COLOURS.blue,
                fontWeight: "400",
              }}
            >
              SeeAll
            </Text>
          </View>
          <ScrollView horizontal={true}>
            <View
              style={{
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "space-between",
              }}
            >
              {products.map((data) => {
                return <ProductCard data={data} key={data.id} />;
              })}
            </View>
          </ScrollView>
        </View>
      </ScrollView>
      {/* </ImageBackground> */}
    </View>
  );
};

export default Home;
