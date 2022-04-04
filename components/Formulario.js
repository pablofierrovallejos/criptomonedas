import React, {useState, useEffect} from 'react'
import {Text, View, StyleSheet} from 'react-native'
import {Picker} from '@react-native-picker/picker';
import axios from 'axios'

const Formulario = () => {
    const [moneda, guardarMoneda] = useState('')
    const [criptomoneda, guardarCriptomoneda] = useState('')
    const [criptomonedas, guardarCriptomonedas] = useState('')

    useEffect(() =>{
        const consultarAPI = async () => {
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'
            const restulado = await axios.get(url)
            console.log(restulado.data.Data)
        }
        consultarAPI()
    }, []);

    const obtenerMoneda= moneda =>{
        guardarMoneda(moneda)
    }

      return(
          <View>
              <Text style={styles.label}>Monedas</Text>
              <Text style={styles.label}>Criptomonedas</Text>
              <Picker
                    selectedValue={moneda}
                    onValueChange={moneda => obtenerMoneda(moneda)} 
                    >
                  <Picker.Item label="- Seleccione -" value='' />
                  <Picker.Item label="Dolar de Estados Unidos" value='USD' />
                  <Picker.Item label="Pesos Mexicanos" value='MXN' />
                  <Picker.Item label="Euro" value='EUR' />
                  <Picker.Item label="Peso Chileno" value='CLP' />
              </Picker>
          </View>
      )
}

const styles = StyleSheet.create({
    label:{
        textAlign: 'center',
        textTransform: 'uppercase',
        fontSize: 20,
        marginBottom: 30
    }
})

 
 
export default Formulario;