import React, {useEffect, useState} from "react";
import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View, Image, TextInput} from 'react-native';
import Constants from 'expo-constants';

const Profile = () => {
    return (
        <View style={styles.container}>
            
        </View>

    );
}   

export default Profile;

const styles = StyleSheet.create({
    
    container: {
        flexGrow: 1,
        backgroundColor: '#333333',
        alignItems: 'center',
        justifyContent: 'space-around',
        margin: Constants.statusBarHeight,
    },
    logo: {
        width: 300,
        height: 110,
        objectGit: 'fill',

    },
    texto: {
        fontSize: 27,
        color: "#fff",
    },
    textStyle: {
      backgroundColor: "white", 
      padding: 10,
      borderRadius: 20,
      width:"100%",
      fontSize: 20,
      width: 300,
      marginTop: 20
    },
}); 