import React from "react";
import {
    FlatList,
    StyleSheet,
    View,
    Dimensions,
    Animated,
} from "react-native";
import Card from "./Card";
import Title from "./Title";

import {ExpandingDot} from "react-native-animated-pagination-dots";

const SLIDER_DATA = [
    {
        key: '1',
        number: '9302 2321 3332 9832',
        colors: ['#CE9FFC', '#7367F0'],
        backgroundColor: "#6e61ed", 
    },
    {
        key: '2',
        number: '9302 2321 3332 9832',
        colors: ['#F36265', '#961276'],
        backgroundColor: "#F5515F",
    },
];

const { width } = Dimensions.get('screen');

const Cards = () => {


    const scrollX = React.useRef(new Animated.Value(0)).current;
    const keyExtractor = React.useCallback((_, index) => index.toString(), []);

    const renderItem = React.useCallback(({ item }) => {
        return (
            <View style={[styles.card]}>
                <Card item={item} />
            </View>
        );
    }, []);

    return(
        <View>
            <View style={styles.titleContainer}>
                <Title>Cards</Title>
            </View>
            <FlatList
                data={SLIDER_DATA}
                keyExtractor={keyExtractor}
                showsHorizontalScrollIndicator={false}
                onScroll={Animated.event(
                [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                {
                    useNativeDriver: false,
                }
                )}
                pagingEnabled
                horizontal
                decelerationRate={'normal'}
                scrollEventThrottle={16}
                renderItem={renderItem}
            />

            <ExpandingDot
                data={SLIDER_DATA}
                expandingDotWidth={30}
                scrollX={scrollX}
                inActiveDotOpacity={0.4}
                dotStyle={styles.dotStyle}
                containerStyle={styles.dotContainer}
            />
        </View>
    )
}


const styles = new StyleSheet.create({
    card: {
        flex: 1, 
        width: (width - 40), 
        padding: 10
    },
    titleContainer: {
        paddingLeft: 20,
    },
    dotStyle: {
        width: 10,
        height: 10,
        backgroundColor: '#347af0',
        borderRadius: 5,
        marginHorizontal: 5
    },
    dotContainer: {
        bottom: -25,
    }
})

export default Cards;