import React, {Component} from "react";
import {View, Text, StyleSheet} from "react-native";

export default class Test extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>测试页面</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});