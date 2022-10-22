import React, { Component } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";

const Login = ({state}) => {
    const stateLogin = state;
    return (
            <Modal animationType="slide" onDismiss={() => colsole.log('close')} onShow={()=> console.log('show')} transparent visible={stateLogin}>
                <View style={{flex:1, backgroundColor: '#333333', justifyContent:'center', alignItems:'center'}}>
                    <View style={{height: '80%', width: '90%', backgroundColor:'#333333'}}>
                        
                    </View>
                </View>
            </Modal>
    );
    
}

export default Login;

const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2
    },
    buttonOpen: {
      backgroundColor: "#F194FF",
    },
    buttonClose: {
      backgroundColor: "#2196F3",
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    }
  }); 