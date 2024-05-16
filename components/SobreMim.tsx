// SobreMim.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SobreMim = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sobre Mim</Text>
      <Text style={styles.content}>Beatriz Svestka - RM551534 - 2TSPM.</Text>
      <Text style={styles.content}>Apenas quis usar uma API criativa e engraçada, mas também útil. Aproveite seu conselho!</Text>
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

export default SobreMim;
