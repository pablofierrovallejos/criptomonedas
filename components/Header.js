import React from 'react'
import {Text, StyleSheet, Platform} from 'react-native'

const Header = ()=>(
    <Text style={styles.encabezado}>Criptomonedas</Text>
);

const styles = StyleSheet.create({
    encabezado:{
        backgroundColor: '#5E49E2',
        textAlign: 'center',
        textTransform: 'uppercase',
        fontSize: 20,
        color:'#FFF',
        marginBottom: 30
    }
})


export default Header