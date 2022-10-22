import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Route } from 'react-native';
import Main from './main.jsx';

export default function App() {
  return (
    <View style={styles.container}>
      <Main />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#333333',
    alignItems: 'center',
    justifyContent: 'center',
  },
});