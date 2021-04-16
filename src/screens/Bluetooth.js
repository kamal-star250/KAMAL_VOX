import {PermissionsAndroid} from 'react-native';




export default async function Bluetooth() {
    try {
      const granted = await PermissionsAndroid.request([
        // PermissionsAndroid.PERMISSIONS.CAMERA,
        // PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
        PermissionsAndroid.PERMISSIONS.BLUETOOTH,
        
      ]);
     
    } catch (err) {
      console.warn(err);
    }
  }