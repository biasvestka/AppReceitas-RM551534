import React, { useState, useEffect } from 'react';
import { View, Text, Button, TextInput, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AddItemScreen = ({ navigation }) => {
  const [itemName, setItemName] = useState('');
  const [items, setItems] = useState([]);

  useEffect(() => {
    loadItems();
  }, []);

  const loadItems = async () => {
    try {
      const itemsJson = await AsyncStorage.getItem('items');
      if (itemsJson !== null) {
        setItems(JSON.parse(itemsJson));
      }
    } catch (error) {
      console.error('Error loading items: ', error);
    }
  };

  const addItem = async () => {
    try {
      const newItem = { name: itemName, details: '' }; 
      const existingItemsJson = await AsyncStorage.getItem('items');
      let existingItems = [];
      if (existingItemsJson !== null) {
        existingItems = JSON.parse(existingItemsJson);
      }
      existingItems.push(newItem);
      await AsyncStorage.setItem('items', JSON.stringify(existingItems));
      setItems(existingItems);
      setItemName('');
    } catch (error) {
      console.error('Error adding item: ', error);
    }
  };

  const removeItem = async (index) => {
    try {
      const updatedItems = items.filter((_, i) => i !== index);
      await AsyncStorage.setItem('items', JSON.stringify(updatedItems));
      setItems(updatedItems);
    } catch (error) {
      console.error('Error removing item: ', error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.addItemContainer}>
        <Text style={styles.heading}>Adicionar Receita</Text>
        <TextInput
          style={styles.input}
          placeholder="Nome da Receita"
          value={itemName}
          onChangeText={setItemName}
        />
        <TouchableOpacity 
                  style={styles.btnAdd}
                  onPress={addItem}
                >
                  <Text style={{ color: 'white',  fontWeight: 'bold' }}>Adicionar</Text>
                </TouchableOpacity>
      </View>
      <View style={styles.listContainer}>
        <Text style={styles.heading}>Lista de Receitas:</Text>
        {items.length === 0 ? (
          <Text style={styles.emptyListMessage}>Você não adicionou nenhuma receita ainda.</Text>
        ) : (
          <FlatList
            data={items}
            renderItem={({ item, index }) => (
              <View style={styles.itemContainer}>
              <Text style={styles.itens}>{item.name}</Text>
              <View style={styles.buttonContainer}>
                <TouchableOpacity 
                  style={styles.btnAdd}
                  onPress={() => navigation.navigate('ItemDetail', { item })}
                >
                  <Text style={{ color: 'white',  fontWeight: 'bold' }}>Ver Receita</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  onPress={() => removeItem(index)}
                  style={[styles.btnAdd, { backgroundColor: '#8b0000' }]}
                >
                  <Text style={{ color: 'white', fontWeight: 'bold'  }}>Remover</Text>
                </TouchableOpacity>
              </View>
            </View>
                        )}
            keyExtractor={(item, index) => index.toString()}
          />
        )}
      </View>
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
    //fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color:'#8b0000',
  },
  itens:{
    color:'#8b0000',
    fontWeight:'bold',
    //fontSize:16,
  },
  addItemContainer: {
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#FFFFFF',
    padding: 10,
    marginBottom: 10,
    borderRadius: 8,
  },
  listContainer: {
    flex: 1,
  },
  itemContainer: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    marginBottom: 15,
    borderRadius: 8,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  emptyListMessage: {
    textAlign: 'center',
    fontSize: 16,
    fontStyle: 'italic',
  },
  btnAdd: {
    backgroundColor: '#006400',
    borderRadius: 15,
    alignItems:'center',
    justifyContent:'center',
    height: 50,
    width:100,
    alignSelf: 'center',
  },
  
});

export default AddItemScreen;
