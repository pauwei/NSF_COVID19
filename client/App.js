import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Bar from './components/Bar'
import BottomNaviComp from './components/BottomNaviComp'
export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text> 
    // </View>
    <BottomNaviComp />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
