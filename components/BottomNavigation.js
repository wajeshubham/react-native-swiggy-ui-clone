import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Icon} from 'react-native-elements/dist/icons/Icon';
import tw from 'tailwind-react-native-classnames';

const lightFont = 'Poppins-Light';
const regularFont = 'Poppins-Regular';
const mediumFont = 'Poppins-Medium';
const boldFont = 'Poppins-Bold';
const blackFont = 'Poppins-Black';
const orangeRegular = '#ed5e0e';
const orangeLight = '#de895b';
const dividerColor = '#e9e9eb';

const BottomNavigation = ({active}) => {
  const navigation = useNavigation();
  return (
    <View
      style={[
        tw`flex-row justify-between absolute bottom-0 px-9 pt-2 pb-1 bg-white items-center shadow-lg w-full`,
      ]}>
      <TouchableOpacity
        style={tw`items-center text-center`}
        onPress={() => {
          navigation.navigate('HomeScreen');
        }}>
        <Image
          source={require('../img/logo.png')}
          style={[
            tw`mr-2`,
            {
              width: 22,
              height: 22,
              resizeMode: 'contain',
              tintColor: active === 'HomeScreen' ? orangeRegular : '#999999',
            },
          ]}
        />
        <Text
          style={{
            fontSize: 10,
            // marginTop: 2,
            fontFamily: mediumFont,
            marginLeft: -7.5,
            color: active === 'HomeScreen' ? orangeRegular : '#999999',
          }}>
          SWIGGY
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={tw`items-center text-center`}
        onPress={() => {
          navigation.navigate('SearchScreen');
        }}>
        <Image
          source={require('../img/loupe.png')}
          style={[
            tw`mr-2`,
            {
              width: 20,
              height: 20,
              resizeMode: 'contain',
              tintColor: active === 'SearchScreen' ? orangeRegular : '#999999',
            },
          ]}
        />
        <Text
          style={{
            fontSize: 10,
            marginTop: 2,
            fontFamily: mediumFont,
            marginLeft: -7.5,
            color: active === 'SearchScreen' ? orangeRegular : '#999999',
          }}>
          SEARCH
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={tw`items-center text-center`}
        onPress={() => {
          navigation.navigate('CartScreen');
        }}>
        <Image
          source={require('../img/shopping-bag.png')}
          style={[
            tw`mr-2`,
            {
              width: 22,
              height: 22,
              resizeMode: 'contain',
              tintColor: active === 'CartScreen' ? orangeRegular : '#999999',
            },
          ]}
        />
        <Text
          style={{
            fontSize: 10,
            marginTop: 2,
            fontFamily: mediumFont,
            textAlign: 'center',
            marginLeft: -7.5,
            color: active === 'CartScreen' ? orangeRegular : '#999999',
          }}>
          CART
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[tw`items-center text-center`]}
        onPress={() => {
          navigation.navigate('AccountScreen');
        }}>
        <Image
          source={require('../img/user.png')}
          style={[
            tw`mr-2`,
            {
              width: 20,
              height: 20,
              resizeMode: 'contain',
              tintColor: active === 'AccountScreen' ? orangeRegular : '#999999',
            },
          ]}
        />
        <Text
          style={{
            fontSize: 10,
            marginTop: 2,
            fontFamily: mediumFont,
            marginLeft: -7.5,
            color: active === 'AccountScreen' ? orangeRegular : '#999999',
          }}>
          ACCOUNT
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default BottomNavigation;

const styles = StyleSheet.create({});
