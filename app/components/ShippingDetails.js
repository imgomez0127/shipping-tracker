import React, { Component } from 'react'
import { View, Text } from 'react-native'

class ShippingDetails  extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <View style={{flex:1}}>
              <Text>Insert Shipping details here</Text>
            </View>
        )
    }
}

export default ShippingDetails
