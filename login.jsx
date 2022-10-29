import React, {useEffect, useState} from "react";
import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View, Image, TextInput, Modal, ImageBackground, Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Logo from "./assets/sooa_logo_2.png";
import Constants from 'expo-constants';
import Button from './components/Button/Button.js';
import Home from "./Screens/Home";
import back from "./assets/back.png";
import CloseSesion from "./components/Button/CloseSesion";
import RegAndAuthService from "./Service/reg_and_auth.service.js";

const Login = () => {
    const [view, setView] = useState(false);
    const [valueMail, onChangeTextMail] = React.useState(true);
    const [valuePassword, onChangeTextPassword] = React.useState(true);
    const [name, setName] = React.useState("");
    const [role, setRol] = React.useState("");
    const [phone, setPhone] = React.useState("");
    const [address, setAddress] = React.useState("");
    const [nationality, setNationality] = React.useState("");
    const [sex, setSex] = React.useState("");
    const [dateOfBirth, setDateOfBirth] = React.useState("");
    const [identificationNumber, setIdentificationNumer] = React.useState("");
    const [email, setEmail] = React.useState("");

    const commitLogin = ({name, role ,phone ,address ,nationality ,sex ,dateOfBirth, identificationNumber, email}) => {
        //AsyncStorage.setItem("name", name);
        //AsyncStorage.setItem("role", role);
        setName(name);
        setRol(role);
        setPhone(phone);
        setAddress(address);
        setNationality(nationality);
        setSex(sex);
        setDateOfBirth(dateOfBirth.substring(0,10));
        setIdentificationNumer(identificationNumber);
        setEmail(email);
        setView(true);
    }

    const verifyLogin = (login) => {
        if (login) {
            RegAndAuthService.getUser(commitLogin);
        }else{
            Alert.alert(
                "Error iniciando sesion",
                "El nombre de usuario o contraseña son incorrectos",
                [
                  
                  { text: "OK", onPress: () => (console.log("")) }
                ]
              );
        }
    }

    return (
        <View style={styles.container}>
            <View>
                <Image source={Logo} style={styles.logo}/>
                <Text style={styles.texto}>Sistema Ordenado de Operaciones Academicas</Text>
            </View>
            <View>
                <TextInput 
                    onChangeText={text => onChangeTextMail(text)}
                    value={valueMail}
                    style={styles.textStyle} 
                    textContentType={"emailAddress"}
                    placeholder="Correo"
                    />
                <TextInput 
                secureTextEntry={true}
                onChangeText={text => onChangeTextPassword(text)}
                value={valuePassword}       
                style={styles.textStyle}
                textContentType={"password"}
                placeholder="Contraseña"/>
            </View>
            <Button title="Iniciar Sesion" action={(e)=>{
                e.preventDefault();
                RegAndAuthService.login(valueMail, valuePassword, verifyLogin);
            }} />
            <Modal animationType="none"  transparent visible={view}>
                <ImageBackground source={back} style={{flex:1}}>
                    <View style={styles.lineHead}>
                    <Image source={Logo} style={styles.logoModel}/>
                    
                    <CloseSesion action={()=>{
                            setView(false);
                            onChangeTextMail();
                            onChangeTextPassword();
                        }} />
                    </View>
                    <Home name={name} role={role} phone={phone} address={address} nationality={nationality} sex={sex} dateOfBirth={dateOfBirth} identificationNumber={identificationNumber} email={email}/>
                </ImageBackground>
            </Modal>
            <StatusBar style="auto" />
        </View>

    );
}   

export default Login;

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
      fontSize: 20,
      width: 300,
      marginTop: 20
    },
    
    lineHead: {
        borderRadius: 5,
        flexDirection:'row',
        marginLeft: 5,
        alignItems: "center",
        width: "90%"

    },
    logoModel: {
        marginTop: Constants.statusBarHeight,
        marginLeft: "20%",
        marginRight: 20,
        width: 200,
        height: 70,
        objectGit: 'fill',

    },
}); 
