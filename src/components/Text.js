import React from "react";
import {
    Text,
    StyleSheet,
} from "react-native";


const T = ({ children, style, ...others }) => <Text style={[styles.text, style]}  {...others}>{children}</Text>

const styles = new StyleSheet.create({
    text: {
        color: '#fff', 
        fontFamily: 'Montserrat-Regular',
    }
})


export default T;