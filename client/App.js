import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Bar from './components/Bar'
import BottomNaviComp from './components/BottomNaviComp'
import SimpleForm from './components/forms/SimpleForm'
import LoginComp from './components/forms/LoginComp'

import Routers from './Navigation'
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

export default class App extends React.Component {
 render() {
    const Appcontainer = createAppContainer(Routers.Router)
    return (
      <Appcontainer />
    )
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
