import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import ld from 'lodash';
import pkg from '../libs/EasyPost.js'
const { request_tracker , apiKey } = pkg;

const get_tracking_info = async ({tracking_code, carrier}) => {
  let tracker = request_tracker({tracking_code: tracking_code, carrier: carrier});
  let tracking_info = tracker.then((response) => response.json());
  return tracking_info.then((data) => data)
}

const parse_display_info = (tracking_info) => {
  let { status, est_delivery_date } = tracking_info;
  status = ld.startCase(ld.toLower(status))
  est_delivery_date = new Date(est_delivery_date);
  let expected_arrival = [est_delivery_date.getMonth(),
                          est_delivery_date.getDate(),
                          est_delivery_date.getFullYear()].join("/")
  let track_len = tracking_info.tracking_details.length;
  let checkIn = tracking_info.tracking_details[track_len-1].tracking_location;
  let { city, country, state, zip } = checkIn;
  city = ld.startCase(ld.toLower(city))
  let cur_location = [city, state, zip, country].join(" ");
  return {
    status,
    cur_location,
    expected_arrival,
    city,
    country,
    state,
    zip
  }
}

class ShippingDetails  extends Component {

  constructor(props) {
    super(props);
    this.routeParams = this.props.route.params;
    this.state = {
      name: this.routeParams.name,
      tracking_code: this.routeParams.tracking_code,
      carrier: this.routeParams.carrier
    };
  }

  async componentDidMount() {
    let shipping_info = {
      carrier:this.routeParams.carrier,
      tracking_code: this.routeParams.tracking_code
    };
    let tracking_info = await get_tracking_info(shipping_info);
    let display_info = parse_display_info(tracking_info);
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
