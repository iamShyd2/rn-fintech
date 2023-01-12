import React from "react";
import {
    StyleSheet,
    View,
} from "react-native";
import IconButton from "./IconButton";
import Title from "./Title";

const Categories = () => {
    return(
        <View style={styles.container}>
            <Title>Categories</Title>
            <View style={styles.categories}>
                <IconButton
                    backgroundColor="#4287f5"
                    icon="shirt"
                    text="Clothing"
                />
                <IconButton
                    backgroundColor="#09db6b"
                    icon="fast-food"
                    text="Food"
                />
                <IconButton
                    backgroundColor="#eb2a64"
                    icon="game-controller"
                    text="Gadgets"
                />
                <IconButton
                    backgroundColor="#cc2fe0"
                    icon="car"
                    text="Transport"
                />
            </View>
        </View>
    )
}

const styles = new StyleSheet.create({
    container: {
        top: 80, 
        paddingHorizontal: 20,
    },
    categories: {
        flexDirection: "row", 
        justifyContent: "space-between"
    }
})

export default Categories;