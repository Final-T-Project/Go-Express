import React from "react";
import { useState, useEffect } from "react";
import TabBar from "../components/TabBar";
import {
  TouchableHighlight,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  Touchable,
  TouchableOpacity,
  Dimensions,
  Button,
  TextInput,
  Alert,
  KeyboardAvoidingView,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

import {
  TextArea,
  Box,
  Center,
  NativeBaseProvider,
  extendTheme,
  InputRightAddon,
  VStack,
  HStack,
} from "native-base";
import EditeProfil from "./EditeProfil";
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

// feedback side
function Feedback(props) {
  const imgWidth = Dimensions.get("screen").width * 0.33333;
  // state to save feedback text
  const [FeedBackText, setFeedBackText] = useState("");
  let AddFeedback = () => {
    const adressIp = `192.168.103.8`;
    axios
      .post(`http://${adressIp}:5000/feedback/addFeedback`, {
        details: FeedBackText,
        id_user: props.idUser,
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <View
      style={{
        flexDirection: "row",
        flexWrap: "wrap",
        flex: 1,
        alignItems: "center",
        height: 500,
        justifyContent: "center",
      }}
    >
      <View>
        <View>
          <Text
            style={{
              color: "#373E5A",
              fontSize: 16,
              fontWeight: "bold",
              marginTop: 60,
              alignContent: "center",
            }}
          >
            Your Feedback is ower key to Satisfy your needs
          </Text>
        </View>
        <View
          style={{
            marginTop: 80,
          }}
        >
          <NativeBaseProvider>
            <Box alignItems="center">
              <TextArea
                h={130}
                size="xl"
                placeholder="Feedback Placeholder"
                w="800"
                maxW="300"
                backgroundColor={"#fafafa"}
                borderColor={"#ED5C00"}
                onChangeText={(text) => setFeedBackText(text)}
              />
            </Box>
          </NativeBaseProvider>
        </View>
      </View>
      <View
        style={{
          marginTop: 350,
          width: 80,
          height: 80,
          right: 0,
        }}
      >
        <Button
          color={"#ED5C00"}
          title="Send"
          onPress={() => {
            Alert.alert(
              "Your Feedback was send we will take it into considiretion."
            );
            AddFeedback();
          }}
        />
      </View>
    </View>
  );
}

function Info({ navigation, userDataProfile }) {
  const imgWidth = Dimensions.get("screen").width * 0.33333;
  return (
    <View
      style={{
        backgroundColor: "white",
        height: 480,
        alignItems: "center",
        padding: 20,
      }}
    >
      <HStack>
        <EditeProfil />
      </HStack>
      <Center>
        <Box
          marginLeft={0}
          height={150}
          top={1}
          size={250}
          width={350}
          borderColor={"#F14E24"}
          p="5"
          rounded="8"
          borderWidth="2"
        >
          <VStack>
            <HStack marginTop={5}>
              <Image
                source={{
                  uri: "https://res.cloudinary.com/dn9qfvg2p/image/upload/v1672937081/phone-call_ile7m8.png",
                }}
                style={{ width: 22, height: 22, marginRight: 20 }}
              ></Image>
              <Text
                fontSize="md"
                color="#1C2765"
                colorScheme="darkBlue"
                variant="solid"
                marginLeft={2}
                rounded="4"
              >
                27414994
              </Text>
            </HStack>
            <HStack marginTop={5}>
              <Image
                source={{
                  uri: "https://res.cloudinary.com/dn9qfvg2p/image/upload/v1671726895/gmail_dcjbrl.png",
                }}
                style={{ width: 22, height: 22, marginRight: 20 }}
              ></Image>
              <Text
                fontSize="md"
                color="#1C2765"
                colorScheme="darkBlue"
                variant="solid"
                marginLeft={2}
                rounded="4"
              >
                cipidre@gmail.com
              </Text>
            </HStack>
            <Box>
              <HStack marginTop={5}>
                <Image
                  source={{
                    uri: "https://res.cloudinary.com/dn9qfvg2p/image/upload/v1671726727/location_xel02r.png",
                  }}
                  style={{ width: 22, height: 22, marginRight: 20 }}
                ></Image>
                <Text
                  fontSize="md"
                  color="#1C2765"
                  colorScheme="darkBlue"
                  variant="solid"
                  rounded="4"
                >
                  mourouj 5 ,rue de cipidre
                </Text>
              </HStack>
            </Box>
          </VStack>
        </Box>
      </Center>
    </View>
  );
}
// product side
function Product(props) {
  const imgWidth = Dimensions.get("screen").width * 0.33333;
  // state to save user information
  const [userDataProduct, setUserDataProduct] = useState([]);

  useEffect(() => {
    // console.log("the id from prduct : ", props.idUser);
    axios
      .get(`http://192.168.103.8:5000/users/getUserProduct/${props.idUser}`)
      .then((response) => {
        setUserDataProduct(response.data);
      })
      .catch((error) => {
        alert(error);
      });
  }, []);

  // console.log("data", userData);
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          height: "100%",
          alignItems: "flex-start",
        }}
      >
        {userDataProduct.map((element) => (
          <ScrollView>
            <Image
              style={{
                borderRadius: 15,
                width: imgWidth,
                height: imgWidth,
              }}
              source={{ uri: element.photo_product }}
            />

            <Text
              style={{
                textAlign: "center",
                color: "#444444",
              }}
            >
              {" "}
              {element.product_name}
            </Text>
            <Text
              style={{
                textAlign: "center",
                color: "#444444",
              }}
            >
              {element.price} dt
            </Text>
          </ScrollView>
        ))}
      </View>
    </View>
  );
}

export default function Profil({ navigation, route }) {
  const [showContent, setShowContent] = useState("FeedBack");

  // state to save user information
  const [userDataProfile, setUserDataProfile] = useState([]);
  // state to save id connected user
  const [idUser, setIdUser] = useState("");

  useEffect(() => {
    setIdUser(route.params.idToSend);

    axios
      .get(
        `http://192.168.103.8:5000/users/getUserPorfile/${route.params.idToSend}`
      )
      .then((response) => {
        setUserDataProfile(response.data);
        // console.log(response.data);
      })

      .catch((error) => {
        alert(error);
      });
  }, []);

  return (
    <>
      <View>
        <ScrollView>
          <View>
            <Image
              style={{
                height: height - 500,
              }}
              source={{
                uri: "https://res.cloudinary.com/dn9qfvg2p/image/upload/v1673038894/background_profil_wxppqf.png",
              }}
            ></Image>
          </View>
          <View>
            <View>
              {userDataProfile.map((element) => {
                return (
                  <>
                    <Image
                      source={{
                        uri: element.photo,
                      }}
                      style={{
                        width: 100,
                        height: 100,
                        // borderRadius: 100,
                        marginTop: -130,
                        left: 20,
                        borderRadius: 20,
                        shadowColor: "black",
                        shadowOffset: {
                          width: 5,
                          height: 5,
                        },
                        shadowOpacity: "100%",
                        shadowRadius: 20,
                        elevation: 20,
                      }}
                    ></Image>
                  </>
                );
              })}
            </View>
          </View>
          {/* user name */}

          {userDataProfile.map((element) => (
            <View>
              <Text
                key={element.id_user}
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  top: -110,
                  left: 150,
                  color: "white",
                }}
              >
                {element.name}
              </Text>

              {/* user ville */}
              <Text
                style={{
                  fontSize: 15,
                  top: -110,
                  left: 150,
                  color: "white",
                }}
              >
                {element.ville}
              </Text>
            </View>
          ))}
          {/* bar */}

          <View style={{ marginTop: -50, backgroundColor: "white" }}>
            <View style={styles.profileContentButtonsView}>
              <TouchableOpacity
                style={{
                  ...styles.showContentButton,
                  borderBottomWidth: showContent === "FeedBack" ? 2 : 0,
                }}
                onPress={() => setShowContent("FeedBack")}
              >
                <Text style={styles.showContentButtonText}>FeedBack</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  ...styles.showContentButton,
                  borderBottomWidth: showContent === "Info" ? 2 : 0,
                }}
                onPress={() => setShowContent("Info")}
              >
                <Text style={styles.showContentButtonText}>Info</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  ...styles.showContentButton,
                  borderBottomWidth: showContent === "Product" ? 2 : 0,
                }}
                onPress={() => setShowContent("Product")}
              >
                <Text style={styles.showContentButtonText}>Product</Text>
              </TouchableOpacity>
            </View>
            {showContent === "Product" ? (
              <Product idUser={idUser} />
            ) : showContent === "Info" ? (
              <Info userDataProfile={userDataProfile} />
            ) : (
              <Feedback idUser={idUser} />
            )}
          </View>
        </ScrollView>
      </View>
      <TabBar navigation={navigation} />
    </>
  );
}
const styles = StyleSheet.create({
  coverImage: { height: 300, width: "100%" },
  profileContainer: {
    // height: 1000,
    backgroundColor: "#fff",
    marginTop: -100,
    borderTopLeftRadius: 110,
    borderTopRightRadius: 0,
  },
  profileImageView: { alignItems: "center", marginTop: -80 },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 100,
    borderWidth: 3,
    borderColor: "#CCC9C0",
  },
  nameAndBioView: { alignItems: "center", marginTop: 10 },
  userFullName: {
    fontFamily: "",
    fontSize: 26,
    textDecorationLine: "underline",
  },
  userBio: {
    fontFamily: "",
    fontSize: 18,
    color: "#333",
    marginTop: 4,
  },
  countsView: { flexDirection: "row", marginTop: 20 },
  countView: { flex: 1, alignItems: "center" },
  countNum: { fontFamily: "", fontSize: 20 },
  countText: { fontFamily: "", fontSize: 18, color: "#333" },
  interactButtonsView: {
    flexDirection: "row",
    marginTop: 10,
    paddingHorizontal: 20,
  },
  interactButton: {
    flex: 3,
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: "#CCC9C0",
    margin: 9,
    borderRadius: 10,
    shadowOpacity: 0.7,
    shadowRadius: 7.49,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 6,
  },
  interactButtonText: {
    borderRadius: 10,

    color: "#FFF",
    fontSize: 18,
    paddingVertical: 6,
  },
  profileContentButtonsView: {
    flexDirection: "row",
    borderTopWidth: 3,
    borderTopColor: "white",
  },
  showContentButton: {
    flex: 2,
    alignItems: "center",
    paddingVertical: 10,
    borderBottomColor: "#ED5C00",
  },
  showContentButtonText: {
    fontSize: 18,
    color: "grey",
  },
  active: {
    backgroundColor: "#34FFB9",
    position: "absolute",
    bottom: 28,
    left: 10,
    padding: 4,
    height: 20,
    width: 20,
    borderRadius: 10,
  },
});
