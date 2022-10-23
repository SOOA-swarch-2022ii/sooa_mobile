import React, { Component } from "react";
import { Alert, Modal, StyleSheet, Text, Image, View, ImageBackground} from "react-native";
import back from "../assets/back.png";
import Logo from "../assets/sooa_logo_2.png";
import Constants from 'expo-constants';

const Schedule = () => {
    return (
        <View style={styles.centeredView}>
            <Text>Hola mundo</Text>
            
        </View>
    );
    
}

export default Schedule;

const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "flex-start",
      alignItems: "center",
      marginTop: Constants.statusBarHeight,
    },
    modalView: {
        flex: 1,
        marginBottom: 100
    },
    logo: {
        marginLeft: 10,
        width: 200,
        height: 70,
        objectGit: 'fill',

    },
    ButtonsView: {
        justifyContent:'flex-start', 
        alignItems: "flex-start",
        flexDirection:'row',

    },
  }); 