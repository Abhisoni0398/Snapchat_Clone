import { PermissionsAndroid, Platform, Alert } from 'react-native';
import Geolocation from 'react-native-geolocation-service';

export const locationPermission = () => new Promise(async (resolve, reject) => {
    if (Platform.OS === 'ios') {
        try {
            const permissionStatus = await Geolocation.requestAuthorization('whenInUse');
            if (permissionStatus === 'granted') {
                return resolve('granted');
            }
            reject('Permission not granted');
        } catch (error) {
            return reject(error);
        }
    }
    return PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    ).then((granted) => {
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            return resolve('granted');
        }
        return reject('Location Permission denied');
    }).catch((error) => {
        return reject(error);
    });
});

