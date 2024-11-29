import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, SafeAreaView } from 'react-native';
import axios from 'axios';
import ListaVoos from '../components/ListaVoos';
import NavBar from '../components/NavBar';

export default function Home() {
  const [voos, setVoos] = useState([]);

  useEffect(() => {
    carregaVoos();
  }, []);

  const carregaVoos = () => {
    axios.get('https://api-mpa-flightly-mn44.onrender.com/voo')
      .then(res => {
        setVoos(res.data);
      })
      .catch(err => {
        console.error('Erro ao carregar voos:', err);
      });
  };
  

  return (
    <SafeAreaView style={styles.container}>
      <NavBar/>
      <View style={styles.bodyListagem}>
        <Text style={styles.title}>Listagem de Voos</Text>
        <ListaVoos voos={voos} carregaVoos={carregaVoos} isDelete={true} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5'
  },
  bodyListagem: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center'
  },
});