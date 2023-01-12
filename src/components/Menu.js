import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";


const Menu = () => {
    return(
        <TouchableOpacity style={styles.container}>
            <View style={styles.bar}></View>
            <View style={[styles.bar, { marginTop: 5, width: "70%" }]}></View>
            <View style={[styles.bar, { marginTop: 5, }]}></View>
        </TouchableOpacity>
    )
}

const styles = new StyleSheet.create({
    container: {
        width: 23,
    },
    bar: {
        width: "100%",
        height: 3,
        backgroundColor: "#787A91"
    }
})


export default Menu;