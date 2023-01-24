import * as React from "react";
import {
  StatusBar,
  Animated,
  Text,
  View,
  Dimensions,
  StyleSheet,
} from "react-native";
import { Image, Box, VStack } from "native-base";
import TabBar from "../components/TabBar";
const { width, height } = Dimensions.get("screen");
const SPACING = 20;
export default ({ navigation, route }) => {
  const data = route.params.item;
  console.log("test", data);
  return (
    <View style={StyleSheet.absoluteFillObject}>
      <View
        style={{
          // flexDirection: "center",
          padding: 30,
          marginBottom: SPACING,
          backgroundColor: "rgba(255,255,255,0.8)",
          borderRadius: 5,
          borderWidth: 1.5,
          borderColor: "grey",
          shadowColor: "#000",
          width: "80%",
          height: "30%",
          shadowOpacity: 0.3,
          shadowRadius: 20,
          marginTop: "65%",
          right: -30,
        }}
      >
        <VStack>
          <Text
            style={{
              fontSize: 25,
              fontWeight: "600",
              margintop: 8,
              color: "#373E5A",
            }}
          >
            Booked
          </Text>
          <Text style={{ fontSize: 15, fontWeight: "600", color: "#f14e24" }}>
            Booked in:
            <Text style={{ fontSize: 15, fontWeight: "400", color: "black" }}>
              {data.date}
            </Text>
          </Text>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "700",
              margintop: 10,
              color: "#373E5A",
            }}
          >
            Your Commande :
          </Text>
          <Text style={{ fontSize: 15, fontWeight: "700", color: "#f14e24" }}>
            Product name :{""}
            <Text style={{ fontSize: 15, fontWeight: "400", color: "black" }}>
              {data.product_name}
            </Text>
          </Text>
          <Text
            style={{
              fontSize: 15,
              fontWeight: "700",
              margintop: 10,
              color: "#f14e24",
            }}
          >
            {" "}
            Product Price :
            <Text
              style={{
                fontSize: 15,
                fontWeight: "400",
                margintop: 10,
                color: "black",
              }}
            >
              {data.price} dt
            </Text>
          </Text>
        </VStack>
        {/* <Image
          source={{ uri: data.photo_product }}
          style={{
            width: "100%",
            width: 190,
            height: "100%",
            resizeMode: "contain",
          }}
        /> */}
      </View>

      <TabBar navigation={navigation} />
    </View>
  );
};
