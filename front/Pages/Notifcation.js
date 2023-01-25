import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Image,
  Pressable,
  ScrollView,
} from "react-native";
import axios from "axios";
import { useNavigation } from "@react-navigation/core";
import React, { useState, useEffect, useContext } from "react";
import IPADRESS from "../config/IPADRESS";
import { UserContext } from "../UserContext";

function Notification() {
  const { userId } = useContext(UserContext);
  let [kitchen, setKitchen] = useState([]);
  let [accessories, setAccessories] = useState([]);
  let [garden, setGarden] = useState([]);
  let [furniture, setFurniture] = useState([]);
  const [data, setData] = useState([]);

  // const [userDataProfile, setUserDataProfile] = useState([]);
  // const [count, setCount] = useState(0);
  // const navigation = useNavigation();
  useEffect(() => {
    (async function () {
      axios.get(`http://${IPADRESS}:5000/products/garden`).then((result) => {
        setGarden(result.data);
      });

      axios
        .get(`http://${IPADRESS}:5000/products/accessories`)
        .then((result) => {
          setAccessories(result.data);
        });
      axios.get(`http://${IPADRESS}:5000/products/furniture`).then((result) => {
        setFurniture(result.data);
      });
      axios.get(`http://${IPADRESS}:5000/products/kitchen`).then((result) => {
        setKitchen(result.data);
      });
    })();
  }, []);

  const GetAllProduct = () => {
    setData(kitchen, accessories, garden, furniture);
  };
  useEffect(() => {
    GetAllProduct();
  }, []);

  // useEffect(() => {
  //   axios
  //     .get(`http://${IPADRESS}:5000/users/getUserPorfile/${userId}`)
  //     .then((response) => {
  //       setUserDataProfile(response.data);
  //       // console.log("user_data", response.data);
  //     })
  //     .catch((error) => {
  //       alert(error);
  //     });
  // }, []);
  var gardenstore = setGarden.length + 1;
  var accessoriesstore = setAccessories.length + 1;
  var furniturestore = setFurniture.length + 1;
  var kitchenstore = setKitchen.length + 1;

  return (
    <ScrollView>
      <View style={{ marginTop: 30 }}>
        <FlatList
          data={garden}
          keyExtractor={(item, index) => {
            return index.toString();
          }}
          renderItem={({ item }) => {
            return (
              // onPress={navigation.navigate(item.navig)}
              <Pressable>
                <View style={styles.container}>
                  <View style={styles.HeaderImage}>
                    <Image
                      style={styles.image}
                      source={{
                        uri: "https://res.cloudinary.com/dn9qfvg2p/image/upload/v1673556815/go_ovtczy.png",
                      }}
                    />
                  </View>
                  <View style={{ flexDirection: "row", marginLeft: -300 }}>
                    <View>
                      <Text style={{ color: "#1B6ADF", fontSize: 15 }}>
                        GO-Express
                      </Text>
                      <Text style={{ color: "#64676B", width: "80%" }}>
                        The admin has been accepted your product{" "}
                        {item.product_name} Product under Category{" "}
                        {item.category}
                      </Text>

                      <Text style={{ color: "#64676B" }}>
                        {item.Published_at}
                      </Text>
                    </View>
                  </View>
                </View>
              </Pressable>
            );
          }}
        />
        {/* <FlatList
          data={accessories}
          keyExtractor={(item, index) => {
            return index.toString();
          }}
          renderItem={({ item }) => {
            return (
              // onPress={navigation.navigate(item.navig)}
              <Pressable>
                <View style={styles.container}>
                  <View style={styles.HeaderImage}>
                    <Image
                      style={styles.image}
                      source={{
                        uri: "https://res.cloudinary.com/dn9qfvg2p/image/upload/v1673556815/go_ovtczy.png",
                      }}
                    />
                  </View>
                  <View style={{ flexDirection: "row", marginLeft: -300 }}>
                    <View>
                      <Text style={{ color: "#1B6ADF", fontSize: 15 }}>
                        GO-Express
                      </Text>

                      <Text style={{ color: "#64676B", width: "80%" }}>
                        The admin has been confirmed your {item.product_name} in{" "}
                        {item.category}
                      </Text>

                      <Text style={{ color: "#64676B" }}>
                        {item.Published_at}
                      </Text>
                    </View>
                  </View>
                </View>
              </Pressable>
            );
          }}
        />
        <FlatList
          data={furniture}
          keyExtractor={(item, index) => {
            return index.toString();
          }}
          renderItem={({ item }) => {
            return (
              // onPress={navigation.navigate(item.navig)}
              <Pressable>
                <View style={styles.container}>
                  <View style={styles.HeaderImage}>
                    <Image
                      style={styles.image}
                      source={{
                        uri: "https://res.cloudinary.com/dn9qfvg2p/image/upload/v1673556815/go_ovtczy.png",
                      }}
                    />
                  </View>
                  <View style={{ flexDirection: "row", marginLeft: -300 }}>
                    <View>
                      <Text style={{ color: "#1B6ADF", fontSize: 15 }}>
                        GO-Express
                      </Text>

                      <Text style={{ color: "#64676B", width: "80%" }}>
                        The admin has been confirmed your {item.product_name} in{" "}
                        {item.category}
                      </Text>

                      <Text style={{ color: "#64676B" }}>
                        {item.Published_at}
                      </Text>
                    </View>
                  </View>
                </View>
              </Pressable>
            );
          }}
        /> */}
        {/* <FlatList
          data={kitchen}
          keyExtractor={(item, index) => {
            return index.toString();
          }}
          renderItem={({ item }) => {
            return (
              // onPress={navigation.navigate(item.navig)}
              <Pressable>
                <View style={styles.container}>
                  <View style={styles.HeaderImage}>
                    <Image
                      style={styles.image}
                      source={{
                        uri: "https://res.cloudinary.com/dn9qfvg2p/image/upload/v1673556815/go_ovtczy.png",
                      }}
                    />
                  </View>
                  <View style={{ flexDirection: "row", marginLeft: -300 }}>
                    <View>
                      <Text style={{ color: "#1B6ADF", fontSize: 15 }}>
                        GO-Express
                      </Text>

                      <Text style={{ color: "#64676B", width: "80%" }}>
                        The admin has been confirmed your {item.product_name} in{" "}
                        {item.category}
                      </Text>

                      <Text style={{ color: "#64676B" }}>
                        {item.Published_at}
                      </Text>
                    </View>
                  </View>
                </View>
              </Pressable>
            );
          }}
        /> */}
      </View>
    </ScrollView>
  );
}
export default Notification;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "95%",
    height: 110,
    padding: 15,
    marginBottom: 15,
    backgroundColor: "white",
    flexDirection: "row",
    borderRadius: 12,
    borderWidth: 1.5,
    borderRadius: 5,
    borderColor: "grey",
    right: -10,
  },
  HeaderImage: {
    width: "110%",
    height: "110%",
    // borderRadius: 50,
  },
  image: {
    width: 50,
    height: 50,
    top: -18,
    right: 18,
    // paddingBottom: 80,
  },
});
