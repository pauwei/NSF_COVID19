import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import SimpleForm from './forms/SimpleForm'
import CardComp from './forms/CardComp'
import InfoMapComp from './forms/InfoMapComp'
import WebComp from './forms/WebComp'
import LoginComp from './forms/LoginComp'

const MusicRoute = () => <Text>Music</Text>;

const AlbumsRoute = () => <Text>Albums</Text>;

const RecentsRoute = () => <Text>Recents</Text>;

export default class BottomNaviComp extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'home', title: 'Home', icon: 'home' },
      { key: 'form', title: 'Form', icon: 'file-question' },
      { key: 'infomation', title: 'Infomation', icon: 'information' },
    ],
  };

  _handleIndexChange = index => this.setState({ index });

  _renderScene = BottomNavigation.SceneMap({
    home: LoginComp,
    form: WebComp,
    infomation: InfoMapComp,
  });

  render() {
    return (
      <BottomNavigation
        navigationState={this.state}
        onIndexChange={this._handleIndexChange}
        renderScene={this._renderScene}
      />
    );
  }
}