import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  Button,
  Image,
  Keyboard,
  TouchableWithoutFeedback,
  ScrollView,
  Permissions,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Picker } from "@react-native-picker/picker";

import { Formik } from "formik";
import * as Yup from "yup";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import TabBar from "../components/TabBar";

import axios from "axios";

const AddProduct = ({ navigation }) => {
  // state for selected name , description , price , quantity , category , image
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(1);
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("");
  const [image, setImage] = useState(null);

  // function to incriment product quantity
  const onMinus = () => {
    setQuantity(Math.max(0, quantity - 1));
  };
  // function to dicriment product quantity
  const onPlus = () => {
    setQuantity(quantity + 1);
  };

  // function to pick image from device and store it in image variable
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Image,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.5,
    });
    setImage(result.uri);
    console.log("hi", result.uri);

    if (!result.cancelled) {
      let newfile = {
        uri: result.uri,
      };
      uploadImage(newfile);
    }
  };
  console.log("image url", image);

  // function to upload image to cloudinary
  async function uploadImage(path) {
    try {
      const cloudName = "ddvyi3jpk";
      const apiKey = "473317851271237";
      const apiSecret = "X11a5qnqfyzgMCkEoJN0Gz2cvNs";

      const timestamp = Date.now().toString();
      const publicId = `my-image-${timestamp}`;

      // Form the request payload
      const formData = new FormData();
      formData.append("file", {
        uri: path,
        name: `${timestamp}.jpg`,
        type: "image/png",
      });
      formData.append("api_key", apiKey);
      formData.append("timestamp", timestamp);
      formData.append("public_id", publicId);

      // Make the request to Cloudinary's API
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
        formData
      );

      // Return the URL of the uploaded image
      return response.data.secure_url;
    } catch (error) {
      console.error(error);
    }
  }

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

  let addProduct = () => {
    axios
      .post(`http://192.168.103.13:5000/products/addProduct`, {
        sellIerd: "A",
        buyerId: "Null",
        product_name: name,
        category: category,
        price: price,
        description: description,
        photo: image,
        quantity: quantity,
        id_user: "A",
        id_cart: 2,
        productStatus: "NotAccepted",
        Published_at: posted_at,
      })

      .then(() => {
        console.log("added");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // MediaManager.get()
  //   .upload(image)
  //   .unsigned("ahmedmejdoub")
  //   .option("resource_type", "image");
  //.option("upload_preset", "ahmedmejdoub")

  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          <Formik
            initialValues={{
              name: "",
              description: "",
              price: "",
              image: "",
              quantity: 1,
            }}
            validationSchema={Yup.object().shape({
              name: Yup.string().required("Le nom est requis"),
              description: Yup.string().required("La description est requise"),
              price: Yup.number().required("Le prix est requis"),
              quantity: Yup.number(),
            })}
          >
            <View style={styles.form}>
              {/*image  start */}

              {/* <View style={styles.form_image}>
                <Image
                  style={styles.image}
                  source={require("../assets/go.png")}
                />
              </View> */}
              {/*image  end */}

              {/*Name  Start */}
              <Text style={styles.label}>Product Name :</Text>
              <TextInput
                style={styles.input}
                onChangeText={(text) => setName(text)}
              />
              {/*Name  End */}

              {/*Description  start */}
              <Text style={styles.label}>Description :</Text>
              <TextInput
                style={styles.inputDescription}
                onChangeText={(text) => setDescription(text)}
              />
              {/*Description  End */}

              {/*Price  Start */}
              <Text style={styles.label}>Unit Price:</Text>
              <TextInput
                style={styles.input}
                onChangeText={(number) => setPrice(number)}
              />
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

              <View>
                <Button title="Pick a image " onPress={pickImage} />
                {image && <Image source={{ uri: image }} />}
              </View>

              {/*Image  End */}

              {/*Button Add  Start */}
              <TouchableOpacity>
                <View style={styles.button}>
                  <MaterialIcons name="add" size={24} color="white" />
                  <Text onPress={addProduct} style={styles.buttonText}>
                    Add Product
                  </Text>
                </View>
              </TouchableOpacity>
              {/*Button Add  End */}
            </View>
          </Formik>
        </View>
      </ScrollView>
      <TabBar navigation={navigation} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    height: 700,
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
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFAD62",
    padding: 6,
    borderRadius: 5,
    marginTop: 30,
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
