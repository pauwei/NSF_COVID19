import React from 'react';
import GPS from './components/gps-tracking'
import PushNotification from './components/PushNotfication'

export default class App extends React.Component {
  render(){
    return <GPS />
    //return <PushNotification />
  }
}



// Initial template code
// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

