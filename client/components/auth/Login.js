import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-paper';
import GoogleLogin from './GoogleLogin';
import Firebase from './Firebase';

export default class Login extends React.PureComponent {
    componentDidMount() {
        // Listen for authentication state to change.
        Firebase.auth().onAuthStateChanged(user => {
            console.log(user);
            if (user != null) {
                this.props.navigation.navigate('User');
            }

            // Do other things
        });
    }

    render() {
        return (
            <View>
                <GoogleLogin />
            </View>
        );
    }
}