import React, {Component} from 'react'
import {Text, TextInput, TouchableOpacity, View, StyleSheet, Image} from 'react-native';
import firebase from 'firebase';
import firestore from '../config';

export default class ItemScreen extends Component{

    state = {item_name : '', item_description : ''}

    addItem = () => {
        firestore.collection('BarterSystemApp').add({
            item_name : this.state.item_name,
            item_description : this.state.item_description,
            doc_created : true
        })
        alert('Item added Successfully');
    }
    
    render(){
        return(
            <View style = {{backgroundColor : '#2d4059', height : '100%'}}>
                <Image source = {require(
                    '../assets/addObject.png'
                )} style = {{
                    width : 300,
                    height : 300,
                    alignSelf : 'center',
                    marginTop : 30,
                    marginBottom : 50
                }}></Image>
                <TextInput placeholder = {'Enter item name'} onChangeText = {(text) => {
                    this.setState({
                        item_name : text
                    })
                }} style = {style.TextInput} placeholderTextColor = 'black'></TextInput>
                <TextInput placeholder = {'Enter item description'} onChangeText = {(text) => {
                    this.setState({
                        item_description : text
                    })
                }} multiline = {true} style = {style.address} placeholderTextColor = 'black'></TextInput>
                <TouchableOpacity onPress = {() => {
                    this.addItem();
                }}>
                    <Text style = {style.loginButton}> Add item </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const style = StyleSheet.create({
    TextInput : {
        display : 'flex',
        backgroundColor : '#ea5455',
        color :'#ffd460',
        width : '90%',
        height : 40,
        alignSelf : 'center',
        marginTop : 10,
        marginBottom : 10,
        borderRadius : 10,
        textAlign : 'center',
        fontSize : 25
    },

    address : {
        display : 'flex',
        backgroundColor : '#ea5455',
        color :'#ffd460',
        width : '90%',
        height : 100,
        alignSelf : 'center',
        marginTop : 10,
        marginBottom : 10,
        borderRadius : 10,
        textAlign : 'center',
        fontSize : 25
    },

    loginButton : {
        display : 'flex',
        backgroundColor : '#f07b3f',
        color :'#ffd460',
        width : '60%',
        height : 40,
        alignSelf : 'center',
        marginTop : 40,
        marginBottom : 100,
        borderRadius : 30,
        textAlign : 'center',
        fontSize : 25,
        justifyContent : 'center'
    },

    signupButton : {
        display : 'flex',
        backgroundColor : '#f07b3f',
        color :'#ffd460',
        width : '90%',
        height : 40,
        alignSelf : 'center',
        marginTop : 10,
        marginBottom : 30,
        borderRadius : 30,
        textAlign : 'center',
        fontSize : 25,
        justifyContent : 'center'
    },

    button : {
        display : 'flex',
        backgroundColor : '#f07b3f',
        color :'#ffd460',
        width : '70%',
        height : 30,
        alignSelf : 'center',
        marginBottom : 10,
        borderRadius : 30,
        textAlign : 'center',
        fontSize : 20,
        justifyContent : 'center'
    },
})