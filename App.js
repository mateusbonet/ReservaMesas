import React, { Component } from 'react';
import { FlatList, Text, View, TextInput, Button } from 'react-native';

import styles from './src/styles/styles';

export default class App extends Component {

  constructor(props) {

    super(props);

    this.state = {
      nome: '',
      numeroMesa:'',
      telefone:'',
      reservas: []
    }

    this.renderItem = this.renderItem.bind(this);
    this.salvar = this.salvar.bind(this);
  }

  salvar() {

    if (this.validaCampos()) {
      let item = {
        key: this.state.reservas.length.toString(),
        nomeReserva: this.state.nome,
        numeroMesa: this.state.numeroMesa,
        telefone: this.state.telefone
      }

      let reservas = this.state.reservas;
      reservas.push(item);
      this.setState({ reservas });

      let nome = '';
      let numeroMesa = '';
      let telefone = '';

      this.setState({ nome });
      this.setState({ numeroMesa });
      this.setState({ telefone });

    } else {
      alert('Informe um valor válido');
    }
  }

  validaCampos() {    
    return this.state.nome !== "" && this.state.numeroMesa !== "" && this.state.telefone !== "";
  }

  renderItem(item) {
    return (
      <Text style={[styles.row]}>
        Nome:{item.item.nomeReserva} Mesa:{item.item.numeroMesa} Telefone:{item.item.telefone}
      </Text>
    );
  }

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.header} >
          <Text style={[styles.headerText, styles.row]}> Reserva de mesas </Text>
        </View>

        <View style={styles.viewInput}>

          <TextInput style={styles.itemInput} placeholder="Nome..." maxLength={25} onChangeText={(nome) => { this.setState({ nome }) }} value={this.state.nome} />
          <TextInput style={styles.itemInput} placeholder="Mesa..." maxLength={3} onChangeText={(numeroMesa) => { this.setState({ numeroMesa }) }} value={this.state.numeroMesa} />
          <TextInput style={styles.itemInput} placeholder="Telefone..." maxLength={9} onChangeText={(telefone) => { this.setState({ telefone }) }} value={this.state.telefone} />

        </View>
        <Button title="Salvar" onPress={this.salvar} />

        <FlatList style={styles.list} data={this.state.reservas} renderItem={this.renderItem} extraData={this.state} />

        <View style={styles.footer} >
          <Text style={styles.footerText}>UNOESC - Mateus Bonet</Text>
        </View>

      </View>
    );
  }
}