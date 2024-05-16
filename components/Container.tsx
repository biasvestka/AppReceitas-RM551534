import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


const MainContainer = ({ children }) => (
  <View style={styles.mainContainer}>
    {children}
  </View>
);

const SmallParagraph = ({ children }) => (
  <Text style={styles.smallParagraph}>{children}</Text>
);

const BodyCopy = () => (
  <>
    <Text style={styles.smallParagraph}>Clique no botão abaixo para gerar um conselho aleatório!</Text>
    <SmallParagraph>
      Aviso: <Text style={styles.bold}>Estou usando uma API que escolhi, então não garanto que será um bom conselho e NÃO li todos os conselhos que ela pode gerar.</Text>
    </SmallParagraph>
  </>
);

const Container = ({ children }) => (
  <MainContainer>
    <BodyCopy />
    {children}
  </MainContainer>
);

const styles = StyleSheet.create({
  mainContainer: {
    padding: 16,
    margin: 16,
    maxWidth: 960,
  },
  smallParagraph: {
    fontSize: 14,
    marginBottom: 8,
    textAlign: 'center'
  },
  bold: {
    fontWeight: 'bold',
  },
});

export default Container;
