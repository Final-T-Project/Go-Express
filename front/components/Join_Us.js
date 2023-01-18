import { View, Text,TouchableOpacity,Image,StyleSheet,Pressable,
  ScrollView, } from 'react-native'
import React, { useState, useEffect, useContext } from "react";
import {Box,Button,Input,Stack} from "native-base"
const toast = useToast();
const {height,width}=Dimensions.get("screen")
export default function Join_Us() {
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
                  {/*Name  Start */}

                  <FormControl>
                    <FormControl.Label fontStyle={{ color: "#373E5A" }}>
                      Product Name
                    </FormControl.Label>
                    <Input
                    _focus={{ borderColor: '#ED5C00' }}
                    placeholder="Product Name"
                      backgroundColor={"muted.100"}
                      borderColor={"muted.200"}
                      fontSize={"15"}
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
                    _focus={{ borderColor: '#ED5C00' }}
                    placeholder="Product Description"
                      backgroundColor={"muted.100"}
                      borderColor={"muted.200"}
                      fontSize={"15"}
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
                    _focus={{ borderColor: '#ED5C00' }}
                    placeholder="Product Price"
                      backgroundColor={"muted.100"}
                      borderColor={"muted.200"}
                      fontSize={"15"}
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

                    <Pressable onPress={onPlus} style={styles.quantityButton} >
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
