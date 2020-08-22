import React, { useState }from 'react'
import { StyleSheet, View, Text, TextInput} from 'react-native'

const AddShipment = (props) => {
    let [name, setName] = useState("");
    let [trackingCode, setTrackingCode] = useState("");
    let [carrier, setCarrier] = useState("");
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
        borderColor: 'gray',
        borderWidth: 1
    }
});

export default AddShipment
