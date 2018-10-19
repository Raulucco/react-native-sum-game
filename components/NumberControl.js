// @flow
import React, { Component } from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

type PropsType = {
    isDisable: boolean,
    index: number,
    handlePress: (x: number): void,
    value: number
};

const styles = StyleSheet.create({
    disable: {
        backgroundColor: '#7FB3D5',
        color: '#ECF0F1'
    },
    enabled: {
        backgroundColor: '#48C9B0',
        color: '#2471A3'
    }
});

export default class NumberControl extends Component<PropsType> {
    render() {
        return (
            {
                this.props.isDisable ?
                    <Text style={styles.disabled}>{this.props.value}</Text> :
                    <TouchableOpacity onPress={() => this.props.handlePress(this.props.index)}>
                        <Text style={styles.enabled}>{this.props.value}</Text>
                    </TouchableOpacity>
            }
        );
    }
}