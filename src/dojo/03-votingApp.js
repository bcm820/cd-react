import React from 'react'

/*
Voting App
Create a React application using stateless functional components
that lets users vote for their favorite front end library.
*/

class VotingApp extends React.Component {

  state = {
    React: 0,
    Angular: 0,
    Vue: 0,
    Ember: 0
  }

  styles = {
    library: {
      border: '1px solid black',
      width: 240
    },
    number: {
      border: '1px solid black',
      borderRadius: 30,
      display: 'inline-block',
      padding: 10,
      margin: 15
    },
    title: {
      fontSize: 25,
      display: 'inline-block',
      width: 100
    },
    plus: {
      color: 'green',
      fontSize: 40,
      fontStyle: 'bold',
      display: 'inline-block',
      width: 40,
      margin: 15,
      cursor: 'pointer'
    }
  }
  
  increment = event => {
    const title = event.target.id
    const lib = {}
    lib[title] = this.state[title] + 1
    this.setState(lib)
  }
  
  Incrementer = props => {
    return React.createElement('h1', {
      onClick: this.increment,
      style: this.styles.plus, 
      id: props.title
    }, '+')
  }
  
  Library = props => {
    return React.createElement('div', {style: this.styles.library},
      React.createElement('h3', {style: this.styles.number}, this.state[props.title]),
      React.createElement('h3', {style: this.styles.title}, props.title),
      React.createElement(this.Incrementer, {title: props.title})
    )
  }

  render() {
    const sort = []
    for (let x in this.state) sort.push([x, this.state[x]])
    sort.sort((a, b) => a[1] - b[1]).reverse()
    return React.createElement('div', null,
      sort.map((lib, idx) => React.createElement(this.Library, {
        title: lib[0],
        key: idx
      }))
    )
  }

}

export default VotingApp