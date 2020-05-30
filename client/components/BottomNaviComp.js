import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import CardComp from './forms/CardComp'
import InfoMapComp from './forms/InfoMapComp'
import WebComp from './forms/WebComp'
import DistanceComp from './forms/DistanceComp'
// import LoginComp from './forms/LoginComp'

const MusicRoute = () => <Text>Music</Text>;

const AlbumsRoute = () => <Text>Albums</Text>;

const RecentsRoute = () => <Text>Recents</Text>;

export default class BottomNaviComp extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };

  state = {
    index: 0,
    routes: [
      { key: 'info', title: 'Instruction', icon: 'home' },
      { key: 'survey', title: 'Survey', icon: 'file-question' },
      { key: 'map', title: 'Contact', icon: 'information' },
      { key: 'distance', title: 'Daily Movements', icon: 'heart' },
    ],
  };

  _handleIndexChange = index => this.setState({ index });

  _renderScene = BottomNavigation.SceneMap({
    info: CardComp,
    survey: WebComp,
    map: InfoMapComp,
    distance: DistanceComp,
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