// @flow
import React, { Component } from 'react';
import Game from './components/Game';

type Props = {};
export default class App extends Component<Props> {
  constructor(props: Props) {
    super(props);
    this.state = {
      numberList: this.generateNumberList(10, 6)
    };
    this.reset = this.reset.bind(this);
  }

  generateNumberList(upperLimit: number, length: number) {
    const dificulty = Math.round(length);
    const list = [];
    for (let i = 0; i < dificulty; i++) {
      list.push((Math.random() * upperLimit) + 1);
    }
    return list;
  }

  reset() {
    this.setState({
      numberList: this.generateNumberList(10, 6)
    });
  }

  render() {
    const target = this.state.numberList.reduce((sum, n) => {
      const randomFlag = Math.round(Math.random());
      return randomFlag ? n + sum : sum;
    }, 0);

    return (
      <Game numberList={numberList} target={target} handleReset={this.reset} />
    );
  }
}
