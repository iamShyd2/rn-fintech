import React from "react";
import { StyleSheet, Image, View } from "react-native";
import Menu from "./Menu";

const Navbar = () => {
    return(
        <View style={styles.navbar}>
            <Menu />
            <Image 
                source={require("../imgs/avatar.jpg")} 
                style={styles.avatar} 
            />
        </View>
    )
}

const styles = new StyleSheet.create({
    navbar: {
        padding: 20, 
        paddingBottom: 50, 
        flexDirection: "row", 
        justifyContent: "space-between", 
        alignItems: "center"
    },
    avatar: {
        width: 40, 
        height: 40, 
        borderRadius: 100, 
        borderColor: "#bbb", 
        borderWidth: 1,
    }
})

export default Navbar;