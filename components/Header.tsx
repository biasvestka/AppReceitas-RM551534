// Header.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Header = ({ onSobreMimPress, onSobreAPIPress }) => (
  <View style={styles.headerContainer}>
    <View style={styles.buttonsContainer}>
      <TouchableOpacity style={styles.button} onPress={onSobreMimPress}>
        <Text style={styles.buttonText}>Sobre Mim</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={onSobreAPIPress}>
        <Text style={styles.buttonText}>Sobre a API</Text>
      </TouchableOpacity>
    </View>
    <Text style={styles.headerTitle}>Precisa de um conselho?</Text>
    <Text style={styles.headerCopy}>Look no further!</Text>
  </View>
);

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: 'rgb(95,0,160)',
    borderWidth: 4,
    borderColor: 'rgb(95,0,160)',
    borderTopWidth: 0,
    paddingVertical: 64,
    paddingHorizontal: 0,
    textAlign: 'center',
  },
  headerTitle: {
    color: 'white',
    fontSize: 30,
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 2,
    textAlign: 'center',
    marginTop: 20, // Espaçamento do título em relação aos botões
  },
  headerCopy: {
    color: 'white',
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 2,
    textAlign: 'center'
  },
  buttonsContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginBottom: 20, // Espaçamento entre os botões e o título
  },
  button: {
    borderBottomWidth: 1, // Adiciona a linha inferior (sublinhado)
    borderBottomColor: 'white', // Cor do sublinhado
    paddingHorizontal: 8, // Espaçamento horizontal dentro do botão
    marginLeft: 16, // Espaçamento entre os botões
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 12,
  },
});

export default Header;
30