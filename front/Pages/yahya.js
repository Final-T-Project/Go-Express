import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";

import MainHeader from "../components/MainHeader";
import ScreenHeader from "../components/ScreenHeader";
import TopPlacesCarousel from "../components/TopPlacesCarousel";
import { PLACES, TOP_PLACES } from "../data";
import SectionHeader from "../components/SectionHeader";
import TripsList from "../components/TripsList";
import { useState, useEffect, useContext } from "react";
import { UserContext } from "../UserContext";
import axios from "axios";
import IPADRESS from "../config/IPADRESS";
const Home = () => {
  const { userId } = useContext(UserContext);
  const { userCartId, setUserCartId } = useContext(UserContext);

  console.log("hetah IDCard", userCartId);
  console.log("hetah ID", userId);

  useEffect(() => {
    axios
      .get(`http://${IPADRESS}:5000/carts/getIdCart/${userId}`)
      .then((response) => {
        response.data.map((element) => {
          setUserCartId(element.id_cart);
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <View style={styles.container}>
      <MainHeader title="Go-Express" style={styles.title} />
      <ScreenHeader
        mainTitle="where are here "
        secondTitle="to facilitate your life"
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <TopPlacesCarousel list={TOP_PLACES} />
        <SectionHeader
          title="Product"
          buttonTitle="Seedd All"
          onPress={() => {}}
        />
        <TripsList list={PLACES} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fbfbfb",
  },
});

export default Home;
