import React from "react";
import {
  StyleSheet,
  FlatList,
  Text,
  View,
  TouchableHighlight,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import SideBbar from "../components/SideBar.js";

// import SideBar from "../components/SideBar.js";
import TabBar from "../components/TabBar";
export default function Shop({ navigation }) {
  // all categories
  const categories = [
    {
      id: 1,
      name: "Kitchen",
      photo_url:
        "https://img.freepik.com/premium-vector/set-kitchen-equipment-icon_353337-739.jpg",
    },

    {
      id: 2,
      name: "Furniture",
      photo_url:
        "https://i0.wp.com/www.boutika.tn/wp-content/uploads/2020/08/meuble-tv-promo-chene-blanc-tunisie.jpg?fit=500%2C354&ssl=1",
    },
    {
      id: 3,
      name: "Garden",
      photo_url:
        "https://static.onecms.io/wp-content/uploads/sites/44/2018/03/27195448/102865778_960px_hero.jpg",
    },
    {
      id: 4,
      name: "Accessories",
      photo_url:
        "https://www.demenagement-tunisie.com/wp-content/themes/tower/css/calculator/images/calculateur/Outils-de-jardin.png",
    },
  ];

  const renderCategory = ({ item }) => (
    <TouchableHighlight
      onPress={() => navigation.navigate("Products", { props: item.name })}
      underlayColor="#FFAD62"
    >
      <View style={styles.categoriesItemContainer}>
        <Image
          style={styles.categoriesPhoto}
          source={{ uri: item.photo_url }}
        />
        <Text style={styles.categoriesName}>{item.name}</Text>
        <Text style={styles.categoriesInfo}></Text>
      </View>
    </TouchableHighlight>
  );

  return (
    <>
      <View>
        <FlatList
          data={categories}
          renderItem={renderCategory}
          // keyExtractor={(item) => `${item.id}`}
        />
        <TabBar navigation={navigation} />
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  categoriesItemContainer: {
    flex: 1,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
    height: 250,
    borderColor: "#cccccc",
    borderWidth: 0.5,
    borderRadius: 20,
  },
  categoriesPhoto: {
    width: "100%",
    height: "75%",
    borderRadius: 20,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    shadowColor: "blue",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 5,
    shadowOpacity: 1.0,
    elevation: 3,
  },
  categoriesName: {
    flex: 1,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "#333333",
    marginTop: 8,
  },
  categoriesInfo: {
    marginTop: 3,
    marginBottom: 5,
  },
});
