// @flow

import React, { Component } from 'react';
import { View } from 'react-native';
import NumberControl from './NumberControl';

type PropsType = {
    numberList: number[],
    onSumUpdate: (x: number): void
};

export default class NumberPad extends Component<PropsType> {
    constructor(props: PropsType) {
        super(props);
        this.state = {
            selectedNumbers: new Array(props.numberList.length)
        };
        this.selectNumber.bind(this);
    }

    selectNumber(idx: number) {
        this.state.selectedNumbers[idx] = `${this.props.numberList[idx]}`;
        this.setState({
            selectedNumbers: [...this.state.selectedNumbers]
        });
    }

    componentWillUpdate(nextProps: PropsType, nextState) {
        const sum = nextState.selectedNumbers.reduce((acc: number, x: string?) => {
            if (!!x) {
                return acc + Number(x);
            }
            return acc;
        }, 0);

        this.props.onSumUpdate(sum);
    }

    render() {
        return (
            <View>
                {
                    numberList.map((n: number, idx: number) => (
                        <NumberControl
                            isDisable={!!this.state.selectedNumbers[idx]}
                            index={idx}
                            key={idx}
                            handlePress={this.selectNumber}
                        />
                    ))
                }
            </View>
        );
    }
}