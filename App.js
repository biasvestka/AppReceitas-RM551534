// App.js
import React from 'react';
import { View, StyleSheet } from 'react-native'; 
import Header from './components/Header';
import Container from './components/Container';
import Advice from './components/Advice';
import Footer from './components/Footer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SobreMim from './components/SobreMim';
import SobreAPI from './components/SobreAPI';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="SobreMim" 
          component={SobreMim} 
          options={{ title: 'Sobre Mim' }} 
        />
        <Stack.Screen 
          name="SobreAPI" 
          component={SobreAPI} 
          options={{ title: 'Sobre a API' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const HomeScreen = ({ navigation }) => {
  const navigateToSobreMim = () => {
    navigation.navigate('SobreMim');
  };

  const navigateToSobreAPI = () => {
    navigation.navigate('SobreAPI');
  };

  return (
    <View style={styles.appContainer}>
      <Header 
        onSobreMimPress={navigateToSobreMim}
        onSobreAPIPress={navigateToSobreAPI}
      />
      <Container>
        <Advice />
      </Container>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1, 
  },
});

export default App;
