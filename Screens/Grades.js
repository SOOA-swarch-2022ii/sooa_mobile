import React, { Component } from "react";
import {StyleSheet, Text, Image, View} from "react-native";
import Notas from "../assets/Notas.png";
import Constants from 'expo-constants';
import SelectList from "react-native-dropdown-select-list";
import Button from '../components/Button/Button.js';
 
const Grades = () => {
    const[selected,setSelected]= React.useState();
    const[state,setState]= React.useState(false);
    const data = [{key:'1',value:'Todos'},{key:'2',value:'Por asignatura'}];
    const data2 = [{key:'1',value:'Arquitectura de Software'},{key:'2',value:'Metodos numericos'},{key:'3',value:'Computacion paralela'}];
    return (
        <View style={styles.centeredView}>
            <View style={styles.head}>
                <Image source={Notas} style={{width:70, height:70}} />
                <Text style={styles.enunciado}>Notas</Text>
            </View>
            <SelectList data={data} setSelected={setSelected} boxStyles={styles.SelectedStyle} dropdownStyles={styles.SelectedStyle} 
            dropdownTextStyles={{fontSize: 18}} inputStyles={{fontSize: 18}} placeholder="Buscar por" searchPlaceholder="Buscar por" maxHeight={120} defaultOption={3}
            onSelect={()=>{
                if(selected==2){
                    setState(true)
                }else{
                    setState(false)
                }
            }}/>
            <View  >
                {
                    state ? (
                        <SelectList data={data2} setSelected={setSelected} boxStyles={styles.SelectedStyle2} dropdownStyles={styles.SelectedStyle} 
                        dropdownTextStyles={{fontSize: 18}} inputStyles={{fontSize: 18}} placeholder="Asignatura" searchPlaceholder="Asignatura" maxHeight={220}/>
                    ) : null
                } 
            </View>
            <View style={{marginTop:50}} >
                <Button title="Buscar" action={()=>{
                    setState(!state)
                }} />
            </View>
            
        </View>
    );
    
}

export default Grades;

const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "flex-start",
      alignItems: "center",
      marginTop: Constants.statusBarHeight,
      marginLeft: "25%",
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
    SelectedStyle: {
        backgroundColor:'white', 
        width:200
    },
    SelectedStyle2: {
        backgroundColor:'white', 
        width:200,
        marginTop:20
    },

    contenido:{
        fontSize: 18,
        color: "#fff",
    },

    enunciado:{
        marginTop: -20,
        fontSize: 50,
        color: "#fff",
        fontWeight: "500",
        marginLeft:50,
        
    },

    head:{
        flexDirection:'row', 
        width: "90%", 
        marginLeft: "-40%" 
    }
  }); 