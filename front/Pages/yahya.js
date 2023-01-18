import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import { useNavigation } from "@react-navigation/native"
import MainHeader from '../components/MainHeader';
import ScreenHeader from '../components/ScreenHeader';
import TopPlacesCarousel from '../components/TopPlacesCarousel';
import {PLACES, TOP_PLACES} from '../data';
import SectionHeader from '../components/SectionHeader';
import TripsList from '../components/TripsList';
import Shop from '../test/Shop';
const Home = () => {
  const navigation =useNavigation()
  function navig(){
    alert("hmmma")
  }
  return (
    <View style={styles.container}>
      <MainHeader title="Go-Express" style={styles.title} />
      <ScreenHeader mainTitle="where are here " secondTitle="to facilitate your life" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <TopPlacesCarousel list={TOP_PLACES} />
        <SectionHeader
          title="Product"
          buttonTitle="See All"
          onPress={() => {navig}}
        />
        <TripsList list={PLACES} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fbfbfb',
  },
  
});

export default Home;