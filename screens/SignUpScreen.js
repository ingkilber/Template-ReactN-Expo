import React from 'react';
import { View, Text, TouchableOpacity, Image, TextInput, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeftIcon } from 'react-native-heroicons/solid';
import { themeColors } from '../theme';
import { useNavigation } from '@react-navigation/native';

export default function SignUpScreen() {
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
            source={require('../assets/images/signup.png')} // Cambia la imagen según sea necesario
            style={styles.signupImage}
          />
        </View>
      </SafeAreaView>
      
      <View style={[styles.formContainer, { backgroundColor: 'white' }]}>
        <ScrollView>
          <View style={styles.form}>
            <Text style={styles.label}>Nombre completo</Text>
            <TextInput 
              style={styles.input}
              placeholder="Nombre completo"
            />
            <Text style={styles.label}>Correo electrónico</Text>
            <TextInput 
              style={styles.input}
              placeholder="Ingrese email"
              keyboardType="email-address"
            />
            <Text style={styles.label}>Contraseña</Text>
            <TextInput 
              style={styles.input}
              secureTextEntry
              placeholder="Ingrese Contraseña"
            />
            <TouchableOpacity style={styles.signupButton}>
              <Text style={styles.signupButtonText}>Registrarme</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.orText}>Regístrese con</Text>
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
          <View style={styles.signInContainer}>
            <Text style={styles.signInText}>¿Ya tienes una cuenta?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={styles.signInLink}> iniciar la sesión</Text>
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
  signupImage: {
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
  signupButton: {
    paddingVertical: 12,
    backgroundColor: '#FBBF24',
    borderRadius: 16,
  },
  signupButtonText: {
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
  signInContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 2,
  },
  signInText: {
    color: '#6B7280',
    fontWeight: '600',
  },
  signInLink: {
    fontWeight: '600',
    color: '#FBBF24',
  },
});
