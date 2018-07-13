import {Ionicons} from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default class DealsView extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={styles.container}>
        
        <Ionicons name='ios-sad-outline' size={40}/>
        <Text style={styles.text}>No deals at this time...</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#f4f4f4',
    flex: 1,
    height: '100%',
    justifyContent: 'center',
  },
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
    height: '8%',
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
