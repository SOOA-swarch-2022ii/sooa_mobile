import React, {useEffect, useState} from "react";
import { StatusBar } from 'expo-status-bar';
import {TouchableOpacity, StyleSheet, Text, View, Route, Image, Modal } from 'react-native';
import Logo from "./assets/sooa_logo_2.png";
import Constants from 'expo-constants';
import Login from './Pages/Login/Login';
import Button from './components/Button/Button.js'

const Main = () => {
    const [view, setView] = useState(false);
    return (
        <View style={styles.container}>
            <View>
                <Image source={Logo} style={styles.logo}/>
                <Text style={styles.texto}>Sistema Ordenado de Operaciones Academicas</Text>
            </View>
            <Button title="Iniciar Sesion" action={()=>{
                setView(true);
            }} />

            <Login state={view}/>
            <StatusBar style="auto" />
        </View>

    );
}   

export default Main;

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
    }
  });
