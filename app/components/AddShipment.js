import React, { useState }from 'react'
import { Button, StyleSheet, View, Text, TextInput } from 'react-native'
import rnfs from 'react-native-fs'

var shipmentsPath = rnfs.DocumentDirectoryPath + '/shipments.json';

const loadShipmentDetails = async () => {
  let shipmentsText = rnfs.readDir(shipmentsPath)
                        .then((result) => {
                          return Promise.all(rnfs.stat(result[0].path), result[0].path)
                        })
                        .then((statResult) => {
                          if(statResult[0].isFile){
                            return rnfs.readFile(statResult[1], 'utf8')
                          }
                          return "[]"
                        });
  shipmentsText = await shipmentsText;
  return JSON.parse(shipmentsText);
}

const saveShipmentDetails = async (newShipment) => {
  let shipments = await loadShipmentDetails();
  shipments.push(newShipment);
  rnfs.writeFile(shipmentsPath, JSON.stringify(shipments), 'utf8')
    .then((success) => console.log("File was written"))
    .catch((err) =>
      console.log(err)
    );
}

const test = async (newShipment) => {
  console.log(newShipment)
}

const AddShipment = (props) => {
  let { navigation } = props;
  let [name, setName] = useState("");
  let [trackingCode, setTrackingCode] = useState("");
  let [carrier, setCarrier] = useState("");
  const testDetails = {
    name: "Urban Outfitters",
    tracking_code: "EZ4000000004",
    carrier: "UPS"
  };
  return(
    <View style={styles.container}>
      <Text>Shipment Name</Text>
      <TextInput style={styles.input}
                 onChangeText={text => setName(text)}
                 value={name}/>
      <Text>Tracking Code</Text>
      <TextInput style={styles.input}
                 onChangeText={text => setTrackingCode(text)}
                 value={trackingCode}/>
      <Text>Carrier</Text>
      <TextInput style={styles.input}
                 onChangeText={text => setCarrier(text)}
                 value={carrier}/>
      <View style={styles.button}>
        <Button title="Add Shipment" onPress={() => {
          let newShipment = {name, tracking_code: trackingCode, carrier};
          test(newShipment);
        }}/>
      </View>
      <View style={styles.button}>
        <Button title="Goto Details" onPress={() => navigation.navigate('ShippingDetails', testDetails)}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        height: 40,
        width: 200,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        borderRadius: 5
    },
    button: {
        width: 100,
        marginBottom: 20
    }
});

export default AddShipment
