// React Native PermissionsAndroid | Ask Run Time Android Permission
// https://aboutreact.com/react-native-android-permission/

// import React in our code
import React from 'react';

// import all the components we are going to use
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  PermissionsAndroid,
  TouchableOpacity,
  Platform,
} from 'react-native';

const Permission = () => {
  const proceed = () => {
    alert('You can use the Camera');
  };

  const onPress = async () => {
    // We need to ask permission for Android only
    if (Platform.OS === 'android') {
      // Calling the permission function
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Example App Camera Permission',
          message: 'Example App needs access to your camera',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        // Permission Granted
        proceed();
      } else {
        // Permission Denied
        alert('CAMERA Permission Denied');
      }
    } else {
      proceed();
    }
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={onPress}>
            <Text style={styles.textStyle}>
              Ask Permission for Camera
            </Text>
          </TouchableOpacity>
        </View>
        <Text
          style={{
            fontSize: 18,
            textAlign: 'center',
            color: 'grey'
          }}>
          Ask Run Time Android Permission
          {'\n'}
          React Navigation
        </Text>
        <Text
          style={{
            fontSize: 16,
            textAlign: 'center',
            color: 'grey'
          }}>
          www.aboutreact.com
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    padding: 20,
  },
  textStyle: {
    fontSize: 18,
    color: 'white',
  },
  buttonStyle: {
    alignItems: 'center',
    backgroundColor: '#f4511e',
    padding: 10,
  },
});

export default Permission;














// // import {PERMISSIONS} from 'react-native-permissions';
// import { check, PERMISSIONS, request, RESULTS } from 'react-native-permissions';
// import { Platform } from 'react-native'


// const ACCESS_FINE_LOCATION = {
//     ios: PERMISSIONS.IOS.LOCATION_ALWAYS,
//     android: PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION
// }



// const REQUEST_PERMISSION_TYPE = {
//     Location: ANDROID.ACCESS_FINE_LOCATION
// }

// const PERMISSION_TYPE = {
//     Location:'Location'
// }
  
// class AppPermission{

//     checkPermission = async (type):Promise <boolean> => {
//         console.log("AppPermission  checkPermission type ",type)
//         const permissions = REQUEST_PERMISSION_TYPE[type][Platform.OS]
//         console.log("AppPermission  checkPermission permissions ",permissions)
//         if (!permissions) {
//             return true
//         }
//         try {
//             const result = await check(permissions)
//             console.log("AppPermission  checkPermission result ",result)
//             if (result === RESULTS.GRANTED) return true
//             return this.requestPermission() //request permission

//         } catch (error) {
//             console.log("AppPermission  checkPermission error ",error)
//             return false
//         }
//     }
//     requestPermission = async (permissions): Promise<boolean> => {
//         console.log("AppPermission  checkPermission permissions ",permissions)
//         try {
//             const result = await request(permissions)
//                console.log("AppPermission  checkPermission result ",result)
//             return result === RESULTS.GRANTED
//         } catch (error) {
//             console.log("AppPermission  checkPermission error ",error)
//             return false
//         }
//     }
// }
// }



// const Permission = new AppPermission()
// export{ Permission,PERMISSION_TYPE}