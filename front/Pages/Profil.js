import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  Touchable,
  TouchableOpacity,
} from "react-native";
import TabBar from "../components/TabBar";
export default function Profil({ navigation }) {
  return (
    <>
      <View>
        <ScrollView>
          <View style={{
                padding: 10,
                width: "100%",
                backgroundColor: "#ffedd5",
                height: 150,
              }}>
          </View>
          
                <View style={{ alignItems: "center" }}> 
            <TouchableOpacity>
                <View>
                 <Image
                source={{uri:"https://res.cloudinary.com/dn9qfvg2p/image/upload/v1672866089/woman_yp1cum.png"}}
                style={{
                    width: 140,
                    height: 140,
                    borderRadius: 100,
                    marginTop: -70,
                  }}
                >
                </Image>   
                </View>
                
                
            </TouchableOpacity>
            <Text
              style={{
                fontSize: 25,
                fontWeight: "bold",
                padding: 10,
                color: "black",
              }}
            >
              User name
            </Text>
         </View>
          {/* user number */}
          <View
            style={{
              alignSelf: "center",
              flexDirection: "row",
              backgroundColor: "#fff",
              width: "90%",
              padding: 20,
              paddingBottom: 22,
              borderRadius: 10,
              shadowOpacity: 80,
              elevation: 15,
              marginTop: 50,
              marginBottom: 40,
            }}
          >
            <Image
              source={{
                uri: "https://res.cloudinary.com/dn9qfvg2p/image/upload/v1672937081/phone-call_ile7m8.png",
              }}
              style={{ width: 33, height: 33 }}
            ></Image>
            <Text style={{ fontSize: 20, color: "#", marginLeft: 70 }}>
              User Email
            </Text>
          </View>
          {/* user Email */}
          <View
            style={{
              alignSelf: "center",
              flexDirection: "row",
              backgroundColor: "#fff",
              width: "90%",
              padding: 15,
              paddingBottom: 22,
              borderRadius: 10,
              shadowOpacity: 80,
              elevation: 15,
              marginTop: -15,
              marginBottom: 40,
            }}
          >
            <Image
              source={{
                uri: "https://res.cloudinary.com/dn9qfvg2p/image/upload/v1671726895/gmail_dcjbrl.png",
              }}
              style={{ width: 33, height: 33 }}
            ></Image>
            <Text style={{ fontSize: 20, color: "#", marginLeft: 70 }}>
              User Email
            </Text>
          </View>
          {/* user place */}
          <View
            style={{
              alignSelf: "center",
              flexDirection: "row",
              backgroundColor: "#fff",
              width: "90%",
              padding: 15,
              paddingBottom: 22,
              borderRadius: 10,
              shadowOpacity: 80,
              elevation: 15,
              marginTop: -15,
              marginBottom: 40,
            }}
          >
            <Image
              source={{
                uri: "https://res.cloudinary.com/dn9qfvg2p/image/upload/v1671726727/location_xel02r.png",
              }}
              style={{ width: 33, height: 33 }}
            ></Image>
            <Text style={{ fontSize: 20, color: "#", marginLeft: 70 }}>
              User Adress
            </Text>
          </View>
        </ScrollView>
      </View>


      <TabBar navigation={navigation} />
    </>
  );
}