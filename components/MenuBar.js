import {CONTACT, DEALS, HOME} from './../util/Constants';
import {Ionicons} from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default class MenuBar extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      selected: props.selected,
    }
  }

  updateSelected(selected) {
    this.props.updateSelected(selected)
    this.setState({
      selected: selected,
    })
  }

  render() {
    return (
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.contactButton}
          onPress={() => {this.updateSelected(DEALS)}}>
          <Ionicons name='ios-flame-outline' size={30}
          color={this.state.selected === DEALS ? '#00a9ff' : '#444'}/>
          <Text style={this.state.selected === DEALS ? styles.selectedText : styles.text}>{DEALS}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.contactButton}
          onPress={() => {this.updateSelected(HOME)}}>
          <Ionicons
            name='ios-home-outline'
            size={30}
            color={this.state.selected === HOME ? '#00a9ff' : '#444'}/>
          <Text style={this.state.selected === HOME ? styles.selectedText : styles.text}>{HOME}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.contactButton}
          onPress={() => {this.updateSelected(CONTACT)}}>
          <Ionicons name='ios-contact-outline' size={30}
          color={this.state.selected === CONTACT ? '#00a9ff' : '#444'}/>
          <Text style={this.state.selected === CONTACT ? styles.selectedText : styles.text}>{CONTACT}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  contactButton: {
    alignItems: 'center',
    borderColor: '#d4d4d4',
    borderRightWidth: 0,
    borderWidth: 1,
    height: '100%',
    justifyContent: 'center',
    width: '33.33%',
  },
  footer: {
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    bottom: 0,
    flexDirection: 'row',
    height: '100%',
    justifyContent: 'center',
    position: 'absolute',
    width: '100%',
  },
  text: {
    color: '#444',
  },
  selectedText: {
    color: '#00a9ff',
  },
});
