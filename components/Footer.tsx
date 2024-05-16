import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

const Footer = () => (
  <View style={styles.footerContainer}>
    <Text style={styles.footerText}>Beatriz Svestka &copy; All Rights Reserved</Text>
  </View>
);

const styles = StyleSheet.create({
  footerContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 16,
    backgroundColor: '#f0f0f0', // Cor de fundo do rodapé
    alignItems: 'center', // Centralizar o conteúdo horizontalmente
  },
  footerText: {
    color: '#555', // Cor do texto do rodapé
    fontSize: 14, // Tamanho da fonte do texto do rodapé
  },
});

export default Footer;
