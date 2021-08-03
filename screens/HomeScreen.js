import React from 'react';
import {Image, Text, View, ScrollView, TouchableOpacity} from 'react-native';
import {Divider} from 'react-native-elements/dist/divider/Divider';
import {Icon} from 'react-native-elements/dist/icons/Icon';
import {SafeAreaView} from 'react-native-safe-area-context';
import tw from 'tailwind-react-native-classnames';
import BottomNavigation from '../components/BottomNavigation';
import FoodCard from '../components/FoodCard';
import PromotedRest from '../components/PromotedRest';

const lightFont = 'Poppins-Light';
const mediumFont = 'Poppins-Medium';
const boldFont = 'Poppins-Bold';
const orangeRegular = '#ed5e0e';
const orangeLight = '#fc8019';
const dividerColor = '#e9e9eb';

const topPicksData = [
  {
    title: "McDonald's",
    time: '30 mins',
    img: require('../img/food/bur.png'),
    discount: 40,
  },
  {
    title: "Domino's Pizza",
    time: '39 mins',
    img: require('../img/food/pizza.jpg'),
    discount: 50,
  },
  {
    title: 'Shiv Sagar',
    time: '20 mins',
    img: require('../img/food/nan.jpg'),
    discount: 20,
  },
  {
    title: 'NIC Natural Ice Creams',
    time: '40 mins',
    img: require('../img/food/ice4.jpg'),
  },
  {
    title: 'Kresko Cake Shop',
    time: '35 mins',
    img: require('../img/food/ice3.jpg'),
    discount: 45,
  },
  {
    title: 'Indian Tandoor & Chinese corner',
    time: '34 mins',
    img: require('../img/food/chk.jpg'),
  },
  {
    title: 'Pizza Hut',
    time: '45 mins',
    img: require('../img/food/wrap.jpg'),
    discount: 35,
  },
  {
    title: 'Cheeze Pizza',
    time: '45 mins',
    img: require('../img/food/pizz2.jpg'),
    discount: 35,
  },
  {
    title: 'Indianna',
    time: '52 mins',
    img: require('../img/food/bir.jpg'),
    discount: 60,
  },
];

const popularBrandsData = [
  {
    title: "Domino's Pizza",
    time: '39 mins',
    img: require('../img/b_icons/b3.png'),
    discount: 50,
  },
  {
    title: 'Baskin Robbins',
    time: '25 mins',
    img: require('../img/b_icons/b11.png'),
    discount: 45,
  },
  {
    title: 'Burger King',
    time: '20 mins',
    img: require('../img/b_icons/b2.png'),
    discount: 20,
  },
  {
    title: 'Natural Ice Cream',
    time: '35 mins',
    img: require('../img/b_icons/b12.png'),
    discount: 45,
  },
  {
    title: 'Subway',
    time: '40 mins',
    img: require('../img/b_icons/b4.png'),
  },
  {
    title: 'KFC',
    time: '35 mins',
    img: require('../img/b_icons/b6.png'),
    discount: 45,
  },
  {
    title: 'Pizza Hut',
    time: '34 mins',
    img: require('../img/b_icons/b5.png'),
  },
  {
    title: 'Faasos',
    time: '45 mins',
    img: require('../img/b_icons/b9.png'),
    discount: 35,
  },
  {
    title: 'The Belgian Waffle Co.',
    time: '45 mins',
    img: require('../img/b_icons/b10.png'),
    discount: 35,
  },
  {
    title: 'Behrouz',
    time: '52 mins',
    img: require('../img/b_icons/b8.png'),
    discount: 60,
  },
  {
    title: 'Theobromas',
    time: '52 mins',
    img: require('../img/b_icons/b7.png'),
    discount: 60,
  },
  {
    title: 'Rajdhani',
    time: '52 mins',
    img: require('../img/b_icons/b1.png'),
    discount: 60,
  },
];

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

const bannerData = [
  {
    image: require('../img/banners/banner_5.jpg'),
  },
  {
    image: require('../img/banners/banner_4.jpg'),
  },
  {
    image: require('../img/banners/banner_6.png'),
  },
  {
    image: require('../img/banners/banner_8.png'),
  },
  {
    image: require('../img/banners/banner_7.jpg'),
  },
  {
    image: require('../img/banners/banner_10.jpg'),
  },
];

const sectionDivider = () => {
  return (
    <Divider
      style={[
        tw`mb-8`,
        {
          borderWidth: 8,
          borderColor: dividerColor,
          backgroundColor: 'white',
        },
      ]}
      color="white"
    />
  );
};

const HomeScreen = () => {
  return (
    <SafeAreaView
      style={{
        display: 'flex',
        flexGrow: 1,
        flex: 1,
        paddingTop: 60,
        backgroundColor: '#fff',
      }}>
      <ScrollView>
        <View style={[tw`flex-row px-3 justify-between pt-4`]}>
          <Image
            source={require('../img/banners/banner_11.png')}
            style={{
              width: 195,
              height: 195,
              borderRadius: 5,
              resizeMode: 'contain',
            }}
          />
          <Image
            source={require('../img/banners/banner_12.jpg')}
            style={{
              width: 195,
              height: 195,
              borderRadius: 5,
              resizeMode: 'contain',
            }}
          />
        </View>
        <View style={[tw`flex-row px-2 -mt-4 -mb-5`]}>
          <Image
            source={require('../img/banners/b_2.png')}
            style={{width: '100%', height: 200, resizeMode: 'contain'}}
          />
        </View>

        <View style={[tw`flex-row px-3 mt-5`]}>
          <Image
            source={require('../img/like.png')}
            style={[tw`mr-2 `, {width: 23, height: 23, resizeMode: 'contain'}]}
          />
          <Text style={{fontFamily: boldFont, fontSize: 20}}>
            Top Picks For You
          </Text>
        </View>
        <ScrollView contentContainerStyle={[tw`flex-row px-2 mt-5`]} horizontal>
          {topPicksData.map((item, i) => (
            <View style={[tw`mx-2 `]} key={i}>
              <Image
                source={item.img}
                style={{
                  width: 75,
                  height: 75,
                  borderRadius: 5,
                }}
              />
              {item?.discount && (
                <View
                  style={[
                    {
                      width: 68,
                      height: 18,
                      position: 'absolute',
                      backgroundColor: orangeRegular,
                      top: 62,
                      left: 3.5,
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
                      bottom: 1,
                    }}>
                    {item.discount}% OFF
                  </Text>
                </View>
              )}
              <Text
                numberOfLines={2}
                style={[{fontFamily: mediumFont, width: 75}, tw`mt-2`]}>
                {item.title}
              </Text>
              <Text style={[{fontFamily: lightFont}, tw`-mt-1`]}>
                {item.time}
              </Text>
            </View>
          ))}
        </ScrollView>
        <ScrollView
          snapToInterval={340}
          snapToAlignment="center"
          decelerationRate={0}
          contentContainerStyle={[tw`flex-row px-2 my-10`]}
          horizontal>
          {bannerData.map((item, i) => (
            <View key={i} style={{marginHorizontal: 10}}>
              <Image
                source={item.image}
                style={{
                  width: 320,
                  height: 175,
                  borderRadius: 5,
                  resizeMode: 'cover',
                }}
              />
            </View>
          ))}
        </ScrollView>
        {sectionDivider()}

        <View style={[tw`px-4`]}>
          <Text style={{fontFamily: boldFont, fontSize: 20}}>
            Popular Brands
          </Text>
          <Text style={[{fontFamily: lightFont, fontSize: 16}, tw`-mt-2`]}>
            most ordered from around your locality
          </Text>
        </View>
        <ScrollView contentContainerStyle={[tw`flex-row px-2 mt-5`]} horizontal>
          {popularBrandsData.map((item, i) => (
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
                    textTransform: 'uppercase',
                  },
                  tw`mt-2 text-center`,
                ]}>
                {item.title}
              </Text>
              <Text style={[{fontFamily: lightFont}, tw`-mt-1 text-center`]}>
                {item.time}
              </Text>
            </View>
          ))}
        </ScrollView>

        <View style={[tw`px-4 mt-10`]}>
          <Text style={{fontFamily: boldFont, fontSize: 20}}>
            Popular cuisines around you
          </Text>
        </View>
        <ScrollView contentContainerStyle={[tw`flex-row px-2 my-5`]} horizontal>
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
                    textTransform: 'uppercase',
                  },
                  tw`mt-2 text-center`,
                ]}>
                {item.title}
              </Text>
            </View>
          ))}
        </ScrollView>
        {sectionDivider()}
        <View style={[tw`px-4 mb-5`]}>
          <View style={tw`flex-row items-center`}>
            <Image
              source={require('../img/top.png')}
              style={[
                tw`mr-1 -mt-1`,
                {width: 25, height: 25, resizeMode: 'contain'},
              ]}
            />
            <Text style={{fontFamily: boldFont, fontSize: 20}}>Top Offers</Text>
            <Text
              style={{
                fontFamily: mediumFont,
                fontSize: 16,
                marginLeft: 'auto',
                color: '#555555',
                top: 1,
              }}>
              SEE ALL
            </Text>
            <Icon
              type="font-awesome-5"
              name="chevron-circle-right"
              size={16}
              color={orangeRegular}
              style={tw`ml-1`}
            />
          </View>
          <Text style={[{fontFamily: lightFont, fontSize: 16}, tw`-mt-1`]}>
            Big Savings On Your Loved Eateries
          </Text>
        </View>
        <FoodCard id="top" />
        {sectionDivider()}

        <View style={[tw`px-4 mb-5`]}>
          <View style={tw`flex-row items-center`}>
            <Image
              source={require('../img/safe.png')}
              style={[
                tw`mr-1 -mt-1`,
                {width: 25, height: 25, resizeMode: 'contain'},
              ]}
            />
            <Text style={{fontFamily: boldFont, fontSize: 20}}>
              Best in Safety
            </Text>
            <Text
              style={{
                fontFamily: mediumFont,
                fontSize: 16,
                marginLeft: 'auto',
                color: '#555555',
                top: 1,
              }}>
              SEE ALL
            </Text>
            <Icon
              type="font-awesome-5"
              name="chevron-circle-right"
              size={16}
              color={orangeRegular}
              style={tw`ml-1`}
            />
          </View>
          <Text style={[{fontFamily: lightFont, fontSize: 16}, tw`-mt-1`]}>
            Restaurants with best safety standards
          </Text>
        </View>
        <FoodCard id="safety" />
        {sectionDivider()}
        <View style={[tw`px-4 mb-5`]}>
          <Text style={{fontFamily: boldFont, fontSize: 20}}>
            All Restaurants Nearby
          </Text>
          <Text style={[{fontFamily: lightFont, fontSize: 16}, tw`-mt-1`]}>
            Discover unique taste near you
          </Text>
        </View>
        <PromotedRest id="all" />
        <View style={tw`px-4 mb-4`}>
          <TouchableOpacity
            style={{
              width: '100%',
              backgroundColor: orangeRegular,
              paddingVertical: 13,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 5,
              borderWidth: 2,
              borderColor: '#fc8019',
            }}>
            <Text
              style={{
                fontFamily: boldFont,
                color: 'white',
                fontSize: 20,
                textAlignVertical: 'center',
                top: 2,
              }}>
              See all restaurants
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{backgroundColor: '#f6f6f8'}}>
          <Image
            source={require('../img/footer.png')}
            style={[{width: '100%', resizeMode: 'contain'}]}
          />
        </View>
      </ScrollView>

      <BottomNavigation active={'HomeScreen'} />
    </SafeAreaView>
  );
};

export default HomeScreen;
