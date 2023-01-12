import React from 'react';
import {Text, View, StyleSheet} from 'react-native';


const ScreenHeader = ({mainTitle, secondTitle}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.mainTitle}>{mainTitle}</Text>
      <Text style={styles.secondTitle}>{secondTitle}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingVertical: 24,
  },
  mainTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color:" #1C2765"
  },
  secondTitle: {
    fontSize: 32,
    color:"#ED5C00"
  },
});

export default ScreenHeader;