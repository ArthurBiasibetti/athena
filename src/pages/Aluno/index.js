import React, { Component } from 'react';

import { View,Text, FlatList,  TouchableOpacity, Image, ScrollView, AsyncStorage } from 'react-native';

import api from '../../services/api';

import styles from './styles';

import logo from '../../assets/logo.png';




export default class Aluno extends Component {

  state = {
    dadosTarefa: []
  }

  async componentDidMount(){
    //pega turmas
    dadosTarefas= []
    turmas = []
    tarefas = []
    const pessoa = await AsyncStorage.getItem('@athena:pessoa');
    const response = await api.get('turmas_aluno/'+pessoa);

    response.data.forEach((data)=>{turmas.push(data.cod_turma)});
    //pega tarefas

    for(i=0; i<turmas.length;i++){
      const response = await api.get('tarefas_turma/'+turmas[i]);

      response.data.forEach((data)=>{tarefas.push(data.id_tarefa)});
    }
    //pega dados tarefa

    for(i=0; i<tarefas.length;i++){
      const response = await api.get('tarefas/'+tarefas[i]);

      response.data.forEach((data)=>{dadosTarefas.push(data)});
    }
    
    this.setState({dadosTarefa: dadosTarefas});
  }
  renderItem = ({ item }) => (
    <TouchableOpacity
    onPress={() => {}}
    style={styles.arquivo}
    >
      <View style={styles.fileInfo}>
        <Text style={styles.fileTitle}>{item.nome_tarefa}</Text>
        <Text style={styles.fileTitle}>Nota: {item.peso_nota}</Text>
      </View>
    </TouchableOpacity>

  );

  render() {
      return( 
      <View style={styles.container}>
        <View style={styles.topo}>
          <Image style={styles.logo} source={logo}/>
        </View>
        <FlatList
          style={styles.list}
          data={this.state.dadosTarefa}
          keyExtractor={tarefa => tarefa.id_tarefa.toString()}
          ItemSeparatorComponent={()=> <View style={styles.separator}/>}
          renderItem={this.renderItem}
        />
        </View>
      );      
    }
    }
  


