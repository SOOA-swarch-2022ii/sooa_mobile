import React, { Component } from "react";
import {StyleSheet, Text, Image, View, TextInput} from "react-native";
import Course from "../assets/Courses.png";
import Constants from 'expo-constants';
import SelectList from "react-native-dropdown-select-list";
import Button from '../components/Button/Button.js';


const Courses = () => {
    const[selected,setSelected]= React.useState();
    const[state,setState]= React.useState(false);
    const [value, onChangeText] = React.useState(true);
    const datos = [{key:'1',value:'Todos'},{key:'2',value:'Codigo'},{key:'3',value:'Nombre'}];
    const data2 = [{key:'1',value:'Arquitectura de Software'},{key:'2',value:'Metodos numericos'},{key:'3',value:'Computacion paralela'}];
    return (
        <View style={styles.centeredView}>
            <View style={styles.head}>
                <Image source={Course} style={{width:80, height:80}} />
                <Text style={styles.enunciado}>Cursos</Text>
            </View>
            <SelectList data={datos} setSelected={setSelected} boxStyles={styles.SelectedStyle} dropdownStyles={styles.SelectedStyle} 
            dropdownTextStyles={{fontSize: 18}} inputStyles={{fontSize: 18}} placeholder="Buscar por" searchPlaceholder="Buscar por" maxHeight={155} defaultOption={3}
            onSelect={()=>{
                if(selected!=1){
                    setState(true) 
                }else{
                    setState(false)
                }
            }}/>
            <View  >
                {
                    state ? (                        
                        <TextInput 
                        onChangeText={text => onChangeText(text)}
                        value={value}
                        style={styles.textStyle} 
                        placeholder={datos[selected-1].value}
                        />
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

export default Courses;

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
          marginLeft:30,
      },

      textStyle: {
        backgroundColor: "white", 
        padding: 10,
        borderRadius: 20,
        fontSize: 20,
        width: 200,
        marginTop: 20
      },

      
    head:{
        flexDirection:'row', 
        width: "90%", 
        marginLeft: "-30%", 
        alignItems:"center"}
  }); 