import React from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Ir a patalla de bienvenida"
        onPress={() => navigation.navigate('Welcome')}
      />
    </View>
  );
};

export default HomeScreen