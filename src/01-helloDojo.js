import React from 'react'

// Class Component
// Normally used with dynamic state
class HelloDojo extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello Dojo!</h1>
        <p>Things I need to do:</p>
        <ul>
          <li>Learn React</li>
          <li>Bike</li>
          <li>Buy groceries</li>
          <li>Make moves!</li>
        </ul>
      </div>
    );
  }
}

/*

  Stateless functional components are examples of pure functions, a functions whose return value is determined only by its input values and which causes no side effects (such as changing the value of a global variable).

  React has embraced the idea of data immutability. You see this with props being a read-only objects as well as the heavy use of JavaScript's built-in map and filter methods to build lists of elements.

*/

/* Function Component
const HelloDojo = props => {
  return React.createElement('div', null,
  <div>
    <h1>Hello Dojo!</h1>
    <p>Things I need to do:</p>
    <ul>
      <li>Learn React</li>
      <li>Bike</li>
      <li>Buy groceries</li>
      <li>Make moves!</li>
    </ul>
  </div>
  );
}
*/

export default HelloDojo