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

const AccountScreen = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
      }}>
      <Text style={{fontFamily: boldFont, color: '#666666', marginTop: 45}}>
        GOOD FOOD IS ALWAYS COOKING
      </Text>
      <Text style={{fontFamily: regularFont, color: '#888888', marginTop: 10}}>
        Made by food lovers
      </Text>
      <Text style={{fontFamily: regularFont, color: '#888888', marginTop: -4}}>
        Swiggy UI clone
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
        onPress={() => navigation.navigate('AccountScreen')}>
        <Text style={{fontFamily: boldFont, color: orangeRegular, top: 1}}>
          COMPLETE YOUR PROFILE
        </Text>
      </TouchableOpacity>

      <BottomNavigation active={'AccountScreen'} />
    </View>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({});
