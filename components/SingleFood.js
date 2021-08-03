import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import tw from 'tailwind-react-native-classnames';
import {Divider, Icon} from 'react-native-elements';
import {ScrollView} from 'react-native-gesture-handler';

const lightFont = 'Poppins-Light';
const regularFont = 'Poppins-Regular';
const mediumFont = 'Poppins-Medium';
const boldFont = 'Poppins-Bold';
const blackFont = 'Poppins-Black';
const orangeRegular = '#ed5e0e';
const orangeLight = '#de895b';
const dividerColor = '#e9e9eb';

const SingleFood = ({prod, id}) => {
  return (
    <>
      <Image
        style={{width: 100, height: 130, borderRadius: 5}}
        source={prod.image}
      />
      {prod?.discount && (
        <View
          style={[
            {
              width: 90,
              position: 'absolute',
              backgroundColor: orangeRegular,
              top: 115,
              left: 5.5,
              borderRadius: 3,
              borderWidth: 1,
              borderColor: orangeLight,
              alignItems: 'center',
              justifyContent: 'center',
            },
            tw`shadow-sm`,
          ]}>
          <Text
            style={{
              fontFamily: boldFont,
              color: 'white',
              bottom: -1,
              fontSize: 15,
            }}>
            {prod.discount}% OFF
          </Text>
        </View>
      )}
      <View style={tw`ml-3 -mt-1`}>
        <Text
          numberOfLines={1}
          style={{
            fontFamily: boldFont,
            fontSize: 18,
            width: 190,
            marginBottom: -1,
            opacity: 0.8,
          }}>
          {prod.hotel}
        </Text>
        <View style={tw`flex-row`}>
          <Text
            style={{
              fontFamily: regularFont,
              fontSize: 14,
              opacity: 0.7,
            }}>
            {prod.categories.join(', ')}
          </Text>
        </View>
        <View style={tw`flex-row mb-1`}>
          <Text
            style={{
              fontFamily: regularFont,
              fontSize: 14,
              opacity: 0.7,
            }}>
            {prod.location}, {prod.distance}
          </Text>
        </View>
        <View style={tw`flex-row`}>
          <Icon
            type="ionicons"
            name="star"
            size={14}
            style={[tw`mr-1`, {opacity: 0.7}]}
          />
          <Text
            style={{
              fontFamily: mediumFont,
              fontSize: 14,
              opacity: 0.7,
            }}>
            {prod.stars} · {prod.time} · ₹{prod.price} for {prod.for}
          </Text>
        </View>
        {prod?.discount || prod?.healthy ? (
          <>
            <Divider style={[tw`my-1 mb-2 -mr-10`]} />
            <View style={tw`flex-row`}>
              <Image
                source={require('../img/discount-filled.png')}
                style={{
                  width: 18,
                  height: 18,
                  bottom: 1,
                  marginRight: 5,
                  marginTop: 2,
                  tintColor: orangeRegular,
                }}
              />
              <Text
                style={{
                  fontFamily: regularFont,
                  fontSize: 14,
                  opacity: 0.7,
                }}>
                {prod.discount}% off upto ₹{prod.upto}
              </Text>
            </View>
          </>
        ) : null}
      </View>
    </>
  );
};

export default SingleFood;

const styles = StyleSheet.create({});
