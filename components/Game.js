// @flow

import React, { Component } from 'react';
import {
    View,
    Text,
    Button
} from 'react-native';
import NumberPad from './NumberPad';

type PropsType = {
    numberList: number[],
    target: number,
    handleReset: (): void
};

export default class Game extends Component<PropsType> {
    constructor(props: PropsType) {
        super(props);
        this.handleSumUpdate = this.handleSumUpdate.bind(this);
        this.handleTimeout = this.handleTimeout.bind(this);
        this.state = {
            status = 'PLAYING'
        }
    }

    handleSumUpdate(sum: number) {
        if (sum === this.props.target) {
            this.setState({ status: 'WON' });
        } else if (sum > this.props.target) {
            this.setState({ status: 'LOOSE' });
        }
    }

    handleTimeout() {
        this.setState({ status: 'LOOSE' });
    }

    render() {
        const { numberList, target } = this.props;
        if (this.status !== 'PLAYING') {
            return (
                <View>
                    <Text>{`YOU ${this.status}`}</Text>
                    <Button title="Start a new game" onPress={this.props.handleReset} />
                </View>
            );
        }
        return (
            <View>
                <Text> {target} </Text>
                <NumberPad numberList={numberList} target={target} onSumUpdate={this.handleSumUpdate} />
                <Timer limit={18} onTimeout={this.handleTimeout} />
            </View>
        );
    }
}