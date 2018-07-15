import {CONTACT, DEALS, HOME, FAVORITES} from './util/Constants';
import {Ionicons} from '@expo/vector-icons';
import MenuBar from './components/MenuBar';
import React from 'react';
import { AsyncStorage, ScrollView, StyleSheet, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import DealsView from './components/DealsView';
import HomeView from './components/HomeView';
import ContactView from './components/ContactView';

export default class App extends React.Component {

  constructor() {
    super()
    this.state = {
      selected: HOME,
    }
    value = AsyncStorage.getItem(FAVORITES).then((value) => {
      if (value === null) {
        AsyncStorage.setItem(FAVORITES, JSON.stringify('{}'))
      }
    })
  }

  updateSelected(selected) {
    this.setState({
      selected: selected,
    })
  }

  getView() {
    switch (this.state.selected) {
      case DEALS:
        return <DealsView/>;
      case HOME:
        return <HomeView/>
      case CONTACT:
        return <ContactView/>
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.viewContainer}>
          <StatusBar hidden={true}/>
          <ScrollView style={styles.scrollContainer}>
            {
              this.getView()
            }
          </ScrollView>
        </View>
        <View style={styles.footer}>
          <MenuBar updateSelected={(v) => {this.updateSelected(v)}} selected={this.state.selected}/>
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
  viewContainer: {
    backgroundColor: '#f4f4f4',
    height: '92%',
    width: '100%',
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
  scrollContainer: {
    height: '100%',
    width: '100%',
    backgroundColor: '#f4f4f4',
  },
  text: {
    color: '#444',
  },
});
