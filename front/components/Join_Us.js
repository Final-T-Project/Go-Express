import React, { useState, useEffect, useContext } from "react";
import {
  View,
  Pressable,
  StyleSheet,
  ScrollView,
  Permissions,
  LogBox,
  Dimensions,
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
  CheckIcon,
  WarningOutlineIcon,
  Radio,
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
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
const Join_Us = ({ navigation }) => {
  // state for selected name , description , price , quantity , category , image
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("");
  const [service, setService] = useState("");
  
  const { userId } = useContext(UserContext);
  const { userCartId } = useContext(UserContext);
  const [value, setValue] = React.useState('Male');
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
  const [fileResponse, setFileResponse] = useState([]);

  // const handleDocumentSelection = useCallback(async () => {
  //   try {
  //     const response = await DocumentPicker.pick({
  //       presentationStyle: 'fullScreen',
  //     });
  //     setFileResponse(response);
  //   } catch (err) {
  //     console.warn(err);
  //   }
  // }, []);
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
const {height,width}=Dimensions.get("screen")
  return (
    <>  
    
        <ScrollView>
        <View style={{height: height}}>
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
                  {/*First Name */}
                  <FormControl>
                    <FormControl.Label fontStyle={{ color: "#373E5A" }}>
                      First Name
                    </FormControl.Label>
                    <Input
                    _focus={{ borderColor: '#ED5C00' }}
                    placeholder="First Name"
                      backgroundColor={"muted.100"}
                      borderColor={"muted.200"}
                      fontSize={"15"}
                      onChangeText={(text) => setName(text)}
                    />
                  </FormControl>
                  {/*Last Name*/}
                  <FormControl>
                    <FormControl.Label fontStyle={{ color: "#373E5A" }}>
                      Last Name
                    </FormControl.Label>
                    <Input
                    _focus={{ borderColor: '#ED5C00' }}
                    placeholder="Last Name"
                      backgroundColor={"muted.100"}
                      borderColor={"muted.200"}
                      fontSize={"15"}
                      onChangeText={(text) => setName(text)}
                    />
                  </FormControl>
                  {/*Phone Number */}
                  <FormControl>
                    <FormControl.Label fontStyle={{ color: "#373E5A" }}>
                      Phone Number
                    </FormControl.Label>
                    <Input
                    _focus={{ borderColor: '#ED5C00' }}
                    placeholder="Phone Number"
                      backgroundColor={"muted.100"}
                      borderColor={"muted.200"}
                      fontSize={"15"}
                      onChangeText={(text) => setDescription(text)}
                    />
                  </FormControl>
                  {/*Adress */}
                  <FormControl>
                    <FormControl.Label fontStyle={{ color: "#373E5A" }}>
                      Adress
                    </FormControl.Label>
                    <Input
                    _focus={{ borderColor: '#ED5C00' }}
                    placeholder="Adress"
                      backgroundColor={"muted.100"}
                      borderColor={"muted.200"}
                      fontSize={"15"}
                      onChangeText={(text) => setDescription(text)}
                    />
                  </FormControl>
               
                  {/*Price  End */}

                  {/*Category  Start */}
                  {/* <FormControl w="3/4" maxW="300" isRequired isInvalid>
        <FormControl.Label>Choose work position</FormControl.Label>
        <Select minWidth="200" accessibilityLabel="Choose Service" placeholder="Choose Service" _selectedItem={{
        bg: "teal.600",
        endIcon: <CheckIcon size={5} />
      }} mt="1">
          <Select.Item label="Householder" value="householder" />
          <Select.Item label="Electrician" value="electrician" />
          <Select.Item label="Plumber" value="plumber" />
          <Select.Item label="Truck Driver" value="truck driver" />
          <Select.Item label="Delivery Agents" value="delivery agents" />
        </Select>
        {/* <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
          Please make a selection!
        </FormControl.ErrorMessage> */}
      {/* </FormControl> */}

                  {/*Category  End */}
          <FormControl>
                    <FormControl.Label fontStyle={{ color: "#373E5A" }}>
                    Choose work position
                    </FormControl.Label>         
      <Box maxW="300">
        <Select selectedValue={service} minWidth="200" accessibilityLabel="work position" placeholder="work position" _selectedItem={{
        bg: "teal.600",
        endIcon: <CheckIcon size="5" />
      }} mt={1} onValueChange={itemValue => setService(itemValue)}>
          <Select.Item label="Householder" value="householder" />
          <Select.Item label="Electrician" value="electrician" />
          <Select.Item label="Plumber" value="plumber" />
          <Select.Item label="Truck Driver" value="truck driver" />
          <Select.Item label="Delivery Agents" value="delivery agents" />
        </Select>
      </Box>
      </FormControl>
                

              {/* Gender */}
              <FormControl>
                    <FormControl.Label fontStyle={{ color: "#373E5A" }}>
                    Choose your Gender
                    </FormControl.Label>  
              <Radio.Group
      name="myRadioGroup"
      value={value}
      
      onChange={(nextValue) => {
        setValue(nextValue);
      }}
    >
      <Radio color="#ED5C00"  selectedColor="red" value="Male" my="1">
        Male
      </Radio>
      <Radio value="Female" my="1">
        Female
      </Radio>
    </Radio.Group>
    </FormControl>
                  {/* Image */}

                  <FormControl>
                    <FormControl.Label>Your Image</FormControl.Label>
                    <Button backgroundColor={"#373E5A"} onPress={pickImageOne}>
                      Pick your image
                    </Button>
                  </FormControl>

                 
                  {/*Image  End */}
                  <SafeAreaView style={styles.container} >
      <StatusBar barStyle={'dark-content'} />
      {fileResponse.map((file, index) => (
        <Text
          key={index.toString()}
          style={styles.uri}
          numberOfLines={1}
          ellipsizeMode={'middle'}>
          {file?.uri}
        </Text>
      ))}
      <Button title="Select 📑" 
      // onPress={handleDocumentSelection} 
      />
    </SafeAreaView>
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
        {/* <TabBar navigation={navigation} /> */}
         
    {/* save bottun 2 */}
{/* 
      <Button
        backgroundColor={"#F14E24"}
        onPress={() => {
          saveUpdate();
        }}
      >
        Save
      </Button> */}

      
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    // height: "100%",
    justifyContent: "center",
  },
  form: {
    flex: 1,
    // width: "100%",
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
    // marginTop: 10,
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
    backgroundColor: "#F14E24",
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

export default Join_Us;
