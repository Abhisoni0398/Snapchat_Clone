import messaging from '@react-native-firebase/messaging';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { showError } from '../helper/helperFunctions';


export async function requestUserPermission() {
    const authStatus = await messaging().requestPermission();
    const enabled =
        authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus === messaging.AuthorizationStatus.PROVISIONAL;
    if (enabled) {
        getFcmToken()
    }
}

const getFcmToken = async () => {
    let fcmToken = await AsyncStorage.getItem('fcmToken');
    if (!fcmToken) {
        try {
            const fcmToken = await messaging().getToken();
            if (fcmToken) {
                // user has a device token
                await AsyncStorage.setItem('fcmToken', fcmToken);
            }
        } catch (error:any) {
            showError(error.message)
        }
    }
}

export const notificationListener = async () => {
    messaging().onNotificationOpenedApp(async (remoteMessage:string) => {
        console.log('Notification caused app to open from background state bla bla:', remoteMessage);
    });

    messaging().onMessage(async (remoteMessage:string) => {
        console.log("recived in foreground", remoteMessage)
    });

    // Check whether an initial notification is available
    messaging()
        .getInitialNotification()
        .then((remoteMessage:string) => {
            if (remoteMessage) {
                console.log("remote message", remoteMessage)
            }

        });

}
