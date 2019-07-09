import React, { Component, svg } from 'react';

import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';



import logo from '../../assets/logo.png'

import styles from './styles';

export default class main extends Component {
  handleSingIn = async () => {
    
  }

  render() {
    return(
      <View style={styles.container}>
        <View style={styles.login}>
          <Image style={styles.logo} source={logo}/>

          <TextInput
          style={styles.input}
          placeholder="Nome de Usuario"
          placeholderTextColor="#FFF"
          autoCapitalize="none"
          autoCorrect={false}
          underlineColorAndroid="transparent"
          />
           <TextInput
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor="#FFF"
          autoCapitalize="none"
          autoCorrect={false}
          underlineColorAndroid="transparent"
          />
          <TouchableOpacity onPress={() =>{}} style={styles.button}>
            <Text style={styles.buttomText}>Logar</Text>
          </TouchableOpacity> 
        </View>
      </View>
    );
  }
}
