import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import {Divider, Icon} from 'react-native-elements';
import {ScrollView} from 'react-native-gesture-handler';
import tw from 'tailwind-react-native-classnames';
import SingleFood from './SingleFood';

const lightFont = 'Poppins-Light';
const regularFont = 'Poppins-Regular';
const mediumFont = 'Poppins-Medium';
const boldFont = 'Poppins-Bold';
const blackFont = 'Poppins-Black';
const orangeRegular = '#ed5e0e';
const orangeLight = '#de895b';
const dividerColor = '#e9e9eb';

const data = [
  {
    hotel: 'Yummy Chinese And Fast Food Corner',
    categories: ['Chinese'],
    location: 'Thane',
    distance: '1.2 kms',
    stars: 3.7,
    time: '37 mins',
    price: 350,
    for: 'two',
    discount: 60,
    upto: 120,
    image: require('../img/food/chk.jpg'),
  },
  {
    hotel: 'Ovenstory Pizza',
    categories: ['Pizzas'],
    location: 'Mumbai',
    distance: '6.5 kms',
    stars: 3.8,
    time: '60 mins',
    price: 600,
    for: 'two',
    discount: 40,
    upto: 80,
    image: require('../img/food/pizza.jpg'),
  },

  {
    hotel: 'Natural Ice Cream',
    categories: ['Ice Cream'],
    location: 'Dadar',
    distance: '3.5 kms',
    stars: 4.6,
    time: '38 mins',
    price: 150,
    for: 'two',
    discount: 30,
    upto: 75,
    image: require('../img/food/ice2.jpg'),
  },

  {
    hotel: 'Charcoal Eats - Biryani house',
    categories: ['Biryani', 'North Indian', 'Fast Food'],
    location: 'Churchgate',
    distance: '6.4 kms',
    stars: 4,
    time: '52 mins',
    price: 499,
    for: 'two',
    discount: 50,
    upto: 100,
    image: require('../img/food/pizz2.jpg'),
  },

  {
    hotel: "McDonald's",
    categories: ['Fast Food'],
    location: 'Churchgate',
    distance: '4 kms',
    stars: 4.2,
    time: '34 mins',
    price: 400,
    for: 'two',
    image: require('../img/food/r2.jpg'),
  },
  {
    hotel: 'Meal Box',
    categories: ['Combo', 'Thalis'],
    location: 'Dadar',
    distance: '4 kms',
    stars: 3.9,
    time: '51 mins',
    price: 200,
    for: 'two',
    discount: 60,
    upto: 120,
    image: require('../img/food/nan.jpg'),
  },

  {
    hotel: 'Kresko Cake Shop',
    categories: ['Combo', 'Dessert', 'Bakery'],
    location: 'Mumbai',
    distance: '1.2 kms',
    stars: 4,
    time: '53 mins',
    price: 300,
    for: 'two',
    discount: 40,
    upto: 90,
    image: require('../img/food/ice3.jpg'),
  },
  {
    hotel: 'Ovenstory Pizza',
    categories: ['Pizzas'],
    location: 'Mumbai',
    distance: '6.5 kms',
    stars: 3.8,
    time: '60 mins',
    price: 600,
    for: 'two',
    discount: 40,
    upto: 80,
    image: require('../img/food/pizz2.jpg'),
  },
  {
    hotel: 'Meal Box',
    categories: ['Combo', 'Thalis'],
    location: 'Dadar',
    distance: '4 kms',
    stars: 3.9,
    time: '51 mins',
    price: 200,
    for: 'two',
    discount: 60,
    upto: 120,
    image: require('../img/food/nan.jpg'),
  },

  {
    hotel: 'Charcoal Eats - Biryani house',
    categories: ['Biryani', 'North Indian', 'Fast Food'],
    location: 'Churchgate',
    distance: '6.4 kms',
    stars: 4,
    time: '52 mins',
    price: 499,
    for: 'two',
    discount: 50,
    upto: 100,
    image: require('../img/food/par.jpg'),
  },

  {
    hotel: 'Kresko Cake Shop',
    categories: ['Combo', 'Dessert', 'Bakery'],
    location: 'Mumbai',
    distance: '1.2 kms',
    stars: 4,
    time: '53 mins',
    price: 300,
    for: 'two',
    discount: 40,
    upto: 90,
    image: require('../img/food/ice3.jpg'),
  },

  {
    hotel: "McDonald's",
    categories: ['Fast Food'],
    location: 'Churchgate',
    distance: '4 kms',
    stars: 4.2,
    time: '34 mins',
    price: 400,
    for: 'two',
    image: require('../img/food/r2.jpg'),
  },
  {
    hotel: 'Natural Ice Cream',
    categories: ['Ice Cream'],
    location: 'Dadar',
    distance: '3.5 kms',
    stars: 4.6,
    time: '38 mins',
    price: 150,
    for: 'two',
    discount: 30,
    upto: 75,
    image: require('../img/food/ice2.jpg'),
  },

  {
    hotel: 'Yummy Chinese And Fast Food Corner',
    categories: ['Chinese'],
    location: 'Thane',
    distance: '1.2 kms',
    stars: 3.7,
    time: '37 mins',
    price: 350,
    for: 'two',
    discount: 60,
    upto: 120,
    image: require('../img/food/chk.jpg'),
  },
];

const PromotedRest = () => {
  return (
    <ScrollView
      snapToInterval={372}
      snapToAlignment="center"
      decelerationRate={0}
      style={{flexDirection: 'row', paddingRight: 90}}>
      {data.map((prod, x) => (
        <View style={[tw`px-4`]} key={x}>
          <View style={tw`flex-row mb-12`}>
            <SingleFood prod={prod} />
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

export default PromotedRest;

const styles = StyleSheet.create({});
