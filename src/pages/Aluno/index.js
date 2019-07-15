import React, { Component } from 'react';
import OneSignal from 'react-native-onesignal';

import { View,Text, FlatList,  TouchableOpacity, Image, ScrollView, AsyncStorage } from 'react-native';

import api from '../../services/api';

import styles from './styles';

import logo from '../../assets/logo.png';




export default class Aluno extends Component {

  state = {
    dadosTarefa: []
  }
  
  constructor(properties) {
    super(properties);
    OneSignal.init("ac9c6d97-5e92-4aac-b2e2-0e4ee24f32e7");

    OneSignal.addEventListener('received', this.onReceived);
    OneSignal.addEventListener('opened', this.onOpened);
    OneSignal.addEventListener('ids', this.onIds);
    OneSignal.configure();
  }

  componentWillUnmount() {
    OneSignal.removeEventListener('received', this.onReceived);
    OneSignal.removeEventListener('opened', this.onOpened);
    OneSignal.removeEventListener('ids', this.onIds);
  }

  onReceived(notification) {
    console.log("Notification received: ", notification);
  }

  onOpened(openResult) {
    console.log('Message: ', openResult.notification.payload.body);
    console.log('Data: ', openResult.notification.payload.additionalData);
    console.log('isActive: ', openResult.notification.isAppInFocus);
    console.log('openResult: ', openResult);
  }

  onIds(device) {
    console.log('Device info: ', device);
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
        <View style={styles.topoLista}>
          <Text style={styles.topoTitle}>Teste</Text>
        </View>
        <View style={styles.textList}>
        <Text style={styles.fileTitle}>{item.nome_tarefa}</Text>
        <Text style={styles.fileTitle}>Nota: {item.peso_nota}</Text>
        </View>
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
  


