import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Image,
  Pressable,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/core";

function Notification() {
  const navigation = useNavigation();
  const data1 = new Date();
  const data = [
    {
      id: 1,
      post_title: "GO-Express",
      postimage:
        "https://res.cloudinary.com/dn9qfvg2p/image/upload/c_scale,w_1000/v1673554661/G_eluphz.png",
      username: "GO-Express",
      notifications: "special offre for new members",
      time: "15/01/2023 10:15",
      navig: "Shop",
    },
    {
      id: 2,
      post_title: "GO-Express",
      postimage:
        "https://res.cloudinary.com/dn9qfvg2p/image/upload/v1673554661/E_bjthps.png",
      username: "Fedi Gizeni",
      notifications: "Fedi aad new product",
      time: " 16/01/2023 11:15",
      navig: "Shop",
    },
    {
      id: 3,
      post_title: "GO-Express",
      postimage:
        "https://res.cloudinary.com/dn9qfvg2p/image/upload/v1673554661/O_qvopza.png",
      username: "Mariem Abdelkefi",
      notifications: "Mariem aad new product ",
      time: "16/01/2023 18:10",
      navig: "Shop",
    },

    {
      id: 4,
      post_title: "GO-Express",
      postimage:
        "https://res.cloudinary.com/dn9qfvg2p/image/upload/v1673554661/X_msn0li.png",
      username: "GO-Express",
      notifications: "special offre for new members",
      time: " 18/01/2023 12:15",
      navig: "Shop",
    },
    {
      id: 5,
      post_title: "GO-Express",
      postimage:
        "https://res.cloudinary.com/dn9qfvg2p/image/upload/v1673554661/P_oulzqy.png",
      username: "Ahmed majdoub",
      notifications: "Add new product about kitchen ",
      time: " 20/01/202313:15",
      navig: "Shop",
    },
    {
      id: 6,
      post_title: "GO-Express",
      postimage:
        "https://res.cloudinary.com/dn9qfvg2p/image/upload/v1673554661/R_xmhhpl.png",
      username: "GO-Express",
      notifications: "relcoation service make 50% discount",
      time: " 21/01/2023 14:15",
      navig: "Shop",
    },
    {
      id: 7,
      post_title: "GO-Express",
      postimage:
        "https://res.cloudinary.com/dn9qfvg2p/image/upload/v1673554661/E_bjthps.png",
      username: "GO-Express",
      notifications: "special offre for new members",
      time: " 21/01/2023 09:15",
      navig: "Shop",
    },
    {
      id: 8,
      post_title: "GO-Express",
      postimage:
        "https://res.cloudinary.com/dn9qfvg2p/image/upload/v1673554661/S_xb7ndd.png",
      username: "GO-Express",
      notifications: "special offre for new members",
      time: " 22/01/2023 08:15",
      navig: "Shop",
    },
  ];
  return (
    <View>
      <FlatList
        data={data}
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
                    source={{ uri: item.postimage }}
                  />
                </View>
                <View style={{ flexDirection: "row", marginLeft: -300 }}>
                  <View>
                    <Text style={{ color: "#1B6ADF", fontSize: 15 }}>
                      {item.username}
                    </Text>

                    <Text style={{ color: "#64676B" }}>
                      {item.notifications}
                    </Text>

                    <Text style={{ color: "#64676B" }}>{item.time}</Text>
                  </View>
                  <View></View>
                </View>
              </View>
            </Pressable>
          );
        }}
      />
    </View>
  );
}
export default Notification;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    padding: 15,
    backgroundColor: "white",
    flexDirection: "row",
  },
  HeaderImage: {
    width: "100%",
    height: "100%",
    borderRadius: 50,
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    marginLeft: 15,
  },
});
