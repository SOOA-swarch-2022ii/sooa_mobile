import React, { Component } from "react";
import { Alert, Modal, StyleSheet, Text, Image, View, ImageBackground } from "react-native";
import back from "../assets/back.png";
import Logo from "../assets/sooa_logo_2.png";
import Constants from 'expo-constants';

const Home = ({state}) => {
    const stateLogin = state;
    return (
            <Modal animationType="slide"  style={{backgroundImage: back}} transparent visible={stateLogin}>
                <ImageBackground source={back} style={styles.modalView}>
                    <View style={styles.modalView}>
                        <Image source={Logo} style={styles.logo}/>
                    </View>
                </ImageBackground>
            </Modal>
    );
    
}

export default Home;

const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22
    },
    modalView: {
        flex:1, 
        justifyContent:'flex-start', 
        alignItems:'center'
    },
    logo: {
        marginTop: Constants.statusBarHeight,
        marginLeft: 10,
        width: 200,
        height: 70,
        objectGit: 'fill',

    },
  }); 