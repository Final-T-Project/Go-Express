import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect, useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import { UserContext } from "../UserContext";
import axios from "axios";
import IPADRESS from "../config/IPADRESS";

export default function BookingDetails({ route }) {
  const Navigation = useNavigation();

  // const {listService,date,time} = route.Params;

  const { listService, date, time, toList } = useContext(UserContext);

  const [serviceChoosen, setServiceChoosen] = useState("");

  const [price, setPrice] = useState(0);

  useEffect(() => {
    listService === "1"
      ? setServiceChoosen("Moving")
      : listService === "2"
      ? setServiceChoosen("Cleaning")
      : listService === "3"
      ? setServiceChoosen("Plumbing")
      : setServiceChoosen("electricity");
  }, [listService]);

  useEffect(() => {
    axios
      .get(`http://${IPADRESS}:5000/service/getPrice/${listService}`)
      .then((res) => {
        setPrice(res.data[0].price);
      });
  }, [listService]);

  console.log("hethi mel details", time);

  return (
    <View style={css.container}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <ScrollView>
          <View style={css.box}>
            <Text
              style={{
                textAlign: "center",
                fontSize: 20,
                fontWeight: "bold",
                marginTop: 50,
              }}
            >
              {" "}
              Booking Details :
            </Text>

            <Text style={{ marginLeft: 30, fontWeight: "bold", marginTop: 40 }}>
              services :{"   " + serviceChoosen}
            </Text>
            <View
              style={{
                marginTop: 5,
                borderBottomColor: "black",
                borderBottomWidth: 1,
                width: 370,
                marginLeft: -20,
                opacity: 0.2,
              }}
            />
            <Text style={{ marginLeft: 30, fontWeight: "bold", marginTop: 10 }}>
              Date :{"     " + date}
            </Text>
            <View
              style={{
                marginTop: 5,
                borderBottomColor: "black",
                borderBottomWidth: 1,
                width: 370,
                marginLeft: -20,
                opacity: 0.2,
              }}
            />
            <Text style={{ marginLeft: 30, fontWeight: "bold", marginTop: 10 }}>
              Time :{"   " + time}
            </Text>
            <View
              style={{
                marginTop: 5,
                borderBottomColor: "black",
                borderBottomWidth: 1,
                width: 370,
                marginLeft: -20,
                opacity: 0.2,
              }}
            />
            {serviceChoosen === "Moving" ? (
              <Text
                style={{ marginLeft: 30, fontWeight: "bold", marginTop: 10 }}
              >
                Destination :{"   " + toList}
              </Text>
            ) : (
              <Text
                style={{ marginLeft: 30, fontWeight: "bold", marginTop: 10 }}
              >
                Destination :
                {"   " +
                  "The service you choose doesn't have destination field"}
              </Text>
            )}
            <View
              style={{
                marginTop: 5,
                borderBottomColor: "black",
                borderBottomWidth: 1,
                width: 370,
                marginLeft: -20,
                opacity: 0.2,
              }}
            />
            <Text style={{ marginLeft: 30, fontWeight: "bold", marginTop: 10 }}>
              Price :{"    " + price + "  Dt"}
            </Text>

            <View style={{ alignItems: "center" }}>
              <TouchableOpacity
                style={{
                  backgroundColor: "#F14E24",
                  width: 60,
                  height: 60,
                  color: "white",
                  borderRadius: 100,
                  justifyContent: "center",
                  marginTop: 190,
                  alignItems: "center",
                }}
                onPress={() => Navigation.navigate("Cart")}
              >
                <Text
                  style={{
                    color: "white",
                    textAlign: "center",
                    fontSize: 19,
                    fontWeight: "500",
                  }}
                >
                  Ok
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </View>
  );
}

const css = StyleSheet.create({
  container: {
    backgroundColor: "#373E5A",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    backgroundColor: "white",
    width: 350,
    height: 500,
    borderRadius: 0,
    marginTop: 50,
    paddingLeft: 0,
    marginBottom: 50,

    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 60,
    shadowRadius: 40,
    elevation: 10,
  },
});
