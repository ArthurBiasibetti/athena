import React, { Component } from 'react';

import { View,Text, FlatList,  TouchableOpacity, Image, ScrollView, AsyncStorage } from 'react-native';

import {NavigationAction} from 'react-navigation';

import api from '../../services/api';

import styles from './styles';

import logo from '../../assets/logo.png';



export default class Aluno extends Component {

  state = {
    turmas: [],
    tarefas: [],
    dadosTarefa: []
  }

  async componentDidMount(){
    //pega turmas

    const pessoa = await AsyncStorage.getItem('@athena:pessoa');
    const response = await api.get('turmas_aluno/'+pessoa);

    response.data.forEach((data)=>{this.state.turmas.push(data.cod_turma)});
    //pega tarefas

    for(i=0; i<this.state.turmas.length;i++){
      const response = await api.get('tarefas_turma/'+this.state.turmas[i]);

      response.data.forEach((data)=>{this.state.tarefas.push(data.id_tarefa)});
    }
    //pega dados tarefa

    for(i=0; i<this.state.tarefas.length;i++){
      const response = await api.get('tarefas/'+this.state.tarefas[i]);

      response.data.forEach((data)=>{this.state.dadosTarefa.push(data)});
    }
  }
  render() {
    return( 
    <View style={styles.container}>
      <View style={styles.topo}>
        <Image style={styles.logo} source={logo}/>
      </View>
      <FlatList
        style={styles.list}
        data={this.state.dadosTarefa}

      />     
    </View>
    );
  }
}
