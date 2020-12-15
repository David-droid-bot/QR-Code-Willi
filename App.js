import React from "react";
import { StyleSheet, Text, View } from "react-native";

import {createAppContainer} from "react-navigation";
import {createBottomTabNavigator} from "react-navigation-tabs";
import TransactionScreen from "./Screens/BookTransactionScreen";
import SearchScreen from "./Screens/SearchScreen";


export default class App extends React.Component {
  render(){
    return <AppContainer/>;
  }
}

const TabNavigator= createBottomTabNavigator({
  Search: {screen:SearchScreen },
  Transaction: {screen:TransactionScreen}
})

const AppContainer=createAppContainer(TabNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
