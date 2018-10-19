// @flow
import React, { Component } from 'react';
import { Text } from 'react-native';

type PropsType = {
    limit: number,
    onTimeout: (): void
};
export default class Timer extends Component<PropsType> {
    constructor(props: PropsType) {
        super(props);
        this.state = {
            timeRemaining: props.limit
        };
    }

    componentDidMount() {
        if (!this.state.timeRemaining) {
            return;
        }

        this.clockId = setInterval(() => {
            this.setState({
                timeRemaining: this.state.timeRemaining - 1
            });
        }, 1000);
    }

    componentWillUpdate(nextProps: PropsType, nextState) {
        if (!nextState.timeRemaining) {
            clearInterval(this.clockId);
            this.props.onTimeout();
        }
    }

    componentWillUnmount() {
        clearInterval(this.clockId);
    }

    render() {
        return (
            <Text>{this.state.timeRemaining}</Text>
        );
    }
}