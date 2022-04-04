import React from 'react';
import { SafeAreaView, Text , Image,  StyleSheet} from 'react-native';
import Header from './components/Header'
import Formulario from './components/Formulario'

const App= () => {
 
  return (
    <SafeAreaView>
        <Text>test</Text>
        <Header/>
        <Image source ={ require('./assets/img/cryptomonedas.png')} style={styles.imagen}></Image>
        <Formulario/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  imagen:{
    width: '80%',
    height: 100,
    marginHorizontal: '2.5%'
  }
})

export default App;
