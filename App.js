/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    Button,
    Platform,
    StyleSheet,
    Text,
    View,
    TextInput
} from 'react-native';
import Main from "./component/main/Main";
import Test from "./component/test/Test";

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {
            MainComponent: <Main/>,
            text: ""
        };
        this.onClickMain = this.onClickMain.bind(this);
        this.onClickTest = this.onClickTest.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    onClickMain() {
        this.setState({
            MainComponent: <Main/>
        })
    }

    onClickTest() {
        this.setState({
            MainComponent: <Test/>
        });
    }

    handleInput(strText) {
        this.setState({
            text: strText
        });
    }


    render() {
        return (
            <View style={{flex: 1, backgroundColor: "yellow"}}>
                <View style={styles.header}>
                    <View style={styles.headerItem1}>
                        <Button onPress={this.onClickMain} title="主页"></Button>
                    </View>
                    <View style={styles.headerItem2}>
                        <Button onPress={this.onClickTest} title="测试"></Button>
                    </View>
                </View>
                <View>
                    {this.state.MainComponent}
                </View>
                {/*<View style={styles.container}>*/}
                {/*<Text style={styles.welcome}>*/}
                {/*Welcome to React Native!*/}
                {/*</Text>*/}
                {/*<Text style={styles.instructions}>*/}
                {/*To get started, edit App.js*/}
                {/*</Text>*/}
                {/*<Text style={styles.instructions}>*/}
                {/*{instructions}*/}
                {/*</Text>*/}
                {/*<Text>这是第一个Demo</Text>*/}
                {/*<TextInput style={{height: 40, width: 100}} placeholder="please input..."*/}
                {/*onChangeText={this.handleInput}/>*/}
                {/*</View>*/}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        // flex: 1,
        height: 40,
        flexDirection: "row",
        backgroundColor: "green",
        justifyContent: "flex-start",
        alignItems: "center"
    },
    headerItem1: {
        flex: 1,
        marginRight: 20
    },
    headerItem2: {
        flex: 1,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
