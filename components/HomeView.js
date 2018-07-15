import {Ionicons} from '@expo/vector-icons';
import {FAVORITES} from './../util/Constants';
import React from 'react';
import { AsyncStorage, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default class HomeView extends React.Component {

  favorites = []

  products = [
    {
      id: 1,
      name: 'Lorex Security Camera',
      price: '₹ 3,500',
      source: 'https://cdn3.focuscamera.com/media/product/b2d/lorex-wireless-indoor-outdoor-wi-fi-security-camera-with-night-vision-fxc33v-e21.jpg',
    },
    {
      id: 2,
      name: 'Oppo A3s Dual Camera',
      price: '₹ 10,901',
      source: 'https://hub.91mobiles.com/wp-content/uploads/2018/07/OPPO-A3s-1.jpg',
    },
    {
      id: 3,
      name: 'iPhone 7',
      price: '₹ 47,000',
      source: 'https://cdn.shopify.com/s/files/1/1043/3082/products/iPhone_7_Black_1024x1024_2ebad569-972a-48c0-aab5-d199a68e707a_1024x1024.jpeg?v=1519090803',
    }
  ]

  constructor(props) {
    super(props)
    AsyncStorage.getItem(FAVORITES).then((value) => {
      this.favorites = JSON.parse(value)
      this.updateFavorites()
    })
    this.state = {
      products: this.products,
      favorites: this.favorites,
    }
  }

  updateFavorites() {
    this.setState({
      favorites: this.favorites,
    })
    AsyncStorage.setItem(FAVORITES, JSON.stringify(this.favorites))
  }

  render() {
    return (
      <View style={styles.container}>
        {/* <Ionicons name='ios-sad-outline' size={40}/>
        <Text style={styles.text}>No products at this time...</Text> */}
        {
          this.state.products.map((product) => {
            return (
              <TouchableOpacity key={product.source} style={{width: '100%', backgroundColor: 'transparent',}}>
                <View elevation={5} style={[styles.cardView, {height: 125}]}>
                  <View style={{flex: 1, width: '100%', height: '100%', borderRadius: 10}}>
                    <Image style={{flex: 1, width: '100%', height: '100%', resizeMode: 'contain', borderRadius: 10}}
                      source={{uri: product.source}}/>
                  </View>
                  <View style={styles.productText}>
                    <Text style={styles.productName}>{product.name}</Text>
                    <Text style={styles.productPrice}>{product.price}</Text>
                    <TouchableOpacity style={styles.favorite} onPress={() => {
                      if (this.favorites.includes(product.id)) {
                        index = this.favorites.indexOf(product.id)
                        if (index > -1) {
                          this.favorites.splice(index, 1)
                        }
                      } else {
                        this.favorites.push(product.id)
                      }
                      this.updateFavorites()
                      }}>
                      <Ionicons name={this.state.favorites.includes(product.id) ? 'ios-star' : 'ios-star-outline'} color='white' size={20}/>
                    </TouchableOpacity>
                  </View>
                </View>
              </TouchableOpacity>
            )
          })
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f4f4f4',
    flex: 1,
    height: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  productName: {
    margin:4,
    fontSize: 18,
    color: 'white',
    fontWeight: '100',
    fontFamily: 'Roboto',
  },
  productPrice: {
    margin: 4,
    fontSize: 16,
    bottom: 4,
    left: 4,
    position: 'absolute',
    color: 'white',
    fontFamily: 'monospace',
  },
  cardView: {
    backgroundColor: 'white',
    borderRadius: 10,
    margin: 8,
    shadowColor: '#000000',
    shadowRadius: 10,
    shadowOpacity: 0.5,
    width:'95%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  productText: {
    backgroundColor: '#fca314',
    height: '100%',
    width: '60%',
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
    padding: 8,
  },
  favorite: {
    right: 8,
    bottom: 8,
    position: 'absolute',
  }
});
