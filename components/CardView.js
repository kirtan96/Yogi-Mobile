import {Ionicons} from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default class CardView extends React.Component {

  constructor(props) {
    super(props)
    console.log(props)
  }

  render() {
    return (
      <View elevation={5} style={[styles.container, {height: this.props.height}]}>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 10,
    margin: 8,
    shadowColor: '#000000',
    shadowRadius: 10,
    shadowOpacity: 0.5,
    width:'95%',
  },
});
