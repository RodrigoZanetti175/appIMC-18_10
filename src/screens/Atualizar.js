import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import axios from 'axios';
import NavBar from '../components/NavBar';

const Atualizar = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { voo } = route.params;

  // Estados para os campos de entrada
  const [companhia, setCompanhia] = useState(voo.companhia);
  const [aeroportoIda, setAeroportoIda] = useState(voo.aeroportoIda);
  const [aeroportoVolta, setAeroportoVolta] = useState(voo.aeroportoVolta);
  const [dataIda, setDataIda] = useState(voo.dataIda.split('T')[0]);
  const [dataVolta, setDataVolta] = useState(voo.dataVolta.split('T')[0]);
  const [horaIda, setHoraIda] = useState(voo.horaIda);
  const [horaVolta, setHoraVolta] = useState(voo.horaVolta);

  const atualizaVoo = () => {
    const vooAtualizado = {
      id: voo._id,
      companhia,
      aeroportoIda,
      aeroportoVolta,
      dataIda,
      dataVolta,
      horaIda,
      horaVolta,
    };

    axios
      .put(`https://api-mpa-flightly-mn44.onrender.com/voo/${vooAtualizado.id}`, vooAtualizado)
      .then(() => {
        Alert.alert('Sucesso!', 'Voo alterado com sucesso');
        navigation.goBack(); 
      })
      .catch((err) => Alert.alert('Erro', `Erro ao atualizar voo: ${err.message}`));
  };

  return (
    <>
      <NavBar />
      <View style={styles.bodyAtualizar}>
        <View style={styles.containerAtualizar}>
          <Text style={styles.titleAtualizar}>Atualize os Dados do Voo</Text>

          <Text style={styles.etiquetaInput}>Companhia Aérea</Text>
          <TextInput
            style={styles.input}
            value={companhia}
            onChangeText={setCompanhia}
          />

          <Text style={styles.etiquetaInput}>Aeroporto Ida</Text>
          <TextInput
            style={styles.input}
            value={aeroportoIda}
            onChangeText={setAeroportoIda}
          />

          <Text style={styles.etiquetaInput}>Aeroporto Volta</Text>
          <TextInput
            style={styles.input}
            value={aeroportoVolta}
            onChangeText={setAeroportoVolta}
          />

          <Text style={styles.etiquetaInput}>Data Ida</Text>
          <TextInput
            style={styles.input}
            value={dataIda}
            onChangeText={setDataIda}
            placeholder="YYYY-MM-DD"
          />

          <Text style={styles.etiquetaInput}>Data Volta</Text>
          <TextInput
            style={styles.input}
            value={dataVolta}
            onChangeText={setDataVolta}
            placeholder="YYYY-MM-DD"
          />

          <Text style={styles.etiquetaInput}>Horário Ida</Text>
          <TextInput
            style={styles.input}
            value={horaIda}
            onChangeText={setHoraIda}
          />

          <Text style={styles.etiquetaInput}>Horário Volta</Text>
          <TextInput
            style={styles.input}
            value={horaVolta}
            onChangeText={setHoraVolta}
          />

          <TouchableOpacity style={styles.button} onPress={atualizaVoo}>
            <Text style={styles.buttonText}>Atualizar Voo</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  bodyAtualizar: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50,
    backgroundColor: '#ffffff',
  },
  containerAtualizar: {
    width: '90%',
    padding: 20,
  },
  titleAtualizar: {
    fontSize: 32,
    fontWeight: '600',
    marginBottom: 25,
    textAlign: 'center',
  },
  etiquetaInput: {
    marginTop: 20,
    marginLeft: 12,
    fontSize: 16,
  },
  input: {
    padding: 10,
    marginVertical: 10,
    color: '#FF6600',
    backgroundColor: '#fff',
    borderWidth: 0.5,
    borderColor: '#ccc',
    borderRadius: 5,
    width: '100%',
  },
  button: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF6600',
    borderRadius: 25,
    marginTop: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '500',
  },
});

export default Atualizar;