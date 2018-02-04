import React from 'react'

/*
  TicTacToe without peeking at FB's tutorial
  We out here to code, not copy pasta
  Of course, I'll check it out afterwards :)
*/

class TicTacToe extends React.Component {

  state = {
    top: ['', '', ''],
    mid: ['', '', ''],
    bot: ['', '', '']
  }

  current = 'X'

  styles = {
    row: {margin: 0, height: 80},
    box: {
      width: 80, height: 80,
      position: 'absolute',
      fontSize: 50
    }
  }

  mark = event => {
    let state = this.state
    const idx = parseInt(event.target.id, 10)
    let pos = event.target.className
    state[pos][idx] = this.current
    this.setState(state)
    this.current === 'X'
    ? this.current = 'O'
    : this.current = 'X'
  }

  Box = ({style, className, id}) => {
    return React.createElement('button', {
      style: style,
      className: className,
      id: id,
      onClick: this.mark
    }, this.state[className][id])
  }

  Row = ({className}) => {
    return React.createElement('div', {style: this.styles.row},
      React.createElement(this.Box, {
        id: 0, className: className,
        style: {...this.styles.box}
      }),
      React.createElement(this.Box, {
        id: 1, className: className,
        style: {...this.styles.box, left: 100}
      }),
      React.createElement(this.Box, {
        id: 2, className: className,
        style: {...this.styles.box, left: 180}
      })
    )
  }

  Result = props => {
    let winner
    for (let pos in this.state)
      if (this.state[pos][0] === this.state[pos][1]
        && this.state[pos][0] === this.state[pos][2])
        winner = this.state[pos][0]
    let {top, mid, bot} = this.state
    for (let i = 0; i < 3; i++)
      if (top[i] === mid[i] && top[i] === bot[i]) winner = top[i]
    if (top[0] === mid[1] && top[0] === bot[2]) winner = top[0]
    if (top[2] === mid[1] && top[2] === bot[0]) winner = top[2]
    return winner
    ? React.createElement('h1', null, `${winner} wins!`)
    : React.createElement('h1', null)
  }

  render() {
    return React.createElement('div', null,
      React.createElement('h1', null, `Next player: ${this.current}`),
      React.createElement(this.Row, {className: 'top'}),
      React.createElement(this.Row, {className: 'mid'}),
      React.createElement(this.Row, {className: 'bot'}),
      React.createElement(this.Result, null)
    )
  }
}

export default TicTacToe