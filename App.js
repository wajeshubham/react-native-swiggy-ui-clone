import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import BottomNavigation from './components/BottomNavigation';
import SwiggyHeader from './components/SwiggyHeader';
import AccountScreen from './screens/AccountScreen';
import CartScreen from './screens/CartScreen';
import HomeScreen from './screens/HomeScreen';
import SearchScreen from './screens/SearchScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="HomeScreen"
          screenOptions={{
            header: props => <SwiggyHeader {...props} />,
          }}>
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{headerShown: true}}
          />
          <Stack.Screen
            name="CartScreen"
            component={CartScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="SearchScreen"
            component={SearchScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="AccountScreen"
            component={AccountScreen}
            options={{headerShown: true}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
