import React from 'react';
import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeftIcon } from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';
import { themeColors } from '../theme';

export default function SignUpScreen() {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, backgroundColor: themeColors.bg }}>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
              backgroundColor: '#F8E71C',
              padding: 8,
              borderTopRightRadius: 20,
              borderBottomLeftRadius: 20,
              marginLeft: 16,
            }}
          >
            <ArrowLeftIcon size={20} color="black" />
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'center', marginVertical: 16 }}>
          <Image
            source={require('../assets/images/signup.png')}
            style={{ width: 165, height: 110 }}
          />
        </View>
      </SafeAreaView>
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          paddingHorizontal: 16,
          paddingTop: 16,
          borderTopLeftRadius: 50,
          borderTopRightRadius: 50,
        }}
      >
        <View style={{ marginTop: 16 }}>
          <Text style={{ color: '#4A4A4A', marginBottom: 8 }}>Full Name</Text>
          <TextInput
            style={{
              padding: 16,
              backgroundColor: '#F0F0F0',
              color: '#4A4A4A',
              borderRadius: 12,
              marginBottom: 12,
            }}
            value="john snow"
            placeholder="Enter Name"
          />
          <Text style={{ color: '#4A4A4A', marginBottom: 8 }}>Email Address</Text>
          <TextInput
            style={{
              padding: 16,
              backgroundColor: '#F0F0F0',
              color: '#4A4A4A',
              borderRadius: 12,
              marginBottom: 12,
            }}
            value="john@gmail.com"
            placeholder="Enter Email"
          />
          <Text style={{ color: '#4A4A4A', marginBottom: 8 }}>Password</Text>
          <TextInput
            style={{
              padding: 16,
              backgroundColor: '#F0F0F0',
              color: '#4A4A4A',
              borderRadius: 12,
              marginBottom: 28,
            }}
            secureTextEntry
            value="test12345"
            placeholder="Enter Password"
          />
          <TouchableOpacity
            style={{
              paddingVertical: 12,
              backgroundColor: '#F8E71C',
              borderRadius: 12,
            }}
          >
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                textAlign: 'center',
                color: '#4A4A4A',
              }}
            >
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
        <Text
          style={{
            fontSize: 20,
            color: '#4A4A4A',
            fontWeight: 'bold',
            textAlign: 'center',
            marginVertical: 16,
          }}
        >
          Or
        </Text>
        <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: 16 }}>
          <TouchableOpacity
            style={{
              padding: 8,
              backgroundColor: '#F0F0F0',
              borderRadius: 12,
              marginHorizontal: 8,
            }}
          >
            <Image
              source={require('../assets/icons/google.png')}
              style={{ width: 40, height: 40 }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              padding: 8,
              backgroundColor: '#F0F0F0',
              borderRadius: 12,
              marginHorizontal: 8,
            }}
          >
            <Image
              source={require('../assets/icons/apple.png')}
              style={{ width: 40, height: 40 }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              padding: 8,
              backgroundColor: '#F0F0F0',
              borderRadius: 12,
              marginHorizontal: 8,
            }}
          >
            <Image
              source={require('../assets/icons/facebook.png')}
              style={{ width: 40, height: 40 }}
            />
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 16 }}>
          <Text style={{ color: '#9B9B9B', fontWeight: '600' }}>
            Already have an account?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={{ fontWeight: '600', color: '#F8E71C' }}> Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
