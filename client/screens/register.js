import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, AsyncStorage } from 'react-native';
import { TextInput } from 'react-native-paper';

export default class Register extends React.Component {
    state = { email: '' };

    onPress = async() => {
        await AsyncStorage.setItem('currentUser', this.state.email);
        //navigation.navigate("gps-tracking");
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput label='Email Address' value={this.state.email} onChangeText={input => this.setState({ input })} />
            </View>
            // <TouchableOpacity onPress={this.onPress} style={styles.btn}>
            //     <Text>Register</Text>
            // </TouchableOpacity>
        );
    }
}

// export default class SimpleForm extends Component {
//   state = { name: '', mobileNumber: '', email: '' };

//   render() {
//     return (
//       <View style={styles.container}>
//         <TextInput
//           label='Name'
//           value={this.state.name}
//           onChangeText={input => this.setState({ input })}
//         />
//         <TextInput
//           label='Mobile Number'
//           value={this.state.mobileNumber}
//           onChangeText={input => this.setState({ input })}
//         />

//         <TextInput
//           label='Email Address'
//           value={this.state.email}
//           onChangeText={input => this.setState({ input })}
//         />
//       </View>
//     );
//   }
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingRight: 30,
    paddingLeft: 30,
  },
  btn: {
      width: 200,
      height: 50,
      backgroundColor: 'deepskyblue',
      textAlign: 'center',
      borderRadius: 40,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 10,
  }
});