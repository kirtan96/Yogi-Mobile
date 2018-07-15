import {Ionicons} from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default class ContactView extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={styles.container}>
        <View elevation={5} style={[styles.cardView, {height: 100}]}>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f4f4f4',
    height: '100%',
    width: '100%',
  },
  cardView: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1.0,
    shadowRadius: 5,
  },
  cardView: {
    backgroundColor: 'white',
    borderRadius: 10,
    margin: 8,
    shadowColor: '#000000',
    shadowRadius: 10,
    shadowOpacity: 0.5,
    width:'95%',
  },
});
