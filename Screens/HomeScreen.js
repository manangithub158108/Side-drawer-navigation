import React, {Component} from 'react'
import {FlatList, Text, View} from 'react-native';
import firebase from 'firebase';
import firestore from '../config';
import ItemScreen from './ItemScreen';

export default class HomeScreen extends Component{

    state = {allItemsRequest : ['']}

    displayItem = async() => {
        const ref = await firebase.firestore().collection('BarterSystemApp').where('doc_created', '==', true)
        .get()
        if(ref.docs.length === 0){
            alert('No items are added');
        }else{
            ref.docs.map((doc) => {
                const allItemsRequest = doc.data();
                this.setState({
                    allItemsRequest : allItemsRequest
                })
            })
        }
    }

    componentDidMount = () => {
        this.displayItem();
    }
    
    render(){

        const data = [
            {
                item_name : this.state.allItemsRequest.item_name,
                item_description : this.state.allItemsRequest.item_description
            },
            {
                item_name : this.state.allItemsRequest.item_name,
                item_description : this.state.allItemsRequest.item_description
            },
        ]

        return(
            <View>
                {/* <Text> Thsese are the items which you wanted to barter --{'>'}</Text> */}
                {/* <FlatList data = {data} renderItem = {({item}) => <Text> {item.item_name} </Text>}></FlatList> */}
            </View>
        )
    }
}