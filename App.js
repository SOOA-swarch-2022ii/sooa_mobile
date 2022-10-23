import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Route } from 'react-native';
import Login from './login';

export default function App() {
  return (
      <View style={styles.container}>
        <Login/>
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