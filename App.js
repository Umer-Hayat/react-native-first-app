import React from 'react';
import { StyleSheet, SafeAreaView, Button, Platform, StatusBar, View } from 'react-native';
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{
        backgroundColor: "dodgerblue",
        width: 100,
        height: 100,
        zIndex: 2


      }} />
      <View style={{
        backgroundColor: "gold",
        width: 100,
        height: 100,
        top: 50,
        left: -50,



      }} />
      <View style={{
        backgroundColor: "red",
        width: 100,
        height: 100,

      }} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
    flexDirection: 'row',
    alignContent: "center",
    alignItems: 'center'

  },
});
