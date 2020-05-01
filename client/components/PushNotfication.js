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
      //console.log(token);
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
    //console.log(notification);
    this.setState({ notification: notification });
  };

  onSubmit() {
        const localNotification0 = {
          sound: 'default',  
          title: 'Notification!',
          body: 'Notification!',
          _displayInForeground: true,        
        };

        const localNotification1 = {
          sound: 'default',  
          title: 'Notification!',
          body: 'Notification!',
          _displayInForeground: true,        
        };

        let not0 = new Date(2020, 4, 3, 10, 0, 0);
        not0 = Date.parse(not0);
        let not1 = new Date(2020, 4, 4, 10, 0, 0);
        not1 = Date.parse(not1);
        let not2 = new Date(2020, 4, 5, 10, 0, 0);
        not2 = Date.parse(not2);
        let not3 = new Date(2020, 4, 6, 10, 0, 0);
        not3 = Date.parse(not3);
        let not4 = new Date(2020, 4, 7, 10, 0, 0);
        not4 = Date.parse(not4);
        let not5 = new Date(2020, 4, 8, 10, 0, 0);
        not5 = Date.parse(not5);
        let not6 = new Date(2020, 4, 9, 10, 0, 0);
        not6 = Date.parse(not6);

        let not10 = new Date(2020, 5, 3, 20, 0, 0);
        not10 = Date.parse(not10);
        let not11 = new Date(2020, 5, 4, 20, 0, 0);
        not11 = Date.parse(not11);
        let not12 = new Date(2020, 5, 5, 20, 0, 0);
        not12 = Date.parse(not12);
        let not13 = new Date(2020, 5, 6, 20, 0, 0);
        not13 = Date.parse(not13);
        let not14 = new Date(2020, 5, 7, 20, 0, 0);
        not14 = Date.parse(not14);
        let not15 = new Date(2020, 5, 8, 20, 0, 0);
        not15 = Date.parse(not15);
        let not16 = new Date(2020, 5, 9, 20, 0, 0);
        not16 = Date.parse(not16);

        const schedulingOptions0 = {
          time: not0,  
        };
        const schedulingOptions1 = {
          time: not1,  
        };
        const schedulingOptions2 = {
          time: not2,  
        };
        const schedulingOptions3 = {
          time: not3,  
        };
        const schedulingOptions4 = {
          time: not4,  
        };
        const schedulingOptions5 = {
          time: not5,  
        };
        const schedulingOptions6 = {
          time: not6,  
        };

        const schedulingOptions10 = {
          time: not10,  
        };
        const schedulingOptions11 = {
          time: not11,  
        };
        const schedulingOptions12 = {
          time: not12,  
        };
        const schedulingOptions13 = {
          time: not13,  
        };
        const schedulingOptions14 = {
          time: not14,  
        };
        const schedulingOptions15 = {
          time: not15,  
        };
        const schedulingOptions16 = {
          time: not16,  
        };

        Notifications.scheduleLocalNotificationAsync(
            localNotification0, schedulingOptions0
        );
        Notifications.scheduleLocalNotificationAsync(
            localNotification0, schedulingOptions1
        );
        Notifications.scheduleLocalNotificationAsync(
            localNotification0, schedulingOptions2
        );
        Notifications.scheduleLocalNotificationAsync(
            localNotification0, schedulingOptions3
        );
        Notifications.scheduleLocalNotificationAsync(
            localNotification0, schedulingOptions4
        );
        Notifications.scheduleLocalNotificationAsync(
            localNotification0, schedulingOptions5
        );
        Notifications.scheduleLocalNotificationAsync(
            localNotification0, schedulingOptions6
        );

        Notifications.scheduleLocalNotificationAsync(
            localNotification0, schedulingOptions10
        );
        Notifications.scheduleLocalNotificationAsync(
            localNotification0, schedulingOptions11
        );
        Notifications.scheduleLocalNotificationAsync(
            localNotification0, schedulingOptions12
        );
        Notifications.scheduleLocalNotificationAsync(
            localNotification0, schedulingOptions13
        );
        Notifications.scheduleLocalNotificationAsync(
            localNotification0, schedulingOptions14
        );
        Notifications.scheduleLocalNotificationAsync(
            localNotification0, schedulingOptions15
        );
        Notifications.scheduleLocalNotificationAsync(
            localNotification0, schedulingOptions16
        );

    }

    handleNotification() {
        // console.warn("Received notification");
    }

    async componentDidMount() {
        let result = await Permissions.askAsync(Permissions.NOTIFICATIONS);

        if (Constants.isDevice && result.status === 'granted') {
            //console.log('Notification permissions granted.')
        }

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