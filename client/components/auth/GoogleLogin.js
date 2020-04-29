import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-paper';
import Firebase from './Firebase';
import * as Google from "expo-google-app-auth";
import { GOOGLE_EXP_CLIENT_ID } from 'react-native-dotenv';
import CardComp from '../forms/CardComp'
export default class GoogleLogin extends React.PureComponent {
    login = async function() {
        const { type, idToken, accessToken } = await Google.logInAsync({
            clientId: GOOGLE_EXP_CLIENT_ID,
        });

        if (type === 'success') {
            // Build Firebase credential with the Google access token.
            const credential = Firebase.auth.GoogleAuthProvider.credential(
                idToken,
                accessToken
            );

            // Sign in with credential from the Google user.
            Firebase.auth()
                .signInAndRetrieveDataWithCredential(credential)
                .catch(error => {
                    console.error(error);
                    // Handle Errors here.
                });
        }
    };

    render() {
        return (
            <View>
            <CardComp/>
            <Button mod="contained" onPress={this.login}>
                Sign in With Google
            </Button>
            </View>
        );
    }
}