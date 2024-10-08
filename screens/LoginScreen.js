import React from 'react';
import { View, Text, TouchableOpacity, Image, TextInput, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeftIcon } from 'react-native-heroicons/solid';
import { themeColors } from '../theme';
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen() {
  const navigation = useNavigation();
  return (
    <View style={[styles.container, { backgroundColor: themeColors.bg }]}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.backButtonContainer}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.backButton}>
            <ArrowLeftIcon size={20} color="black" />
          </TouchableOpacity>
        </View>
        <View style={styles.imageContainer}>
          <Image 
            source={require('../assets/images/login.png')}
            style={styles.loginImage}
          />
        </View>
      </SafeAreaView>
      
      <View style={[styles.formContainer, { backgroundColor: 'white' }]}>
      <ScrollView>
        <View style={styles.form}>
          <Text style={styles.label}>Email Address</Text>
          <TextInput 
            style={styles.input}
            placeholder="email"
            value="Kilber@gmail.com"
          />
          <Text style={styles.label}>Password</Text>
          <TextInput 
            style={styles.input}
            secureTextEntry
            placeholder="password"
            value="test12345"
          />
          <TouchableOpacity style={styles.forgotPasswordContainer}>
            <Text style={styles.forgotPasswordText}>¿Has olvidado tu contraseña?</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.loginButton}>
            <Text style={styles.loginButtonText}>Iniciar sesión</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.orText}>Iniciar con</Text>
        <View style={styles.socialButtonsContainer}>
          <TouchableOpacity style={styles.socialButton}>
            <Image source={require('../assets/icons/google.png')} style={styles.socialIcon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <Image source={require('../assets/icons/apple.png')} style={styles.socialIcon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <Image source={require('../assets/icons/facebook.png')} style={styles.socialIcon} />
          </TouchableOpacity>
        </View>
        <View style={styles.signUpContainer}>
          <Text style={styles.signUpText}>¿No tienes una cuenta?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.signUpLink}> Registrarme</Text>
          </TouchableOpacity>
        </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flexGrow: 0, // Permite al contenedor crecer sólo cuando hay espacio disponible
  },
  backButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginLeft: 16,
  },
  backButton: {
    backgroundColor: '#FBBF24',
    padding: 8,
    borderTopRightRadius: 16,
    borderBottomLeftRadius: 16,
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  loginImage: {
    width: 200,
    height: 200,
  },
  formContainer: {
    flex: 1, // Toma el espacio restante disponible
    paddingHorizontal: 32,
    paddingTop: 32,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  form: {
    marginBottom: 4,
  },
  label: {
    color: '#4B5563',
    marginLeft: 16,
  },
  input: {
    padding: 16,
    backgroundColor: '#F3F4F6',
    color: '#4B5563',
    borderRadius: 16,
    marginBottom: 12,
  },
  forgotPasswordContainer: {
    alignItems: 'flex-end',
    marginBottom: 20,
  },
  forgotPasswordText: {
    color: '#4B5563',
  },
  loginButton: {
    paddingVertical: 12,
    backgroundColor: '#FBBF24',
    borderRadius: 16,
  },
  loginButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#4B5563',
  },
  orText: {
    fontSize: 14,
    color: '#4B5563',
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 16,
  },
  socialButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  socialButton: {
    padding: 8,
    backgroundColor: '#F3F4F6',
    borderRadius: 16,
    marginHorizontal: 12,
  },
  socialIcon: {
    width: 25,
    height: 25,
  },
  signUpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 2,
  },
  signUpText: {
    color: '#6B7280',
    fontWeight: '600',
  },
  signUpLink: {
    fontWeight: '600',
    color: '#FBBF24',
  },
  scrollViewContent: {
    flexGrow: 1,
    paddingTop: 32,
    paddingHorizontal: 32,
  },
});