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
         source={{uri: 'https://forms.gle/7yVcjer7rv1GVRsK6'}}
         
       ></WebView>
      );
    }
  }
 