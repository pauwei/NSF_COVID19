import{View} from 'react-native'
import * as React from 'react';
import { WebView } from 'react-native-webview';
export default class InfoMapComp extends React.Component {
    render() {
      return (
        <WebView
        style={{flex: 1}}
         scrollEnabled={true} 
         source={{uri: 'https://faculty.eng.ufl.edu/ericdu/'}}
         //source={{uri: 'https://docs.google.com/forms/d/e/1FAIpQLSdCeBgGxOYl9I1wvbsES22sRCYZBKokj2r9hlZzGgj2em8pIg/viewform?usp=sf_link'}}
         
       ></WebView>
      );
    }
  }
 