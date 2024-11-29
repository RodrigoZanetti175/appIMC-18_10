import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const NavBar = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.nav}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text style={styles.home}>Flightly</Text>
      </TouchableOpacity>
      
      <View style={styles.menuList}>
        <TouchableOpacity onPress={() => navigation.navigate('Cadastro')} style={styles.menuItem}>
          <Text style={styles.menuLink}>Cadastrar</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Deletar')} style={styles.menuItem}>
          <Text style={styles.menuLink}>Deletar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  nav: {
    width: '100%',
    height: 65,
    borderBottomWidth: 0.75,
    borderBottomColor: '#ff6600',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15
  },
  home: {
    fontFamily: 'Poppins',
    fontSize: 42
  },
  menuList: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  menuItem: {
    marginHorizontal: 10
  },
  menuLink: {
    fontSize: 20,
    fontWeight: '300',
    color: '#ff6600'
  },
});

export default NavBar;