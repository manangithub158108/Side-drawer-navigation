import React, {Component} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import { DrawerItems } from 'react-navigation-drawer'
import firebase from 'firebase';

export default class customSideBarMenu extends Component{
    render(){
        return(
            <View>
                <DrawerItems {...this.props}/>
                <View style = {{marginTop : 400}}>
                    <TouchableOpacity onPress = {() => {
                        this.props.navigation.navigate('UserAuth');
                        firebase.auth().signOut();
                    }}>
                        <Text> Logout </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}