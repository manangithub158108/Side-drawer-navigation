import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import HomeScreen from './Screens/HomeScreen';
import ItemScreen from './Screens/ItemScreen';
import UserAuth from './Screens/UserAuth';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import customSideBarMenu from './customSideBarMenu';
import Settings from './Screens/SetingsScreen';

export default class App extends Component{
  render(){
    return(
      // <View>
      //   <HomeScreen></HomeScreen>
      // </View>
      <AppContainer/>
    )
  }
}

const TabNavigationItemExchange = createBottomTabNavigator({
  HomeScreen : {
    screen : HomeScreen,
    navigationOptions : {
      tabBarLabel : 'Home Screen',
      tabBarIcon : <Image source = {require('./assets/home.jpg')} style = {{
        width : 30,
        height : 30
      }}></Image>
    }
  },
  ItemScreen : {
    screen : ItemScreen,
    navigationOptions : {
      tabBarLabel : 'Item Screen',
      tabBarIcon : <Image source = {require('./assets/addItem.png')} style = {{
        width : 30,
        height : 30
      }}></Image>
    }
  },
})

const AppDrawerNavigator = createDrawerNavigator({
  'Home Screen' : {
    screen : TabNavigationItemExchange
  },
  'Settings' : {
    screen : Settings
  }
},
{
  contentComponent : customSideBarMenu
},
{
  initialRouteName : 'Home Screen',
})

const SwitchNavigation = createSwitchNavigator({
  UserAuth : {
    screen : UserAuth,
    navigationOptions : {
      headerTitle : 'User Authentication',
      headerTitleAlign : 'center'
    }
  },

  AppDrawerNavigator : {
    screen : AppDrawerNavigator
  },

  TabNavigationItemExchange : {
    screen : TabNavigationItemExchange,
    navigationOptions : {
      headerTitle : 'Item add and exchange',
      headerTitleAlign : 'center'
    }
  },
})

const AppContainer = createAppContainer(SwitchNavigation);