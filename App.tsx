import React from 'react';
import { View, Image, Text } from 'react-native'; 
import GeradorDeUrl from './utils/GeradorDeUrl';
// import './SeuComponente.css'; // Importe seu arquivo CSS se necessário

const SeuComponente: React.FC = () => {
  const gerador = GeradorDeUrl();
  const imageUrl = gerador.gerarUrlDeImagem();
  return (
    <View>
      <View style={styles.imagemContainer}>
        <Image source={{ uri: imageUrl }} style={styles.imagem} />
      </View>
      <View style={{styles.iconesContainer}}>
        <Text style={styles.icone}>Ícone 1</Text>
        <Text style={styles.icone}>Ícone 2</Text>
      </View>
    </View>
  );
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagemContainer: {
    marginBottom: 20, // Espaço entre a imagem e os ícones
  },
  imagem: {
    width: 600, // Ajuste a largura conforme necessário
    height: 600, // Ajuste a altura conforme necessário
  },
  iconesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  icone: {
    fontSize: 24,
  },
};

export default SeuComponente;