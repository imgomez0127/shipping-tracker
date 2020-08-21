import React from 'react';
import { Platform, StyleSheet, Text, TouchableOpacity, TouchableNativeFeedback, View} from 'react-native'

const TouchableItem = ({style, content}) => {
    let touchableStyle = style ? style : styles.item;
    return (
        <View style={touchableStyle}>
          <TouchableOpacity>
            <Text> {content} </Text>
          </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
   item : {
       padding: 10,
       alignItems: 'center',
       justifyContent: 'center',
       borderWidth: 1,
   }
})
export default TouchableItem
