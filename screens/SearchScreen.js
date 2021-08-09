import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import BottomNavigation from '../components/BottomNavigation';
import tw from 'tailwind-react-native-classnames';
import {Divider} from 'react-native-elements/dist/divider/Divider';

const lightFont = 'Poppins-Light';
const regularFont = 'Poppins-Regular';
const mediumFont = 'Poppins-Medium';
const boldFont = 'Poppins-Bold';
const blackFont = 'Poppins-Black';
const orangeRegular = '#ed5e0e';
const orangeLight = '#fc8019';
const dividerColor = '#e9e9eb';

const searchData = ['Monginis', 'Cream chills', "Mc donald's"];

const popularCuisineData = [
  {
    title: 'Pizzas',
    img: require('../img/f_icons/i1.png'),
  },
  {
    title: 'Biryani',
    img: require('../img/f_icons/i2.png'),
  },
  {
    title: 'Tea & Beverages',
    img: require('../img/f_icons/i4.png'),
  },
  {
    title: 'Ice Creams & Shakes',
    img: require('../img/f_icons/i3.png'),
  },
  {
    title: 'Burgers',
    img: require('../img/f_icons/i5.png'),
  },
  {
    title: 'Cakes & Desserts',
    img: require('../img/f_icons/i9.png'),
  },
  {
    title: 'Chinese',
    img: require('../img/f_icons/i6.png'),
  },
  {
    title: 'North Indian',
    img: require('../img/f_icons/i8.png'),
  },
  {
    title: 'South Indian',
    img: require('../img/f_icons/i11.png'),
  },
];

const SearchScreen = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={tw`px-4`}>
        <TextInput
          style={{
            height: 58,
            borderColor: '#999999',
            borderWidth: 1,
            marginTop: 20,
            fontSize: 18,
            fontFamily: mediumFont,
            paddingLeft: 10,
            color: 'black',
          }}
          placeholder="Search for restaurants and food"
          placeholderTextColor="#999999"
          // onChangeText={text => setText(text)}
          // defaultValue={text}
        />
      </View>
      <View style={tw`px-4 flex-row items-center mb-4`}>
        <Text
          style={{
            fontFamily: boldFont,
            color: 'black',
            fontSize: 18,
            marginTop: 10,
          }}>
          Recent Searches
        </Text>
        <Text
          style={{
            fontFamily: mediumFont,
            color: orangeRegular,
            fontSize: 15,
            marginTop: 10,
            marginLeft: 'auto',
            top: 1,
          }}>
          SHOW MORE
        </Text>
      </View>

      {searchData.map((query, i) => (
        <React.Fragment key={i}>
          <View style={tw`px-4 flex-row items-center`}>
            <Image
              source={require('../img/loupe.png')}
              style={[
                tw`mr-2`,
                {
                  width: 18,
                  height: 18,
                  resizeMode: 'contain',
                  tintColor: '#999999',
                  marginRight: 16,
                },
              ]}
            />
            <Text
              style={{
                fontFamily: regularFont,
                color: '#999999',
                fontSize: 18,
                marginTop: 3,
              }}>
              {query}
            </Text>
          </View>
          <Divider style={[tw`my-4 ml-12`]} color="#dddddd" />
        </React.Fragment>
      ))}

      <View style={[tw`px-4 mt-3`]}>
        <Text style={{fontFamily: boldFont, fontSize: 20}}>
          Popular cuisines
        </Text>
      </View>

      <ScrollView contentContainerStyle={[tw`flex-row px-2 mt-3`]} horizontal>
        {popularCuisineData.map((item, i) => (
          <View style={[tw`mx-3 `]} key={i}>
            <Image
              source={item.img}
              style={{
                width: 80,
                height: 80,
                borderRadius: 100,
              }}
            />

            <Text
              numberOfLines={2}
              style={[
                {
                  fontFamily: mediumFont,
                  width: 85,
                  color: '#777',
                },
                tw`mt-2 text-center`,
              ]}>
              {item.title}
            </Text>
          </View>
        ))}
      </ScrollView>
      <Divider
        style={[
          {
            borderWidth: 8,
            borderColor: dividerColor,
            bottom: 170,
          },
        ]}
      />
      <BottomNavigation active={'SearchScreen'} />
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({});
