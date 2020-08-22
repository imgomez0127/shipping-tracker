import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import pkg from '../libs/EasyPost.js'
const { api } = pkg;

const get_tracking_info = async ({tracking_code, carrier}) => {
  let tracker = api.Tracker({tracking_code: tracking_code, carrier: carrier});
  let tracking_info = await tracker.save();
  return tracking_info
}

const parse_display_info = (tracking_info) => {
  let { status, est_delivery_date } = tracking_info;
  let { city, country, state, zip } = tracking_info.tracking_details[0];
  let cur_location = [city, state, zip, county].join(" ");
  return {
    status,
    cur_location,
    expected_arrival: est_delivery_date,
    city,
    country,
    state,
    zip
  }
}

class ShippingDetails  extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name:this.props.name,
      tracking_code: this.props.tracking_code,
      carrier:this.props.carrier
    };
  }

  async componentDidMount() {
    let shipping_info = {
      carrier:this.props.carrier,
      tracking_code: this.props.tracking_code
    };
    let tracking_info = await get_tracking_info(shipping_info);
    let display_info = parse_tracking_info(tracking_info);
    let new_state = {...this.state, ...display_info};
    this.setState(new_state)
  }

  render(){
    return (
      <View style={styles.container}>
        <Text>Package: {this.state.name}</Text>
        <Text>Carrier: {this.state.carrier}</Text>
        <Text>Tracking Code: {this.state.tracking_code}</Text>
        <Text>Expected Arrival: {this.state.expected_arrival}</Text>
        <Text>Current Location: {this.state.cur_location}</Text>
        <Text>Shipping Status: {this.state.status}</Text>
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
