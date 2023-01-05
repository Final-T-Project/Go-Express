import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Button,
  Image,
} from "react-native";

export default function Products({ route }) {
  const element = route.params.props;
  console.log("id:", element);

  return (
    <SafeAreaView>
      <ScrollView>
        <Image style={styles.image} source={element.photo} />
        <View style={styles.infoContainer}>
          <Text style={styles.name}>{element.name}</Text>
          <Text style={styles.price}>dt {element.price}</Text>
          <Text style={styles.description}>element.description</Text>
          <Button style={styles.button} title="Add to cart" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 16,
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowColor: "black",
    shadowOffset: {
      height: 0,
      width: 0,
    },
    elevation: 1,
    marginVertical: 20,
  },
  image: {
    height: 300,
    width: "100%",
  },
  infoContainer: {
    padding: 16,
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
  },
  price: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    fontWeight: "400",
    color: "#787878",
    marginBottom: 16,
  },

  button: {
    backgroundColor: "white",
  },
});
