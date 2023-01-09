import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Image,
  ImageBackground,
  Keyboard,
  TouchableWithoutFeedback,
  ScrollView,
} from "react-native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/core";
function TestLogin() {
  const [value, setValue] = useState({
    nameUser: "",
    email: "", //         TO STORE THE EMAIL INPUT
    password: "", //   TO STORE THE PASSWORD INPUT

    error: "", // ST7A9ITHECH LHA9 AMAAA TAJEM TESTHA9HA

    emailConfirmation: false,
    emailInput: "",
  });
  const Navigation = useNavigation();
  return (
    <View style={css.constainer}>
      <ImageBackground
        style={{ width: "100%", height: "100%" }}
        source={{
          uri: `https://res.cloudinary.com/dn9qfvg2p/image/upload/v1673040221/ekher_wba4yg.png`,
        }}
      >
        <ScrollView>
          <View style={css.box}>
            <Text
              style={{
                textAlign: "center",
                fontSize: 25,
                marginTop: 30,
                fontWeight: "bold",
              }}
            >
              Register
            </Text>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                marginTop: 20,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                source={require("../assets/facebook.png")}
                style={{
                  width: 35,
                  height: 35,
                  marginLeft: -15,
                  marginRight: 40,
                }}
              />
              <Image
                source={require("../assets/google-plus.png")}
                style={{
                  width: 35,
                  height: 35,
                  marginLeft: -15,
                  marginRight: 40,
                }}
              />
              <Image
                source={require("../assets/linkedin.png")}
                style={{
                  width: 35,
                  height: 35,
                  marginLeft: -15,
                  marginRight: 0,
                }}
              />
            </View>
            <Text
              style={{
                textAlign: "center",
                fontSize: 19,
                marginTop: 20,
                fontWeight: "400",
              }}
            >
              or be classical
            </Text>
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <TextInput
                style={{
                  backgroundColor: "white",
                  height: 50,
                  fontSize: 17,
                  borderColor: "#9d9d9e",
                  borderWidth: 1,
                  padding: 10,
                  width: 330,
                  borderRadius: 50,
                  alignItems: "center",
                  marginTop: 20,
                }}
                placeholder="  🙍   Your Name here..."
                onChangeText={(text) => setValue({ ...value, nameUser: text })}
              />
              <TextInput
                keyboardType="email-address"
                style={{
                  backgroundColor: "white",
                  height: 50,
                  fontSize: 17,
                  borderColor: "#9d9d9e",
                  borderWidth: 1,
                  padding: 10,
                  width: 330,
                  borderRadius: 50,
                  alignItems: "center",
                  marginTop: 20,
                }}
                placeholder="  ✉️   Your Email here..."
                onChangeText={(text) => setValue({ ...value, nameUser: text })}
              />
              <TextInput
                secureTextEntry={true}
                style={{
                  backgroundColor: "white",
                  height: 50,
                  fontSize: 17,
                  borderColor: "#9d9d9e",
                  borderWidth: 1,
                  padding: 10,
                  width: 330,
                  borderRadius: 50,
                  alignItems: "center",
                  marginTop: 20,
                }}
                placeholder="  🔐   Your Password here..."
                onChangeText={(text) => setValue({ ...value, nameUser: text })}
              />
            </View>

            <View style={{ alignItems: "center", marginTop: 60 }}>
              <View style={css.buttonStyle}>
                <Text
                  style={{
                    color: "white",
                    alignItems: "center",
                    fontWeight: "400",
                    fontSize: 17,
                  }}
                  onPress={() => Navigation.navigate("SideBar")}
                >
                  create account{" "}
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
}

export default TestLogin;

const css = StyleSheet.create({
  constainer: {
    backgroundColor: "#dadde1",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  box: {
    backgroundColor: "white",
    width: 370,
    height: 600,
    borderRadius: 4,
    marginLeft: 20,
    marginTop: 150,
    padding: 50,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 60,
    shadowRadius: 40,
    elevation: 10,
  },
  photos: {
    height: 40,
    width: 70,
  },
  buttonStyle: {
    backgroundColor: "#F96332",
    width: 180,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 500,
  },
});
