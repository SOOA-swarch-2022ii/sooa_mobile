import React, { Component } from "react";
import { Alert, Modal, StyleSheet, Text, Image, View, ImageBackground} from "react-native";
import Constants from 'expo-constants';

const AcademicRecords = () => {
    return (
      <View style={styles.centeredView}>
        
        <View style={{flexDirection:'row', width: "90%"}}>
            
            <Text style={styles.enunciado}>Historia Academica</Text>
        </View>
        <Text style={styles.titulo}>Ingenieria de sistemas y computacion </Text>
        
        <View style={styles.line}>
            <Text style={styles.titulo}>Estado: </Text>
            <Text style={styles.contenido}>Activo</Text>
        </View>
        <View style={styles.line}>
            <Text style={styles.titulo}>Facultad: </Text>
            <Text style={styles.contenido}>Ingenieria, sede Bogota</Text>
        </View>
        <View style={styles.line}>
            <Text style={styles.titulo}>PAPA: </Text>
            <Text style={styles.contenido}>4.0</Text>
        </View>
        <View style={styles.line}>
            <Text style={styles.titulo}>PAPI: </Text>
            <Text style={styles.contenido}>4.0</Text>
        </View>
        <View style={styles.line}>
            <View style={styles.colum}>
                <Text style={styles.titulo}>Materias cursadas </Text>
            </View>
            <View style={styles.colum}>
                <Text style={styles.titulo}>Materias pendientes </Text>
            </View>
        </View>  
      </View>
    );
    
}

export default AcademicRecords;

const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "flex-start",
      alignItems: "flex-start",
      marginTop: Constants.statusBarHeight,
      marginLeft:10
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

    titulo:{
        fontSize: 25,
        color: "#fff",
    },

    contenido:{
        fontSize: 18,
        color: "#fff",
    },

    enunciado:{
        marginTop: -80,
        fontSize: 50,
        color: "#fff",
        fontWeight: "500",
        marginLeft: 60,
        
    },
    
    icon: {
        marginLeft: 10,
        width: 70,
        height: 70,

    },
    line: {
        marginTop: 20,
        backgroundColor: "#333333",
        borderRadius: 5,
        flexDirection:'row',
        marginLeft: 5,
        alignItems: "baseline",
        width: "90%"

    },
    colum: {
        marginTop: 20,
        backgroundColor: "#333333",
        borderRadius: 5,
        flexDirection:'column',
        marginLeft: 5,
        alignItems: "baseline",
        width: "50%"

    },
  }); 