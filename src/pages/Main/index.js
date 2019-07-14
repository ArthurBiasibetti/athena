import React, { Component, svg } from 'react';

import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';

import md5 from 'md5';

import api from '../../services/api';

import logo from '../../assets/logo.png';

import styles from './styles';


export default class main extends Component {
  state = {
    userEmail: '',
    userPass: ''
  }

  handleSingIn = async () => {
    if(this.state.userEmail){
      const response = await api.get('pessoas/'+this.state.userEmail);
      console.log(response.data);
      if(md5(this.state.userPass) == response.data[0].senha){
        this.props.navigation.navigate("Aluno");
      }else{
        console.log('Email ou senha estão incorretos');
      }
    }else{
      console.log('Email ou senha estão incorretos');
    }
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
          secureTextEntry={true} 
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
