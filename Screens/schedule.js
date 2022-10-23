import React, { Component } from "react";
import { Alert, Modal, StyleSheet, Text, Image, View, ImageBackground} from "react-native";
import back from "../assets/back.png";
import Logo from "../assets/sooa_logo_2.png";
import Constants from 'expo-constants';
import calendar from "../assets/calendar.png";
const Schedule = () => {
    return (
        <View style={styles.centeredView}>
            
            <View style={styles.head}>
                <Image source={calendar} style={{width:70, height:70}} />
                <Text style={styles.enunciado}>Horario</Text>
            </View>
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

    enunciado:{
        marginTop: -20,
        fontSize: 50,
        color: "#fff",
        fontWeight: "500",
        marginLeft:20,
        
    },

    head:{
        flexDirection:'row', 
        width: "90%", 
        marginLeft: 10, 
        alignItems:"center"}
  }); 