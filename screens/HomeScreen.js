// screens/HomeScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList, StyleSheet, SafeAreaView, ScrollView, Image, StatusBar,} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TouchableOpacity} from 'react-native';

const HomeScreen = ({ navigation }) => {
  

  return (
    <ScrollView>
      <StatusBar backgroundColor={'#808080'} barStyle='dark-content' />
    <View style={styles.container}>
        <View>
            <Image
            style={[styles.tamImage, { width: 150, height: 150, marginBottom:20 }]}
            source={require('../assets/splash.png')}
            />
        </View>
        <Text style={styles.heading}>Bem Vindo ao seu App de Receitas!</Text>
        <Text style={styles.txt}>Aqui você guarda suas melhores receitas na palma da sua mão.</Text>
        <Text style={styles.heading}>Comece agora a adicionar suas receitas</Text>
        <View style={styles.buttonsContainer}>
    <TouchableOpacity 
        style={styles.addButton} 
        onPress={() => navigation.navigate('AddItem')}>
        <Text style={styles.addButtonText}>Vamos lá!</Text>
    </TouchableOpacity>
</View>
    </View>
</ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 20,
    alignItems:'center',
  },
  heading: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#8b0000',
    textAlign: 'center', 
  },
  heading2:{
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#8b0000',
  },
  txt:{
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom:20,
    textAlign: 'center', 
  },

  buttonsContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  addButton: {
    backgroundColor: '#8b0000',
    borderRadius: 15,
    width: 250,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default HomeScreen;
