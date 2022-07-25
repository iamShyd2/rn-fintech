import React from "react";
import Title from "./Title";
import {
    View,
    StyleSheet,
} from "react-native";

const Activities = () => {
    return(
        <View style={styles.container}>
            <Title>Activities</Title>
        </View>
    )
}

const styles = new StyleSheet.create({
    container: {
        top: 120, 
        paddingHorizontal: 20,
    },
})

export default Activities;