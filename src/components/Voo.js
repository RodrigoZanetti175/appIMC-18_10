import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const Voo = ({ valor, carregaVoos, isDelete, isEdit }) => {
  const navigation = useNavigation();

  const remover = (id) => {
    Alert.alert(
      'Confirmar Exclusão',
      `Você deseja deletar o voo de ${valor.aeroportoIda} pela companhia ${valor.companhia}?`,
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Deletar',
          style: 'destructive',
          onPress: () => {
            const api = 'https://api-mpa-flightly-mn44.onrender.com/voo';
            axios.delete(`${api}/${id}`).then(() => {
              Alert.alert('Sucesso', 'Voo deletado com sucesso!');
              carregaVoos();
            });
          },
        },
      ]
    );
  };

  const atualizar = (valor) => {
    navigation.navigate('Atualizar', { state: valor });
  };

  return (
    <View style={styles.card}>
      <Text style={styles.titulo}>{valor.companhia}</Text>
      <View style={styles.hr} />

      <View style={styles.linhaResultado}>
        <Text style={styles.subTitulo}>Aeroporto ida:</Text>
        <Text style={styles.resultado}>{valor.aeroportoIda}</Text>
      </View>
      <View style={styles.linhaResultado}>
        <Text style={styles.subTitulo}>Aeroporto volta:</Text>
        <Text style={styles.resultado}>{valor.aeroportoVolta}</Text>
      </View>
      <View style={styles.linhaResultado}>
        <Text style={styles.subTitulo}>Data ida:</Text>
        <Text style={styles.resultado}>{valor.dataIda.split('T')[0]}</Text>
      </View>
      <View style={styles.linhaResultado}>
        <Text style={styles.subTitulo}>Data volta:</Text>
        <Text style={styles.resultado}>{valor.dataVolta.split('T')[0]}</Text>
      </View>
      <View style={styles.linhaResultado}>
        <Text style={styles.subTitulo}>Horário ida:</Text>
        <Text style={styles.resultado}>{valor.horaIda}</Text>
      </View>
      <View style={styles.linhaResultado}>
        <Text style={styles.subTitulo}>Horário volta:</Text>
        <Text style={styles.resultado}>{valor.horaVolta}</Text>
      </View>
      <View style={styles.hr} />

      {isDelete && (
        <TouchableOpacity style={styles.icone} onPress={() => remover(valor._id)}>
          <Icon name="delete" size={24} color="#FF6600" />
        </TouchableOpacity>
      )}
      {isEdit && (
        <TouchableOpacity style={styles.icone} onPress={() => atualizar(valor)}>
          <Icon name="edit" size={24} color="#FF6600" />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ff660050',
    borderRadius: 12,
    padding: 18,
    margin: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  titulo: {
    fontSize: 24,
    fontWeight: '700',
    color: '#000000',
  },
  hr: {
    height: 1,
    backgroundColor: '#FF6600',
    marginVertical: 10,
  },
  linhaResultado: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 4,
  },
  subTitulo: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000000',
  },
  resultado: {
    fontSize: 18,
    fontWeight: '400',
    color: '#000000',
  },
  icone: {
    alignSelf: 'center',
    marginTop: 12,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 10,
    alignItems: 'center',
  },
});

export default Voo;