import React from 'react'

/*
Checkerboard, no JSX
Build a React application that prompts a user for a number of rows,
and then render the corresponding checkerboard.
*/

class CheckerBoard extends React.Component {

  state = {
    size: 12,
    colorA: 'black',
    colorB: 'red'
  }

  styles = {
    cell: {
      height: '20px',
      width: '20px',
      display:'inline-block'
    },
    row: {height: '20px'}
  }

  Cell = props => React.createElement('div', props)

  Row = props => {
    let color = this.state.colorA
    let row = []
    for (let i = 0; i < this.state.size; i++) {
      color === this.state.colorA
      ? color = this.state.colorB
      : color = this.state.colorA
      row.push(color)
    }
    if (props.reverse) row = row.reverse()
    return React.createElement('div', {style: this.styles.row},
      row.map((color, idx) =>
        React.createElement(this.Cell, {key: idx, style: {
          backgroundColor: color,
          ...this.styles.cell
        }})
      )
    )
  }

  Board = props => {
    let reverse = true
    let board = []
    for (let i = 0; i < this.state.size; i++) board.push(i)
    return React.createElement('div', null,
      board.map(i => {
        reverse
        ? reverse = false
        : reverse = true
        return React.createElement(this.Row, {
          key: i, reverse: reverse
        })
      })
    )
  }

  increment = () => {
    if (this.state.size < 19)
      this.setState({size: this.state.size + 2})
  }

  decrement = () => {
    if (this.state.size > 3)
      this.setState({size: this.state.size - 2})
  }

  ColorChanger = props => {
    let {color} = props
    return React.createElement('select', {
      value: this.state[color],
      onChange: this[color + 'Update'],
      style: {width: 60}
    },
      React.createElement('option', {value: 'black'}, 'Black'),
      React.createElement('option', {value: 'red'}, 'Red'),
      React.createElement('option', {value: 'blue'}, 'Blue'),
      React.createElement('option', {value: 'green'}, 'Green'),
      React.createElement('option', {value: 'orange'}, 'Orange'),
      React.createElement('option', {value: 'yellow'}, 'Yellow'),
      React.createElement('option', {value: 'pink'}, 'Pink'),
      React.createElement('option', {value: 'purple'}, 'Purple'),
      React.createElement('option', {value: 'brown'}, 'Brown'),
    )
  }

  colorAUpdate = event => this.setState({colorA: event.target.value})
  colorBUpdate = event => this.setState({colorB: event.target.value})
  
  Control = props => {
    return React.createElement('div', null, 
      React.createElement('p', null, 'Resize (2-20): ',
        React.createElement('button', {onClick: this.decrement}, '-'),
        React.createElement('button', {onClick: this.increment}, '+')
      ),
      React.createElement('p', null, 'Update colors: ',
        React.createElement(this.ColorChanger, {color: 'colorA'}),
        React.createElement(this.ColorChanger, {color: 'colorB'}),
      )
    )
  }

  render() {
    return React.createElement('div', null,
    React.createElement(this.Control, null),
    React.createElement(this.Board, null),
    )
  }

}

export default CheckerBoard