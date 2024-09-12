import React from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { themeColors } from '../theme'
import { useNavigation } from '@react-navigation/native'

export default function WelcomeScreen() {

    const navigation = useNavigation()

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: themeColors.bg }]}>
            <View style={styles.innerContainer}>
                <Text style={styles.title}>Bienvenido!</Text>
                <View style={styles.imageContainer}>
                    <Image
                        source={require("../assets/images/welcome.png")}
                        style={styles.image}
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('SignUp')}
                        style={styles.signUpButton}>
                        <Text style={styles.signUpText}>Registrarme</Text>
                    </TouchableOpacity>
                    <View style={styles.loginContainer}>
                        <Text style={styles.alreadyAccountText}>¿Ya tienes una cuenta?</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                            <Text style={styles.loginText}> iniciar la sesión</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    innerContainer: {
        flex: 1,
        justifyContent: 'space-around',
        marginVertical: 16,
    },
    title: {
        color: '#000000',
        fontWeight: 'bold',
        fontSize: 32,
        textAlign: 'center',
    },
    imageContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    image: {
        width: 350,
        height: 350,
    },
    buttonContainer: {
        paddingHorizontal: 28,
    },
    signUpButton: {
        paddingVertical: 12,
        backgroundColor: '#FBBF24',
        borderRadius: 16,
        marginBottom: 16,
    },
    signUpText: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#4B5563',
    },
    loginContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    alreadyAccountText: {
        color: '#6B7280',
        fontWeight: '600',
    },
    loginText: {
        fontWeight: '600',
        color: '#FBBF24',
    },
});