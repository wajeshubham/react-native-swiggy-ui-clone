import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Icon} from 'react-native-elements';
import tw from 'tailwind-react-native-classnames';

const lightFont = 'Poppins-Light';
const regularFont = 'Poppins-Regular';
const mediumFont = 'Poppins-Medium';
const boldFont = 'Poppins-Bold';
const blackFont = 'Poppins-Black';
const orangeRegular = '#ed5e0e';
const orangeLight = '#de895b';
const dividerColor = '#e9e9eb';

const SwiggyHeader = props => {
  return (
    <View
      style={[
        tw`flex-row px-4 py-2 bg-white ${
          props.scene.route.name !== 'AccountScreen' && 'shadow-lg'
        } absolute w-full`,
      ]}>
      {props.scene.route.name === 'AccountScreen' ? (
        <>
          <View style={tw`pt-3`}>
            <Text style={[tw`text-lg`, {fontFamily: boldFont}]}>SHUBHAM</Text>
            <Text style={[{fontFamily: regularFont, color: '#555555'}]}>
              +91-9284184865 · waje.shubham111@gmail.com
            </Text>
          </View>
          <View style={tw`flex-row items-center ml-auto`}>
            <Text
              style={[
                tw`text-sm`,
                {fontFamily: 'Poppins-Medium', color: orangeRegular},
              ]}>
              EDIT
            </Text>
          </View>
        </>
      ) : (
        <>
          <Icon
            style={[
              tw`mr-2`,
              {borderBottomWidth: 2, borderBottomColor: '#ed5e0e', top: 0.5},
            ]}
            type="ionicon"
            name="location-outline"
            size={15}
          />
          <View>
            <Text style={[tw`text-xl`, {fontFamily: boldFont, color: 'black'}]}>
              Home
            </Text>
            <Text
              style={[{fontFamily: regularFont, color: '#666666'}, tw`-ml-6`]}>
              Mumbai, Maharashtra, India - 401 209
            </Text>
          </View>
          <View style={tw`flex-row items-center ml-auto`}>
            <Image
              source={require('../img/discount.png')}
              style={{width: 20, height: 20, bottom: 1, marginRight: 5}}
            />
            <Text style={[tw`text-lg`, {fontFamily: 'Poppins-Medium'}]}>
              Offers
            </Text>
          </View>
        </>
      )}
    </View>
  );
};

export default SwiggyHeader;

const styles = StyleSheet.create({});
