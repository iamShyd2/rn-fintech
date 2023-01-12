import React from "react";
import { StyleSheet } from "react-native";
import Text from "./Text";

const Title = ({children, style, ...others}) => {
    return(
        <Text style={[styles.title, style]} {...others}>{children}</Text>
    )
}

const styles = new StyleSheet.create({
    title: {
        color: "#000", 
        fontSize: 18, 
        fontFamily: "Montserrat-Bold", 
        marginBottom: 20,
    }
})

export default Title;