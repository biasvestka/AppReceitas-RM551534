import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

const AdviceContainer = ({ children }) => (
  <View style={styles.adviceContainer}>
    {children}
  </View>
);

const AdviceButton = ({ onClick }) => (
  <View style={styles.adviceButtonContainer}>
    <TouchableOpacity style={styles.styledButton} onPress={onClick}>
      <Text style={styles.buttonText}>Gerar Conselho</Text>
    </TouchableOpacity>
  </View>
);

const Advice = () => {
  const [advice, setAdvice] = React.useState('');

  async function fetchAdvice() {
    try {
      const url = 'https://api.adviceslip.com/advice';
      const response = await fetch(url);
      const { slip } = await response.json();
      const { advice } = await slip;
      return advice;
    } catch (error) {
      console.error('Error fetching advice:', error);
      throw error;
    }
  }

  function handleClick() {
    fetchAdvice()
      .then((advice) => {
        setAdvice(advice);
      })
      .catch(err => console.error('Error handling advice:', err));
  }

  return (
    <AdviceContainer>
      <AdviceButton onClick={handleClick} />
      <Text style={[styles.fetchedAdvice, { opacity: advice ? 1 : 0 }]}>{advice}</Text>
    </AdviceContainer>
  );
};



const styles = StyleSheet.create({
  adviceContainer: {
    alignItems: 'center',
  },
  adviceButtonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  styledButton: {
    backgroundColor: '#5F00A0',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    width: 275,
    height: 50,
    marginTop:20
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  fetchedAdvice: {
    borderStyle: 'solid',
    borderColor: 'rgba(0, 0, 0, 0.12)',
    borderWidth: 1,
    borderRadius: 4,
    color: 'rgba(0, 0, 0, 0.97)',
    marginTop: 20,
    padding: 20,
  },
  
});

export default Advice;
