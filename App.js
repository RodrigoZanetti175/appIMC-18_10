import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/screens/Home';
import Cadastro from './src/screens/Cadastrar';
import Atualizar from './src/screens/Atualizar';
import Deletar from './src/screens/Deletar';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{ title: 'Home' }} />
        <Stack.Screen name="Cadastro" component={Cadastro} options={{ title: 'Cadastro' }} />
        <Stack.Screen name="Atualizar" component={Atualizar} options={{ title: 'Atualizar' }} />
        <Stack.Screen name="Deletar" component={Deletar} options={{ title: 'Deletar' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}