// SobreAPI.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SobreAPI = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sobre a API</Text>
      <Text style={styles.content}>The Advice Slip JSON API is provided for free. 😎 It currently gives out over 10 million pieces of advice every year..</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    marginVertical: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  content: {
    fontSize: 16,
  },
});

export default SobreAPI;
