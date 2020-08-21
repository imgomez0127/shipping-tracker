import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'

class ShippingDetails  extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <View style={styles.container}>
              <Text>Insert Shipping details here</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ShippingDetails
