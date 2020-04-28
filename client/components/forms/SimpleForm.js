import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-paper';

export default class SimpleForm extends Component {
  state = { name: '', mobileNumber: '', email: '' };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          label='Name'
          value={this.state.name}
          onChangeText={input => this.setState({ input })}
        />
        <TextInput
          label='Mobile Number'
          value={this.state.mobileNumber}
          onChangeText={input => this.setState({ input })}
        />

        <TextInput
          label='Email Address'
          value={this.state.email}
          onChangeText={input => this.setState({ input })}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingRight: 30,
    paddingLeft: 30,
  },
});