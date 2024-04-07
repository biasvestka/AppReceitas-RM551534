import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ItemDetailScreen = ({ route }) => {
  const { item } = route.params;
  const [details, setDetails] = useState('');
  const [showInput, setShowInput] = useState(true); 
  useEffect(() => {
    loadDetails();
  }, []);

  const loadDetails = async () => {
    try {
      const savedDetails = await AsyncStorage.getItem(`details_${item.name}`); 
      if (savedDetails !== null) {
        setDetails(savedDetails);
        setShowInput(false); 
      }
    } catch (error) {
      console.error('Error loading details:', error);
    }
  };

  const saveDetails = async () => {
    try {
      await AsyncStorage.setItem(`details_${item.name}`, details); 
      console.log('Details saved:', details);
      setShowInput(false); 
    } catch (error) {
      console.error('Error saving details:', error);
    }
  };

  const deleteDetails = async () => {
    try {
      await AsyncStorage.removeItem(`details_${item.name}`); 
      setDetails('');
      console.log('Details deleted');
    } catch (error) {
      console.error('Error deleting details:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Receita {item.name}</Text>
      {showInput && (
        <TextInput
          style={styles.input}
          multiline={true}
          numberOfLines={4}
          placeholder="Escreva a receita..."
          value={details}
          onChangeText={setDetails}
        />
      )}
      {showInput && (
        <TouchableOpacity 
        style={styles.btn}
        onPress={saveDetails}
      >
        <Text style={{ color: 'white', fontWeight: 'bold', fontSize:'18' }}>Salvar</Text>
      </TouchableOpacity>
      )}
      {!showInput && (
        <>
          <Text style = {styles.txt}>Receita: {details}</Text>
          <View style={styles.buttonContainer}>
            <Button title="Editar" onPress={() => setShowInput(true)} />
            
            <Button title='Excluir' onPress={deleteDetails} color='red'/>
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#8b0000', 
  },
  txt: {
    fontSize: 16,
    fontWeight: 'bold',

  },
  input: {
    backgroundColor: '#FFFFFF',
    padding: 10,
    marginBottom: 20,
    borderRadius: 8,
    height: 100, 
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },

  btn: {
    backgroundColor: '#006400',
    borderRadius: 15,
    alignItems:'center',
    justifyContent:'center',
    width: 250,
    height: 50,
    alignSelf: 'center',
  }
});

export default ItemDetailScreen;
