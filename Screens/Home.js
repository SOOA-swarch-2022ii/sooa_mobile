import React, { Component } from "react";
import {Modal, StyleSheet, Text, Image, View, ImageBackground} from "react-native";
import back from "../assets/back.png";
import Logo from "../assets/sooa_logo_2.png";
import Constants from 'expo-constants';
import Menu from '../components/Button/Menu.js';
import AcademicRecords from "./AcademicRecords";
import { NavigationContainer } from '@react-navigation/native';
import Courses from "./Courses";
import Grades from "./Grades";
import Schedule from "./schedule";
import Back from '../components/Button/Back.js';
import Perfil from "../assets/Perfil.png";

const Home = ({state}) => {
    const stateLogin = state;
    const [viewProfile, setViewProfile] =                   React.useState(false);
    const [viewAcademicRecords, setViewAcademicRecords] =   React.useState(false);
    const [viewGrades, setViewGrades] =                     React.useState(false);
    const [viewCourses, setViewCourses] =                   React.useState(false);
    const [viewSchedule, setViewSchedule] =                 React.useState(false);
    return (
        <View style={{flex:1}}>
            <View style={styles.centeredView}>
                <View style={{flexDirection:'row', width: "90%"}}>
                    <Image source={Perfil} style={styles.perfilIcon}/>
                    <Text style={styles.enunciado}>Perfil</Text>
                </View>
                
                <View style={styles.line}>
                    <Text style={styles.titulo}>Nombre: </Text>
                    <Text style={styles.contenido}>Martin Alonso Gomez Uribe</Text>
                </View>
                <View style={styles.line}>
                    <Text style={styles.titulo}>Fecha nacimiento: </Text>
                    <Text style={styles.contenido}>17/02/2000</Text>
                </View>
                <View style={styles.line}>
                    <Text style={styles.titulo}>Sexo: </Text>
                    <Text style={styles.contenido}>Hombre</Text>
                </View>
                <View style={styles.line}>
                    <Text style={styles.titulo}>Nacionalidad: </Text>
                    <Text style={styles.contenido}>Colombiano</Text>
                </View>
                <View style={styles.line}>
                    <Text style={styles.titulo}>Telefono: </Text>
                    <Text style={styles.contenido}>3057748924</Text>
                </View>
                <View style={styles.line}>
                    <Text style={styles.titulo}>Email: </Text>
                    <Text style={styles.contenido}>mgomezu@unal.edu.co</Text>
                </View>
                <View style={styles.line}>
                    <Text style={styles.titulo}>Direccion: </Text>
                    <Text style={styles.contenido}>Calle 68a #111c 76</Text>
                </View>
                <View style={styles.line}>
                    <Text style={styles.titulo}>N. identificacion: </Text>
                    <Text style={styles.contenido}>1000514249</Text>
                </View>
            </View>
            <View style={styles.ButtonsView}>
                <Menu title="Historia" action={()=>{
                    setViewAcademicRecords(!viewAcademicRecords);
                    setViewCourses(false);
                    setViewGrades(false);
                    setViewProfile(false);
                    setViewSchedule(false);
                }} />
                <Menu title="Cursos" action={()=>{
                    setViewAcademicRecords(false);
                    setViewCourses(true);
                    setViewGrades(false);
                    setViewProfile(false);
                    setViewSchedule(false);

                }} />
                <Menu title="Notas" action={()=>{
                    setViewAcademicRecords(false);
                    setViewCourses(false);
                    setViewGrades(true);
                    setViewProfile(false);
                    setViewSchedule(false);

                }} />
                <Menu title="Horario" action={()=>{
                    setViewAcademicRecords(false);
                    setViewCourses(false);
                    setViewGrades(false);
                    setViewProfile(false);
                    setViewSchedule(true);

                }} />
            </View>
            
            <Modal animationType="slide"  transparent visible={viewAcademicRecords} >
                <ImageBackground source={back} style={styles.subModalView}>
                <View style={styles.lineHead}>
                    <Back action={()=>{
                            setViewAcademicRecords(!viewAcademicRecords);
                        }} />
                    <Image source={Logo} style={styles.logoModel}/>
                </View>
                    <AcademicRecords state={viewAcademicRecords} />
                    
                </ImageBackground>
            </Modal>
            <Modal animationType="slide"  transparent visible={viewCourses} >
                <ImageBackground source={back} style={styles.subModalView}>
                <View style={styles.lineHead}>
                    <Back action={()=>{
                            setViewCourses(!viewCourses);
                        }} />
                    <Image source={Logo} style={styles.logoModel}/>
                </View>
                        <Courses state={viewCourses} />
                        
                </ImageBackground>
            </Modal>
            <Modal animationType="slide"  transparent visible={viewGrades} >
                <ImageBackground source={back} style={styles.subModalView}>
                <View style={styles.lineHead}>
                    <Back action={()=>{
                            setViewGrades(!viewGrades);
                        }} />
                    <Image source={Logo} style={styles.logoModel}/>
                </View>
                        <Grades state={viewGrades} />
                    
                </ImageBackground>
            </Modal>
            <Modal animationType="slide"  transparent visible={viewSchedule} >
                <ImageBackground source={back} style={styles.subModalView}>
                <View style={styles.lineHead}>
                    <Back action={()=>{
                            setViewSchedule(!viewSchedule);
                        }} />
                    <Image source={Logo} style={styles.logoModel}/>
                </View>
                        <Schedule />
                    
                </ImageBackground>
            </Modal>
        </View>
    );
    
}

export default Home;

const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "flex-start",
      alignItems: "center",
      marginTop: Constants.statusBarHeight
    },
    modalView: {
        flex: 1
    },
    logo: {
        marginLeft: 10,
        width: 200,
        height: 70,
        objectGit: 'fill',

    },
    logoModel: {
        marginLeft: 20,
        width: 210,
        height: 75,
        objectGit: 'fill',

    },
    perfilIcon: {
        marginLeft: 10,
        width: 70,
        height: 70,

    },
    ButtonsView: {
        justifyContent:'flex-start', 
        alignItems: "flex-start",
        flexDirection:'row',

    },
    
    subModalView: {
        flex:1,
        justifyContent: "flex-start",
        alignItems: "baseline",
        marginTop: Constants.statusBarHeight
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

    
    lineHead: {
        borderRadius: 5,
        flexDirection:'row',
        marginLeft: 5,
        alignItems: "flex-start",
        width: "90%"

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
        fontSize: 50,
        color: "#fff",
        fontWeight: "500",
        marginLeft: 50
    }
  }); 