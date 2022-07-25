import React from "react";
import {
    StyleSheet,
    View,
    TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Text from "../components/Text";
import {
    Surface,
} from "react-native-paper";

const IconButton = ({ text, backgroundColor, icon }) => {
    return(
        <TouchableOpacity>
            <Surface style={[styles.lock, { backgroundColor }]}>
                <Icon name={icon} size={30} color="#fff" />
            </Surface>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = new StyleSheet.create({  
    lock: {
        width: 60, 
        height: 60, 
        justifyContent: "center", 
        alignItems: "center", 
        borderRadius: 10,
        backgroundColor: "#bbb"
    },
    text: {
        color: "#000", 
        textAlign: "center", 
        marginTop: 5,
        fontFamily: "Montserrat-Bold",
    }
})

export default IconButton;