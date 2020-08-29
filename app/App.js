import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ShippingDetails from './components/ShippingDetails.js';
import AddShipment from './components/AddShipment.js'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Add a Shipment">
        <Stack.Screen name="ShippingDetails" component={ShippingDetails} options={{"title":"Details"}}/>
        <Stack.Screen name="Add a Shipment" component={AddShipment} option={{"title":"Add a Shipment"}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
