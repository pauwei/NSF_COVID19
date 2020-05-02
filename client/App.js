import React from 'react';
import { Router } from './Navigation'
import { createAppContainer, createSwitchNavigator } from 'react-navigation';


export default class App extends React.Component {
 render() {
    const Appcontainer = createAppContainer(Router)
    return (
      <Appcontainer />
    )
  }
}
