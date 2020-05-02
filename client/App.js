import React from 'react';
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
