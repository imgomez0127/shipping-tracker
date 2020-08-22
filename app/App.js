import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ShippingDetails from './components/ShippingDetails.js'
import TouchableItem from './components/TouchableItem.js'

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ShippingDetails name="Urban Outfitters"
                       tracking_code="EZ4000000004"
                       carrier="UPS"/>
    </View>
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
