import React from 'react'

class Counters extends React.Component {

  state = {
    counters: []
  }
  
  add = () => {
    let {counters} = this.state
    counters.push(0)
    this.setState({counters})
  }

  update = event => {
    let {counters} = this.state
    let {id} = event.target
    id = id.split("-")
    if (id[0] === 'i') counters[id[1]]++
    else if (counters[id[1]] > 0) counters[id[1]]--
    this.setState({counters})
  }
  
  Updater = props => {
    return React.createElement('button', {
      onClick: this.update,
      id: props.id
    }, props.title)
  }

  Counter = props => {
    return React.createElement('div', {style: {
        border: '1px solid black',
        margin: 10,
        padding: 10,
        width: 150,
        textAlign: 'center'
      }},
      React.createElement('h1', null, props.count),
      React.createElement(this.Updater, {id: "i-" + props.id, title: 'Increment'}),
      React.createElement(this.Updater, {id: "d-" + props.id, title: 'Decrement'}),
    )
  }

  render() {
    return React.createElement('div', null,
      React.createElement('button', {onClick: this.add}, 'Add Counter'),
      React.createElement('div', {style: {display: 'flex', flexWrap: 'wrap'}},
        this.state.counters.map((n, i) => {
          return React.createElement(this.Counter, {count: n, id: i, key: i})
        })
      )
    )
  }

}

export default Counters