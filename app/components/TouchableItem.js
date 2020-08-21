import React from 'react';
import { Platform, StyleSheet, Text, TouchableOpacity, TouchableNativeFeedback } from 'react-native'

const TouchableItem = ({style, content}) => {
    const touchableStyle = style ? style : styles.item
    if(Platform.OS === 'android'){
        return (

            <TouchableNativeFeedback style={touchableStyle}>
              <TouchableOpacity> {content} </TouchableOpacity>
            </TouchableNativeFeedback>
        )
    }
    else{
        return <TouchableOpacity style={touchableStyle}> {content} </TouchableOpacity>
    }
}

const style = StyleSheet.create({
   item : {}
})
export default TouchableItem
