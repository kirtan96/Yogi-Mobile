import {Ionicons} from '@expo/vector-icons';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default class DealsView extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={styles.container}>
        
        {/* <Ionicons name='ios-sad-outline' size={40}/>
        <Text style={styles.text}>No deals at this time...</Text> */}
        <View elevation={5} style={[styles.cardView, {height: 500}]}>
          <Image style={{flex: 1, width: '100%', height: '100%', resizeMode: 'contain'}} source={require('../assets/images/sample2.jpg')}/>
          <Text style={styles.text}>Monsoon Hungama: EXCHANGE OFFER!!!</Text>
        </View>
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
  text: {
    color: '#444',
    margin: 16,
    marginTop: 0,
  },
  cardView: {
    backgroundColor: 'white',
    borderRadius: 10,
    margin: 8,
    shadowColor: '#000000',
    shadowRadius: 10,
    shadowOpacity: 0.5,
    width:'95%',
    justifyContent: 'center',
    alignItems: 'center'
  },
});
