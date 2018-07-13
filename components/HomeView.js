import {Ionicons} from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default class HomeView extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={styles.container}>
        <Ionicons name='ios-sad-outline' size={40}/>
        <Text style={styles.text}>No products at this time...</Text>
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
  },
});
