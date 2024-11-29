import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Alert } from 'react-native';
import axios from 'axios';
import NavBar from '../components/NavBar'; 

const Delete = () => {
  const [voos, setVoos] = useState([]);

  useEffect(() => {
    carregaVoos();
  }, []);

  const carregaVoos = () => {
    axios
      .get('https://api-mpa-flightly-mn44.onrender.com/voo')
      .then((res) => {
        setVoos(res.data);
      })
      .catch((err) => Alert.alert('Erro', `Erro ao carregar voos: ${err.message}`));
  };

  const deletarVoo = (id) => {
    Alert.alert(
      'Confirmar Exclusão',
      'Você tem certeza de que deseja excluir este voo?',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Excluir',
          style: 'destructive',
          onPress: () => {
            axios
              .delete(`https://api-mpa-flightly-mn44.onrender.com/voo/${id}`)
              .then(() => {
                Alert.alert('Sucesso', 'Voo deletado com sucesso');
                carregaVoos();
              })
              .catch((err) => Alert.alert('Erro', `Erro ao deletar voo: ${err.message}`));
          },
        },
      ]
    );
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>
        {item.companhia} - {item.aeroportoIda} → {item.aeroportoVolta}
      </Text>
      <TouchableOpacity style={styles.deleteButton} onPress={() => deletarVoo(item._id)}>
        <Text style={styles.deleteButtonText}>Deletar</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <>
      <NavBar />
      <View style={styles.bodyListagem}>
        <Text style={styles.title}>Escolha o voo que deseja deletar</Text>
        <FlatList
          data={voos}
          keyExtractor={(item) => item._id}
          renderItem={renderItem}
          contentContainerStyle={styles.listContainer}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  bodyListagem: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 20,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  listContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    marginVertical: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  itemText: {
    fontSize: 16,
    color: '#333',
  },
  deleteButton: {
    backgroundColor: '#FF6600',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  deleteButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
});

export default Delete;