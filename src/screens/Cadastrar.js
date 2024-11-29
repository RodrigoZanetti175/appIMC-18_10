import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import axios from 'axios';
import NavBar from '../components/NavBar';

const Cadastrar = () => {
  const [companhia, setCompanhia] = useState('');
  const [aeroportoIda, setAeroportoIda] = useState('');
  const [aeroportoVolta, setAeroportoVolta] = useState('');
  const [dataIda, setDataIda] = useState('');
  const [dataVolta, setDataVolta] = useState('');
  const [horaIda, setHoraIda] = useState('');
  const [horaVolta, setHoraVolta] = useState('');

  const cadastraVoo = () => {
    const voo = {
      companhia,
      aeroportoIda,
      aeroportoVolta,
      dataIda,
      dataVolta,
      horaIda,
      horaVolta,
    };

    Alert.alert('Sucesso!', 'Voo cadastrado com sucesso!');
    console.log(voo);

    axios
      .post('https://api-mpa-flightly-mn44.onrender.com/voo', voo)
      .then(() => console.log('Voo enviado ao servidor'))
      .catch((error) => console.error('Erro ao cadastrar voo:', error));
  };

  return (
    <>
      <NavBar />
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
        >
          <SafeAreaView style={styles.containerCadastro}>
            <Text style={styles.titleCadastro}>Cadastre o seu Voo</Text>

            <Text style={styles.etiquetaInput}>Companhia Aérea</Text>
            <TextInput
              style={styles.input}
              value={companhia}
              onChangeText={setCompanhia}
              placeholder="Latam"
            />

            <Text style={styles.etiquetaInput}>Aeroporto Ida</Text>
            <TextInput
              style={styles.input}
              value={aeroportoIda}
              onChangeText={setAeroportoIda}
              placeholder="Londres"
            />

            <Text style={styles.etiquetaInput}>Aeroporto Volta</Text>
            <TextInput
              style={styles.input}
              value={aeroportoVolta}
              onChangeText={setAeroportoVolta}
              placeholder="Guarulhos"
            />

            <Text style={styles.etiquetaInput}>Data Ida</Text>
            <TextInput
              style={styles.input}
              value={dataIda}
              onChangeText={setDataIda}
              placeholder="2025-09-26"
            />

            <Text style={styles.etiquetaInput}>Data Volta</Text>
            <TextInput
              style={styles.input}
              value={dataVolta}
              onChangeText={setDataVolta}
              placeholder="2025-09-26"
            />

            <Text style={styles.etiquetaInput}>Horário Ida</Text>
            <TextInput
              style={styles.input}
              value={horaIda}
              onChangeText={setHoraIda}
              placeholder="08:00"
            />

            <Text style={styles.etiquetaInput}>Horário Volta</Text>
            <TextInput
              style={styles.input}
              value={horaVolta}
              onChangeText={setHoraVolta}
              placeholder="08:00"
            />

            <TouchableOpacity style={styles.button} onPress={cadastraVoo}>
              <Text style={styles.buttonText}>Cadastrar Voo</Text>
            </TouchableOpacity>
          </SafeAreaView>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  containerCadastro: {
    width: '90%',
    padding: 20,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  titleCadastro: {
    fontSize: 32,
    fontWeight: '600',
    marginBottom: 20,
    textAlign: 'center',
  },
  etiquetaInput: {
    marginTop: 10,
    fontSize: 16,
  },
  input: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    width: '100%',
    fontSize: 16,
  },
  button: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF6600',
    borderRadius: 25,
    marginTop: 30,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '500',
  },
});

export default Cadastrar;
