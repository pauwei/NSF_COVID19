import React, {Component} from 'react';
import {TextInput, Text, View, Keyboard, StyleSheet, Button, Vibration, Platform} from 'react-native';
import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions';
import Constants from 'expo-constants';

export default class PushNotification extends Component {
  state = {
    expoPushToken: '',
    notification: {},
  };

  registerForPushNotificationsAsync = async () => {
    if (Constants.isDevice) {
      const { status: existingStatus } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
      let finalStatus = existingStatus;
      if (existingStatus !== 'granted') {
        const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
        finalStatus = status;
      }
      if (finalStatus !== 'granted') {
        alert('Failed to get push token for push notification!');
        return;
      }
      token = await Notifications.getExpoPushTokenAsync();
      console.log(token);
      this.setState({ expoPushToken: token });
    } else {
      alert('Must use physical device for Push Notifications');
    }

    if (Platform.OS === 'android') {
      Notifications.createChannelAndroidAsync('default', {
        name: 'default',
        sound: true,
        priority: 'max',
        vibrate: [0, 250, 250, 250],
      });
    }
  };  
  
  componentDidMount() {
    this.registerForPushNotificationsAsync();
    this._notificationSubscription = Notifications.addListener(this._handleNotification);
  }

  _handleNotification = notification => {
    Vibration.vibrate();
    console.log(notification);
    this.setState({ notification: notification });
  };

  onSubmit() {
        const localNotification0 = {
          sound: 'default',  
          title: 'done!',
          body: 'done!',
          _displayInForeground: true,        
        };

        let not0 = new Date(2020, 3, 28, 19, 41, 0);
        not0 = Date.parse(not0);

        const schedulingOptions0 = {
          // time: not0,  
          // time: (new Date()).getTime() + 2000,
          // repeat: 'minute',
        };

        const localNotification1 = {
          sound: 'default',  
          title: 'done!',
          body: 'done!',
          _displayInForeground: true,        
        };

        let not1 = new Date(2020, 3, 28, 19, 41, 30);
        not1 = Date.parse(not1);

        const schedulingOptions1 = {
          // time: not1,  
          time: (new Date()).getTime() + 2000,
          // repeat: 'minute',
        };

        // Notifications show only when app is not active.
        // (ie. another app being used or device's screen is locked)
        Notifications.scheduleLocalNotificationAsync(
            localNotification0, schedulingOptions0
        );
        Notifications.scheduleLocalNotificationAsync(
            localNotification1, schedulingOptions1
        );
    }

    handleNotification() {
        //console.warn('ok! got your notif');
        // console.warn((new Date()).getTime());
        let not0 = new Date(2020, 3, 28, 19, 41);
        not0 = Date.parse(not0);
        // console.warn(new Date(2020, 4, 28, 19, 18));
        // console.warn(not0);
        console.warn("Received notification");

    }

    async componentDidMount() {
        // We need to ask for Notification permissions for ios devices
        let result = await Permissions.askAsync(Permissions.NOTIFICATIONS);

        if (Constants.isDevice && result.status === 'granted') {
            console.log('Notification permissions granted.')
        }

        // If we want to do something with the notification when the app
        // is active, we need to listen to notification events and 
        // handle them in a callback
        Notifications.addListener(this.handleNotification);
    }

    render() {
        return (
            <View style={styles.container}>
                <Button title="Push Notifications" onPress={this.onSubmit} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});