import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import Voo from './Voo'; // Certifique-se de que o caminho esteja correto.

const ListaVoos = ({ voos, carregaVoos, isDelete }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={voos}
        keyExtractor={(item) => item._id.toString()} // Supondo que cada voo possui um `_id` único.
        renderItem={({ item }) => (
          <Voo valor={item} carregaVoos={carregaVoos} isDelete={isDelete} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#F5F5F5', // Fundo claro para visualização.
  },
});

export default ListaVoos;