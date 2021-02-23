import React, {Component} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import firebase from 'firebase';
import firestore from '../config';

export default class Settings extends Component{

    state = {
        email : '',
        password : '',
        first_name : '', 
        last_name : '',
        address : '',
        contact : ''
    }

    displayUserInfo = () => {
        const currentUser = firebase.auth().currentUser;
        firebase.database().ref('Users/' + currentUser.uid + '/').get().then((users) => {
            const userData = users.val();
            this.setState({
                email : userData.email,
                password : userData.password,
                first_name : userData.first_name,
                last_name : userData.last_name,
                address : userData.address,
                contact : userData.contact
            })
        })
    }

    componentDidMount = ()=> {
        this.displayUserInfo();
    }

    render(){
        return(
            <View>
                {/* <TextInput></TextInput>
                <TextInput></TextInput>
                <TextInput></TextInput>
                <TextInput></TextInput>
                <TextInput></TextInput>
                <TextInput></TextInput> */}
                <Text> Settings Screen </Text>
            </View>
        )
    }
}