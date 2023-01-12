import React from "react";
import { StyleSheet, View } from "react-native";
import Navbar from "../components/Navbar";
import Cards from "../components/Cards";
import Categories from "../components/Categories";

const Home = () => {

    return (
        <View style={styles.container}>
            <Navbar />
            <Cards />
            <Categories />
        </View>
    );
}

const styles = new StyleSheet.create({
    container: {
        flex: 1,
    },
})

export default Home;