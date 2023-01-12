import React from "react";
import { StyleSheet, View } from "react-native";
import { Surface } from "react-native-paper";
import Text from "../components/Text";
import Icon from "react-native-vector-icons/Ionicons";
import LinearGradient from "react-native-linear-gradient";

const Card = ({item}) => {
    return(
        <Surface style={styles.surface}>
             <LinearGradient colors={item.colors} style={styles.inner}>
                <View style={[styles.row]}>
                    <View style={[styles.lock, { backgroundColor: item.backgroundColor }]}>
                        <Icon name="lock-closed" size={30} />
                    </View>
                    <View>
                        <Text style={styles.provider}>VISA</Text>
                    </View>
                </View>
                <View>
                    <View>
                        <Text>Card Holder</Text>
                        <Text style={styles.cardNumber}>{item.number}</Text>
                    </View>
                </View>
            </LinearGradient>
        </Surface>
    )
}

const styles = new StyleSheet.create({
    row: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    surface: {
        elevation: 6,
        borderRadius: 10,
    },
    inner: {
        padding: 15,
        width: "100%",
        height: 200,
        justifyContent: "space-between",
        backgroundColor: "transparent",
        borderRadius: 10,
    },
    lock: {
        width: 60, 
        height: 60, 
        justifyContent: "center", 
        alignItems: "center", 
        borderRadius: 8,
    },
    provider: {
        fontFamily: "OpenSans-ExtraBold", 
        fontSize: 20,
    },
    cardNumber: {
        fontSize: 20, 
        fontFamily: "OpenSans-ExtraBold"
    }
})

export default Card;