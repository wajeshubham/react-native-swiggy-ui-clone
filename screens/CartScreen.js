import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import BottomNavigation from '../components/BottomNavigation';

const lightFont = 'Poppins-Light';
const regularFont = 'Poppins-Regular';
const mediumFont = 'Poppins-Medium';
const boldFont = 'Poppins-Bold';
const blackFont = 'Poppins-Black';
const orangeRegular = '#fc8019';
// const orangeLight = '#fc8019';
const dividerColor = '#e9e9eb';

const CartScreen = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
      }}>
      <Image
        source={require('../img/empty-cart.png')}
        style={{width: 210, height: 210}}
      />
      <Text style={{fontFamily: boldFont, color: '#666666', marginTop: 45}}>
        GOOD FOOD IS ALWAYS COOKING
      </Text>
      <Text style={{fontFamily: regularFont, color: '#888888', marginTop: 10}}>
        Your cart is empty.
      </Text>
      <Text style={{fontFamily: regularFont, color: '#888888', marginTop: -4}}>
        Add something from the menu
      </Text>
      <TouchableOpacity
        style={{
          paddingVertical: 7,
          borderWidth: 2,
          borderColor: orangeRegular,
          width: 250,
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 20,
        }}
        onPress={() => navigation.navigate('HomeScreen')}>
        <Text style={{fontFamily: boldFont, color: orangeRegular, top: 1}}>
          BROWSE RESTAURANTS
        </Text>
      </TouchableOpacity>

      <BottomNavigation active={'CartScreen'} />
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({});
