import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-paper/lib/typescript/components/Icon';
import GeradorDeUrl from './utils/GeradorDeUrl';
import { IconButton } from 'react-native-paper';

const SeuComponente: React.FC = () => {
  const gerador = GeradorDeUrl();
  const imageUrl = gerador.gerarUrlDeImagem();

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: imageUrl }} style={styles.imagem} />
      </View>
      <View style={styles.textContainer}>
        <IconButton
          icon="check" // Nome do ícone (substitua por um ícone real)
          size={30}     // Tamanho do ícone
           // Cor do ícone
          onPress={() => console.log('Ícone pressionado')} // Ação ao pressionar o ícone
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Alinhar os itens na parte inferior
  },
  imageContainer: {
    alignItems: 'center', // Centralizar a imagem horizontalmente
  },
  imagem: {
    width: 600, // Ajuste a largura conforme necessário
    height: 600, // Ajuste a altura conforme necessário
  },
  textContainer: {
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});

export default SeuComponente;