import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    SafeAreaView,
    StyleSheet,
    StatusBar,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Header = ({
    
    props,
    leftsideicon,
    leftsidetext,
    leftpress,
    centertext,
    centerpress,
    rightsideicon,
    rightsidetext,
    rightpress,

    menuepress,
}) => {
    return (
        <View>

            <LinearGradient colors={["#D07514", "#553008", "#fff"]}>
                <StatusBar translucent={true} backgroundColor={'transparent'} />
            </LinearGradient >

            <LinearGradient
                style={{ paddingTop: 20 }}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={['#D07514', '#553008', '#000000']}>
                <View
                    style={styles.HeaderMainView}>
                    <TouchableOpacity
                      onPress={leftpress}
                        style={styles.TouchBackBtn} >
                        <Image
                            source={leftsideicon}
                            style={{ width: 20, height: 20, resizeMode: 'contain' }}
                        />
                        <Text style={{ color: '#fff', fontWeight: 'bold' }}>{leftsidetext}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={centerpress}>
                        <Text style={{ fontWeight: 'bold', color: '#fff' }}>{centertext}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={rightpress}
                        style={styles.TouchBackBtn}>
                        <Text style={{ color: '#fff', fontWeight: 'bold', right: 5 }}>{rightsidetext}</Text>
                        <Image
                            source={rightsideicon}
                            style={{ width: 20, height: 20, resizeMode: 'contain' }}
                        />

                    </TouchableOpacity>
                </View>
            </LinearGradient>
        </View>

    )
}

const styles = StyleSheet.create({
    HeaderMainView: {
        width: '100%',
        height: 50,
        paddingHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    TouchBackBtn: {
        width: '17%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    }
});

export default Header;

