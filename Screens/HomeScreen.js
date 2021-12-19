import React from 'react';
import { Text, SafeAreaView, StyleSheet, View, Image, ImageBackground, Button, TouchableOpacity } from 'react-native';

function HomeScreen({ navigation }) {
    return (
        <ImageBackground
            style={styles.background}
            source={require('../assets/homescreen.jpg')}
        >
            <SafeAreaView>
                <View style={styles.vitals}>
                    <TouchableOpacity
                        title="Record Vitals"
                        onPress={() => navigation.navigate('RecordVitals')}
                        style={styles.button}>
                        <Text> Record Vitals </Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity
                title = "Second button"
                onPress={() => navigation.navigate('MessageScreen')}
                style={styles.chat}
                >
                <Text> Chat with a Doctor </Text>
                </TouchableOpacity>
            </SafeAreaView>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
    },
    temp: {
        backgroundColor: 'dodgerblue'
    },
    vitals: {
        position: 'absolute',
        top: 100
    },
    button: {
        backgroundColor: '#FF6961',
        height:100,
        width: 100,
        borderRadius: 20,
        justifyContent: 'center',
    },
    chat: {
        position: 'absolute',
        top: 300,
        backgroundColor: 'tomato',
        height: 100,
        width: 100
    }
})

export default HomeScreen;