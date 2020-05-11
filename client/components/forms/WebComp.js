import{View} from 'react-native'
import * as React from 'react';
import { WebView } from 'react-native-webview';
export default class WebComp extends React.Component {
    render() {
      return (
        <WebView
        style={{flex: 1}}
         scrollEnabled={true} 
         //source={{uri: 'https://coronavirus.jhu.edu/us-map'}}
         source={{uri: 'https://docs.google.com/forms/d/e/1FAIpQLSfumspd2L6uqHzY9RJIc70JwcMnryOsD4E3UhoYEFmN4Ddy9A/viewform'}}
         
       ></WebView>
      );
    }
  }
 