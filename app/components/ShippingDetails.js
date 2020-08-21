import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'

const get_tracking_info = (tracking_number) => {
    let date_obj = new Date();
    let test_date = [date_obj.getMonth(), date_obj.getDate(), date_obj.getFullYear()];
    let test =
    {
        tracking_number : tracking_number,
        delivered : false,
        expected_arrival : test_date.join("/"),
        cur_location : "123 Random Address",
        delivered: false
    };
    return test;

}

class ShippingDetails  extends Component {

    constructor(props) {
        super(props);
        let tracking_info = get_tracking_info(this.props.tracking_number);
        console.log(tracking_info)
        this.state = {name:this.props.name, ...tracking_info};
        console.log(this.state);
    }

    render(){
        return (
            <View style={styles.container}>
              <Text>Package: {this.state.name}</Text>
              <Text>Tracking Number: {this.state.tracking_number}</Text>
              <Text>Expected Arrival: {this.state.expected_arrival}</Text>
              <Text>Current Location: {this.state.cur_location}</Text>
            <Text>Shipping Status: {this.state.delivered ? "Delivered" : "Shipping"}</Text>
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
