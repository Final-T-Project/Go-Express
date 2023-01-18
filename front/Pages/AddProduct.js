import React, { useState, useEffect, useContext } from "react";
import {
  View,
  TextInput,
  Pressable,
  StyleSheet,
  Keyboard,
  TouchableWithoutFeedback,
  ScrollView,
  Permissions,
  LogBox,
} from "react-native";

import {
  Button,
  IconButton,
  Icon,
  Modal,
  Stack,
  FormControl,
  Input,
  Center,
  NativeBaseProvider,
  Text,
  Image,
  useToast,
  Box,
  Select,
} from "native-base";
import * as ImagePicker from "expo-image-picker";
import { Picker } from "@react-native-picker/picker";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Formik } from "formik";
import * as Yup from "yup";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import TabBar from "../components/TabBar";
import axios from "axios";
import IPADRESS from "../config/IPADRESS";
import { UserContext } from "../UserContext";

const AddProduct = ({ navigation }) => {
  // state for selected name , description , price , quantity , category , image
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(1);
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("");

  const { userId } = useContext(UserContext);
  const { userCartId } = useContext(UserContext);

  // function to incriment product quantity
  const onMinus = () => {
    setQuantity(Math.max(0, quantity - 1));
  };
  // function to dicriment product quantity
  const onPlus = () => {
    setQuantity(quantity + 1);
  };

  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let date = month[new Date().getMonth()];
  let posted_at =
    date +
    " " +
    new Date().getDate() +
    " " +
    "2022" +
    " " +
    new Date().getHours() +
    ":" +
    new Date().getMinutes();

  // function to pick image from device and store it in image variable
  const pickImageOne = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Image,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    setImageOne(result.uri);
    console.log("image1:", result.uri);
    if (!result.cancelled) {
      let newfile1 = {
        uri: result.uri,
      };
    }
  };

  const pickImageTow = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Image,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    setImageTow(result.uri);
    console.log("image2:", result.uri);
    if (!result.cancelled) {
      let newfile2 = {
        uri: result.uri,
      };
    }
  };
  const pickImageThree = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Image,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    setImageThree(result.uri);
    console.log("image3:", result.uri);
    if (!result.cancelled) {
      let newfile3 = {
        uri: result.uri,
      };
    }
  };

  const [imageOne, setImageOne] = useState(null);
  const [imageTow, setImageTow] = useState(null);
  const [imageThree, setImageThree] = useState(null);

  let addProductDetails = () => {
    if (!name.length || !description.length || !price.length) {
      alert("Please fill all information");
    } else {
      axios
        .post(`http://${IPADRESS}:5000/products/addProduct`, {
          sellIerd: userId,
          buyerId: "Null",
          name: name,
          category: category,
          price: price,
          description: description,
          photo: imageOne,
          quantity: quantity,
          id_user: userId,
          id_cart: userCartId,
          productStatus: "NotAccepted",
          Published_at: posted_at,
        })
        .then((result) => {
          console.log(result.data.insertId);
          return result.data.insertId;
        })
        .then((id_post) => {
          axios.post(`http://${IPADRESS}:5000/products/addProduct/photo`, {
            photo1: imageOne,
            photo2: imageTow,
            photo3: imageThree,
            idproduct: id_post,
          });
        })
        .then(() => {
          navigation.navigate("Home");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const toast = useToast();

  return (
    <>
      <View>
        <ScrollView>
          <View style={styles.container}>
            <Formik
              initialValues={{
                name: "",
                description: "",
                price: "",
                image: "",
                quantity: 1,
                category: "",
              }}
              validationSchema={Yup.object().shape({
                name: Yup.string().required(""),
                description: Yup.string().required(""),
                price: Yup.number().required("Price is required"),
              })}
            >
              {/* {formik} */}
              {({ errors, touched, handleBlur }) => (
                <View style={styles.form}>
                  {/*Name  Start */}

                  <FormControl>
                    <FormControl.Label fontStyle={{ color: "#373E5A" }}>
                      Product Name
                    </FormControl.Label>
                    <Input
                      backgroundColor={"muted.100"}
                      borderColor={"muted.200"}
                      fontSize={"20"}
                      onChangeText={(text) => setName(text)}
                    />
                  </FormControl>

                  {/*Name  End */}

                  {/*Description  Start */}
                  <FormControl>
                    <FormControl.Label fontStyle={{ color: "#373E5A" }}>
                      Product Description
                    </FormControl.Label>
                    <Input
                      backgroundColor={"muted.100"}
                      borderColor={"muted.200"}
                      fontSize={"20"}
                      onChangeText={(text) => setDescription(text)}
                    />
                  </FormControl>
                  {/*Description  End */}

                  {/*Price  Start */}
                  <FormControl>
                    <FormControl.Label fontStyle={{ color: "#373E5A" }}>
                      Unit Price
                    </FormControl.Label>
                    <Input
                      backgroundColor={"muted.100"}
                      borderColor={"muted.200"}
                      fontSize={"20"}
                      onChangeText={(number) => setPrice(number)}
                    />
                  </FormControl>

                  {/*Price  End */}

                  {/*Category  Start */}
                  <Text style={styles.label}>Category:</Text>
                  <View style={styles.input}>
                    <Picker
                      selectedValue={category}
                      onValueChange={(value) => setCategory(value)}
                      // mode="dropdown"
                      mode="dialog"
                      style={styles.picker}
                      onBlur={handleBlur("category")}
                    >
                      <Picker.Item label="Please Select Category" />
                      <Picker.Item label="Kitchen" value="Kitchen" />
                      <Picker.Item label="Furniture" value="Furniture" />
                      <Picker.Item label="Garden" value="Garden" />
                      <Picker.Item label="Accessories" value="Accessories" />
                    </Picker>
                  </View>
                  {/*Category  End */}

                  {/*Quantity  Start */}
                  <Text style={styles.label}>Quantity:</Text>
                  <View style={styles.quantityContainer}>
                    <Pressable onPress={onMinus} style={styles.quantityButton}>
                      <Text style={styles.quantityInput}>-</Text>
                    </Pressable>

                    <Text>{quantity}</Text>

                    <Pressable onPress={onPlus} style={styles.quantityButton}>
                      <Text style={styles.quantityInput}>+</Text>
                    </Pressable>
                  </View>

                  {/* Quantity  End */}
                  <View style={styles.container}>
                    <Text style={styles.Price_label}>
                      Total Price : {price * quantity} dt{" "}
                    </Text>
                  </View>

                  {/*Image  start */}

                  <FormControl>
                    <FormControl.Label>Image One</FormControl.Label>
                    <Button backgroundColor={"#373E5A"} onPress={pickImageOne}>
                      Pick image1
                    </Button>
                  </FormControl>

                  <FormControl>
                    <FormControl.Label>Image Tow </FormControl.Label>
                    <Button backgroundColor={"#373E5A"} onPress={pickImageTow}>
                      Pick image2
                    </Button>
                  </FormControl>

                  <FormControl>
                    <FormControl.Label>Image Three</FormControl.Label>
                    <Button
                      backgroundColor={"#373E5A"}
                      onPress={pickImageThree}
                    >
                      Pick image3
                    </Button>
                  </FormControl>
                  {/*Image  End */}

                  {/*Button Add  Start */}
                  <TouchableOpacity>
                    <View>
                      <Button
                        style={styles.button}
                        backgroundColor={"#F14E24"}
                        onPress={() => {
                          toast.show({
                            render: () => {
                              return (
                                <Box
                                  bg="green.500"
                                  px="2"
                                  py="1"
                                  rounded="sm"
                                  mb={2}
                                >
                                  Your product Sended to admin For confirmation.
                                </Box>
                              );
                            },
                          });
                          addProductDetails();
                        }}
                      >
                        Save
                      </Button>
                    </View>
                  </TouchableOpacity>
                  {/*Button Add  End */}
                </View>
              )}
            </Formik>
          </View>
        </ScrollView>
      </View>

      <Button
        backgroundColor={"#F14E24"}
        onPress={() => {
          saveUpdate();
        }}
      >
        Save
      </Button>

      {/* <TabBar navigation={navigation} /> */}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    height: "100%",
    justifyContent: "center",
  },
  form: {
    flex: 1,
    width: "80%",
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginTop: 70,
  },

  form_image: {
    width: "80%",
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    height: 130,
    alignSelf: "center",
  },

  image: {
    marginLeft: 20,
    marginTop: 15,
    width: "80%",
    height: "110%",
  },

  label: {
    fontSize: 15,
    marginBottom: 1,
  },

  Price_label: {
    fontSize: 15,
    alignItems: "center",
    flexDirection: "row",
  },

  input: {
    height: 35,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20,
    borderRadius: 10,
    paddingHorizontal: 10,
  },

  inputDescription: {
    height: 70,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20,
    borderRadius: 10,
    paddingHorizontal: 10,
  },

  error: {
    color: "red",
    marginTop: -10,
    marginBottom: 10,
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "#e3e3e3",
    width: 110,
    marginBottom: 20,
    marginTop: 20,
  },
  quantityButton: {
    width: 35,
    height: 35,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#d1d1d1",
  },
  quantityInput: {
    fontSize: 18,
  },
  button: {
    alignItems: "center",
    marginTop: 30,
    Color: "#ED5C00",
  },
  buttonText: {
    color: "white",
    marginLeft: 10,
    textAlign: "center",
  },
  screen: {},

  picker: {
    marginTop: -10,
    fontSize: 16,
  },
});

export default AddProduct;
