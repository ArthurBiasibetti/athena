import React, { Component, svg } from 'react';

import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';

import api from '../../services/api';

import logo from '../../assets/logo.png';

import styles from './styles';

export default class main extends Component {
  state = {
    userEmail: '',
    userPass: ''
  }

  handleSingIn = async () => {
    const response = await api.get('pessoas/'+this.state.userName);
    console.log(response.data);
}; 

  render() {
    return(
      <View style={styles.container}>
        <View style={styles.login}>
          <Image style={styles.logo} source={logo}/>

          <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#FFF"
          autoCapitalize="none"
          autoCorrect={false}
          underlineColorAndroid="transparent"
          value={this.state.userEmail}
          onChangeText={text => this.setState({ userEmail: text})}
          />
           <TextInput
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor="#FFF"
          autoCapitalize="none"
          autoCorrect={false}
          underlineColorAndroid="transparent"
          value={this.state.userPass}
          onChangeText={text => this.setState({ userPass: text})}
          />
          <TouchableOpacity onPress={this.handleSingIn} style={styles.button}>
            <Text style={styles.buttomText}>Logar</Text>
          </TouchableOpacity> 
        </View>
      </View>
    );
  }
}
